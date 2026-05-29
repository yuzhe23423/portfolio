import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  italic?: string;
}

export function SectionHeading({ title, subtitle, italic }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-16">
      <div className="border-t border-border pt-6">
        {subtitle && (
          <p className="section-mark mb-4 block">{subtitle}</p>
        )}
        <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
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
    </ScrollReveal>
  );
}
