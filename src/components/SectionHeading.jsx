import { motion } from "framer-motion";

/**
 * Agency-style section header: a small tracked-out kicker line above a
 * very large heading, with an optional right-aligned action link.
 */
const SectionHeading = ({ kicker, title, action }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 sm:mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        {kicker && (
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest2 text-ink-400">
            {kicker}
          </p>
        )}
        <h2 className="display-heading text-5xl sm:text-6xl lg:text-[clamp(3rem,6.25vw,5.75rem)] text-ink-900">
          {title}
        </h2>
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
};

export default SectionHeading;
