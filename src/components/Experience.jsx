import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <div className="border-b border-transparent pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Experience
      </motion.h2>
      
      {/* Desktop Timeline View */}
      <div className="hidden md:block relative px-4">
        {/* Timeline line - positioned safely */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-500 rounded-full top-12"></div>

        <div className="space-y-16 relative z-10">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Left/Right Content */}
              <div className="w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Year */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-purple-600" />
                    <p className="text-sm font-semibold text-purple-600">
                      {experience.year}
                    </p>
                  </div>

                  {/* Role */}
                  <h6 className="mb-3 font-bold text-lg text-gray-900 flex items-center gap-2">
                    <Briefcase size={20} className="text-purple-600" />
                    {experience.role}
                  </h6>

                  {/* Company with Logo */}
                  <div className="flex items-center gap-3 mb-3">
                    {experience.logo && (
                      <img 
                        src={experience.logo} 
                        alt={experience.company} 
                        className="h-8 w-auto object-contain"
                      />
                    )}
                    <p className="text-purple-600 font-semibold">
                      @ {experience.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-gray-700 leading-relaxed text-sm">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex flex-wrap gap-2"
                  >
                    {experience.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 + idx * 0.05 }}
                        className="bg-white text-purple-600 text-xs font-medium px-3 py-1 rounded-full border border-purple-200 hover:border-purple-600 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="flex justify-center pt-2">
                <div className="w-6 h-6 bg-white border-4 border-purple-600 rounded-full"></div>
              </div>

              {/* Empty space for alternate layout */}
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline View - Stacked */}
      <div className="md:hidden px-4 space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8"
          >
            {/* Mobile timeline line */}
            {index !== EXPERIENCES.length - 1 && (
              <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-500"></div>
            )}

            {/* Mobile timeline dot */}
            <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-purple-600 rounded-full"></div>

            {/* Mobile content card */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-600 shadow-lg"
            >
              {/* Year */}
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={14} className="text-purple-600" />
                <p className="text-xs font-semibold text-purple-600">
                  {experience.year}
                </p>
              </div>

              {/* Role */}
              <h6 className="mb-2 font-bold text-base text-gray-900 flex items-center gap-2">
                <Briefcase size={18} className="text-purple-600" />
                {experience.role}
              </h6>

              {/* Company with Logo */}
              <div className="flex items-center gap-2 mb-2">
                {experience.logo && (
                  <img 
                    src={experience.logo} 
                    alt={experience.company} 
                    className="h-6 w-auto object-contain"
                  />
                )}
                <p className="text-purple-600 font-semibold text-sm">
                  @ {experience.company}
                </p>
              </div>

              {/* Description */}
              <p className="mb-3 text-gray-700 leading-relaxed text-xs">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-purple-600 text-xs font-medium px-2 py-1 rounded-full border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
