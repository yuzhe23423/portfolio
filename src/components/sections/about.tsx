import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Who I am" />
        <div className="grid gap-16 md:grid-cols-5 items-start">
          <ScrollReveal className="md:col-span-2">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src="/images/profile-placeholder.svg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={false}
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent -z-10" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="md:col-span-3">
            <div className="space-y-5">
              {personalInfo.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex items-center gap-2 pt-4 text-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-600">{personalInfo.location}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
