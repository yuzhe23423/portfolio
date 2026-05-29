import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCategoryCard } from "@/components/ui/skill-category";

export function Skills() {
  return (
    <section id="skills" className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Studio,"
          italic="tooling"
          subtitle="The instruments of the practice"
          index="III"
        />

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10">
            {skills.map((category, i) => (
              <SkillCategoryCard
                key={category.name}
                category={category}
                index={i}
              />
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
