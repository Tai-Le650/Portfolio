import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "{{Project Name}}",
    description:
      "{{One-line description shown on cards. Mention impact: built X that does Y, used by Z.}}",
    longDescription:
      "{{Longer paragraph for the detail page. What problem did it solve? Why does it matter? What did you learn?}}",
    tech: ["TypeScript", "Next.js", "Postgres"],
    image: "/projects/placeholder.svg",
    github: "https://github.com/{{YOUR_GITHUB}}/{{REPO}}",
    demo: "https://{{your-demo-url}}.com",
    featured: true,
    date: "2025-01",
    highlights: [
      "{{Bullet about what you built}}",
      "{{Bullet about measurable impact}}",
      "{{Bullet about something technically interesting}}",
    ],
  },
  {
    slug: "second-project",
    title: "{{Second Project}}",
    description: "{{One-line description.}}",
    tech: ["Python", "FastAPI", "PyTorch"],
    image: "/projects/placeholder.svg",
    github: "https://github.com/{{YOUR_GITHUB}}/{{REPO}}",
    featured: true,
    date: "2024-09",
  },
  {
    slug: "third-project",
    title: "{{Third Project}}",
    description: "{{One-line description.}}",
    tech: ["Go", "Docker", "Redis"],
    image: "/projects/placeholder.svg",
    github: "https://github.com/{{YOUR_GITHUB}}/{{REPO}}",
    featured: true,
    date: "2024-05",
  },
  {
    slug: "fourth-project",
    title: "{{Fourth Project}}",
    description: "{{One-line description.}}",
    tech: ["C++", "CMake"],
    image: "/projects/placeholder.svg",
    github: "https://github.com/{{YOUR_GITHUB}}/{{REPO}}",
    date: "2024-01",
  },
];
