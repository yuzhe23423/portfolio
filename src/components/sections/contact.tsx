"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/ui/social-links";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-3xl relative">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-12 bg-accent" />
            <span className="text-accent text-sm font-600 uppercase tracking-widest">
              Get in touch
            </span>
          </div>
          <h2 className="font-display text-4xl font-800 tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s work<br />
            together<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, and
            conversations. Drop me a line.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-base font-600 hover:bg-accent hover:text-primary-foreground transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              Say Hello
              <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p className="mt-6 text-muted-foreground font-500">
            {personalInfo.email}
          </p>
          <div className="mt-8">
            <SocialLinks links={personalInfo.socialLinks} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
