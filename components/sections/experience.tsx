"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section">
      <div className="container-premium">
        <SectionHeading eyebrow="Experience" title="Three years, three teams, shipped products." />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.company} className="relative mb-4 pl-12">
                <div className="absolute left-0 top-4 grid h-8 w-8 place-items-center rounded-full border border-primary/60 bg-background shadow-card dark:shadow-premium">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full transition",
                      isOpen ? "scale-125 bg-primary" : "bg-primary/50",
                    )}
                  />
                </div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="glass-panel w-full rounded-2xl p-6 text-left transition hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm text-accent-ink">
                        <CalendarDays className="h-4 w-4" />
                        {item.duration}
                      </div>
                      <h3 className="font-display text-xl font-bold">{item.position}</h3>
                      <p className="mt-1 text-sm font-semibold text-muted-foreground">
                        {item.company}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-none text-accent-ink transition-transform",
                        isOpen && "rotate-180",
                      )}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                          {[...item.responsibilities, ...item.achievements].map((point) => (
                            <p key={point}>• {point}</p>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span key={tech} className="chip-accent">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
