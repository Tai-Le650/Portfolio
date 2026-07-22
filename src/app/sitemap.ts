import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/experience", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? ("monthly" as const) : ("yearly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects
    .filter((project) => !project.comingSoon)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
