import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-20 flex items-center justify-between py-4 sm:py-6 flex-wrap gap-4"
    >
      <div className="flex flex-shrink-0 items-center order-1">
        <a className="text-lg sm:text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors" href="#">
          Irfan<span className="text-purple-600">.</span>
        </a>
      </div>
      
      <div className="flex items-center justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl text-gray-700 order-2 sm:order-3">
        <motion.a 
          href="https://www.linkedin.com/in/irfanafifiromzi" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#a855f7" }}
          className="hover:text-purple-600 transition-colors"
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a 
          href="https://github.com/irfanafifiromzi" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#a855f7" }}
          className="hover:text-purple-600 transition-colors"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/_.ipeyys" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#a855f7" }}
          className="hover:text-purple-600 transition-colors"
        >
          <FaInstagram size={24} />
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;

