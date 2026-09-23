import { useRef } from "react";
import { EXPERIENCES } from "../constants"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import SectionHeading from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const ExperienceItem = ({ experience, index, total }) => {
  const ref = useRef(null);
  // Fires when the row reaches the middle band of the viewport, so the node
  // lights up in step with the progress line passing it.
  const isActive = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const isCurrent = experience.year.toLowerCase().includes("present");

  return (
    <div ref={ref} className="relative flex gap-5 sm:gap-10">
      {/* Rail column — the node sits on the line drawn by the parent */}
      <div className="relative flex w-3 shrink-0 justify-center">
        <motion.span
          animate={{
            scale: isActive ? 1 : 0.55,
            backgroundColor: isActive ? "#4c32ff" : "#c9c9d4",
          }}
          transition={{ duration: 0.45, ease: EASE }}
          className="absolute top-10 h-3 w-3 rounded-full ring-4 ring-ink-100"
        />
        {isCurrent && (
          <motion.span
            animate={{ scale: [1, 2.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            className="absolute top-10 h-3 w-3 rounded-full bg-accent"
          />
        )}
      </div>

      {/* Card */}
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="group mb-5 flex-1 rounded-3xl bg-white p-7 sm:p-9 lg:p-11 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-28px_rgba(10,10,10,0.3)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ color: isActive ? "#4c32ff" : "#787c8d" }}
              transition={{ duration: 0.45 }}
              className="text-xs font-semibold uppercase tracking-widest2"
            >
              {experience.year}
            </motion.span>
            {isCurrent && (
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Now
              </span>
            )}
          </div>

          <span className="font-mono text-xs text-ink-300">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-6 font-display font-light leading-[1.05] text-ink-900 text-3xl lg:text-[clamp(1.75rem,2.4vw,2.5rem)]">
          {experience.role}
        </h3>

        <div className="mt-4 flex items-center gap-3">
          {experience.logo && (
            <img
              src={experience.logo}
              alt=""
              className="h-6 w-auto object-contain opacity-90"
            />
          )}
          <p className="text-base text-ink-500">{experience.company}</p>
        </div>

        <p className="mt-7 max-w-2xl font-light leading-relaxed text-ink-700">
          {experience.description}
        </p>

        <div className="mt-8 border-t border-ink-200 pt-5">
          <p className="text-sm text-ink-400">
            {experience.technologies.join("  /  ")}
          </p>
        </div>
      </motion.article>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"],
  });
  // Smooth the raw scroll value so the line eases rather than tracking 1:1.
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.35 });

  return (
    <div id="experience" className="border-t border-ink-200 py-24">
      <SectionHeading kicker="Career" title="Experience" />

      <div ref={containerRef} className="relative">
        {/* Timeline track */}
        <div className="absolute left-[6px] top-2 bottom-2 w-px bg-ink-200" />
        {/* Timeline progress — fills as the section scrolls past */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-[6px] top-2 bottom-2 w-px origin-top bg-accent"
        />

        <div className="flex flex-col">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              index={index}
              total={EXPERIENCES.length}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
