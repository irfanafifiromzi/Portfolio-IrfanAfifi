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

export const ABOUT_TEXT = `I'm a Software Engineer with 1.5+ years shipping production systems across mobile, web and IoT, including an insurance app live on Google Play and the App Store, an RFID-enabled ERP platform, and ESP32-based real-time monitoring. I work mostly on the backend with NestJS and Spring Boot, build front-ends in React, Vue.js and React Native, and deploy on AWS. I was promoted to Software Engineer II after 13 months. Outside work, I build and publish developer tools on the Microsoft Store, VS Code Marketplace and itch.io.`;


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
    title: "HAPPI Malaysia Insurance Mobile App",
    tagline: "Insurance app live on Google Play and the App Store",
    image: project1,
    // Optional: shown on the project detail page instead of `image`, which
    // stays the card thumbnail. Falls back to `image` when not set.
    cover: project1Cover,
    description:
      "Built mobile app features in React Native and a Vue.js admin panel for internal operations. Developed the backend REST APIs in Spring Boot (Java). The app is live on the Google Play Store and the Apple App Store.",
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
    tagline: "RFID-enabled ERP for warehouse, manufacturing & reporting",
    image: project2,
    cover: project2Cover,
    // This cover is portrait (1080x1440). Crop it to a banner on the detail
    // page so it stays full width instead of shrinking to a narrow strip.
    coverCrop: true,
    description:
      "Built an ERP covering warehouse, manufacturing and reporting modules on a NestJS backend. Integrated RFID/EPC for automated stock tracking, with an admin dashboard for real-time monitoring.",
    technologies: ["NestJS", "TypeScript", "React", "MySQL", "RFID/EPC"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
  },
  {
    slug: "polesync-technologies",
    title: "PoleSync Technologies",
    tagline: "Smart environmental pole with ESP32 sensors",
    image: project4,
    cover: project4Cover,
    description:
      "A smart pole with ESP32 sensors tracking weather, air quality and water quality, doubling as a WiFi access point. It turns collected readings into forecasts and feeds a real-time dashboard across all deployed units.",
    technologies: ["ESP32", "AWS", "Vue.js", "MySQL"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
  },
  {
    slug: "frostedge-freezer-monitoring",
    title: "FrostEdge Smart Freezer Monitoring",
    tagline: "Real-time freezer monitoring with automated alerts",
    image: project3,
    cover: project3Cover,
    description:
      "A web admin system monitoring freezer temperature and status in real time from ESP32 sensors. Backend services process and store the sensor data, with automated Telegram and email alerts.",
    technologies: ["ESP32", "Node.js", "React", "MySQL", "Telegram API"],
    type: "Professional Project",
    context: "Evolve Technology Platform Sdn Bhd",
  },
];

// Personal / side projects — shown in "Personal Projects".
export const PERSONAL_PROJECTS = [
  {
    slug: "gvreport",
    title: "GVReport",
    tagline: "Report & dashboard designer on the Microsoft Store",
    image: gvReport,
    description:
      "An offline-first Windows app for designing pixel-precise paginated reports and multi-page dashboards (charts, KPI tiles, slicers) from Excel/JSON files, live REST endpoints, or MySQL/PostgreSQL queries. One layout engine feeds both the on-screen preview and PDF export, so they never disagree; vector charts keep PDFs sharp and small, and batch mode turns one template into many PDFs. It includes a sandboxed expression language (tokenizer, Pratt parser, AST evaluator, no eval) and a read-only SQL allow-list enforced in both the UI and the main process, so a shared project file can never modify a database. Around 21k lines of TypeScript/Vue, covered by 182 automated pipeline checks and Playwright end-to-end tests, running on Electron or Tauri (Rust) through a single host abstraction.",
    technologies: ["Electron", "Vue 3", "TypeScript", "jsPDF", "Tauri", "Rust", "Playwright"],
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
    title: "GeminiVillain",
    tagline: "Developer command centre for one-click deploy workflows",
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
      "A real PowerShell terminal (ConPTY, multi-tab) that turns saved commands into one-click workflows which stop at the first failed step, so a broken build never reaches production. Workflow steps run locally or on remote servers over SSH, carrying the remote exit code back so stop-on-failure works across machines, with a preflight review before anything runs. An \"Is production running my code?\" check compares each server's deployed Git commit with the local branch (up to date, N behind, diverged), alongside a status board of read-only health checks. One shared Vue frontend runs on either an Electron/node-pty or a Tauri/Rust backend through a common command-and-event contract.",
    technologies: ["Electron", "Vue 3", "node-pty", "xterm.js", "Rust", "Tauri", "SSH"],
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
    tagline: "A pixel-art aquarium companion for VS Code",
    image: pixelPet,
    // Shown in place of the cover image on the detail page; `image` doubles
    // as its poster frame.
    video: pixelPetVideo,
    description:
      "A pixel-art aquarium webview panel for VS Code with hand-drawn animated fish, crab and jellyfish. Includes feed and play commands, click-to-call interaction, a keyboard shortcut and user settings.",
    technologies: ["TypeScript", "VS Code Extension API", "Webview"],
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
