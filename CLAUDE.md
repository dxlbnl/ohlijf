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
pnpm lint         # Prettier + ESLint check
pnpm format       # Auto-format with Prettier
pnpm test         # Run Playwright e2e tests
pnpm storybook    # Component development server on :6006
```

Database migrations are managed via Drizzle Kit. The config reads from `.env.development.local` for local dev (`POSTGRES_URL`).

## Architecture

**Framework**: SvelteKit with Vercel adapter, deployed to Vercel. Package manager is `pnpm`.

**Route Groups** (`src/routes/`):
- `(site)/` — public marketing site; shares a layout that injects `Navigation`, `Footer`, Matomo analytics, and pre-loads both the mailing and training forms via `+layout.server.ts`
- `(tools)/` — isolated pages without standard nav (checkout flows, OG image generation)

**Markdown Pages**: `.md` files in routes are processed by `mdsvex` and automatically wrapped in `src/lib/layouts/default.svelte`. The navigation links are driven by `src/routes/(site)/menu.yaml`.

**Database**: Neon (serverless Postgres) via `@neondatabase/serverless` in HTTP mode. Drizzle ORM with schema defined in `src/lib/schema.ts`. Two tables: `test_result` (stores assessment responses) and `contact_log`.

**Forms**: `sveltekit-superforms` + Zod for form validation. Forms are pre-validated at the layout level and passed down as `mailingform` / `trainingform`.

**OG Images**: `src/routes/(tools)/og/+server.ts` generates dynamic Open Graph images using `satori` + `@resvg/resvg-js`.

## Key Integrations

| Integration | File | Purpose |
|---|---|---|
| Systeme.io | `src/lib/systeme.ts` | CRM — `addOrUpdateContact` with typed tag IDs for email automation |
| The Huddle | `src/lib/thehuddle/api.ts` | Course platform — SSO login + CSRF workaround to create users via admin UI scraping |
| Resend + MJML | `src/lib/mail.ts` | Transactional emails rendered with MJML |
| Mailchimp | `src/lib/mailchimp.ts` | Newsletter subscriber management |
| Matomo | `src/lib/components/Matomo.svelte` | Analytics with `disableCookies` (EU compliance) |

## Environment Variables

Required in `.env.local` / `.env`:
- `POSTGRES_URL` — Neon database connection string
- `SYSTEME_API_KEY` — Systeme.io CRM API key
- `THEHUDDLE_CLIENT_ID`, `THEHUDDLE_TENANT_ID`, `THEHUDDLE_CLIENT_SECRET` — The Huddle OAuth

Drizzle migrations specifically read from `.env.development.local`.
