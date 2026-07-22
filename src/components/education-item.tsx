import { Badge } from "@/components/ui/badge";
import { formatMonthYear } from "@/lib/utils";
import type { Education } from "@/types";

export function EducationItem({ item }: { item: Education }) {
  return (
    <article className="grid gap-5 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.13em] text-accent">
          {formatMonthYear(item.startDate)} — Expected {formatMonthYear(item.endDate)}
        </p>
        {item.location && (
          <p className="mt-2 text-sm text-muted-foreground">{item.location}</p>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold leading-tight tracking-[-0.02em]">
          {item.degree}
        </h3>
        <p className="mt-1 text-sm font-semibold text-muted-foreground">
          {item.school}
        </p>
        {item.coursework && item.coursework.length > 0 && (
          <div className="mt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Selected coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <Badge key={course} variant="outline">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
