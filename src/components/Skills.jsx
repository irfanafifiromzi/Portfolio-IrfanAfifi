import { RiReactjsLine } from "react-icons/ri";
import { LiaLaravel } from "react-icons/lia";
import { RiFlutterLine } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { motion } from "framer-motion"
import SkillsBulletin from "./SkillsBulletin";
import { CheckCircle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
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

  return (
    <div className="border-b border-transparent pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Skills & Tools
      </motion.h2>

      {/* Moving Bulletin Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 overflow-hidden"
      >
        <SkillsBulletin />
      </motion.div>

      {/* Skills Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-0 max-w-4xl mx-auto"
      >
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 + 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-600 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-4">{category.category}</h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-purple-600 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
