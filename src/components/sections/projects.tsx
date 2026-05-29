import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-28 lg:py-36 px-6 lg:px-8 bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Selected"
          italic="work"
          subtitle="Projects & demos"
        />

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 border-t border-border pt-6">
            <Link
              href="/demos"
              className="group inline-flex items-baseline gap-3 font-display text-2xl lg:text-3xl"
              style={{ fontVariationSettings: '"opsz" 60' }}
            >
              <span className="italic draw-line">See all live demos</span>
              <ArrowUpRight className="h-5 w-5 self-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
