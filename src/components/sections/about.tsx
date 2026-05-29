import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="On the" italic="author" subtitle="A brief introduction" index="I" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-start">
          {/* Portrait — sits in a 5/12 column with offset rule */}
          <ScrollReveal className="col-span-12 md:col-span-5 lg:col-start-2 lg:col-span-4">
            <figure className="relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/profile-placeholder.svg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 section-mark bg-background/85 px-2 py-1">
                  Plate 01
                </span>
              </div>
              <figcaption className="mt-4 grid grid-cols-2 gap-x-4 border-t border-border pt-3">
                <span className="section-mark">Fig. 1 — Portrait</span>
                <span className="section-mark text-right">{personalInfo.location}</span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal delay={0.15} className="col-span-12 md:col-span-7 lg:col-span-6">
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg lg:text-xl leading-[1.7] text-foreground"
                  style={{ fontFeatureSettings: '"ss01"' }}
                >
                  {i === 0 && (
                    <span
                      className="float-left mr-3 mt-2 font-display text-[4.5rem] leading-[0.85] text-foreground"
                      style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
                    >
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? paragraph.slice(1) : paragraph}
                </p>
              ))}

              <div className="pt-6 mt-8 border-t border-border grid grid-cols-2 gap-6">
                <Detail label="Based in" value={personalInfo.location} />
                <Detail label="Available" value="Q3 2026" />
                <Detail label="Speaks" value="EN · ZH · BM" />
                <Detail label="Tools" value="Type, ink, code" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="section-mark mb-1">{label}</p>
      <p className="font-display text-lg" style={{ fontVariationSettings: '"opsz" 36' }}>
        {value}
      </p>
    </div>
  );
}
