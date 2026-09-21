import {
  SiAndroid,
  SiExpo,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiJira,
  SiPostman,
  SiReact,
  SiRedux,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiXcode,
} from "react-icons/si";
import { FaApple, FaAws, FaFigma, FaGitAlt, FaGithub, FaGoogle, FaHtml5, FaMeta } from "react-icons/fa6";
import { Code2, Database, Layers, Smartphone, Workflow } from "lucide-react";
import type { Project, SkillGroup } from "@/types/portfolio";

export const typingRoles = [
  "React Native Developer",
  "React.js Developer",
  "Cross Platform Expert",
  "Mobile UI Specialist",
  "JavaScript Developer",
];

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5", label: "Projects" },
  { value: "12", label: "Technologies" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92, experience: "3+ years", icon: SiReact },
      { name: "Vue.js", level: 78, experience: "1+ years", icon: SiVuedotjs },
      { name: "HTML", level: 95, experience: "3+ years", icon: FaHtml5 },
      { name: "CSS", level: 92, experience: "3+ years", icon: SiTailwindcss },
      { name: "Tailwind CSS", level: 90, experience: "2+ years", icon: SiTailwindcss },
      { name: "JavaScript", level: 94, experience: "3+ years", icon: SiJavascript },
      { name: "TypeScript", level: 88, experience: "2+ years", icon: SiTypescript },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", level: 94, experience: "3+ years", icon: SiReact },
      { name: "Android", level: 84, experience: "3+ years", icon: SiAndroid },
      { name: "iOS", level: 80, experience: "2+ years", icon: FaApple },
    ],
  },
  {
    title: "State & Integration",
    skills: [
      { name: "Redux Toolkit", level: 90, experience: "3+ years", icon: SiRedux },
      { name: "Context API", level: 88, experience: "3+ years", icon: SiReact },
      { name: "REST APIs", level: 93, experience: "3+ years", icon: Workflow },
      { name: "Firebase", level: 88, experience: "3+ years", icon: SiFirebase },
      { name: "GraphQL", level: 74, experience: "1+ years", icon: SiGraphql },
      { name: "Supabase", level: 76, experience: "1+ years", icon: SiSupabase },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "Firestore", level: 86, experience: "3+ years", icon: SiFirebase },
      { name: "SQLite", level: 82, experience: "2+ years", icon: SiSqlite },
      { name: "Hive", level: 78, experience: "2+ years", icon: Database },
      { name: "Git", level: 90, experience: "3+ years", icon: FaGitAlt },
      { name: "GitHub", level: 88, experience: "3+ years", icon: FaGithub },
      { name: "Android Studio", level: 86, experience: "3+ years", icon: SiAndroid },
      { name: "VS Code", level: 92, experience: "3+ years", icon: Code2 },
      { name: "Xcode", level: 78, experience: "2+ years", icon: SiXcode },
      { name: "Postman", level: 87, experience: "3+ years", icon: SiPostman },
      { name: "Figma", level: 80, experience: "2+ years", icon: FaFigma },
      { name: "Jira", level: 82, experience: "2+ years", icon: SiJira },
    ],
  },
];

export const experiences = [
  {
    company: "ADDONS TECHNOLOGIES LLC, Dubai",
    position: "Software Engineer",
    duration: "Oct 2025 - Present",
    responsibilities: [
      "Built and deployed 3+ production mobile and web apps with React Native and Vue.js.",
      "Integrated Stripe and Botim Money for payments, and Twilio for phone-based OTP login.",
      "Integrated react-native-maps for live location tracking, custom markers, and geolocation workflows.",
      "Localized the app in Arabic and English using i18n.",
      "Built offline sync to keep core workflows running without connectivity, reconciling once back online.",
      "Architected state management with Redux Toolkit, RTK Query, and Redux-Saga.",
      "Owned feature development through store release and production deployment.",
    ],
    achievements: [
      "Delivered an end-to-end mobile and web product independently, from build to release.",
      "Simplified onboarding with secure phone-based OTP login, a sign-in flow users already trust and expect.",
      "Tailored products for the UAE market with bilingual Arabic-English experiences and Botim Money, a widely used regional payment method.",
    ],
    technologies: ["React Native", "Vue.js", "Redux Toolkit", "Redux-Saga", "react-native-maps", "Stripe", "Botim Money", "Twilio", "i18n", "Offline Sync", "HRMS", "CRM", "REST APIs", "Android", "iOS"],
  },
  {
    company: "Impetors Pvt Ltd, Bengaluru",
    position: "Mobile Application Developer",
    duration: "Apr 2024 - Jul 2025",
    responsibilities: [
      "Developed production mobile applications for Android and iOS, including Blaze HR.",
      "Built HRMS-focused mobile workflows with clean UI, reusable components, API integrations, and reliable release delivery.",
      "Collaborated with product, backend, QA, and design teams to ship app-store-ready mobile features.",
    ],
    achievements: [
      "Published Blaze HR on both Google Play Store and Apple App Store.",
      "Delivered mobile experiences for HR operations, employee self-service, and enterprise workflows.",
    ],
    technologies: ["React Native", "TypeScript", "REST APIs", "HRMS", "Android", "iOS"],
  },
  {
    company: "Appstation Pvt Ltd",
    position: "Mobile App Developer",
    duration: "May 2023 - 2024",
    responsibilities: [
      "Built hospitality apps and a sports app for a Qatar-based client.",
      "Added multi-language support with language translation across every screen.",
      "Implemented secure, seamless authentication flows.",
      "Integrated push notifications to keep users engaged and informed.",
      "Deployed and released apps to the Google Play Store and Apple App Store.",
    ],
    achievements: [
      "Delivered hospitality and sports apps for a Qatar client, from build to store release.",
      "Launched multi-language apps with secure authentication and push notifications on both Google Play Store and Apple App Store.",
      "Improved crash-free sessions by tightening error handling and release QA checklists.",
    ],
    technologies: ["React Native", "React.js", "REST APIs", "SQLite", "Firebase", "i18n", "Push Notifications", "Authentication", "Play Store", "App Store"],
  },
];

