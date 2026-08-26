"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [active, setActive] = useState(skillGroups[0].title);
  const group = skillGroups.find((item) => item.title === active) ?? skillGroups[0];

  return (
    <section id="skills" className="pb-2 pt-2">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind every app I ship."
          description="Hands-on experience across cross-platform mobile, frontend engineering, state management, API integration, databases, and product delivery tools."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {skillGroups.map((item) => (
            <button
              key={item.title}
              onClick={() => setActive(item.title)}
              className={cn(
                "focus-ring whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition",
                active === item.title
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 bg-white/6 text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {group.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass-panel flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-primary/50"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-primary/12 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.experience}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
