---
tags:
  - architecture
  - stack
date: 2026-04-10
---

# Tech Stack Overview

The OhLijf web project runs on a modern frontend stack.

## Core Setup
- **Framework**: SvelteKit (`@sveltejs/kit`)
- **UI Library**: Svelte
- **Tooling**: Vite with `pnpm` as the package manager.
- **Language**: TypeScript

## Testing & Quality Assurance
- **E2E Testing**: Playwright (`@playwright/test`)
- **Component Development**: Storybook with SvelteKit integrations (`@storybook/sveltekit`).
- **Linting & Formatting**: ESLint, Prettier.

## Content Processing
The project includes support for Markdown processing capabilities, utilizing `mdsvex`, `rehype-sanitize`, `rehype-stringify`, `remark-parse`, and `remark-rehype`.
