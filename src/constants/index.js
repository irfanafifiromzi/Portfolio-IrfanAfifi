import project1 from "../assets/projects/happi2.png";
import project1Cover from "../assets/projects/happi4.png";
import project2 from "../assets/projects/zora2.png";
import project2Cover from "../assets/projects/zora3.png";
import project3 from "../assets/projects/frostedge2.png";
import project3Cover from "../assets/projects/frostedge.png";
import project4 from "../assets/projects/polesynctech2.png";
import project4Cover from "../assets/projects/polesynctech.png";
import pixelPet from "../assets/projects/pixelpet.jpg";
import pixelPetVideo from "../assets/projects/pixelpet.mp4";
import gvReport from "../assets/projects/gvreport.png";
import geminiVillain from "../assets/projects/geminivillain.png";
import gv1 from "../assets/projects/1-terminal.png";
import gv2 from "../assets/projects/2-project.png";
import gv3 from "../assets/projects/3-preflight.png";
import gv4 from "../assets/projects/4-palette.png";
import gv5 from "../assets/projects/5-run.png";
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

// Professional / work projects — shown in "Featured Projects".
export const PROJECTS = [
  {
    slug: "happi-malaysia-insurance",
    title: "HAPPI Malaysia Insurance Mobile Application",
    tagline: "Insurance mobile app for HAPPI Malaysia",
    image: project1,
    // Optional: shown on the project detail page instead of `image`, which
    // stays the card thumbnail. Falls back to `image` when not set.
    cover: project1Cover,
    description:
      "Developed mobile application features using React Native and Vue.js. Built backend APIs using Spring Boot. Developed admin panel using Vue.js. Successfully deployed on Google App Store and Apple App Store.",
    technologies: ["React Native", "Vue.js", "Spring Boot", "Java"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=my.com.happi" },
      { label: "App Store", url: "https://apps.apple.com/us/app/happi-malaysia/id6753157468" },
    ],
  },
  {
    slug: "zora-pro-erp",
    title: "Zora Pro ERP System",
    tagline: "ERP system for warehouse, manufacturing & reporting",
    image: project2,
    cover: project2Cover,
    // This cover is portrait (1080x1440). Crop it to a banner on the detail
    // page so it stays full width instead of shrinking to a narrow strip.
    coverCrop: true,
    description:
      "Developed ERP system covering warehouse, manufacturing, and reporting modules. Built backend services using NestJS. Integrated RFID/EPC technology for automated stock tracking. Developed admin dashboard for real-time monitoring and management.",
    technologies: ["NestJS", "TypeScript", "RFID/EPC", "MySQL", "React"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
  },
  {
    slug: "frostedge-freezer-monitoring",
    title: "FrostEdge Smart Freezer Monitoring System",
    tagline: "IoT freezer monitoring with real-time alerts",
    image: project3,
    cover: project3Cover,
    description:
      "Developed internal web-based admin system to monitor smart freezer conditions in real-time. Integrated ESP32 sensors to collect temperature and freezer status data. Built backend services to process and store sensor data. Designed dashboard for real-time visualization with Telegram and email alerts.",
    technologies: ["ESP32", "IoT", "React", "Node.js", "MySQL", "Telegram API"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
  },
  {
    slug: "polesync-technologies",
    title: "PoleSync Technologies",
    tagline: "Smart pole with ESP32 environmental sensors",
    image: project4,
    cover: project4Cover,
    description:
      "An environmental monitoring system built around a smart pole fitted with ESP32 sensors. The pole tracks weather conditions, air quality, and water quality, doubles as a WiFi access point, and turns the readings it collects into forecasts. Sensor data feeds a dashboard for real-time monitoring across deployed units.",
    technologies: ["ESP32", "IoT", "AWS", "Vue.js", "MySQL"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
  },
];

// Personal / side projects — shown in "Personal Projects".
export const PERSONAL_PROJECTS = [
  {
    slug: "gvreport",
    title: "GVReport",
    tagline: "Desktop app published on the Microsoft Store",
    image: gvReport,
    // TODO: replace with an accurate description of what GVReport does.
    description:
      "A native Windows desktop application published on the Microsoft Store, built with Rust, Tauri, and Electron for a fast, lightweight desktop experience.",
    technologies: ["Rust", "Tauri", "Electron"],
    type: "Personal Project",
    context: "Published on Microsoft Store",
    links: [
      {
        label: "Microsoft Store",
        url: "https://apps.microsoft.com/detail/9MTHWD4J142T?hl=en-us&gl=MY&ocid=pdpshare",
      },
    ],
  },
  {
    slug: "geminivillain-terminal",
    title: "GeminiVillain Terminal",
    tagline: "Terminal that chains and automates deployment workflows",
    image: geminiVillain,
    // Screens shown on the detail page, each rendered at its own ratio.
    gallery: [
      { src: gv1, caption: "Terminal" },
      { src: gv2, caption: "Project workspace" },
      { src: gv3, caption: "Preflight review" },
      { src: gv4, caption: "Command palette" },
      { src: gv5, caption: "Run" },
    ],
    description:
      "A Windows terminal application for developers that removes the repetition from deploys. Common command sequences are saved as buttons and chained into workflows, and execution halts the moment any step fails so a broken build never reaches production. Includes remote SSH execution with exit code verification, preflight command review, required confirmation before touching production servers, and deployment status comparison. Built on PowerShell via ConPTY with the OpenSSH client.",
    technologies: ["PowerShell", "ConPTY", "OpenSSH", "Git", "SSH"],
    type: "Personal Project",
    context: "Published on itch.io",
    links: [
      { label: "itch.io", url: "https://geminivillain.itch.io/geminivillain" },
      { label: "Source on GitHub", url: "https://github.com/irfanafifiromzi/GeminiVillain" },
    ],
  },
  {
    slug: "pixel-pet",
    title: "Pixel Pet",
    tagline: "A pixel-art stress-relief companion for VS Code",
    image: pixelPet,
    // Shown in place of the cover image on the detail page; `image` doubles
    // as its poster frame.
    video: pixelPetVideo,
    description:
      "A cute pixel-art companion that lives inside VS Code to help you relax while coding — feed, play with, and call over hand-drawn creatures like fish, crabs, and jellyfish in a calming aquarium panel alongside your editor.",
    technologies: ["VS Code Extension API", "TypeScript"],
    type: "Personal Project",
    context: "VS Code Marketplace",
    links: [
      {
        label: "VS Code Marketplace",
        url: "https://marketplace.visualstudio.com/items?itemName=GeminiVillain.pixel-pet",
      },
    ],
  },
];

// Convenience lookup for project detail pages (by slug), preserving order for prev/next.
export const ALL_PROJECTS = [...PROJECTS, ...PERSONAL_PROJECTS];

export const CONTACT = {
  address: "4452, Kampung Wakaf Mesira,Tepoh, 21060, Kuala Nerus, Terengganu",
  phoneNo: "+60134816949",
  email: "irfanafifiromzi@gmail.com",
};
