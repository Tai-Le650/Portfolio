import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border bg-background">
      <div className="site-container flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          © {year} {profile.name}
        </p>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="focus-ring grid size-9 place-items-center rounded-sm border border-border bg-background text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <Github className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="focus-ring grid size-9 place-items-center rounded-sm border border-border bg-background text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <Linkedin className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name}`}
            className="focus-ring grid size-9 place-items-center rounded-sm border border-border bg-background text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
