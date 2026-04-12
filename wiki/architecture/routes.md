---
tags:
  - architecture
  - routing
date: 2026-04-10
---

# Routing Architecture

OhLijf utilizes SvelteKit's advanced routing features, particularly **layout groups**, to segregate public-facing content from specialized funnel and tool pages without affecting the final URL structure.

## Structure Overview

All routes are nested inside `src/routes/`. 

### `(site)` Group 
Contains the primary informational marketing pages. These share a default `+layout.svelte` which enforces the standard site `Navigation`, SEO meta tags, `Matomo` initialization, and the `Footer`.
- `/contact`
- `/methode`
- `/ons` (About Us)
- `/test` (Lead gen assessment flow)
- Standard legal pages (`/privacy`, `/disclaimer`, `/algemene-voorwaarden`)

### `(tools)` Group
Used for specialized landing pages or isolated funnels that likely omit standard navigation elements (e.g., specific campaign pages) to minimize user distraction.
- `/rust-aankoop` (Checkout flows)
- `/og` (Likely dynamic OpenGraph image generation, utilizing the `satori` & `resvg` dependencies observed in `package.json`).
