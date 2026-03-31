import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!isAutoPlay || isHovering) return;
    
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isHovering, projects.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div 
        className="relative h-auto sm:h-[380px] md:h-[480px] lg:h-[550px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-purple-800 shadow-2xl border border-purple-700 border-opacity-50 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <div className="h-full w-full flex flex-col md:flex-row">
              {/* Project Image/Video */}
              <div className="w-full md:w-3/5 h-64 md:h-full bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 flex items-center justify-center overflow-hidden relative">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-40"></div>
                
                {/* Media container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {projects[currentIndex].video ? (
                    <video
                      src={projects[currentIndex].video}
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 h-auto md:h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm bg-white bg-opacity-5">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4"
                  >
                    {projects[currentIndex].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6"
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                </div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {projects[currentIndex].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500 bg-opacity-40 text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-purple-400 border-opacity-50"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          title={isAutoPlay ? "Pause auto-slide" : "Resume auto-slide"}
        >
          {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {projects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white bg-opacity-40 w-2 hover:bg-opacity-60'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="text-center mt-4 sm:mt-6 text-gray-700">
        <p className="text-xs sm:text-sm font-medium">
          Project {currentIndex + 1} of {projects.length}
        </p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
