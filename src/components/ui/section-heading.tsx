import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index: string;
  italic?: string;
}

export function SectionHeading({ title, subtitle, index, italic }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-20">
      <div className="grid grid-cols-12 items-baseline gap-x-6 border-t border-border pt-6">
        <div className="col-span-2 lg:col-span-1">
          <span className="section-mark">§ {index}</span>
        </div>
        <div className="col-span-10 lg:col-span-11">
          {subtitle && (
            <p className="section-mark mb-4 block">{subtitle}</p>
          )}
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.025em] font-300">
            {title}
            {italic && (
              <>
                {" "}
                <span
                  className="italic font-300"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
                >
                  {italic}
                </span>
              </>
            )}
            <span className="text-accent">.</span>
          </h2>
        </div>
      </div>
    </ScrollReveal>
  );
}
