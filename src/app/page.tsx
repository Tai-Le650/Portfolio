import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroupCard } from "@/components/skill-group";
import { ProjectCard } from "@/components/project-card";
import { ExperienceItem } from "@/components/experience-item";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="experience"
        className="site-container section-space"
        aria-labelledby="home-experience-heading"
      >
        <SectionHeading
          title="Experience"
          titleId="home-experience-heading"
        />
        <div className="surface rounded-sm p-6 sm:p-8 lg:p-10">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.role}`} item={item} />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-border bg-card/40"
        aria-labelledby="home-projects-heading"
      >
        <div className="site-container section-space">
          <SectionHeading
            title="Projects"
            titleId="home-projects-heading"
          />
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="site-container section-space"
        aria-labelledby="home-skills-heading"
      >
        <SectionHeading
          title="Skills & capabilities"
          titleId="home-skills-heading"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group, index) => (
            <SkillGroupCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
