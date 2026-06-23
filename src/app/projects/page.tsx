"use client";

import * as React from "react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const allTags = React.useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const [active, setActive] = React.useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.tech.includes(active))
    : projects;

  return (
    <section className="container mx-auto max-w-5xl py-16 md:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of school work, internship projects, and side experiments."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={cn(
            "rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            active === null
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={active === null}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={cn(
              "rounded-md border px-3 py-1.5 font-mono text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              active === tag
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
            aria-pressed={active === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No projects match this filter.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-2">
        <Badge variant="outline" className="font-mono text-xs">
          {projects.length} projects · {allTags.length} technologies
        </Badge>
      </div>
    </section>
  );
}
