import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container mx-auto flex max-w-3xl flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm uppercase tracking-wider text-accent">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        That page doesn't exist (yet). Maybe you were looking for one of these:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">Projects</Link>
        </Button>
      </div>
    </section>
  );
}
