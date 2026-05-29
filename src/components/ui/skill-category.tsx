import { SkillCategory as SkillCategoryType } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

const numerals = ["I", "II", "III", "IV", "V", "VI"];

export function SkillCategoryCard({ category, index }: SkillCategoryProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group grid grid-cols-12 gap-x-6 py-8 border-t border-border">
        <div className="col-span-2 lg:col-span-1">
          <span className="numeral text-3xl">{numerals[index]}</span>
        </div>
        <div className="col-span-10 lg:col-span-3">
          <p className="section-mark mb-2">Discipline</p>
          <h3
            className="font-display text-2xl lg:text-3xl leading-tight tracking-[-0.02em] font-300"
            style={{ fontVariationSettings: '"opsz" 60' }}
          >
            <span className="italic">{category.name}</span>
          </h3>
        </div>
        <div className="col-span-12 lg:col-span-8 mt-4 lg:mt-0">
          <p className="section-mark mb-3">Instruments</p>
          <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            {category.skills.map((skill, i) => (
              <li
                key={skill}
                className="flex items-baseline gap-2 text-foreground"
              >
                <span className="font-mono text-[10px] text-ink-fade">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
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
