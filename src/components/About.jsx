import AboutGallery from "./AboutGallery";
import SectionHeading from "./SectionHeading";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  "Enterprise & IoT Systems",
  "Full-Stack Development",
  "API Development",
  "Cloud Deployment (AWS)",
  "Database Design",
  "Real-time Solutions"
];

const About = () => {
  return (
    <div id="about" className="border-t border-ink-200 py-24">
      <SectionHeading kicker="About" title="Who I am" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-ink-500 font-light leading-relaxed text-lg lg:text-xl"
        >
          {ABOUT_TEXT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          {HIGHLIGHTS.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-lg border border-ink-200 p-3"
            >
              <CheckCircle className="text-accent flex-shrink-0" size={16} />
              <span className="text-xs sm:text-sm font-medium text-ink-700">{highlight}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Photo library */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mt-20"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest2 text-ink-400">
          Photo library &mdash; drag to browse
        </p>
        {/* Full-bleed: the curved gallery is meant to run off both edges.
            Breaks out of the centred container without affecting layout. */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <AboutGallery />
        </div>
      </motion.div>
    </div>
  )
}

export default About
