import {
  SiAndroid,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiXcode,
} from "react-icons/si";
import { FaApple, FaAws, FaFigma, FaGitAlt, FaGithub, FaGoogle, FaHtml5, FaMeta } from "react-icons/fa6";
import { Code2, Database, Layers, Smartphone, Workflow } from "lucide-react";
import type { Project, SkillGroup } from "@/types/portfolio";

export const typingRoles = [
  "React Native Developer",
  "Flutter Developer",
  "React.js Developer",
  "Cross Platform Expert",
  "Mobile UI Specialist",
  "JavaScript Developer",
];

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5", label: "Projects" },
  { value: "13", label: "Technologies" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92, experience: "3+ years", icon: SiReact },
      { name: "Next.js", level: 86, experience: "2+ years", icon: SiNextdotjs },
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
      { name: "Flutter", level: 88, experience: "2+ years", icon: SiFlutter },
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
    position: "Mobile Application Developer",
    duration: "Oct 2025 - Present",
    responsibilities: [
      "Independently built and deployed Addon-s, an HR and CRM mobile application for Android and iOS.",
      "Handled mobile app development, feature implementation, store release preparation, and production deployment.",
      "Built enterprise workflows for HR operations, CRM usage, and mobile-first business processes.",
    ],
    achievements: [
      "Published Addon-s on both Google Play Store and Apple App Store.",
      "Delivered an end-to-end mobile product independently from implementation through release.",
    ],
    technologies: ["Cross-platform Mobile", "HRMS", "CRM", "REST APIs", "Android", "iOS"],
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
      "Developed ERP, HRMS, expense management, and operations apps for enterprise users.",
      "Implemented offline-friendly workflows, role-based access, dashboards, and approval flows.",
    ],
    achievements: [
      "Shipped production modules for attendance, payroll, leave management, and expense approvals.",
      "Improved crash-free sessions by tightening error handling and release QA checklists.",
    ],
    technologies: ["React Native", "React.js", "REST APIs", "SQLite", "Firebase"],
  },
];

export const projectCategories = [
  "All",
  "React Native",
  "Flutter",
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
    title: "Addon-s",
    category: "CRM",
    description:
      "An HR and CRM mobile application independently built and deployed for ADDONS TECHNOLOGIES LLC, Dubai on Android and iOS.",
    image: "/images/addons-app.png",
    techStack: ["Cross-platform Mobile", "HRMS", "CRM", "REST APIs", "Android", "iOS"],
    features: [
      "HR workflows",
      "CRM workflows",
      "Enterprise mobile features",
      "Independent Android and iOS deployment",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.addons.addonshr&pcampaignid=web_share",
      appStore: "https://apps.apple.com/ae/app/addon-s/id6757434415",
      caseStudy: "#",
    },
    details: {
      architecture:
        "Enterprise mobile app structure with reusable screens, API-connected modules, and separate HR and CRM feature areas.",
      challenges:
        "Building and releasing a complete business mobile application independently across both Android and iOS stores.",
      solutions:
        "Owned the implementation flow end to end, organized reusable modules, integrated business APIs, and prepared production-ready store builds.",
      performance:
        "Focused on stable navigation, clean mobile interactions, efficient API state handling, and release-ready production builds.",
      contributions: [
        "Independent development",
        "HR workflows",
        "CRM workflows",
        "API integration",
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
  {
    title: "ADDON-S POS",
    category: "Restaurant POS",
    description:
      "A React Native restaurant POS billing application for mobile and tablet users, currently used as an APK at a client site for kitchen items and liquor billing.",
    image: "/images/addon-s-pos.png",
    techStack: ["React Native", "Mobile App", "Tablet App", "Restaurant POS", "APK"],
    features: [
      "Role-based access",
      "Biller user workflow",
      "Kitchen user workflow",
      "Customer display",
      "Kitchen and liquor item billing",
    ],
    links: { caseStudy: "#" },
    details: {
      architecture:
        "React Native POS structure with separate role-based flows for billers, kitchen users, and customer display screens across mobile and tablet layouts.",
      challenges:
        "Supporting real client-site billing operations without a store deployment while keeping billing, kitchen, and display workflows clear for each user role.",
      solutions:
        "Built APK-based mobile and tablet flows for billing kitchen items and liquor items, with role-specific screens for front-desk, kitchen, and customer-facing usage.",
      performance:
        "Focused on fast billing interactions, readable tablet layouts, and dependable APK usage in the live client environment.",
      contributions: [
        "React Native development",
        "Role-based workflows",
        "POS billing flows",
        "Mobile and tablet UI",
        "Client-site APK usage",
      ],
    },
  },
];

export const services = [
  { title: "React Native Development", icon: Smartphone, text: "Production mobile apps with clean TypeScript, native integrations, and scalable state." },
  { title: "Flutter Development", icon: SiFlutter, text: "Beautiful cross-platform apps with clean layers, responsive UI, and optimized runtime behavior." },
  { title: "React.js Development", icon: SiReact, text: "Modern dashboards, admin portals, landing pages, and product frontends." },
  { title: "Cross Platform Development", icon: Layers, text: "Shared business logic, consistent UI systems, and reliable Android/iOS delivery." },
  { title: "API & Firebase Integration", icon: SiFirebase, text: "REST, GraphQL, auth, Firestore, push notifications, analytics, and cloud workflows." },
  { title: "App Optimization", icon: Workflow, text: "Performance audits, bug fixing, maintainability improvements, and release hardening." },
];

export const certifications = [
  { title: "React", issuer: "Professional Training", icon: SiReact },
  { title: "React Native", issuer: "Mobile Development", icon: SiExpo },
  { title: "Flutter", issuer: "Cross Platform", icon: SiFlutter },
  { title: "JavaScript", issuer: "Modern ES6+", icon: SiJavascript },
  { title: "TypeScript", issuer: "Type Safety", icon: SiTypescript },
  { title: "AWS", issuer: "Cloud Foundations", icon: FaAws },
  { title: "Google", issuer: "Developer Learning", icon: FaGoogle },
  { title: "Meta", issuer: "Frontend Programs", icon: FaMeta },
];

export const techStack = [
  "React",
  "React Native",
  "Flutter",
  "Next.js",
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
  "Flutter Performance Tips",
  "React.js Development",
  "JavaScript ES6",
  "Mobile App Architecture",
  "Clean Code",
];
