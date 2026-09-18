"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { useLenis } from "@/hooks/use-lenis";

export function AppEffects() {
  const [progress, setProgress] = useState(0);

  useLenis();

  useEffect(() => {
    gsap.fromTo(
      ".reveal",
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7 },
    );

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] h-0.5 bg-gradient-to-r from-blue-600 via-sky-400 to-violet-400"
        style={{ width: `${progress}%` }}
      />
      <ScrollToTop />
    </>
  );
}
