"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projectCategories, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [category, setCategory] = useState("All");
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          category === "All" ||
          project.category === category ||
          project.techStack.includes(category),
      ),
    [category],
  );

  return (
    <section id="projects" className="section">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Projects"
          title="Real apps. Real users. Real impact."
          description="Filter by stack or domain. Open any case study for the architecture, the hard parts, and what I contributed."
        />
        <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
          {projectCategories.map((item) => (
            <button
              key={item}
              className={cn(
                "focus-ring whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition",
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border dark:border-white/10 bg-muted/50 dark:bg-white/[0.05] text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((project) => (
            <Dialog key={project.title}>
              <motion.article
                layout
                whileHover={{ y: -6 }}
                className="glass-panel flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} app preview`}
                    fill
                    className={cn(
                      project.imageFit === "contain" ? "object-contain p-6" : "object-cover",
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.links.github ? (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.links.github}>
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      </Button>
                    ) : null}
                    {project.links.demo ? (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.links.demo}>
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    ) : null}
                    {project.links.playStore ? (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.links.playStore} target="_blank" rel="noreferrer">
                          <FaGooglePlay className="h-3.5 w-3.5" />
                          Play Store
                        </a>
                      </Button>
                    ) : null}
                    {project.links.appStore ? (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.links.appStore} target="_blank" rel="noreferrer">
                          <FaApple className="h-3.5 w-3.5" />
                          App Store
                        </a>
                      </Button>
                    ) : null}
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Smartphone className="h-3.5 w-3.5" />
                        Case Study
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
              </motion.article>

              <DialogContent>
                <div className="pr-10">
                  <DialogTitle className="font-display text-2xl font-bold">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-muted-foreground">
                    {project.description}
                  </DialogDescription>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.playStore ? (
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.links.playStore} target="_blank" rel="noreferrer">
                        <FaGooglePlay className="h-3.5 w-3.5" />
                        Play Store
                      </a>
                    </Button>
                  ) : null}
                  {project.links.appStore ? (
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.links.appStore} target="_blank" rel="noreferrer">
                        <FaApple className="h-3.5 w-3.5" />
                        App Store
                      </a>
                    </Button>
                  ) : null}
                  {project.links.demo ? (
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  ) : null}
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-900">
                    <Image
                      src={project.image}
                      alt={`${project.title} architecture preview`}
                      fill
                      className={cn(
                        project.imageFit === "contain" ? "object-contain p-6" : "object-cover",
                      )}
                    />
                  </div>
                  <div className="grid gap-4">
                    {[
                      ["Architecture", project.details.architecture],
                      ["Challenges", project.details.challenges],
                      ["Solutions", project.details.solutions],
                      ["Performance Improvements", project.details.performance],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-border dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] p-4"
                      >
                        <h4 className="font-semibold text-accent-ink">{label}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                      </div>
                    ))}
                    <div className="rounded-2xl border border-border dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] p-4">
                      <h4 className="font-semibold text-accent-ink">My Contributions</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.details.contributions.map((item) => (
                          <span key={item} className="chip-accent">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
