import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Github,
  Layers3,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/page-metadata";
import { formatMonthYear } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

const detailProjects = projects.filter((project) => !project.comingSoon);

const projectContext = {
  ecobuilder: {
    status: "Completed May 2026",
    role: "Simulation & full-stack engineer",
    kicker: "Interactive simulation",
    facts: [
      { value: "7 animals", label: "Simulated species" },
      { value: "5 plants", label: "Ecosystem variety" },
      { value: "Voice AI", label: "Interaction model" },
    ],
  },
  "llnl-capstone": {
    status: "Completed June 2026",
    role: "Full-stack developer & research collaborator",
    kicker: "Research collaboration",
    facts: [
      { value: "AI + games", label: "Learning format" },
      { value: "High school + college", label: "Audience" },
      { value: "Research-led", label: "Approach" },
    ],
  },
};

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = detailProjects.find((item) => item.slug === slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const index = detailProjects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();

  const project = detailProjects[index];
  const context =
    projectContext[project.slug as keyof typeof projectContext] ??
    {
      status: "Completed project",
      role: "Contributor",
      kicker: "Selected work",
      facts: [],
    };
  const previous = detailProjects[index - 1];
  const next = detailProjects[index + 1];

  return (
    <article>
      <header className="site-container pb-12 pt-10 sm:pb-16 sm:pt-14">
        <Button asChild variant="ghost" size="sm" className="-ml-3 rounded-sm">
          <Link href="/projects">
            <ArrowLeft className="size-4" aria-hidden="true" /> All projects
          </Link>
        </Button>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-14">
          <div className="animate-enter">
            <p className="eyebrow">{context.kicker}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <dl className="surface animate-enter-delayed grid grid-cols-2 overflow-hidden rounded-sm">
            <div className="border-b border-r border-border p-5">
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                <CalendarDays className="size-3.5" aria-hidden="true" /> Date
              </dt>
              <dd className="mt-2 text-sm font-bold">
                {project.date ? formatMonthYear(project.date) : "Not announced"}
              </dd>
            </div>
            <div className="border-b border-border p-5">
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                <Layers3 className="size-3.5" aria-hidden="true" /> Status
              </dt>
              <dd className="mt-2 text-sm font-bold">{context.status}</dd>
            </div>
            <div className="col-span-2 p-5">
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                <UserRound className="size-3.5" aria-hidden="true" /> My role
              </dt>
              <dd className="mt-2 text-sm font-bold">{context.role}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="site-container">
        <ProjectVisual project={project} large className="rounded-sm" />
      </div>

      <section className="site-container section-space" aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Overview</p>
            <h2 id="overview-heading" className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              The project, in context.
            </h2>
            {project.longDescription && (
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {project.longDescription}
              </p>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-[-0.025em]">What I worked on</h2>
                <div className="mt-5 grid gap-3">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlight} className="surface flex gap-4 rounded-sm p-5 sm:p-6">
                      <span className="grid size-8 shrink-0 place-items-center border border-border bg-muted font-mono text-xs font-bold text-foreground">
                        {String(highlightIndex + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm leading-6 text-muted-foreground sm:text-base">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="surface rounded-sm p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Project snapshot
              </p>
              <dl className="mt-5 space-y-5">
                {context.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                    <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                    <dd className="mt-1 text-base font-bold tracking-tight">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="surface rounded-sm p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Technology
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <Badge key={technology} variant="outline">
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>

            {(project.github || project.demo) && (
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <Button asChild variant="outline" className="rounded-sm">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="size-4" aria-hidden="true" /> Source
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild className="rounded-sm">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </aside>
        </div>
      </section>

      <nav aria-label="Project pagination" className="site-container grid gap-4 pb-12 sm:grid-cols-2 sm:pb-16">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="focus-ring surface group flex min-h-28 flex-col justify-center rounded-sm p-5 transition-colors hover:border-foreground/35"
          >
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              <ArrowLeft className="size-3.5" aria-hidden="true" /> Previous
            </span>
            <span className="mt-2 font-bold tracking-tight group-hover:underline">{previous.title}</span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="focus-ring surface group flex min-h-28 flex-col items-end justify-center rounded-sm p-5 text-right transition-colors hover:border-foreground/35"
          >
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              Next <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
            <span className="mt-2 font-bold tracking-tight group-hover:underline">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
