import Link from "next/link";
import { ArrowLeft, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[70svh] items-center py-20">
      <div className="surface relative mx-auto w-full max-w-3xl overflow-hidden rounded-sm p-8 text-center sm:p-14">
        <div className="absolute inset-0 grid-fade opacity-60" aria-hidden="true" />
        <div className="relative">
          <span className="mx-auto grid size-14 place-items-center border border-border bg-muted text-foreground">
            <FolderOpen className="size-6" aria-hidden="true" />
          </span>
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Error 404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
            This page is off the map.
          </h1>
          <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">
            The link may be outdated, or the page may have moved. The rest of the portfolio is right where you left it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-sm">
              <Link href="/">
                <ArrowLeft className="size-4" /> Back home
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-sm bg-background">
              <Link href="/projects">Browse work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
