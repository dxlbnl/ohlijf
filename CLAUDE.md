# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## AI Agent Instructions

Before proposing solutions or making architecture choices, **read `AGENTS.md`** and query the LLM Wiki in `wiki/`. Start with `wiki/index.md` to orient yourself, then read relevant pages. After making meaningful changes, update the relevant wiki pages and append an entry to `wiki/log.md` with the format `## [YYYY-MM-DD] action | Topic`.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm check        # Type-check with svelte-check
pnpm lint         # Oxfmt + Oxlint check
pnpm format       # Auto-format with Oxfmt
pnpm test         # Run Playwright e2e tests
pnpm storybook    # Component development server on :6006
```

Database migrations are managed via Drizzle Kit. The config reads from `.env.development.local` for local dev (`POSTGRES_URL`).

## Architecture

**Framework**: SvelteKit 3 with Vercel adapter, deployed to Vercel. Package manager is `pnpm`. All SvelteKit config (adapter, mdsvex preprocessor, extensions) lives in the `sveltekit({...})` plugin in `vite.config.ts`; there is no `svelte.config.js`. Import shared code via `#lib/...` (not `$lib`), page state via `$app/state` (not `$app/stores`), and private env vars via `$app/env/private` (declared in `src/env.ts`). Use `@vercel/speed-insights/sveltekit-next`, not `/sveltekit`.

**CI**: `.github/workflows/ci.yml` runs `pnpm check`, `pnpm lint` and Playwright on PRs and `main`.

**Route Groups** (`src/routes/`):
- `(site)/` — public marketing site; shares a layout that injects `Navigation`, `Footer`, Vercel Analytics + Speed Insights, and pre-loads both the mailing and training forms via `+layout.server.ts`. Adding `?focus` to a URL hides the navigation.
- `(ds)/` — pages in the new design system (`src/lib/ds/`, Svelte 5 components with Storybook stories); own layout with `SiteHeader`/`SiteFooter`, does not load `app.css`. Tokens are scoped to `.ds` to avoid clashes with legacy variables.
- `(tools)/` — isolated pages without standard nav: `/rust-aankoop` (Systeme.io sale webhook → The Huddle access) and `/og` (OG image generation).

**Markdown Pages**: `.md` files in routes are processed by `mdsvex` and automatically wrapped in `src/lib/layouts/default.svelte`. Frontmatter props: `titel`, `omschrijving`, `foto`, `fotoPositie`, `sidebar`, `testBanner`, `meta`, `style`. The navigation links are driven by `src/routes/(site)/menu.yaml`.

**Main funnel**: CTAs across the site (homepage, `TestBanner`) point to the free webinar at `https://ohlijf.systeme.io/webinar-oorzaak-hoofdpijn`. The training itself is sold via `https://ohlijf.systeme.io/trainingen`.

**Database**: Neon (serverless Postgres) via `@neondatabase/serverless` in HTTP mode. Drizzle ORM with schema defined in `src/lib/schema.ts`. Two tables: `test_result` (stores assessment responses) and `contact_log`.

**Forms**: `sveltekit-superforms` + Zod for form validation. Forms are pre-validated at the layout level and passed down as `mailingform` / `trainingform`.

**OG Images**: `src/routes/(tools)/og/+server.ts` generates dynamic Open Graph images using `satori` + `@resvg/resvg-js`.

## Key Integrations

| Integration | File | Purpose |
|---|---|---|
| Systeme.io | `src/lib/systeme.ts` | CRM — `addOrUpdateContact` with typed tag IDs for email automation |
| The Huddle | `src/lib/thehuddle/api.ts` | Course platform — SSO login + CSRF workaround to create users via admin UI scraping |
| Resend | `src/lib/mail.ts` | `mailHome()` sends notification mails to info@ohlijf.com |
| Vercel Analytics / Speed Insights | `src/routes/(site)/+layout.svelte` | Analytics (replaced Matomo in May 2026) |

## Environment Variables

Required in `.env.local` / `.env`:
- `POSTGRES_URL` — Neon database connection string
- `SYSTEME_API_KEY` — Systeme.io CRM API key
- `RESEND_API_KEY` — Resend transactional mail
- `SYSTEME_MOCK` — optional; `true` makes `addOrUpdateContact` log instead of calling Systeme.io (handy locally)
- `THEHUDDLE_CLIENT_ID`, `THEHUDDLE_TENANT_ID`, `THEHUDDLE_CLIENT_SECRET` — The Huddle OAuth
- `THEHUDDLE_USER`, `THEHUDDLE_PASSWORD` — The Huddle admin login used by the `/rust-aankoop` webhook

Drizzle migrations specifically read from `.env.development.local`.

## Local Setup

Node and pnpm are pinned in `mise.toml` (`mise install`, then `mise exec -- pnpm install` / `mise exec -- pnpm dev`). `pnpm-workspace.yaml` lists `current` in `supportedArchitectures` so native packages install on macOS as well as Vercel's Linux.
