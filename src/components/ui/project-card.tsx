import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_0_1px_var(--accent)]">
        <div className="relative h-52 overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-700 text-card-foreground">
              {project.title}
            </h3>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-1 text-muted-foreground hover:text-accent transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
          <p className="mt-3 flex-1 text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2.5 py-1 text-xs font-600 uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.githubUrl && (
            <div className="mt-5 pt-4 border-t border-border">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-600 text-muted-foreground hover:text-accent transition-colors"
                aria-label={`${project.title} source code`}
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
