"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Skills"
          title="A focused stack for modern mobile products."
          description="Hands-on experience across cross-platform mobile, frontend engineering, state management, API integration, databases, and product delivery tools."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-panel rounded-3xl p-6">
              <h3 className="mb-5 font-display text-xl font-bold">{group.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-sky-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="font-semibold">{skill.name}</p>
                            <p className="text-xs text-muted-foreground">{skill.experience}</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-sky-300">{skill.level}%</span>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-violet-400"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
