import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-premium grid gap-8 md:grid-cols-[1fr_1.4fr_0.8fr]">
        <div>
          <a href="#home" className="font-display text-xl font-bold gradient-text">Nijin Joy</a>
          <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
            Senior Mobile Application Developer building React Native, Flutter, and React.js products.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
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
            <a
              key={String(label)}
              href={String(href)}
              aria-label={String(label)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-muted-foreground transition hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="container-premium mt-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
