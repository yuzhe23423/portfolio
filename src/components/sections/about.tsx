import Image from "next/image";
import { MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About" italic="me" subtitle="Who I am" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-start">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="/images/profile-placeholder.svg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg lg:text-xl leading-[1.7] text-foreground"
                  style={{ fontFeatureSettings: '"ss01"' }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex items-center gap-2 pt-4 text-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-display text-lg" style={{ fontVariationSettings: '"opsz" 24' }}>
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
