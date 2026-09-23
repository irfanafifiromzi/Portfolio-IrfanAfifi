import { RiReactjsLine, RiFlutterLine } from 'react-icons/ri';
import { LiaLaravel } from 'react-icons/lia';
import { DiMysql } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { SiSpringboot, SiNestjs, SiVuedotjs } from 'react-icons/si';

const SKILLS = [
  { icon: RiReactjsLine, name: 'React' },
  { icon: SiVuedotjs, name: 'Vue.js' },
  { icon: SiNestjs, name: 'NestJS' },
  { icon: SiSpringboot, name: 'Spring Boot' },
  { icon: LiaLaravel, name: 'Laravel' },
  { icon: DiMysql, name: 'MySQL' },
  { icon: FaAws, name: 'AWS' },
  { icon: RiFlutterLine, name: 'Flutter' },
];

/**
 * Continuous logo/wordmark strip. The track renders the list twice and the
 * CSS animation shifts it by -50%, so the wrap is seamless. Pauses on hover.
 */
const SkillsBulletin = () => (
  <div className="marquee fade-mask-x relative overflow-hidden py-10">
    <div className="marquee-track flex w-max items-center gap-14 sm:gap-20">
      {[...SKILLS, ...SKILLS].map((skill, idx) => {
        const Icon = skill.icon;
        return (
          <div
            key={idx}
            aria-hidden={idx >= SKILLS.length}
            className="group flex shrink-0 items-center gap-4 text-ink-300 transition-colors duration-300 hover:text-ink-900"
          >
            <Icon className="text-4xl sm:text-5xl" />
            <span className="font-display text-2xl sm:text-3xl font-light tracking-tight whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default SkillsBulletin;
