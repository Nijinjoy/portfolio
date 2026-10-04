"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { stats } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const screens = [
  { word: "Mobile", suffix: ",", rotate: -4, y: -6 },
  { word: "Tablet", suffix: "", rotate: 0, y: 2 },
  { word: "&", suffix: "", rotate: 0, y: 0, plain: true },
  { word: "Web", suffix: ".", rotate: 4, y: -6 },
];

export function HeroSection() {
  return (
    <section id="home" className="flex min-h-[92svh] items-center pb-16 pt-28 sm:pt-32">
      <div className="container-premium">
        <div className="reveal max-w-5xl">
          <a
            href="#contact"
            className="focus-ring mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:border-emerald-500/60 dark:text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </a>
          <p className="mb-5 text-base font-medium text-muted-foreground">
            {siteConfig.name} — {siteConfig.role}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Built for every screen.</span>
            <span className="mt-1 flex flex-wrap items-baseline gap-x-4">
              {screens.map(({ word, suffix, rotate, y, plain }) => (
                <motion.span
                  key={word}
                  whileHover={plain ? undefined : { y, rotate, scale: 1.08 }}
                  className={cn(
                    "inline-block cursor-default",
                    plain ? "text-muted-foreground" : "gradient-text",
                  )}
                >
                  {word}
                  {suffix}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I turn ideas into fast, reliable apps and websites people actually use, built with React
            Native, Next.js, Vue &amp; WordPress, and shipped all the way to the App Store and
            Google Play.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#contact">
                Let&apos;s Build Together
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#projects">See My Work</a>
            </Button>
            <Button asChild variant="ghost">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-4xl font-bold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