export const projectCategories = [
  "All",
  "React Native",
  "React.js",
  "HRMS",
  "CRM",
  "Sports",
  "Restaurant POS",
  "Finance",
  "E-Commerce",
  "Portfolio",
  "Task Management",
];

export const projects: Project[] = [
  {
    title: "Blaze HR",
    category: "HRMS",
    description:
      "A production HRMS mobile application developed at Impetors Pvt Ltd, Bengaluru and published on Android and iOS.",
    image: "/images/blaze-hr-app.png",
    techStack: ["React Native", "TypeScript", "REST APIs", "HRMS", "Android", "iOS"],
    features: [
      "Employee self-service",
      "HRMS workflows",
      "Cross-platform mobile delivery",
      "Production store releases",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.blazehr.blazhr&pcampaignid=web_share",
      appStore: "https://apps.apple.com/gb/app/blaze-hr/id6738582544",
      caseStudy: "#",
    },
    details: {
      architecture:
        "Cross-platform mobile architecture with reusable UI components, typed feature modules, and API-driven HRMS workflows.",
      challenges:
        "Delivering reliable employee-facing HR workflows across Android and iOS while maintaining a polished production app experience.",
      solutions:
        "Built reusable screens and components, integrated backend APIs, handled mobile release requirements, and kept the UX clean for enterprise users.",
      performance:
        "Focused on responsive screens, predictable navigation, efficient API states, and stable app-store-ready builds.",
      contributions: [
        "Mobile development",
        "HRMS workflows",
        "API integration",
        "Android release",
        "iOS release",
      ],
    },
  },
  {
    title: "ADD-POS",
    category: "Restaurant POS",
    description:
      "A React Native restaurant POS billing application with three dedicated user roles — billing, kitchen, and customer display — published on Google Play with offline sync, Botim Money payments, and multi-language support.",
    image: "/images/addon-s-pos.png",
    techStack: ["React Native", "Mobile App", "Tablet App", "Restaurant POS", "Offline Sync", "Botim Money", "i18n", "Android"],
    features: [
      "Billing user role",
      "Kitchen user role",
      "Customer display role",
      "Kitchen and liquor item billing",
      "Offline sync",
      "Botim Money payment gateway",
      "Multi-language support with i18n",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.addonsposapp&pcampaignid=web_share",
      caseStudy: "#",
    },
    details: {
      architecture:
        "React Native POS structure with three distinct user roles — billing user, kitchen user, and customer display user — each with a purpose-built screen flow, local-first data storage, and background sync across mobile and tablet layouts.",
      challenges:
        "Keeping billing, kitchen, and customer display roles in sync in real time even with unreliable connectivity, integrating a secure in-app payment gateway, and supporting multiple languages across every screen.",
      solutions:
        "Built dedicated flows for the billing, kitchen, and customer display user roles, added offline sync so billing continues without network access and reconciles once reconnected, integrated Botim Money for in-app payments, added i18n for language translation, and published the app on Google Play.",
      performance:
        "Focused on fast billing interactions, reliable offline-to-online sync, readable tablet layouts, and dependable payment processing in production.",
      contributions: [
        "React Native development",
        "Billing, kitchen, and customer display role workflows",
        "POS billing flows",
        "Offline sync implementation",
        "Botim Money payment integration",
        "i18n language translation",
        "Play Store release",
      ],
    },
  },  {
    title: "Addon-s",
    category: "CRM",
    description:
      "An HR and CRM mobile and web application independently built and deployed for ADDONS TECHNOLOGIES LLC, Dubai — React Native apps on Android and iOS, plus a Vue.js web interface.",
    image: "/images/addons-app.png",
    techStack: ["React Native", "Vue.js", "Stripe", "Twilio", "HRMS", "CRM", "REST APIs", "Android", "iOS"],
    features: [
      "HR workflows",
      "CRM workflows",
      "Stripe payments",
      "Twilio phone number login",
      "Enterprise mobile and web features",
      "Independent Android, iOS, and web deployment",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.addons.addonshr&pcampaignid=web_share",
      appStore: "https://apps.apple.com/ae/app/addon-s/id6757434415",
      caseStudy: "#",
    },
    details: {
      architecture:
        "React Native mobile apps paired with a Vue.js web interface, reusable screens, API-connected modules, and separate HR and CRM feature areas.",
      challenges:
        "Building and releasing a complete business mobile and web application independently, including secure payments and phone-based authentication.",
      solutions:
        "Owned the implementation flow end to end, integrated Stripe for payments and Twilio for phone number OTP login, organized reusable modules, and prepared production-ready store builds.",
      performance:
        "Focused on stable navigation, clean mobile interactions, efficient API state handling, and release-ready production builds.",
      contributions: [
        "Independent development",
        "React Native development",
        "Vue.js web development",
        "HR workflows",
        "CRM workflows",
        "Stripe payment integration",
        "Twilio phone login integration",
        "Play Store release",
        "App Store release",
      ],
    },
  },
  {
    title: "Buy In Minutes",
    category: "E-Commerce",
    description:
      "An independently developed React Native mobile commerce project currently under development for a company, focused on fast buying flows and mobile-first customer experience.",
    image: "/images/buy-in-minutes.jpeg",
    imageFit: "contain",
    techStack: ["React Native", "Mobile App", "E-Commerce", "REST APIs", "Android", "iOS"],
    features: [
      "Fast purchase flows",
      "Product browsing",
      "Mobile commerce experience",
      "Independent development in progress",
    ],
    links: { caseStudy: "#" },
    details: {
      architecture:
        "React Native app structure with reusable screens, commerce-focused modules, API-connected product flows, and production-oriented mobile navigation.",
      challenges:
        "Developing the product independently while aligning company requirements with a smooth, fast shopping experience.",
      solutions:
        "Built reusable React Native components, structured the buying flow around quick user actions, and prepared the app foundation for scalable company use.",
      performance:
        "Currently focused on responsive screens, efficient navigation, and lightweight interactions for fast mobile ordering.",
      contributions: [
        "Independent development",
        "React Native implementation",
        "E-commerce flows",
        "Mobile UI",
        "Company product development",
      ],
    },
  },
  {
    title: "Bsporty",
    category: "Sports",
    description:
      "A sports booking and accessories mobile app published on Google Play as a one-stop solution for ground booking and sports accessories.",
    image: "/images/bsporty.jpeg",
    techStack: ["Mobile App", "Sports Booking", "E-Commerce", "Android", "Google Play"],
    features: [
      "Ground booking",
      "Sports accessories",
      "Mobile-first shopping flows",
      "Published Android release",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.bsporty.bsporty&pcampaignid=web_share",
      caseStudy: "#",
    },
    details: {
      architecture:
        "Mobile-first product structure for sports venue discovery, booking flows, accessory browsing, and production Android distribution.",
      challenges:
        "Combining booking-oriented sports workflows with shopping-style user journeys while keeping the app simple for everyday customers.",
      solutions:
        "Built clear mobile screens for browsing, booking, and commerce actions, with a production-ready Android release flow.",
      performance:
        "Focused on responsive mobile interactions, streamlined navigation, and reliable Play Store delivery.",
      contributions: [
        "Mobile app development",
        "Sports booking flows",
        "Commerce workflows",
        "Android release",
        "Play Store publishing",
      ],
    },
  },

];

