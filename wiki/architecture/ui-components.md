---
tags:
  - architecture
  - ui
date: 2026-11-12
---

# UI Components

> These are the **legacy** components used by the `(site)` pages. New pages use the [design system](design-system.md) in `src/lib/ds/`.

Custom Svelte components in `src/lib/components/` keep the marketing pages visually consistent. Fonts: Raleway (body), Bellota and Martel (headings), loaded via `@fontsource`.

## Layout Components
- **`Columns.svelte`**: Responsive grid, typically alternating image and text (`reverse` prop flips sides).
- **`Content.svelte`**: Constrained wrapper for text blocks.
- **`Wave.svelte`**: SVG wave borders between sections with different backgrounds.
- **`Sidebar.svelte`**: Sidebar shown on markdown pages when `sidebar: true`.

## Headers & Navigation
- **`Header.svelte`**: Hero header on the homepage.
- **`PageHeader.svelte`**: Header for markdown pages (`titel`, `omschrijving`, `foto`, `fotoPositie`).
- **`Navigation.svelte`**: Renders desktop/mobile menus from `menu.yaml` (validated with `menuSchema`).
- **`Footer.svelte`**: Standard footer incl. Instagram link.

## Functional Components
- **`Image.svelte`**: Responsive images; expects pre-generated `name_{size}.{avif,webp,jpeg}` files in `static/images/`.
- **`Stats.svelte`**: Results/statistics block on the homepage.
- **`TestBanner.svelte`**: Despite the name, now a CTA banner to the free webinar (`ohlijf.systeme.io/webinar-oorzaak-hoofdpijn`).
- **`TrainingForm.svelte`**: Interest form posting to the homepage `trainingform` action.
- **`Input.svelte`**, **`Loader.svelte`**: Form helpers.

Analytics is no longer a component: Vercel Analytics and Speed Insights are injected in `(site)/+layout.svelte` (Matomo was removed in May 2026).
