"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { personalInfo } from "@/data/personal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-5rem)] items-center px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block text-accent font-display font-600 text-lg tracking-wide">
            Hello, I&apos;m
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-800 tracking-tight text-foreground leading-[0.95]"
        >
          <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">
            {personalInfo.name.split(" ")[0]}
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mt-1">
            {personalInfo.name.split(" ").slice(1).join(" ")}
            <span className="text-accent">.</span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-xl sm:text-2xl font-display font-600 text-muted-foreground max-w-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-base font-600 hover:bg-accent hover:text-primary-foreground transition-colors duration-200"
          >
            View My Work
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-2 border-foreground px-7 py-4 text-base font-600 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
