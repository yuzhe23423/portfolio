import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import { Project } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface LiveLinkProps {
  url: string;
  internal: boolean;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

function LiveLink({ url, internal, className, ariaLabel, children }: LiveLinkProps) {
  if (internal) {
    return (
      <Link href={url} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const internal = Boolean(project.liveUrl && project.liveUrl.startsWith("/"));

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
              <LiveLink
                url={project.liveUrl}
                internal={internal}
                className="shrink-0 p-1 text-muted-foreground hover:text-accent transition-colors"
                ariaLabel={`${project.title} live demo`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </LiveLink>
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
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
              {project.liveUrl && (
                <LiveLink
                  url={project.liveUrl}
                  internal={internal}
                  className="inline-flex items-center gap-2 text-sm font-600 text-accent hover:opacity-80 transition-colors"
                  ariaLabel={`${project.title} live demo`}
                >
                  <PlayCircle className="h-4 w-4" />
                  {internal ? "Try the demo" : "Live site"}
                </LiveLink>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-600 text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`${project.title} source code`}
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
