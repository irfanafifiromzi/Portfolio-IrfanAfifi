import AboutCarousel from "./AboutCarousel";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Enterprise & IoT Systems",
    "Full-Stack Development",
    "API Development",
    "Cloud Deployment (AWS)",
    "Database Design",
    "Real-time Solutions"
  ];

  return (
    <div className="border-b border-transparent pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        About Me
      </motion.h2>

      {/* Centered Container */}
      <div className="max-w-4xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Image Carousel - Left on desktop, full width on mobile */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5 flex-shrink-0"
          >
            <AboutCarousel />
          </motion.div>

          {/* Content Section - Right on desktop, full width on mobile */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/5"
          >
            <div className="space-y-6">
              <p className="text-gray-700 font-light tracking-tighter leading-relaxed text-lg">
                {ABOUT_TEXT}
              </p>

              {/* Highlights Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8"
              >
                {highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center gap-2 bg-purple-50 rounded-lg p-3"
                  >
                    <CheckCircle className="text-purple-600 flex-shrink-0" size={18} />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
