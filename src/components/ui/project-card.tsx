import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { ProjectArtwork } from "./project-artwork";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const internal = Boolean(project.liveUrl && project.liveUrl.startsWith("/"));
  const isEven = index % 2 === 0;

  const inner = (
    <div className="group grid grid-cols-12 gap-x-6 items-start py-10 border-b border-border last:border-0 transition-colors">
      {/* Index numeral */}
      <div className="col-span-2 lg:col-span-1">
        <span className="numeral text-3xl lg:text-4xl">{pad(index + 1)}</span>
      </div>

      {/* Body */}
      <div className={`col-span-10 lg:col-span-5 ${isEven ? "" : "lg:order-last"}`}>
        {project.liveUrl && (
          <span className="section-mark mb-3 block">
            {internal ? "Interactive demo" : "Live site"}
          </span>
        )}
        <h3
          className="font-display text-3xl lg:text-4xl leading-[1] tracking-[-0.02em] font-300"
          style={{ fontVariationSettings: '"opsz" 96' }}
        >
          <span className="draw-line">{project.title}</span>
        </h3>
        <p
          className="mt-5 text-base lg:text-lg leading-relaxed text-foreground/80"
          style={{ fontFeatureSettings: '"ss01"' }}
        >
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[11px] tracking-[0.06em] text-ink-mute">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent transition-all group-hover:tracking-[0.2em]">
            {internal ? "Open demo" : "Visit"}
          </span>
          <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Artwork */}
      <div className={`col-span-12 lg:col-span-6 mt-6 lg:mt-0 ${isEven ? "" : "lg:col-start-2"}`}>
        <ProjectArtwork kind={project.id.replace("-demo", "")} />
      </div>
    </div>
  );

  if (!project.liveUrl) {
    return inner;
  }

  if (internal) {
    return <Link href={project.liveUrl}>{inner}</Link>;
  }

  return (
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}
