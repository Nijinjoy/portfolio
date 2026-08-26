"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";

const strengths = [
  "React Native",
  "Flutter",
  "React.js & Vue.js",
  "API integration",
  "Firebase",
  "Redux Toolkit",
  "TypeScript",
];

export function AboutSection() {
  return (
    <section id="about" className="pb-2 pt-8">
      <div className="container-premium">
        <SectionHeading
          eyebrow="About Me"
          title="Code that ships. Apps that last."
          description="Cross-platform engineering, clean code, and UI that just feels right — apps your team can maintain and your users can trust."
          className="mb-6"
        />
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">What I do</p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              I build production-grade apps for startups and enterprises alike — polished UI, secure
              auth flows, Firebase-backed data, maps, payments, push notifications, and business-critical
              ERP &amp; HRMS platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {strengths.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -3, scale: 1.03 }}
                className="glass-panel flex items-center gap-2.5 rounded-xl p-3 transition-colors hover:border-primary/50"
              >
                <CheckCircle2 className="h-4 w-4 flex-none text-sky-400" />
                <span className="text-xs font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
