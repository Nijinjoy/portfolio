"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-premium grid gap-6 md:grid-cols-[1fr_1.4fr_0.8fr] md:items-center">
        <div>
          <a href="#home" className="font-display text-lg font-bold gradient-text">
            Nijin Joy
          </a>
          <p className="mt-2 max-w-sm text-xs leading-6 text-muted-foreground">
            {siteConfig.role} building React Native, Flutter, React.js &amp; Vue.js products.
          </p>
          <a
            href="#contact"
            className="group mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-300 transition hover:text-sky-200"
          >
            Let&apos;s build something great
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative w-fit text-xs font-medium text-muted-foreground transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2 md:justify-end">
          {[
            [Github, siteConfig.github, "GitHub"],
            [Linkedin, siteConfig.linkedin, "LinkedIn"],
            [Mail, `mailto:${siteConfig.email}`, "Email"],
          ].map(([Icon, href, label]) => (
            <motion.a
              key={String(label)}
              href={String(href)}
              aria-label={String(label)}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/6 text-muted-foreground transition-colors hover:border-primary/50 hover:text-sky-300 hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]"
            >
              <Icon className="h-3.5 w-3.5" />
            </motion.a>
          ))}
        </div>
      </div>
      <div className="container-premium mt-5 flex flex-col items-center gap-1 border-t border-white/10 pt-4 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-muted-foreground/70">Designed &amp; built with care.</p>
      </div>
    </footer>
  );
}
