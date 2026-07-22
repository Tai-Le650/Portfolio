import type { Metadata } from "next";
import { EducationItem } from "@/components/education-item";
import { PortraitPlaceholder } from "@/components/hero";
import { PageIntro } from "@/components/page-intro";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `About ${profile.name}, a full-stack developer focused on AI and interactive systems.`,
  path: "/about",
});

export default function AboutPage() {
  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Curious about the whole system."
        description="I like understanding how each layer fits together, then turning that understanding into software that feels clear and useful."
      />

      <section
        className="site-container pb-20 sm:pb-24"
        aria-labelledby="about-story-heading"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <PortraitPlaceholder className="mx-auto max-w-sm lg:mx-0" />

          <div>
            <p className="eyebrow">My story</p>
            <h2
              id="about-story-heading"
              className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl"
            >
              I build by connecting ideas across disciplines.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-border bg-card/40"
        aria-labelledby="education-heading"
      >
        <div className="site-container section-space">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-14">
            <div>
              <p className="eyebrow">Education</p>
              <h2
                id="education-heading"
                className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl"
              >
                Computer Science and Engineering.
              </h2>
            </div>
            <div className="surface rounded-sm p-6 sm:p-8">
              {education.map((item) => (
                <EducationItem key={`${item.school}-${item.degree}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
