import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/irfan2.jpg";
import resumePDF from "../assets/IrfanAfifiRomzi_Resume.pdf";
import { motion } from "framer-motion"
import { Zap, Download } from "lucide-react";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
});

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="border-b border-transparent pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Badge */}
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-6 flex items-center gap-2 bg-purple-100 bg-opacity-20 border border-purple-400 border-opacity-40 rounded-full px-4 py-2 w-fit backdrop-blur-sm"
            >
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm text-purple-700 font-medium">Available for Work</span>
            </motion.div>

            <motion.h1 
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="pb-4 lg:pb-16 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center lg:text-left"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Irfan Afifi
              </span>
              <br />
              <span className="text-gray-900">Romzi</span>
            </motion.h1>

            <motion.span   
              variants={container(0.3)}
              initial="hidden"
              animate="visible"        
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-transparent mb-6 text-center lg:text-left"
            >
              Software Developer & Engineer
            </motion.span>

            <motion.p 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl font-light tracking-tighter pb-4 text-gray-700 leading-relaxed text-base md:text-lg text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            >
              <button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                View My Work
              </button>
              <button 
                onClick={downloadResume}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Download size={18} />
                Download CV
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="mt-12 flex gap-6 sm:gap-8 justify-center lg:justify-start flex-wrap"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-purple-600">2+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-purple-600">3+</p>
                <p className="text-gray-600 text-sm">Major Projects</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-purple-600">10+</p>
                <p className="text-gray-600 text-sm">Tech Stack</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative group w-full sm:w-96 lg:w-full"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            
            {/* Image Container */}
            <div className="relative bg-white rounded-2xl p-1 shadow-2xl">
              <img 
                src={profilePic} 
                alt="Irfan Afifi" 
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
