import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: "Selected full-stack, AI, and simulation projects by Tai Le.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Selected projects and work in progress."
        description="A closer look at my work in full-stack development, applied AI, and interactive simulation. Select a completed project to read the full story."
        aside={
          <div className="surface min-w-36 rounded-sm p-5 text-center">
            <p className="text-3xl font-bold tracking-[-0.04em]">{String(projects.length).padStart(2, "0")}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Projects
            </p>
          </div>
        }
      />

      <section className="site-container section-space" aria-labelledby="project-grid-heading">
        <h2 id="project-grid-heading" className="sr-only">Selected projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
