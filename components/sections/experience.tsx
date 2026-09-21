"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function splitCompany(company: string) {
  const [name, ...rest] = company.split(",");
  return { name: name.trim(), location: rest.join(",").trim() };
}

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];
  const { name, location } = splitCompany(active.company);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = experiences.length - 1;
    let next = activeIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = activeIndex === last ? 0 : activeIndex + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = activeIndex === 0 ? last : activeIndex - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`experience-tab-${next}`)?.focus();
  };

  return (
    <section id="experience" className="section">
      <div className="container-premium">
        <SectionHeading eyebrow="Experience" title="Three years, three teams, shipped products." />

        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          <div
            role="tablist"
            aria-label="Work experience"
            aria-orientation="vertical"
            className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {experiences.map((item, index) => {
              const isActive = index === activeIndex;
              const company = splitCompany(item.company);
              return (
                <button
                  key={item.company}
                  id={`experience-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="experience-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={onKeyDown}
                  className={cn(
                    "focus-ring relative min-w-[14rem] flex-none rounded-2xl border p-4 text-left transition lg:min-w-0",
                    isActive
                      ? "border-primary/60 bg-primary/10 shadow-card dark:shadow-none"
                      : "glass-panel hover:border-primary/40",
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-y-4 left-0 hidden w-1 rounded-r-full bg-primary transition-opacity lg:block",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span className="block text-xs font-semibold uppercase tracking-wider text-accent-ink">
                    {item.duration}
                  </span>
                  <span className="mt-1 block font-display text-base font-bold">{company.name}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{item.position}</span>
                </button>
              );
            })}
          </div>

          <div
            id="experience-panel"
            role="tabpanel"
            aria-labelledby={`experience-tab-${activeIndex}`}
            className="glass-panel min-h-[24rem] rounded-3xl p-6 sm:p-8"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6 dark:border-white/10">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{active.position}</h3>
                    <p className="mt-1 text-base font-semibold text-accent-ink">{name}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-accent-ink" />
                      {active.duration}
                    </span>
                    {location ? (
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent-ink" />
                        {location}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      <Briefcase className="h-4 w-4 text-accent-ink" />
                      What I did
                    </h4>
                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {active.responsibilities.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary/60" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      <Trophy className="h-4 w-4 text-accent-ink" />
                      Highlights
                    </h4>
                    <ul className="space-y-3 text-sm leading-relaxed">
                      {active.achievements.map((point) => (
                        <li
                          key={point}
                          className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-foreground dark:bg-primary/10"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6 dark:border-white/10">
                  {active.technologies.map((tech) => (
                    <span key={tech} className="chip-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
