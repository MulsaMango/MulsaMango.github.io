# Portfolio 2025

Tulsa Daley's product design portfolio. Static site (SPA, prerendered) deployed to GitHub Pages.

## Commands

```bash
npm run dev        # dev server with HMR at http://localhost:5173
npm run build      # production build -> build/client (postbuild copies index.html -> 404.html for SPA routing)
npm run typecheck  # react-router typegen + tsc
npx biome format --write .   # format (Biome, spaces for indentation)
```

There is no test suite. Verify changes with `npm run typecheck` and by checking the dev server in a browser.

## Stack

- **React Router v7** in SPA mode (`ssr: false`), React 19, TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/vite`) + `@tailwindcss/typography`; custom CSS in `app/app.css`
- **Biome** for formatting (not ESLint/Prettier)
- **Radix UI** primitives + `lucide-react` icons
- Accent color: `#47DD4E` (green)

## Architecture

Routes are declared in `app/routes.ts`: landing (`/`), about, `project/:slug`, and a `*` not-found.

The case study system is the core of the site:

1. **`app/data/projects.ts`** — the project registry. Each `Project` has a `slug`, `title`, `tags`, and a `CardPreview` component shown on the landing page.
2. **`app/routes/project.$slug.tsx`** — the dynamic project page. Looks up the project by slug, then resolves its content via `getCaseStudyComponent(project.id)` from `app/case-studies/index.tsx`.
3. **`app/case-studies/`** — the actual case study content. Each study is a component (e.g. `ai-prototyping.tsx`, `framework-redesign/`, `vpply-design-system.tsx`, `data-tables/`, `icons.tsx`). Shared building blocks live alongside: `case-study-image.tsx` (the `Image` component), `case-study-callout.tsx`, `case-study-typography.tsx`.

Case study images live in a sibling `images/` folder next to each study (e.g. `app/case-studies/framework-redesign/images/`).

### Prerendering gotcha

`react-router.config.ts` enumerates every path to prerender — including each `/project/:slug` derived from `app/data/projects.ts`. **A new project page must be reachable through `projects.ts` or it won't be prerendered to real HTML.** This matters because Figma's link crawler doesn't run JS, so per-project meta tags only exist on prerendered routes. Meta tags are built via `app/lib/siteMeta.ts`.

## Auth

Some content is gated behind `PasswordGate` using `VITE_PASSWORD` (see `.env.example`). Locally, copy `.env.example` to `.env`. In production it's set as the GitHub repo secret `VITE_PASSWORD`. Never commit `.env`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs `npm run build` and publishes `build/client` to GitHub Pages.

## Skills

Project-specific skills live in `.claude/skills/`:

- **case-study-building** — voice, tone, structure, and React implementation for case studies. Use when drafting/editing case study content.
- **accessibility-audit** — WCAG 2.2 A/AA audit for this stack. Report-only; never auto-fixes.
- **resume-writing** — resume content in `docs/drafts/resume.md`.

Working docs (plans, drafts, specs) live in `docs/`.