export const services = [
  { title: "React Native Development", icon: Smartphone, text: "Production mobile apps with clean TypeScript, native integrations, and scalable state." },
  { title: "React.js Development", icon: SiReact, text: "Modern dashboards, admin portals, landing pages, and product frontends." },
  { title: "Cross Platform Development", icon: Layers, text: "Shared business logic, consistent UI systems, and reliable Android/iOS delivery." },
  { title: "API & Firebase Integration", icon: SiFirebase, text: "REST, GraphQL, auth, Firestore, push notifications, analytics, and cloud workflows." },
  { title: "App Optimization", icon: Workflow, text: "Performance audits, bug fixing, maintainability improvements, and release hardening." },
];

export const certifications = [
  { title: "React", issuer: "Professional Training", icon: SiReact },
  { title: "React Native", issuer: "Mobile Development", icon: SiExpo },
  { title: "JavaScript", issuer: "Modern ES6+", icon: SiJavascript },
  { title: "TypeScript", issuer: "Type Safety", icon: SiTypescript },
  { title: "AWS", issuer: "Cloud Foundations", icon: FaAws },
  { title: "Google", issuer: "Developer Learning", icon: FaGoogle },
  { title: "Meta", issuer: "Frontend Programs", icon: FaMeta },
];

export const techStack = [
  "React",
  "React Native",
  "Vue.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Firebase",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
];

export const blogPosts = [
  "React Native Best Practices",
  "React.js Development",
  "JavaScript ES6",
  "Mobile App Architecture",
  "Clean Code",
];
