import Image from "next/image";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const [introParagraph] = profile.bio.split("\n\n");

export function Portrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "surface relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary",
        className
      )}
    >
      <Image
        src="/portrait.webp"
        alt={`${profile.name}, ${profile.title}`}
        fill
        priority
        sizes="(max-width: 768px) 80vw, 384px"
        className="object-cover"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="home-about-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-45" aria-hidden="true" />
      <div className="site-container relative grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:min-h-[calc(100svh-72px)] lg:gap-20 lg:py-24">
        <div className="animate-enter max-w-3xl">
          <p className="eyebrow">About</p>
          <h1
            id="home-about-heading"
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
          >
            {profile.name}
            <span className="mt-2 block text-muted-foreground">{profile.title}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {introParagraph}
          </p>
        </div>

        <div className="animate-enter-delayed mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
