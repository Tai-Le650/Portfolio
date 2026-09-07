import type { Metadata } from "next";
import { profile } from "@/data/profile";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const displayTitle = path === "/" ? title : `${title} · ${profile.name}`;

  return {
    title: { absolute: displayTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: displayTitle,
      description,
      url: path,
      siteName: `${profile.name} Portfolio`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${profile.name} — ${profile.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: ["/og.png"],
    },
  };
}
