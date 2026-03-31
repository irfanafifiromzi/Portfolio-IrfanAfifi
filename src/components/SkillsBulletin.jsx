import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { LiaLaravel } from 'react-icons/lia';
import { RiFlutterLine } from 'react-icons/ri';
import { DiMysql } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';

const SkillsBulletin = () => {
  const skills = [
    { icon: RiReactjsLine, name: 'React.js', color: 'text-cyan-400' },
    { icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-500' },
    { icon: SiNestjs, name: 'NestJS', color: 'text-red-600' },
    { icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-600' },
    { icon: LiaLaravel, name: 'Laravel', color: 'text-red-500' },
    { icon: DiMysql, name: 'MySQL', color: 'text-blue-500' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-500' },
    { icon: RiFlutterLine, name: 'Flutter', color: 'text-cyan-400' },
  ];

  // Duplicate array for seamless loop
  const extendedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-8 lg:py-12">
      {/* Gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      <motion.div
        className="flex gap-8 lg:gap-12"
        animate={{
          x: [0, -50 * skills.length],
        }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {extendedSkills.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={idx}
              className="group flex-shrink-0 flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-600 transition-all duration-300 cursor-pointer min-w-fit hover:shadow-lg"
              whileHover={{
                scale: 1.1,
                y: -10,
              }}
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                
                <IconComponent className={`text-4xl ${skill.color} relative`} />
              </div>
              
              <span className="text-xs font-semibold text-gray-700 text-center whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsBulletin;
