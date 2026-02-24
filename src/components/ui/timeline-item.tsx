import { Briefcase, GraduationCap } from "lucide-react";
import { TimelineEntry } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const Icon = entry.type === "work" ? Briefcase : GraduationCap;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative pl-12 pb-12 last:pb-0">
        {/* Vertical line */}
        <div className="absolute left-[17px] top-10 bottom-0 w-px bg-border" />
        {/* Icon marker */}
        <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center border border-border bg-card">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <div className="border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-700 text-card-foreground">
                {entry.title}
              </h3>
              <p className="mt-1 text-accent font-600">
                {entry.organization}
                <span className="text-muted-foreground font-400">
                  {" "}&middot; {entry.location}
                </span>
              </p>
            </div>
            <span className="text-sm font-600 text-muted-foreground border border-border px-3 py-1 uppercase tracking-wider whitespace-nowrap">
              {entry.startDate} — {entry.endDate}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {entry.description.map((desc, i) => (
              <li
                key={i}
                className="text-base text-muted-foreground leading-relaxed flex gap-3"
              >
                <span className="text-accent mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-accent" />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
