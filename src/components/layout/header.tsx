"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { mark: "I", label: "About", href: "/#about" },
  { mark: "II", label: "Work", href: "/#projects" },
  { mark: "III", label: "Studio", href: "/#skills" },
  { mark: "IV", label: "History", href: "/#experience" },
  { mark: "V", label: "Write", href: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-6 px-6 py-4 lg:px-8">
        {/* Wordmark */}
        <Link href="/#hero" className="col-span-6 lg:col-span-3 select-none group">
          <span className="block section-mark">№ 01 — Folio</span>
          <span
            className="font-display text-2xl leading-none tracking-[-0.02em] mt-0.5 block"
            style={{ fontVariationSettings: '"opsz" 60' }}
          >
            Ong Yu Zhe
            <span className="italic text-accent">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex col-span-6 lg:col-span-7 items-center justify-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5"
            >
              <span className="font-mono text-[10px] text-ink-fade group-hover:text-accent transition-colors">
                {link.mark}
              </span>
              <span
                className="font-display text-base draw-line"
                style={{ fontVariationSettings: '"opsz" 24' }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="hidden lg:flex col-span-2 items-center justify-end gap-3">
          <span className="section-mark">EN ↔ MY</span>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden col-span-6 flex items-center justify-end gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl"
          >
            <ul className="px-6 py-6 divide-y divide-border">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-ink-fade">{link.mark}</span>
                      <span
                        className="font-display text-3xl"
                        style={{ fontVariationSettings: '"opsz" 60' }}
                      >
                        {link.label}
                      </span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
