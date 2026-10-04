"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function splitCompany(company: string) {
  const [name, ...rest] = company.split(",");
  return { name: name.trim(), location: rest.join(",").trim() };
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container-premium">
        <SectionHeading eyebrow="Experience" title="3+ years of shipping real products." />

        <ul className="border-t border-border dark:border-white/10">
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;
            const { name, location } = splitCompany(item.company);
            const panelId = `experience-panel-${index}`;

            return (
              <li key={item.company} className="border-b border-border dark:border-white/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="focus-ring group flex w-full items-start gap-4 py-6 text-left sm:items-center"
                  >
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 flex-none text-muted-foreground transition-transform duration-200 group-hover:text-foreground sm:mt-0",
                        isOpen ? "rotate-0 text-accent-ink" : "-rotate-90",
                      )}
                    />
                    <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <span>
                        <span className="block font-display text-lg font-bold sm:text-xl">
                          {item.position}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {name}
                          {location ? ` · ${location}` : null}
                        </span>
                      </span>
                      <span className="flex-none text-sm font-medium text-muted-foreground sm:text-right">
                        {item.duration}
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-9">
                        <ul className="space-y-2 text-sm leading-relaxed text-foreground sm:text-base">
                          {item.achievements.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="font-bold text-accent-ink">→</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {item.responsibilities.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted-foreground/60" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-5 text-xs font-medium text-muted-foreground">
                          {item.technologies.join(" · ")}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
