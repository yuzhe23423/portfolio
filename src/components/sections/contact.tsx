import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/ui/social-links";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Let's work" italic="together" subtitle="Get in touch" />

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-7">
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
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
            <p className="section-mark mb-4">Elsewhere</p>
            <SocialLinks links={personalInfo.socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
