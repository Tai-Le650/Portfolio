import type { Metadata } from "next";
import { ExperienceItem } from "@/components/experience-item";
import { PageIntro } from "@/components/page-intro";
import { experience } from "@/data/experience";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Tai Le’s full-stack development and simulation engineering internship at Lawrence Livermore National Laboratory.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Building across software, simulation, and applied AI."
        description="Hands-on internship experience in a research-driven environment, spanning product development, testing, AI evaluation, and technical communication."
      />

      <section
        className="site-container pb-20 sm:pb-24"
        aria-labelledby="experience-list-heading"
      >
        <h2 id="experience-list-heading" className="sr-only">
          Professional experience
        </h2>
        <div className="surface rounded-sm p-6 sm:p-8 lg:p-10">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.role}`} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
