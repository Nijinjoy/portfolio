"use client";

import { useState } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems, siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <nav className="container-premium flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="focus-ring rounded-full font-display text-lg font-bold tracking-wide">
          <span className="gradient-text">NIJIN JOY</span>
          <span className="sr-only">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-white/8 hover:text-foreground focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
          <Button asChild>
            <a href={siteConfig.resumeUrl} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            aria-label="Open mobile menu"
            variant="secondary"
            size="icon"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "container-premium grid overflow-hidden transition-all lg:hidden",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="glass-panel grid gap-1 rounded-2xl p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/8 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
