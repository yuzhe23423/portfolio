"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] px-6 lg:px-8 pt-12 pb-20 overflow-hidden"
    >
      {/* Metadata strip — top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-7xl grid grid-cols-12 gap-x-6 pb-12 border-b border-border"
      >
        <div className="col-span-6 lg:col-span-2 section-mark">
          № 01 · {today}
        </div>
        <div className="hidden lg:block lg:col-span-3 section-mark">
          {personalInfo.location}, MY ↗ Worldwide
        </div>
        <div className="hidden lg:block lg:col-span-4 section-mark">
          Portfolio — Volume I
        </div>
        <div className="col-span-6 lg:col-span-3 text-right section-mark">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              <span className="relative rounded-full bg-emerald-500 h-1.5 w-1.5" />
            </span>
            Available — Q3 2026
          </span>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl mt-16 lg:mt-24 grid grid-cols-12 gap-x-6">
        {/* Left numeral column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="hidden lg:block col-span-1"
        >
          <span className="numeral text-[7rem] leading-none block">
            01
          </span>
          <span className="section-mark block mt-4 [writing-mode:vertical-rl] rotate-180">
            The Author
          </span>
        </motion.div>

        {/* Main typographic body */}
        <div className="col-span-12 lg:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="section-mark mb-6"
          >
            A portfolio of work — by
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
            className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.86] tracking-[-0.04em] font-300"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
              }}
              className="block"
            >
              {personalInfo.name.split(" ")[0]}
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
              }}
              className="block"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              <span className="italic">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
              <span className="text-accent">.</span>
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-12 lg:mt-16 grid grid-cols-12 gap-x-6"
          >
            <div className="col-span-12 lg:col-span-7 lg:col-start-1">
              <p className="font-display text-2xl lg:text-3xl leading-snug text-foreground" style={{ fontVariationSettings: '"opsz" 36' }}>
                <span
                  className="float-left mr-3 mt-1 font-display text-[5rem] leading-[0.85] text-accent"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144', fontStyle: "italic" }}
                >
                  {personalInfo.tagline.charAt(0)}
                </span>
                {personalInfo.tagline.slice(1)}
              </p>
            </div>
            <div className="hidden lg:flex col-span-4 col-start-9 flex-col gap-2 pt-2 border-t-2 border-foreground">
              <span className="section-mark">Discipline</span>
              <span className="font-display text-lg leading-tight">
                {personalInfo.title}
              </span>
            </div>
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="mt-14 lg:mt-20 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 hover:bg-accent transition-colors duration-300"
            >
              <span className="font-mono text-xs tracking-[0.18em] uppercase">
                View the work
              </span>
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground draw-line"
            >
              <FileText className="h-4 w-4" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase">
                Read the résumé
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          </motion.div>
        </div>

        {/* Right meta column */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease }}
          className="hidden lg:flex col-span-2 col-start-11 flex-col gap-8 pt-3"
        >
          <Folio label="Set" value="I — VI" />
          <Folio label="Year" value="MMXXVI" />
          <Folio label="Edition" value="01" />
        </motion.aside>
      </div>

      {/* Bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-24 lg:mt-32 border-y border-border overflow-hidden py-4"
      >
        <div className="marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display italic text-2xl lg:text-3xl pr-12 whitespace-nowrap text-ink-fade"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              {personalInfo.title} <span className="text-accent">✦</span>{" "}
              Available for new work <span className="text-accent">✦</span>{" "}
              Based in {personalInfo.location} <span className="text-accent">✦</span>
              <span className="font-mono not-italic text-base ml-3 align-middle">
                — № 01 —
              </span>{" "}
              <span className="text-accent">✦</span>{" "}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Folio({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="section-mark mb-1">{label}</p>
      <p className="font-mono text-base">{value}</p>
    </div>
  );
}
