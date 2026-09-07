import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectVisualProps = {
  project: Project;
  className?: string;
  large?: boolean;
};

export function ProjectVisual({ project, className, large = false }: ProjectVisualProps) {
  if (project.image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden border border-border bg-muted",
          large ? "aspect-[16/8] min-h-[280px]" : "aspect-[4/3] min-h-[220px]",
          className
        )}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={large ? "(max-width: 1280px) 100vw, 1152px" : "(max-width: 768px) 100vw, 42vw"}
          className={cn(
            // object-contain, never cover: these are wide UI screenshots, and
            // cropping them to the card's near-square box clips headings.
            "object-contain transition-[filter] duration-500 motion-reduce:transition-none",
            // Detail pages show the screenshot in colour; cards stay monochrome
            // with the rest of the palette until hovered.
            large
              ? ""
              : "grayscale hover:grayscale-0 group-hover:grayscale-0 group-focus-visible:grayscale-0"
          )}
        />
      </div>
    );
  }

  const placeholderLabel = project.comingSoon
    ? "Project preview coming soon"
    : `${project.title} image placeholder`;

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border border-border bg-muted text-muted-foreground",
        large ? "aspect-[16/8] min-h-[280px]" : "aspect-[4/3] min-h-[220px]",
        className
      )}
      role="img"
      aria-label={placeholderLabel}
    >
      <div className="grid-fade absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute inset-4 border border-foreground/10 sm:inset-6" aria-hidden="true">
        <span className="absolute -left-px -top-px size-3 border-l border-t border-foreground/40" />
        <span className="absolute -right-px -top-px size-3 border-r border-t border-foreground/40" />
        <span className="absolute -bottom-px -left-px size-3 border-b border-l border-foreground/40" />
        <span className="absolute -bottom-px -right-px size-3 border-b border-r border-foreground/40" />
      </div>

      <div className="absolute inset-0 grid place-items-center p-8 text-center">
        <div>
          <ImageIcon className="mx-auto size-8" strokeWidth={1.4} aria-hidden="true" />
          <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
            Image placeholder
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {project.comingSoon ? "Preview to be announced" : "Screenshot will be added later"}
          </p>
        </div>
      </div>

      {project.date && (
        <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:bottom-7 sm:right-7">
          {project.date.slice(0, 4)}
        </span>
      )}
    </div>
  );
}
