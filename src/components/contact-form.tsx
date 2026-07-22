"use client";

import * as React from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!message) errors.message = "Please add a short message.";
  else if (message.length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const copyTimerRef = React.useRef<number | undefined>(undefined);

  React.useEffect(
    () => () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
    },
    []
  );

  function clearError(field: FieldName) {
    if (!errors[field]) return;
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    setStatus("");

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0] as FieldName;
      formRef.current?.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Tai,\n\n${message}\n\nBest,\n${name}\n${email}`
    );

    setStatus("Attempting to open your email app with a prepared draft.");
    toast.info("Opening your email app…");
    window.location.assign(`mailto:${profile.email}?subject=${subject}&body=${body}`);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setStatus(`${profile.email} copied to the clipboard.`);
      toast.success("Email address copied.");
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus(`Copy unavailable. The email address is ${profile.email}.`);
      toast.error("Copy unavailable. Select the email address instead.");
    }
  }

  return (
    <form
      ref={formRef}
      action={`mailto:${profile.email}`}
      method="post"
      encType="text/plain"
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
            onChange={() => clearError("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-sm font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@example.com"
            onChange={() => clearError("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-sm font-medium text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={1200}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error message-hint" : "message-hint"}
          placeholder="Share details about the role, project, or idea."
          onChange={() => clearError("message")}
        />
        <p id="message-hint" className="text-xs text-muted-foreground">
          A few sentences is plenty.
        </p>
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm font-medium text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="rounded-sm">
          Open email draft <ArrowUpRight className="size-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="rounded-sm"
          onClick={copyEmail}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied" : "Copy email"}
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs leading-5 text-muted-foreground">
          Opens your default email app. Nothing is sent automatically.
        </p>
      </div>
      <p className="sr-only" aria-live="polite">{status}</p>
    </form>
  );
}
