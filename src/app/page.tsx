import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroupCard } from "@/components/skill-group";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <Separator />

      <section className="container mx-auto max-w-5xl py-16 md:py-20">
        <SectionHeading
          eyebrow="01 — Skills"
          title="Things I work with"
          description="A snapshot of the languages, frameworks, and tools I use most often."
        />
        <div className="grid gap-10 sm:grid-cols-2">
          {skills.map((group) => (
            <SkillGroupCard key={group.category} group={group} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="container mx-auto max-w-5xl py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="02 — Featured Projects"
            title="Selected work"
            description="A few things I'm proud of. See more on the projects page."
            className="mb-0"
          />
          <Button asChild variant="ghost">
            <Link href="/projects">
              All projects <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="container mx-auto max-w-5xl py-16 md:py-20">
        <div className="rounded-2xl border border-border bg-card p-10 sm:p-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Let's build something.
              </h2>
              <p className="text-muted-foreground">
                Open to new-grad SWE roles, internships, and interesting
                side-projects. I respond to most emails within 24 hours.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
