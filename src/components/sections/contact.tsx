"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/ui/social-links";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-border pt-6">
          <ScrollReveal>
            <p className="section-mark mb-4">Get in touch</p>
            <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.035em] font-300">
              Let&apos;s work
              <br />
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                together
              </span>
              <span className="text-accent">.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-12 gap-x-6">
            <ScrollReveal delay={0.15} className="col-span-12 lg:col-span-7">
              <p
                className="font-display text-2xl lg:text-3xl leading-snug"
                style={{ fontVariationSettings: '"opsz" 60' }}
              >
                I&apos;m open to new opportunities, collaborations, and
                conversations. Drop me a line.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group mt-8 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 hover:bg-accent transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase">
                  {personalInfo.email}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
              <p className="section-mark mb-4">Elsewhere</p>
              <SocialLinks links={personalInfo.socialLinks} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
