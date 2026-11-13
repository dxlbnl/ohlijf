---
tags:
  - log
  - wiki
date: 2026-04-10
---

# Wiki Log

Append-only record of wiki modifications.

## [2026-11-13] fix | White edge on design-system pages
`(ds)/+layout.svelte` now sets `body { margin: 0 }`; without `app.css` the browser's default 8px margin showed a white border around the hero and footer.

## [2026-11-13] update | /aanmelden → /meditatie-veilig
Moved the meditation signup page to `src/routes/(ds)/meditatie-veilig/` (URL ohlijf.com/meditatie-veilig); tests renamed to `tests/meditatie-veilig.test.ts`. Updated `routes`, `design-system`, `systeme-io`.

## [2026-11-13] update | Footer: contact & Instagram
`SiteFooter` now also links to Contact and shows an Instagram icon (opens `ohlijf_aurinke_robin` in a new tab). Removed the "Geen spam" hint on `/aanmelden`; it now says the visitor gets the meditation plus an occasional mail. Updated `design-system`.

## [2026-11-13] update | Aanmeldpagina: meditatie
`/aanmelden` now offers the free meditation "Even niet op je hoede" (copy from Robin). Form asks first name + email (`signupFormSchema` in `src/lib/forms.ts`); name is sent to Systeme.io as `first_name`. Contacts get tags `nieuwsbrief` + `meditatie-veilig anders` (2289936). Updated Playwright tests and `routes`.

## [2026-11-12] update | Minimal footer
`SiteFooter` reduced to copyright + Privacybeleid, Disclaimer, Algemene voorwaarden (no logo, blurb or link columns). Updated `design-system`.

## [2026-11-12] update | Photo header & footer logo
`Hero` got an `image` prop (photo header, split on desktop, stacked on mobile); `/aanmelden` uses the photo of Robin & Aurinke and moved the form below the hero. `SiteFooter` now shows the full logo on a cream plate. Updated `design-system`.

## [2026-11-12] create | Design system in Svelte
Ported the OhLijf Design System artifact to Svelte 5 in `src/lib/ds/` (tokens scoped to `.ds`, Button, Input, Card, Badge, Sticker, RulesPanel, Hero, SiteHeader, SiteFooter + stories). Added `(ds)` route group and moved `/aanmelden` into it. Repaired Storybook (v10-only addons). Added Playwright tests for `/aanmelden`. New page `architecture/design-system.md`; updated `routes`, `ui-components`, `tech-stack`, `index`, `CLAUDE.md`.

## [2026-11-12] create | Aanmeldpagina & Systeme mock
Added `/aanmelden` (email signup with header + bullets) on branch `feature/aanmeldpagina`, and a `SYSTEME_MOCK` switch in `src/lib/systeme.ts` for local development. Updated `routes`, `systeme-io` and `CLAUDE.md` (env var + local setup via mise).

## [2026-11-12] update | Sync wiki with codebase
Brought the wiki in line with changes since April: Matomo replaced by Vercel Analytics/Speed Insights, webinar URL is now `webinar-oorzaak-hoofdpijn`, new `/workshop` page and podcast menu item, `/test` no longer promoted, Mailchimp inactive (Systeme.io handles marketing), Resend replaces Nodemailer. Rewrote `routes`, `ui-components`, `database`, `tech-stack`, `email-integrations`; updated `business-model`, `lead-magnets`, `index`; added `content/workshop`; fixed broken absolute source links in content pages. Also updated `CLAUDE.md` (analytics, funnel, env vars).

## [2026-04-10] ingest | Content Strategy & Copywriting
Extracted key narratives from the presentation layer (methode, ons, tips) and created dedicated content documentation, linking back to source files.

## [2026-04-10] ingest | Business & Architecture Expansion
Researched `src/` to expand wiki with `routes`, `ui-components`, `business-model`, `systeme-io`, and `the-huddle` documentation pages.

## [2026-04-10] ingest | Initial Setup
Bootstrapped the wiki schema, index, log, and foundational architecture documents.
