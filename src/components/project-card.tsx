import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/project-visual";
import { formatMonthYear } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <article className="surface overflow-hidden rounded-sm transition-colors group-hover:border-foreground/35">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(260px,42%)]">
        <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {project.comingSoon ? "In development" : "Selected project"}
            </span>
            {project.date && (
              <time
                dateTime={project.date}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {formatMonthYear(project.date)}
              </time>
            )}
          </div>

          <h3 className="mt-7 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {!project.comingSoon && (
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground md:mt-auto md:pt-8">
              View project details
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          )}
        </div>

        <ProjectVisual
          project={project}
          className="border-x-0 border-b-0 md:h-full md:border-y-0 md:border-r-0 md:border-l"
        />
      </div>

      {project.tech.length > 0 && (
        <div className="border-t border-border px-6 py-5 sm:px-8 lg:px-10">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Technologies &amp; skills
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <Badge key={technology} variant="outline">
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </article>
  );

  if (project.comingSoon) {
    return content;
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group block rounded-sm"
      aria-label={`View details for ${project.title}`}
    >
      {content}
    </Link>
  );
}
