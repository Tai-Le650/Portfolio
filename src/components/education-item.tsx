import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";
import type { Education } from "@/types";

export function EducationItem({ item }: { item: Education }) {
  return (
    <article className="grid grid-cols-[110px_1fr] gap-x-6 gap-y-2 sm:grid-cols-[180px_1fr] sm:gap-x-8">
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {formatDateRange(item.startDate, item.endDate)}
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {item.degree}{" "}
            <span className="text-muted-foreground">· {item.school}</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            {[item.location, item.gpa && `GPA ${item.gpa}`]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
        {item.coursework && item.coursework.length > 0 && (
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Coursework
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.coursework.map((c) => (
                <Badge key={c} variant="outline" className="text-xs">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {item.honors && item.honors.length > 0 && (
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Honors
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {item.honors.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
