import project1 from "../assets/projects/happi.jpg";
import project2 from "../assets/projects/zora.jpg";
import project3 from "../assets/projects/frostedge.png";
import project4 from "../assets/projects/iot.jpg";
import petronas from "../assets/Petronas-Logo.png";
import evolve from "../assets/evolve.png";

export const HERO_CONTENT = `Software Engineer with experience building and deploying enterprise and IoT-integrated systems across mobile and web platforms. Skilled in backend and full-stack development using NestJS, Spring Boot, React Native, Laravel, and Vue.js. Specialized in API development, system integration, AI automation and cloud deployment on AWS.`;

export const ABOUT_TEXT = `I am a Software Engineer experienced in delivering real-world systems including insurance mobile applications, ERP platforms, and IoT monitoring solutions integrated with ESP32 devices. My expertise spans backend and full-stack development with strong proficiency in NestJS, Spring Boot, React Native, Laravel, and Vue.js. I have successfully designed and optimized databases using MySQL, deployed applications on AWS cloud infrastructure, and integrated RFID/EPC and IoT devices for real-time data collection. Focused on building scalable, efficient, and data-driven systems for real-time operations and monitoring. I thrive in collaborative environments and am passionate about solving complex technical challenges and delivering impactful solutions.`;


export const EXPERIENCES = [
  {
    year: "March 2026 - Present",
    role: "Software Engineer II",
    company: "Evolve Technology Platform Sdn Bhd",
    logo: evolve,
    description: `Designed and optimized databases using MySQL. Deployed and managed applications on AWS cloud infrastructure. Integrated RFID/EPC and ESP32-based IoT devices for real-time data collection and monitoring. Collaborated with cross-functional teams to deliver end-to-end solutions.`,
    technologies: ["MySQL", "AWS", "IoT", "RFID/EPC", "ESP32"],
  },
  {
    year: "Feb 2025 - March 2026",
    role: "Junior Software Engineer",
    company: "Evolve Technology Platform Sdn Bhd",
    logo: evolve,
    description: `Developed and maintained enterprise applications across mobile, web, and IoT-integrated systems. Built scalable backend services using Spring Boot and NestJS. Developed cross-platform mobile applications using React Native. Created admin dashboards and monitoring systems using Vue.js.`,
    technologies: ["Spring Boot", "NestJS", "React Native", "Vue.js", "MySQL"],
  },
  {
    year: "July 2024 - Oct 2024",
    role: "Intern",
    company: "PETRONAS",
    logo: petronas,
    description: `Updated Microsoft Excel and assisted team in maintaining Power BI dashboards for various business portfolios, ensuring accurate and up-to-date data visualization for P4R 2024-2029. Assisted in extracting Budget Transfer for all 9 pillars and 3 enablers in the department.`,
    technologies: ["Microsoft Excel", "Microsoft Power BI", "Data Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "HAPPI Malaysia Insurance Mobile Application",
    image: project1,
    description:
      "Developed mobile application features using React Native and Vue.js. Built backend APIs using Spring Boot. Developed admin panel using Vue.js. Successfully deployed on Google App Store and Apple App Store.",
    technologies: ["React Native", "Vue.js", "Spring Boot", "Java"],
  },
  {
    title: "Zora Pro ERP System",
    image: project2,
    description:
      "Developed ERP system covering warehouse, manufacturing, and reporting modules. Built backend services using NestJS. Integrated RFID/EPC technology for automated stock tracking. Developed admin dashboard for real-time monitoring and management.",
    technologies: ["NestJS", "TypeScript", "RFID/EPC", "MySQL", "React"],
  },
  {
    title: "FrostEdge Smart Freezer Monitoring System",
    image: project3,
    description:
      "Developed internal web-based admin system to monitor smart freezer conditions in real-time. Integrated ESP32 sensors to collect temperature and freezer status data. Built backend services to process and store sensor data. Designed dashboard for real-time visualization with Telegram and email alerts.",
    technologies: ["ESP32", "IoT", "React", "Node.js", "MySQL", "Telegram API"],
  },
  {
    title: "Smart IoT Monitoring Dashboard",
    image: project4,
    description:
      "Real-time monitoring and analytics platform for IoT devices integration and system status tracking.",
    technologies: ["AWS", "Vue.js", "MySQL", "RFID"],
  },
];

export const CONTACT = {
  address: "4452, Kampung Wakaf Mesira,Tepoh, 21060, Kuala Nerus, Terengganu",
  phoneNo: "+60134816949",
  email: "irfanafifiromzi@gmail.com",
};
