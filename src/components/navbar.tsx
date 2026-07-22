"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/90">
      <div className="site-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="focus-ring group inline-flex items-center gap-3 rounded-sm"
          aria-label={`${profile.name}, home`}
        >
          <span className="grid size-9 place-items-center rounded-sm border border-foreground bg-foreground font-mono text-xs font-bold tracking-[-0.04em] text-background transition-colors group-hover:bg-background group-hover:text-foreground">
            TL
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-bold tracking-tight">
              {profile.name}
            </span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {profile.title}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-sm border px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
                  isActive(item.href)
                    ? "border-foreground bg-foreground text-background"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="rounded-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-6 py-3 shadow-[0_12px_24px_hsl(var(--foreground)/0.08)] md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring flex min-h-11 items-center rounded-sm border px-3 font-mono text-sm font-semibold uppercase tracking-[0.08em]",
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
