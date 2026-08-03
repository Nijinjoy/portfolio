import type { ComponentType } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number;
  experience: string;
  icon: ComponentType<{ className?: string }>;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  techStack: string[];
  features: string[];
  links: Partial<Record<"github" | "demo" | "playStore" | "appStore" | "caseStudy", string>>;
  details: {
    architecture: string;
    challenges: string;
    solutions: string;
    performance: string;
    contributions: string[];
  };
};
