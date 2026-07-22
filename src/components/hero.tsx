import { cn } from "@/lib/utils";

const shortBio =
  "I’m a Computer Science and Engineering senior at UC Merced, focused on building full-stack products, applied AI experiences, and interactive simulations.";

export function PortraitPlaceholder({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Portrait placeholder for Tai Le"
      className={cn(
        "surface relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary",
        className
      )}
    >
      <div className="grid-fade absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-4 border border-foreground/15" aria-hidden="true" />
      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
        <span
          className="font-mono text-6xl font-bold tracking-[-0.08em] text-foreground sm:text-7xl"
          aria-hidden="true"
        >
          TL
        </span>
        <span className="mt-5 border-t border-foreground/25 pt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Portrait placeholder
        </span>
      </div>
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
            Tai Le <span className="text-muted-foreground">· Full-stack Developer</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {shortBio}
          </p>
        </div>

        <div className="animate-enter-delayed mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
          <PortraitPlaceholder />
        </div>
      </div>
    </section>
  );
}
