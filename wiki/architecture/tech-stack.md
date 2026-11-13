---
tags:
  - architecture
  - stack
date: 2026-11-13
---

# Tech Stack Overview

## Core Setup
- **Framework**: SvelteKit 3 (`@sveltejs/kit`) with Svelte 5 (older components still use Svelte 4-style `export let`; page state comes from `$app/state`, `$app/stores` no longer exists)
- **Config**: everything lives in `vite.config.ts` (the `sveltekit({...})` plugin: adapter, mdsvex preprocessor, extensions). There is no `svelte.config.js` anymore.
- **Imports**: `#lib/...` (package.json `imports`) instead of `$lib`. Private env vars are declared in `src/env.ts` (`defineEnvVars`) and imported from `$app/env/private`.
- **Tooling**: Vite 8, TypeScript 6 (TS 7 waits until `svelte-check` supports it standalone), `pnpm`
- **Hosting**: Vercel via `@sveltejs/adapter-vercel`, runtime `nodejs24.x`
- **Forms**: `sveltekit-superforms` 3 + Zod 4 (`src/lib/forms.ts`)
- **Analytics**: `@vercel/analytics` + `@vercel/speed-insights` (import from `@vercel/speed-insights/sveltekit-next`; the plain `/sveltekit` entry uses `$app/stores` and crashes on SvelteKit 3)

## Testing & Quality Assurance
- **E2E Testing**: Playwright (`tests/`, runs against `build` + `preview`; first run needs `pnpm exec playwright install chromium`)
- **Component Development**: Storybook 10 with `addon-svelte-csf` and `addon-docs`, see [design system](design-system.md)
- **Linting & Formatting**: Oxlint (`.oxlintrc.json`) + Oxfmt (`.oxfmtrc.json`, Markdown excluded). `pnpm lint` checks both, `pnpm format` formats. Oxlint only lints the `<script>` part of `.svelte` files; `svelte-check` covers templates.
- **CI**: `.github/workflows/ci.yml` runs `check`, `lint` and Playwright on every PR and on `main` (placeholder env vars, `SYSTEME_MOCK=true`).

## Content Processing
Markdown pages via `mdsvex` (config in `mdsvex.config.js`, default layout `src/lib/layouts/default.svelte`). YAML imports (menu, test questions) via `@modyfi/vite-plugin-yaml`.

See also: [Routes](routes.md), [Database](database.md), [Email](../concepts/email-integrations.md).
