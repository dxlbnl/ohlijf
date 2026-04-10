---
tags:
  - architecture
  - ui
date: 2026-04-10
---

# UI Components

The frontend relies heavily on custom Svelte components (located in `src/lib/components/`) to maintain visual consistency across marketing pages.

## Layout Components
- **`Columns.svelte`**: Used to structure responsive grid layouts, often alternating text and images on marketing pages.
- **`Content.svelte`**: Standard constrained wrapper to format large text blocks.
- **`Wave.svelte`**: Provides dynamic SVG wave borders to transition between stacked sections with different background colors.

## Navigation Elements
- **`Header.svelte`**: Modular hero header component used at the top of landing pages.
- **`Navigation.svelte`**: Parses links centrally from `menu.yaml` to render dynamic desktop and mobile menus.
- **`Footer.svelte`**: Standardized footer.

## Functional Components
- **`Image.svelte`**: Wrapper to optimize image sizes for responsive delivery.
- **`Matomo.svelte`**: Wraps tracking scripts globally (`disableCookies` is enabled by default to respect EU regulations).
- **`TestBanner.svelte` / `TrainingForm.svelte`**: Components rendering specific CTAs connected to external endpoints.
