import { PROJECTS } from "../constants"
import ProjectCarousel from "./ProjectCarousel"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div id="projects" className="border-b border-transparent pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Featured Projects
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="px-2 sm:px-4 lg:px-0"
      >
        <ProjectCarousel projects={PROJECTS} />
      </motion.div>
    </div>
  )
}

export default Projects
