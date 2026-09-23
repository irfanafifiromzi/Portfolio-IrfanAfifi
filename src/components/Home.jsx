import profilePic from "../assets/irfan2.jpg";
import resumePDF from "../assets/IrfanAfifiRomzi_Resume.pdf";
import { motion } from "framer-motion"
import { Download } from "lucide-react";
import { RiReactjsLine, RiFlutterLine } from "react-icons/ri";
import { SiNestjs, SiSpringboot, SiVuedotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const container = (delay) => ({
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  }
});

// The equivalent of tubik's award-logo row under the hero headline.
const STACK_ICONS = [
  { icon: RiReactjsLine, label: "React" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: SiSpringboot, label: "Spring Boot" },
  { icon: SiVuedotjs, label: "Vue.js" },
  { icon: FaAws, label: "AWS" },
  { icon: RiFlutterLine, label: "Flutter" },
];

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "IrfanAfifiRomzi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    /* Hero mirrors tubikstudio.com: text column left (tagline → 3-line
       display headline → uppercase line + logo row), square media block
       right, both vertically centred. Sizing follows their vw-based scale. */
    <div id="home" className="pt-28 lg:pt-[9vw] pb-20 lg:pb-[8vw]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14 lg:gap-[4vw]">
        {/* Text column */}
        <div className="flex flex-1 flex-col items-start gap-10 lg:gap-[4vw]">
          <motion.p
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-[1.5vw] leading-tight text-ink-900"
          >
            Hi, I&apos;m Irfan &mdash; a software engineer
          </motion.p>

          <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="display-heading text-ink-900 text-[15vw] sm:text-[10vw] lg:text-[clamp(3rem,6.25vw,5.75rem)]"
          >
            <span className="block">Building</span>
            <span className="block">software that</span>
            <span className="block">scales</span>
          </motion.h1>

          <motion.div
            variants={container(0.25)}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest2 text-ink-400">
              Full-Stack &middot; IoT Systems &middot; Cloud Deployment
            </p>

            <div className="mt-6 lg:mt-[1.6vw] flex flex-wrap items-center gap-6 lg:gap-[2.4vw]">
              {STACK_ICONS.map(({ icon: Icon, label }) => (
                <Icon
                  key={label}
                  title={label}
                  className="text-4xl lg:text-[clamp(2rem,2.6vw,3rem)] text-ink-300 transition-colors hover:text-ink-900"
                />
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="rounded-full bg-ink-900 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent"
              >
                view my work
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center justify-center gap-2 rounded-full border border-ink-300 px-8 py-3.5 text-sm font-medium text-ink-900 transition-colors duration-300 hover:border-ink-900"
              >
                <Download size={16} />
                download CV
              </button>
            </div>
          </motion.div>
        </div>

        {/* Square media block (their hero video slot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[42%] aspect-square shrink-0 overflow-hidden rounded-3xl bg-white"
        >
          <img
            src={profilePic}
            alt="Irfan Afifi Romzi"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
