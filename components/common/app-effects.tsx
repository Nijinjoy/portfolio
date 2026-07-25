"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { useLenis } from "@/hooks/use-lenis";

export function AppEffects() {
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useLenis();

  useEffect(() => {
    gsap.fromTo(".reveal", { y: 28, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.7 });

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    const onMove = (event: PointerEvent) => setPointer({ x: event.clientX, y: event.clientY });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-violet-400"
        style={{ width: `${progress}%` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[5] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/12 blur-3xl lg:block"
        style={{ left: pointer.x, top: pointer.y }}
      />
      <ScrollToTop />
    </>
  );
}
