import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  titleId,
}: Props) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</p>
      )}
      <h2 id={titleId} className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
