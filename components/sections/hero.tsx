"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { stats, typingRoles } from "@/data/portfolio";
import { useTyping } from "@/hooks/use-typing";

export function HeroSection() {
  const typed = useTyping(typingRoles);

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-x-0 top-20 -z-10 h-[34rem] bg-[linear-gradient(115deg,rgba(37,99,235,0.20),rgba(14,165,233,0.08),rgba(124,58,237,0.16),transparent)] blur-3xl" />
      <div className="container-premium grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-sky-200 backdrop-blur">
            <Rocket className="h-4 w-4" />
            Available for mobile app roles and projects
          </div>
          <p className="mb-4 text-lg font-semibold text-sky-300">Hi, I&apos;m {siteConfig.name}</p>
          <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Mobile Application Developer
          </h1>
          <p className="mt-5 min-h-8 text-xl font-semibold text-muted-foreground sm:text-2xl">
            <span className="gradient-text">{typed}</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I am a Mobile Application Developer with 3+ years of professional experience specializing
            in React Native, React.js, and Flutter. I build scalable, high-performance cross-platform
            mobile applications with clean architecture, reusable components, optimized performance,
            Firebase, APIs, authentication, payments, maps, ERP, and HRMS solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#contact">
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#projects">View Projects</a>
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

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="reveal relative"
        >
          <div className="glass-panel relative mx-auto aspect-[4/5] max-w-[440px] overflow-hidden rounded-[2rem] p-4">
            <Image
              src="/images/mobile-showcase.svg"
              alt="Premium mobile app interface showcase by Nijin Joy"
              width={720}
              height={900}
              priority
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/12 bg-slate-950/70 p-4 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">Mobile apps engineered by Nijin Joy.</p>
              <p className="mt-1 text-xs text-slate-300">React Native • Flutter • React.js • Firebase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
