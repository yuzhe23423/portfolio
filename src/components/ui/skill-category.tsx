import { Monitor, Server, Database, Wrench } from "lucide-react";
import { SkillCategory as SkillCategoryType } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Database,
  Wrench,
};

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export function SkillCategoryCard({ category, index }: SkillCategoryProps) {
  const Icon = iconMap[category.icon];

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group border border-border bg-card p-7 h-full transition-all duration-300 hover:border-accent/40">
        <div className="flex items-center gap-3 mb-5">
          {Icon && (
            <div className="flex h-10 w-10 items-center justify-center bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <h3 className="font-display text-lg font-700 text-card-foreground">
            {category.name}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors group-hover:border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
