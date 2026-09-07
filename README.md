# Tai Le — Portfolio

A polished, data-driven portfolio for Tai Le, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

On systems where PowerShell allows `npm.ps1`, the usual `npm` commands work as well.

## Content

Portfolio content is kept separate from the page components:

| File | Content |
|---|---|
| `src/data/profile.ts` | Name, positioning, bio, location, and contact links |
| `src/data/projects.ts` | Project summaries, technology, and contribution highlights |
| `src/data/experience.ts` | Work experience and technical scope |
| `src/data/education.ts` | Degree and selected coursework |
| `src/data/skills.ts` | Curated capability groups |

Project media is configured through optional image metadata in `src/data/projects.ts`, pointing at web-ready files in `public/projects/`. When a project has no `image`, `src/components/project-visual.tsx` falls back to an intentional monochrome placeholder.

Project cards render their screenshot cropped and monochrome, restoring colour on hover; project detail pages show the full image in colour.

## Routes

- `/` — about, experience, projects, and skills
- `/projects` — project index
- `/projects/[slug]` — individual project profiles
- `/experience` — professional experience
- `/about` — biography and education
- `/contact` — contact details and an email-draft form

The contact form validates visitor input and opens a prepared draft in the visitor’s email app. It does not claim to submit data to a backend.

## Visual system

- Responsive, sharp technical layout with a black, white, and neutral-gray palette
- Light and dark themes
- System-font stack with no build-time font download
- Keyboard focus states, skip navigation, semantic landmarks, and reduced-motion support
- Generated Open Graph card at `public/og.png`
- Dynamic favicon at `src/app/icon.tsx`

## Verification

```powershell
npx.cmd tsc --noEmit --pretty false
npm.cmd run lint
npm.cmd run build
```

The deployment URL is resolved from `NEXT_PUBLIC_SITE_URL`, then Vercel’s production URL variables, with localhost used only as the local fallback. See `.env.example`.

Set `NEXT_PUBLIC_SITE_URL` in the host’s environment after the first deploy. If it is missing and Vercel’s system variables are unavailable, `robots.txt`, `sitemap.xml`, and every canonical and Open Graph URL will point at `http://localhost:3000` — the site still renders correctly, but crawlers get unreachable links.

> This workspace is inside OneDrive. If generated build files encounter sync or file-lock issues, pause sync temporarily or run the project from a non-synced development directory.
