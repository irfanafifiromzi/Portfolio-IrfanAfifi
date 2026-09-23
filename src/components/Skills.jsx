import { motion } from "framer-motion"
import SkillsBulletin from "./SkillsBulletin";
import SectionHeading from "./SectionHeading";

const SKILL_CATEGORIES = [
  {
    category: "Backend",
    skills: ["NestJS", "Spring Boot", "Node.js", "Laravel", "API Development"]
  },
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "React Native", "Flutter", "UI/UX"]
  },
  {
    category: "Infrastructure",
    skills: ["AWS", "MySQL", "IoT", "RFID/EPC", "ESP32"]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="border-t border-ink-200 py-24">
      <SectionHeading kicker="Toolbox" title="Skills & tools" />

      {/* Full-bleed logo strip — runs edge to edge like the gallery */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] mb-16 w-screen">
        <SkillsBulletin />
      </div>

      {/* Category index */}
      <div className="border-t border-ink-200">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 gap-4 border-b border-ink-200 py-8 sm:grid-cols-[minmax(150px,220px)_1fr] sm:gap-10 sm:py-10"
          >
            <div className="flex items-baseline gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest2 text-ink-900 transition-colors duration-300 group-hover:text-accent">
                {category.category}
              </h3>
              <span className="font-mono text-xs text-ink-300">
                {String(category.skills.length).padStart(2, "0")}
              </span>
            </div>

            <p className="font-display font-light leading-snug text-ink-500 text-xl sm:text-2xl lg:text-[clamp(1.375rem,1.9vw,1.875rem)]">
              {category.skills.map((skill, skillIdx) => (
                <span key={skill}>
                  <span className="transition-colors duration-200 hover:text-accent">
                    {skill}
                  </span>
                  {skillIdx < category.skills.length - 1 && (
                    <span className="text-ink-300">{"  /  "}</span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
