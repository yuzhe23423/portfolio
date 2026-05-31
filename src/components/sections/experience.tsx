import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";

export function Experience() {
  return (
    <section id="experience" className="py-28 lg:py-36 px-6 lg:px-8 bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Work &"
          italic="education"
          subtitle="Where I've been"
        />

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 border-t border-border">
            {experience.map((entry, i) => (
              <TimelineItem
                key={entry.id}
                entry={entry}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
