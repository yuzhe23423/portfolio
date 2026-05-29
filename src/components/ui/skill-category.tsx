import { SkillCategory as SkillCategoryType } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export function SkillCategoryCard({ category, index }: SkillCategoryProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group grid grid-cols-12 gap-x-6 py-8 border-t border-border">
        <div className="col-span-12 lg:col-span-4">
          <h3
            className="font-display text-2xl lg:text-3xl leading-tight tracking-[-0.02em] font-300"
            style={{ fontVariationSettings: '"opsz" 60' }}
          >
            <span className="italic">{category.name}</span>
          </h3>
        </div>
        <div className="col-span-12 lg:col-span-8 mt-4 lg:mt-0">
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {category.skills.map((skill) => (
              <li key={skill}>
                <span
                  className="font-display text-xl lg:text-2xl draw-line"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
