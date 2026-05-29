"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/ui/social-links";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-x-6 border-t border-border pt-6">
          <div className="col-span-2 lg:col-span-1">
            <span className="section-mark">§ V</span>
          </div>
          <div className="col-span-10 lg:col-span-11">
            <ScrollReveal>
              <p className="section-mark mb-4">Closing — correspondence</p>
              <h2 className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.035em] font-300">
                Let us
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
                >
                  correspond
                </span>
                <span className="text-accent">.</span>
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid grid-cols-12 gap-x-6">
              <ScrollReveal delay={0.15} className="col-span-12 lg:col-span-7">
                <p
                  className="font-display text-2xl lg:text-3xl leading-snug"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  Open to new commissions, full-time roles, and conversations.
                  Write a line; the inbox is quiet, the reply will not be.
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
                <p className="section-mark mb-4">Or, find me elsewhere</p>
                <SocialLinks links={personalInfo.socialLinks} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
