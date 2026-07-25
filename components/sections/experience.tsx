import { CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Experience"
          title="Production experience across mobile and enterprise systems."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-sky-400 to-transparent sm:left-1/2" />
          {experiences.map((item, index) => (
            <article
              key={item.company}
              className="relative mb-8 grid gap-6 pl-12 sm:grid-cols-2 sm:pl-0"
            >
              <div className={index % 2 === 0 ? "sm:pr-10" : "sm:col-start-2 sm:pl-10"}>
                <div className="absolute left-0 top-4 h-8 w-8 rounded-full border border-sky-300 bg-background shadow-premium sm:left-1/2 sm:-translate-x-1/2" />
                <div className="glass-panel rounded-3xl p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-sky-300">
                    <CalendarDays className="h-4 w-4" />
                    {item.duration}
                  </div>
                  <h3 className="font-display text-xl font-bold">{item.position}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.company}</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    {[...item.responsibilities, ...item.achievements].map((point) => (
                      <p key={point}>• {point}</p>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-sky-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
