"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 bg-foreground text-background px-4 py-3 transition-all duration-500 hover:bg-accent ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-3.5 w-3.5" />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
        Top
      </span>
    </button>
  );
}
