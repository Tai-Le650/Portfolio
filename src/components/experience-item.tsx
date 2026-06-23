import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="grid grid-cols-[110px_1fr] gap-x-6 gap-y-2 sm:grid-cols-[180px_1fr] sm:gap-x-8">
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {formatDateRange(item.startDate, item.endDate)}
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {item.role}{" "}
            <span className="text-muted-foreground">· {item.company}</span>
          </h3>
          {item.location && (
            <p className="text-sm text-muted-foreground">{item.location}</p>
          )}
        </div>
        <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tech.map((t) => (
              <Badge key={t} variant="outline" className="font-mono text-xs">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
