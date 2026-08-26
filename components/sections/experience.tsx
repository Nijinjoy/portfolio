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
    <section id="experience" className="pb-8 pt-2">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Experience"
          title="Years in the trenches, shipping real products."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-sky-400 to-transparent" />
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.company} className="relative mb-4 pl-12">
                <div className="absolute left-0 top-4 grid h-8 w-8 place-items-center rounded-full border border-sky-300 bg-background shadow-premium">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full transition",
                      isOpen ? "scale-125 bg-sky-300" : "bg-sky-500/60",
                    )}
                  />
                </div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="glass-panel w-full rounded-3xl p-6 text-left transition hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm text-sky-300">
                        <CalendarDays className="h-4 w-4" />
                        {item.duration}
                      </div>
                      <h3 className="font-display text-xl font-bold">{item.position}</h3>
                      <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.company}</p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-none text-sky-300 transition-transform",
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
                        <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                          {[...item.responsibilities, ...item.achievements].map((point) => (
                            <p key={point}>• {point}</p>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-sky-300"
                            >
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
