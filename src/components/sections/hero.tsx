"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center px-6 lg:px-8 py-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-mark mb-8 inline-flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
            <span className="relative rounded-full bg-emerald-500 h-1.5 w-1.5" />
          </span>
          Available for work
        </motion.p>

        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.86] tracking-[-0.04em] font-300">
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="block"
            >
              {personalInfo.name.split(" ")[0]}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="block"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              <span className="italic">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
              <span className="text-accent">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-12 gap-x-6 gap-y-6"
        >
          <p
            className="col-span-12 lg:col-span-6 font-display text-2xl lg:text-3xl leading-snug text-foreground"
            style={{ fontVariationSettings: '"opsz" 36' }}
          >
            {personalInfo.tagline}
          </p>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <p className="section-mark mb-1">Role</p>
            <p className="font-display text-lg leading-tight">{personalInfo.title}</p>
            <p className="section-mark mb-1 mt-5">Based in</p>
            <p className="font-display text-lg leading-tight">{personalInfo.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 hover:bg-accent transition-colors duration-300"
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase">View my work</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-foreground draw-line"
          >
            <FileText className="h-4 w-4" />
            <span className="font-mono text-xs tracking-[0.18em] uppercase">Résumé</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
