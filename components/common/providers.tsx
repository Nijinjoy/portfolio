"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { AppEffects } from "@/components/common/app-effects";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
      <AppEffects />
    </ThemeProvider>
  );
}
