---
tags:
  - architecture
  - stack
date: 2026-11-12
---

# Tech Stack Overview

## Core Setup
- **Framework**: SvelteKit 2 (`@sveltejs/kit`) with Svelte 5 (most components still use Svelte 4-style `export let` / `$page` stores)
- **Tooling**: Vite 8, TypeScript, `pnpm`
- **Hosting**: Vercel via `@sveltejs/adapter-vercel`, runtime `nodejs24.x`
- **Forms**: `sveltekit-superforms` + Zod 4 (`src/lib/forms.ts`)
- **Analytics**: `@vercel/analytics` + `@vercel/speed-insights`

## Testing & Quality Assurance
- **E2E Testing**: Playwright (`tests/`, runs against `build` + `preview`; first run needs `pnpm exec playwright install chromium`)
- **Component Development**: Storybook 10 with `addon-svelte-csf` and `addon-docs`, see [design system](design-system.md)
- **Linting & Formatting**: ESLint, Prettier

## Content Processing
Markdown pages via `mdsvex` (config in `mdsvex.config.js`, default layout `src/lib/layouts/default.svelte`). YAML imports (menu, test questions) via `@modyfi/vite-plugin-yaml`.

See also: [Routes](routes.md), [Database](database.md), [Email](../concepts/email-integrations.md).
