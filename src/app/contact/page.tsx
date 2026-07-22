import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Contact ${profile.name} about software, AI, or product engineering.`,
  path: "/contact",
});

const displayPhone = "650 283 9427";

const socialLinks = [
  {
    href: profile.socials.github,
    label: "GitHub",
    detail: "See code and repositories",
    icon: Github,
  },
  {
    href: profile.socials.linkedin,
    label: "LinkedIn",
    detail: "View my professional profile",
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in touch."
        description="Use the form below or reach me directly by email or phone."
      />

      <section className="site-container grid gap-8 pb-20 sm:pb-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <div className="surface rounded-sm p-6 sm:p-8 lg:col-start-2 lg:row-start-1 lg:p-10">
          <div className="mb-8 border-b border-border pb-6">
            <p className="eyebrow">Send a note</p>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
              Tell me what you have in mind.
            </h2>
          </div>
          <ContactForm />
        </div>

        <aside className="space-y-5 lg:col-start-1 lg:row-start-1" aria-label="Contact details">
          <div className="surface rounded-sm p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Direct contact
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring group flex min-h-14 items-center gap-4 border border-transparent p-2 transition-colors hover:border-border hover:bg-secondary/70"
              >
                <span className="grid size-10 shrink-0 place-items-center border border-border bg-secondary text-foreground">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-muted-foreground">Email</span>
                  <span className="mt-0.5 block truncate text-sm font-bold">{profile.email}</span>
                </span>
              </a>

              <a
                href="tel:6502839427"
                className="focus-ring group flex min-h-14 items-center gap-4 border border-transparent p-2 transition-colors hover:border-border hover:bg-secondary/70"
              >
                <span className="grid size-10 shrink-0 place-items-center border border-border bg-secondary text-foreground">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-muted-foreground">Phone</span>
                  <span className="mt-0.5 block text-sm font-bold">{displayPhone}</span>
                </span>
              </a>

              <div className="flex min-h-14 items-center gap-4 p-2">
                <span className="grid size-10 shrink-0 place-items-center border border-border bg-secondary text-foreground">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-muted-foreground">Location</span>
                  <span className="mt-0.5 block text-sm font-bold">{profile.location}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {socialLinks.map(({ href, label, detail, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring surface group flex min-h-20 items-center gap-4 rounded-sm p-5 transition-colors hover:border-foreground/35"
              >
                <Icon className="size-5 text-foreground" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold">{label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{detail}</span>
                </span>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
