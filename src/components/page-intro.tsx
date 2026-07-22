import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <header className="site-container grid gap-8 pb-12 pt-16 sm:pb-16 sm:pt-20 lg:grid-cols-[1fr_auto] lg:items-end">
      <div className="max-w-3xl animate-enter">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      {aside && <div className="animate-enter-delayed">{aside}</div>}
    </header>
  );
}
