import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-16">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px flex-1 max-w-12 bg-accent" />
        {subtitle && (
          <span className="text-accent text-sm font-600 uppercase tracking-widest">
            {subtitle}
          </span>
        )}
      </div>
      <h2 className="font-display text-4xl font-800 tracking-tight sm:text-5xl lg:text-6xl">
        {title}<span className="text-accent">.</span>
      </h2>
    </ScrollReveal>
  );
}
