import { TimelineEntry } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <article
        className={`grid grid-cols-12 gap-x-6 py-10 ${
          isLast ? "" : "border-b border-border"
        }`}
      >
        {/* Date column */}
        <div className="col-span-12 lg:col-span-3">
          <p className="section-mark mb-2">
            {entry.type === "work" ? "Work" : "Education"}
          </p>
          <p className="font-mono text-sm text-ink-mute">
            {entry.startDate} — {entry.endDate}
          </p>
        </div>

        {/* Body */}
        <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
          <h3
            className="font-display text-3xl lg:text-4xl leading-[1.05] tracking-[-0.02em] font-300"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {entry.title}
          </h3>
          <p className="mt-2 flex flex-wrap items-baseline gap-x-3">
            <span
              className="font-display italic text-xl text-accent"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 36' }}
            >
              {entry.organization}
            </span>
            <span className="text-sm text-ink-mute">{entry.location}</span>
          </p>

          <ul className="mt-6 space-y-3 max-w-2xl">
            {entry.description.map((desc, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 text-base lg:text-lg leading-relaxed"
              >
                <span className="text-accent shrink-0">—</span>
                <span style={{ fontFeatureSettings: '"ss01"' }}>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ScrollReveal>
  );
}
