import CircularGallery from "./CircularGallery";
import irfan from "../assets/irfan.jpg";
import irfan2 from "../assets/irfan2.jpg";
import irfan3 from "../assets/irfan3.jpg";
import irfan4 from "../assets/irfan4.jpg";
import irfan5 from "../assets/irfan5.jpg";

// Captions are rendered into the WebGL scene under each photo.
const PHOTOS = [
  { image: irfan, text: "01" },
  { image: irfan3, text: "02" },
  { image: irfan4, text: "03" },
  { image: irfan5, text: "04" },
  { image: irfan2, text: "05" },
];

/**
 * Curved, draggable photo gallery — images are bent along an arc and
 * scroll with momentum and snapping (WebGL via ogl).
 */
const AboutGallery = () => (
  <div data-cursor="drag" className="h-[380px] sm:h-[480px] lg:h-[560px] w-full">
    <CircularGallery
      items={PHOTOS}
      bend={2.5}
      textColor="#0a0a0a"
      borderRadius={0.06}
      font={'400 26px "Space Grotesk"'}
      scrollSpeed={2}
      scrollEase={0.05}
    />
  </div>
);

export default AboutGallery;
