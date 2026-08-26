"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { stats } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-x-0 top-20 -z-10 h-[34rem] bg-[linear-gradient(115deg,rgba(37,99,235,0.20),rgba(14,165,233,0.08),rgba(124,58,237,0.16),transparent)] blur-3xl" />
      <div className="container-premium pb-6">
        <div className="reveal max-w-3xl">
          <p className="mb-4 text-lg font-semibold text-sky-300">Hi, I&apos;m {siteConfig.name}</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="block">Built for every screen</span>
            <span className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {[
                { word: "Mobile", suffix: ",", rotate: -4, y: -6 },
                { word: "Tablet", suffix: "", rotate: 0, y: 2 },
                { word: "&", suffix: "", rotate: 0, y: 0, plain: true },
                { word: "Web", suffix: ".", rotate: 4, y: -6 },
              ].map(({ word, suffix, rotate, y, plain }) => (
                <motion.span
                  key={word}
                  whileHover={plain ? undefined : { y, rotate, scale: 1.1 }}
                  className={cn(
                    "inline-block cursor-default transition",
                    plain
                      ? "text-muted-foreground"
                      : "gradient-text hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.55)]",
                  )}
                >
                  {word}
                  {suffix}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I help startups and enterprises ship apps that don&apos;t break — clean code, smooth UX, and
            3+ years across React Native, Flutter, React.js &amp; Vue.js, backed by production-grade
            Firebase, payments, maps, ERP, and HRMS integrations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#contact">
                Let&apos;s Build Together
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#projects">See My Work</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="glass-panel rounded-2xl p-4"
              >
                <div className="gradient-text font-display text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
