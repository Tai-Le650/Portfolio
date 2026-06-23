import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="container mx-auto max-w-5xl py-20 md:py-28">
      <div className="max-w-3xl space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-foreground ring-2 ring-foreground/20" aria-hidden />
          Available for new-grad SWE roles
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm {profile.name}.
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {profile.tagline}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          <span>{profile.location}</span>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <Download className="size-4" />
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
