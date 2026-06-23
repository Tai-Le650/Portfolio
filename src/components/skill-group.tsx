import { Badge } from "@/components/ui/badge";
import type { SkillGroup as SkillGroupType } from "@/types";

export function SkillGroupCard({ group }: { group: SkillGroupType }) {
  return (
    <div className="space-y-3">
      <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge key={item} variant="outline" className="px-3 py-1 text-sm">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
