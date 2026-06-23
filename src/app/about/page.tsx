import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceItem } from "@/components/experience-item";
import { EducationItem } from "@/components/education-item";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "About",
  description: profile.bio,
};

export default function AboutPage() {
  return (
    <>
      <section className="container mx-auto max-w-5xl py-16 md:py-20">
        <SectionHeading eyebrow="About" title={`A bit about ${profile.name === "{{YOUR NAME}}" ? "me" : profile.name}`} />
        <div className="grid gap-12 md:grid-cols-[1fr_220px]">
          <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{profile.bio}</p>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl border border-border bg-muted">
              {/* {{REPLACE: drop a square headshot at /public/headshot.jpg and switch to next/image}} */}
              <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted-foreground">
                headshot.jpg
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="container mx-auto max-w-5xl py-16 md:py-20">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="space-y-10">
          {experience.map((item, i) => (
            <ExperienceItem key={i} item={item} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="container mx-auto max-w-5xl py-16 md:py-20">
        <SectionHeading eyebrow="Education" title="Where I studied" />
        <div className="space-y-10">
          {education.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
