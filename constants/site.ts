import type { NavItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Nijin Joy",
  role: "Software Engineer",
  email: "nijinjoy1999@gmail.com",
  phone: "+971 509050493",
  location: "Available Worldwide",
  // Social previews (LinkedIn, WhatsApp, X) need an absolute URL to the live site.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  github: "https://github.com/Nijinjoy",
  linkedin: "https://www.linkedin.com/in/nijinjoy/",
  whatsapp: "https://wa.me/971509050493",
  resumeUrl: "/resume.pdf",
  summary:
    "I build scalable, high-performance cross-platform mobile applications with clean architecture, reusable components, modern UI/UX, and optimized performance.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const seoKeywords = [
  "Mobile Application Developer",
  "React Native Developer",
  "React.js Developer",
  "Next.js Developer",
  "WordPress Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Senior Mobile Developer",
  "Cross Platform App Developer",
  "Firebase Developer",
  "ERP Mobile App Developer",
  "HRMS App Developer",
];
