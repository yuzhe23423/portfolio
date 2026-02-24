import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-surface">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Experience" subtitle="Career" />
        <div>
          {experience.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
