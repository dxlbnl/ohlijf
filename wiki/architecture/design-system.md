---
tags:
  - architecture
  - design-system
  - ui
date: 2026-11-12
---

# Design System (new style)

The new OhLijf look ("garden-fresh, playful, game-board") is defined in the **OhLijf Design System** artifact (claude.ai, React reference components + tokens). In this repo it lives as **Svelte 5 components** in `src/lib/ds/`; those are the real implementation, the artifact is the visual reference.

## Files
- `src/lib/ds/tokens.css` — tokens copied from the design system (`tokens.json`/`tokens.css`, typography scale, leaf radius, motion). **Scoped to `.ds`, not `:root`**, because the legacy `src/app.css` uses the same names (`--yellow`, `--white`) with other values.
- `src/lib/ds/styles.css` — entry: fonts (Raleway + Caveat via `@fontsource`, self-hosted for privacy), tokens, base styles for `.ds`, helpers (`.ds-display`, `.ds-eyebrow`, `.ds-container`), reduced-motion.
- `src/lib/ds/index.ts` — barrel export. `types.ts` (NavItem, FooterLink), `site.ts` (nav, header CTA, footer links, Instagram URL).

## Components
| Component | Notes |
|---|---|
| `Button` | primary / secondary / ghost / pop (game piece, `popColor`); `href` renders `<a>` |
| `Input` | label, hint, error (aria-invalid + aria-describedby), `multiline`, `bind:value` |
| `Card` | raised / flat / sunk / pop / dark / leaf, `interactive`, `as` element |
| `Badge`, `Sticker` | peach variants use `ink-900` text for contrast (deviation from the DS) |
| `RulesPanel` | "Spelregels" numbered list; used for landing-page bullets |
| `Hero` | not a DS component (only in the marketing kit); eyebrow, Caveat script line, title + marker `highlight`, lead, children (actions/form), `media` snippet. With `image` it becomes a **photo header**: ≥901px text on a green panel left and the photo on the right 64%; ≤900px the photo is a 4:3 block on top with the text below on green. Use photos with faces in the upper half. |
| `SiteHeader` | sticky header from `site.ts`; mobile menu toggle below 900px, CTA moves into the menu |
| `SiteFooter` | deliberately minimal (Robin's choice): dark-green bar with `© <year> OhLijf` the links from `footerLinks` in `site.ts` (Contact, Privacybeleid, Disclaimer, Algemene voorwaarden) and an Instagram icon (`instagram` prop, URL `instagramUrl` in `site.ts`) |

Not ported yet (build when needed): IconButton, Checkbox, PlayControls, ProgressMeter.

## Pages
Pages in the new style live in the `src/routes/(ds)/` group. Its layout imports `$lib/ds/styles.css` (not `app.css`), renders `SiteHeader` + `SiteFooter` inside a `.ds` root with `data-sveltekit-reload` (links to legacy pages do a full load). First page: [/meditatie-veilig](routes.md).

## Storybook
`pnpm storybook` (port 6006). Stories sit next to components (`*.stories.svelte`, addon-svelte-csf v5). Storybook was upgraded to a consistent v10 setup (removed v8-only addons, added `@storybook/addon-docs`); the preview adds the `ds` class to `<body>`.

## Photos
Hero photos live in `static/images/ds/photos/` as `<name>_<w>.{avif,webp,jpeg}` (400/800/1200/1920). `convert.sh` needs ImageMagick + avifenc, which are not installed on the Mac; the current files were made with `sharp` in a throwaway folder outside the repo.

## Gotchas
- The Hero highlight is a background gradient with `box-decoration-break: clone`, so it follows every line when the phrase wraps.
- Story `template` snippets are typed with `ComponentProps<typeof X>` (`Args<typeof Story>` resolves to `never`).
