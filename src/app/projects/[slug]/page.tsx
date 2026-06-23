import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [project.image] },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <article className="container mx-auto max-w-3xl py-16 md:py-20">
      <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
        <Link href="/projects">
          <ArrowLeft className="size-4" /> All projects
        </Link>
      </Button>

      <header className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {project.date}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="font-mono text-xs">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.github && (
            <Button asChild variant="outline" size="sm">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="size-4" /> Source
              </a>
            </Button>
          )}
          {project.demo && (
            <Button asChild size="sm">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ArrowUpRight className="size-4" /> Live demo
              </a>
            </Button>
          )}
        </div>
      </header>

      <div className="relative my-12 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      {project.longDescription && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
          <p className="leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </section>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Highlights</h2>
          <ul className="space-y-2 text-muted-foreground">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 space-y-6 rounded-xl border border-border bg-card p-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
          {/* {{REPLACE: case-study structure — feel free to add/remove sections}} */}
          Case study
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h3 className="text-base font-semibold text-foreground">Problem</h3>
            <p>{`{{What problem were you solving? Why did it matter?}}`}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Approach</h3>
            <p>{`{{How did you architect the solution? Key decisions and trade-offs?}}`}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Outcome</h3>
            <p>{`{{What was the result? Metrics, lessons learned, what would you do differently?}}`}</p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <nav
        aria-label="Project pagination"
        className="grid gap-4 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft className="size-3" /> Previous
            </span>
            <span className="font-medium tracking-tight group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-1 rounded-xl border border-border bg-card p-5 text-right transition-colors hover:border-foreground/20"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              Next <ArrowRight className="size-3" />
            </span>
            <span className="font-medium tracking-tight group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
