import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    role: "{{Software Engineer Intern}}",
    company: "{{Company Name}}",
    location: "{{City, State or Remote}}",
    startDate: "2025-06",
    endDate: "2025-09",
    bullets: [
      "{{Action + technology + measurable result. e.g. Built X using Y, reducing Z by N%.}}",
      "{{Second bullet — try to lead with a verb (Built, Shipped, Designed, Migrated, Owned).}}",
      "{{Third bullet — focus on impact and scope.}}",
    ],
    tech: ["TypeScript", "React", "Postgres"],
  },
  {
    role: "{{Previous Role}}",
    company: "{{Previous Company}}",
    location: "{{City, State}}",
    startDate: "2024-05",
    endDate: "2024-08",
    bullets: [
      "{{What you built}}",
      "{{What impact it had}}",
    ],
    tech: ["Python", "AWS"],
  },
];
