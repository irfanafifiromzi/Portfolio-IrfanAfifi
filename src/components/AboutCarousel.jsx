import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Default images if none provided
  const aboutImages = images.length > 0 ? images : [
    { id: 1, src: '/src/assets/irfan.jpg', alt: 'Irfan at work' },
    { id: 2, src: '/src/assets/irfan2.jpg', alt: 'Irfan profile' },
    { id: 3, src: '/src/assets/irfan3.jpg', alt: 'Irfan' },
    { id: 4, src: '/src/assets/irfan4.jpg', alt: 'Irfan' },
    { id: 5, src: '/src/assets/irfan5.jpg', alt: 'Irfan' },
  ];

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
    setCurrentIndex((prev) => (prev + newDirection + aboutImages.length) % aboutImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Main Carousel Container */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-purple-800 shadow-2xl group">
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
            {/* Main Image Container */}
            <div className="relative w-full h-full">
              <img
                src={aboutImages[currentIndex].src}
                alt={aboutImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />

              {/* Blurry Pixelated Left Side Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-transparent to-transparent opacity-60 mix-blend-multiply"></div>
              
              {/* Left pixelated edge effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple-900 to-transparent opacity-40 backdrop-blur-xl"></div>

              {/* Right blurred edge effect */}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-900 to-transparent opacity-30 backdrop-blur-lg"></div>

              {/* Floral accent corners */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500 to-transparent opacity-10 rounded-br-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500 to-transparent opacity-10 rounded-tl-full blur-2xl"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {aboutImages.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white bg-opacity-40 w-2 hover:bg-opacity-60'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
