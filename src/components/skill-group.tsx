import type { SkillGroup as SkillGroupType } from "@/types";

export function SkillGroupCard({
  group,
  index,
}: {
  group: SkillGroupType;
  index?: number;
}) {
  return (
    <article className="surface rounded-sm p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          {typeof index === "number" && (
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
              0{index + 1}
            </p>
          )}
          <h3 className="text-base font-bold tracking-tight">{group.category}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {group.items.join(" · ")}
      </p>
    </article>
  );
}
