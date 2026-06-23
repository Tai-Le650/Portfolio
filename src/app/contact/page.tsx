import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <section className="container mx-auto max-w-3xl py-16 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="The fastest way to reach me is the form below. I respond to most messages within 24 hours."
      />

      <ContactForm />

      <Separator className="my-12" />

      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Or find me at
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            <Mail className="size-4" />
            {profile.email}
          </Link>
          <Link
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            <Github className="size-4" />
            GitHub
          </Link>
          <Link
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
