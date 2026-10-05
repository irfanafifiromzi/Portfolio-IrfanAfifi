import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// Screen shader: draws the current screenshot, and during a swipe slides it
// out to the left while the next one slides in — the same transition as the
// Blender render. `uK` centre-crops the width so screenshots slightly wider
// than the phone's screen are trimmed rather than stretched.
const screenVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const screenFragment = /* glsl */ `
  uniform sampler2D uCurrent;
  uniform sampler2D uNext;
  uniform float uSlide;
  uniform float uK;
  varying vec2 vUv;
  void main() {
    float s = vUv.x + uSlide;
    vec4 color = s < 1.0
      ? texture2D(uCurrent, vec2(0.5 + (s - 0.5) * uK, vUv.y))
      : texture2D(uNext, vec2(0.5 + (s - 1.5) * uK, vUv.y));
    gl_FragColor = color;
    #include <colorspace_fragment>
  }
`;

const SCREEN_ASPECT = 0.668 / 1.418; // phone screen width / height, from the model
const SWIPE_MS = 650;
const AUTO_ADVANCE_MS = 3500;
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Interactive phone mockup: drag to rotate, tap (or use the pills) to swipe
 * between app screens. The GLB comes from the Blender scene; screenshots are
 * applied here so they can be swapped without re-exporting the model.
 */
const PhoneModel3D = ({ model, screens, background = "#F5C242" }) => {
  const mountRef = useRef(null);
  const goToRef = useRef(() => {});
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;

    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(-2.5, 2.5, 3.5);
    const rim = new THREE.DirectionalLight(0xffffff, 1.2);
    rim.position.set(2.5, 1, -2.5);
    scene.add(key, rim);

    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
    camera.position.set(0, 0, 3.6);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI * 0.3;
    controls.maxPolarAngle = Math.PI * 0.7;
    // OrbitControls blocks all touch scrolling; let vertical swipes still
    // scroll the page on phones, horizontal drags rotate the model.
    renderer.domElement.style.touchAction = "pan-y";

    // Screen textures follow the glTF convention (no Y flip).
    const texLoader = new THREE.TextureLoader();
    const textures = screens.map(({ src }) => {
      const t = texLoader.load(src);
      t.flipY = false;
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return t;
    });
    const screenMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uCurrent: { value: textures[0] },
        uNext: { value: textures[1 % textures.length] },
        uSlide: { value: 0 },
        uK: { value: 1 },
      },
      vertexShader: screenVertex,
      fragmentShader: screenFragment,
      toneMapped: false,
    });
    // Crop factor comes from the first screenshot once its size is known.
    const firstImg = new Image();
    firstImg.onload = () => {
      screenMaterial.uniforms.uK.value = SCREEN_ASPECT / (firstImg.width / firstImg.height);
    };
    firstImg.src = screens[0].src;

    let rig = null;
    let disposed = false;
    new GLTFLoader().load(model, (gltf) => {
      if (disposed) return;
      rig = gltf.scene.getObjectByName("Phone_Rig") || gltf.scene;
      // The rig carries the Blender animation's first-frame pose; start upright.
      rig.position.set(0, 0, 0);
      rig.rotation.set(0, 0, 0);
      const screen = gltf.scene.getObjectByName("Phone_Screen");
      if (screen) screen.material = screenMaterial;
      scene.add(gltf.scene);
      setLoaded(true);
    });

    // --- screen switching ---
    let current = 0;
    let swipe = null; // { to, start }
    let lastSwitch = performance.now();
    const goTo = (to) => {
      if (swipe || to === current || !textures[to]) return;
      screenMaterial.uniforms.uCurrent.value = textures[current];
      screenMaterial.uniforms.uNext.value = textures[to];
      swipe = { to, start: performance.now() };
      lastSwitch = swipe.start;
      setActive(to);
    };
    goToRef.current = goTo;

    // A tap (pointer down/up without dragging) advances to the next screen.
    let down = null;
    const onDown = (e) => (down = { x: e.clientX, y: e.clientY });
    const onUp = (e) => {
      if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 5) {
        goTo((current + 1) % textures.length);
      }
      down = null;
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointerup", onUp);

    // --- sizing ---
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      // Keep the whole phone in frame on narrow (portrait) containers too.
      camera.position.setLength(camera.aspect < 0.75 ? 3.6 / (camera.aspect / 0.75) : 3.6);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    // --- render loop, paused while off-screen ---
    let visible = false;
    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      const now = performance.now();

      if (swipe) {
        const p = Math.min(1, (now - swipe.start) / SWIPE_MS);
        screenMaterial.uniforms.uSlide.value = easeInOut(p);
        if (p === 1) {
          current = swipe.to;
          screenMaterial.uniforms.uCurrent.value = textures[current];
          screenMaterial.uniforms.uSlide.value = 0;
          swipe = null;
        }
      } else if (!reduceMotion && textures.length > 1 && now - lastSwitch > AUTO_ADVANCE_MS) {
        goTo((current + 1) % textures.length);
      }

      if (rig && !reduceMotion) {
        rig.position.y = Math.sin(t * 1.2) * 0.03;
        rig.rotation.y = Math.sin(t * 0.5) * 0.18;
        rig.rotation.x = Math.sin(t * 0.7) * 0.04;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) {
        lastSwitch = performance.now();
        tick();
      }
    });
    io.observe(mount);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointerup", onUp);
      controls.dispose();
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          [].concat(obj.material).forEach((m) => m.dispose());
        }
      });
      textures.forEach((t) => t.dispose());
      screenMaterial.dispose();
      envMap.dispose();
      pmrem.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [model, screens]);

  return (
    <div>
      <div
        className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden rounded-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, #FBDA7A 0%, ${background} 70%)`,
        }}
      >
        <div ref={mountRef} className="absolute inset-0" />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-ink-900/60">
            Loading 3D model…
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {screens.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goToRef.current(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                i === active
                  ? "bg-ink-900 text-white"
                  : "border border-ink-300 text-ink-900 hover:border-ink-900"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-ink-400">Drag to rotate · tap the phone to switch screens</p>
      </div>
    </div>
  );
};

export default PhoneModel3D;
