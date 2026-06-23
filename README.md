# Portfolio

A clean, multi-page portfolio template for a CS graduate — Next.js 15 + TypeScript + Tailwind + shadcn-style components, with dark mode out of the box.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** The project lives inside OneDrive. If `npm install` or `next dev` hits file-lock errors, pause OneDrive sync for this folder or move it to a non-synced path (e.g. `~/code/portfolio`).

## Fill in your content

All editable content lives in **`src/data/*.ts`** — you should not need to touch JSX to personalize the site.

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Name, title, tagline, bio, location, email, social links |
| `src/data/skills.ts` | Skill groups (Languages, Frameworks, Tools, Cloud) |
| `src/data/projects.ts` | One entry per project — slug, title, description, tech, image, links |
| `src/data/experience.ts` | Internships / jobs with bullets |
| `src/data/education.ts` | Degree, school, GPA, coursework, honors |

Anywhere you see `{{LIKE_THIS}}` is a placeholder — global-find-and-replace works great. Your preferred email `taile650@gmail.com` is already filled in.

### Drop-in assets

- `public/resume.pdf` — your résumé (the "Resume" CTA links here)
- `public/og-image.png` — 1200×630 social-preview image
- `public/projects/*.{png,jpg,svg}` — project screenshots referenced from `projects.ts`
- `public/headshot.jpg` — optional square headshot (see comment in `src/app/about/page.tsx`)

## Wire the contact form to a real handler

`src/components/contact-form.tsx` has a stubbed submit that just shows a success toast. Replace the `setTimeout` with one of:

- **Formspree** — POST to `https://formspree.io/f/{{YOUR_FORM_ID}}`
- **Resend** — add `app/api/contact/route.ts`, call from the client
- **Your own backend** — anything that accepts JSON

The form already does inline validation, ARIA error announcements, and focus management on error — you only need to swap the network call.

## Customize the look

- **Accent color:** edit `--accent` in `src/app/globals.css` (both `:root` and `.dark` blocks). Default is sky-500.
- **Fonts:** swap Inter / JetBrains Mono in `src/app/layout.tsx`.
- **Spacing rhythm:** sections use `py-24 md:py-32` — tighten by editing the page files.
- **SEO:** update `SITE_URL` in `src/app/sitemap.ts` and `robots.ts`, and `metadataBase` in `src/app/layout.tsx`.

## Routes

- `/` — Hero, skills, featured projects, contact CTA
- `/about` — Bio, experience timeline, education
- `/projects` — All projects with tech-tag filter
- `/projects/[slug]` — Project detail with case-study sections
- `/contact` — Form + direct contact links

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v3 + `tailwindcss-animate` + CSS variables for theming
- **Components:** shadcn-style (Button, Card, Badge, Input, Textarea, Label, Separator)
- **Icons:** lucide-react
- **Theme:** next-themes (system / light / dark)
- **Toasts:** sonner

## Deploy

Push to GitHub, then import the repo on [vercel.com/new](https://vercel.com/new). No config needed — Vercel detects Next.js. Set the production domain and update `SITE_URL` in `sitemap.ts` + `robots.ts` and `metadataBase` in `layout.tsx`.

## Accessibility checklist

This template ships with:

- 4.5:1+ contrast in both light and dark mode
- Visible focus rings on every interactive element
- Skip-to-content link
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA labels on icon-only buttons
- `aria-invalid` + `aria-describedby` + `role="alert"` on form errors
- `prefers-reduced-motion` respected
- All touch targets ≥44px
