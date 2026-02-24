import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCategoryCard } from "@/components/ui/skill-category";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" subtitle="Technologies" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, i) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
