import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="grid gap-5 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.13em] text-accent">
          {formatDateRange(item.startDate, item.endDate)}
        </p>
        {item.location && (
          <p className="mt-2 text-sm text-muted-foreground">{item.location}</p>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold leading-tight tracking-[-0.02em]">
          {item.role}
        </h3>
        <p className="mt-1 text-sm font-semibold text-muted-foreground">
          {item.company}
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 bg-foreground" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {item.tech && item.tech.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tech.map((technology) => (
              <Badge key={technology} variant="outline">
                {technology}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
