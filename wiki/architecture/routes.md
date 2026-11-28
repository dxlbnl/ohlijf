---
tags:
  - architecture
  - routing
date: 2026-11-12
---

# Routing Architecture

OhLijf uses SvelteKit **layout groups** to separate the public marketing site from tool/webhook routes without affecting the URL structure. All routes live in `src/routes/`.

## `(site)` Group
Shares `+layout.svelte`, which renders `Navigation` (from `menu.yaml`), the `Footer`, default SEO meta tags, and injects Vercel Analytics + Speed Insights. Adding `?focus` to any URL hides the navigation (useful for distraction-free campaign links). `+layout.server.ts` pre-validates the `mailingform` and `trainingform` superforms for every page.

| Route | Type | Purpose |
|---|---|---|
| `/` | `+page.svelte` | Homepage; CTAs to the webinar, testimonials, `Stats`, `WieZijnWij` |
| `/methode` | markdown | The [Trust-Feel-Release method](../content/methode.md) |
| `/ons` | markdown | [About Robin & Aurinke](../content/about-us.md) |
| `/training` | markdown + components | Sales page for the Grote Vriendelijke Hersteltraining (menu links to Systeme.io instead) |
| `/workshop` | markdown | [Workshops & presentations](../content/workshop.md) for events and organisations |
| `/tips`, `/tips/download` | markdown + form | [Women's Health lead magnet](../content/lead-magnets.md) |
| `/test/...` | svelte | [Assessment](../content/lead-magnets.md); still live but no longer in the menu |
| `/contact` | svelte + action | Contact form → `contact_log` table + `mailHome()`; honeypot field `other` |
| `/info`, `/privacy`, `/disclaimer`, `/algemene-voorwaarden` | markdown | Info & legal |
| `[...path]` | svelte | Custom 404 page |

Homepage form actions (`+page.server.ts`): `mailinglist` (Systeme tag `nieuwsbrief`) and `trainingform` (tag `interesse` + notification mail).

### Menu (`menu.yaml`)
Podcast (Springcast, with Spotify/Apple sub-items) · Methode · Training (`ohlijf.systeme.io/trainingen`, highlighted) · Webinar (`ohlijf.systeme.io/webinar-oorzaak-hoofdpijn`) · Workshop · Over ons · Contact.

## `(ds)` Group
Pages built with the [new design system](design-system.md): own layout with `SiteHeader`/`SiteFooter`, loads `$lib/ds/styles.css` instead of `app.css`.
- `/meditatie-veilig` — signup (formerly `/aanmelden`) for the free meditation "Even niet op je hoede" (photo Hero, recognition list + story, sticky Card form with first name + email) → Systeme.io contact with `first_name`, tags `nieuwsbrief` + `meditatie-veilig anders`.
- `/gamechanger` — sales page for the 3-week Game Changer Experience, ported from `ohlijf.systeme.io/gamechanger`. Static page (no form): every CTA goes to the Systeme.io order form `game-changer-7dsg43hs` (`ctaUrl`); payment and the purchase tag are handled in Systeme.io, not in this repo. Its `+page.ts` returns `{ salespage: true }`, so the `(ds)` layout hides the site header/menu (Robin: no distraction on sales pages); the promo bar carries an unlinked logo instead. Campaign settings (`ctaUrl`, start date, price, value) sit at the top of `+page.svelte`. Since the launch offer ended (2026-11-28) the page has no promo bar or countdowns and shows the regular price €199 (value €447); to run a new timed offer, re-add `Countdown` (see git history of the page). Review screenshots (Hester, Sabine) are kept as images on purpose; only reviews that were plain text on the original (Marcella, Mia) are typed. Photos and icons follow the original placement and live in `static/images/ds/gamechanger/`.
- `/hohoho` — **thank-you page after buying the Game Changer** (the Systeme.io order form should redirect here): on top a thank-you block (`h1` "Dankjewel voor je aanmelding!", confirmation mail, start 25 January), a short transition line, then the signup for the free 5-day December challenge "Ho, ho, ho, hoofdpijn!" for ADHD women (5 audios via a private Telegram group). No menu (load returns `salespage: true`). Own dark-green hero with the photo of Robin & Aurinke in Christmas hats (`static/images/ds/hohoho/`, JPEG only, resized with `sips`). Form (first name + email) → Systeme.io tags `nieuwsbrief` + `hohoho`. `telegramUrl` at the top of `+page.svelte`: when set, the success state shows a button to the group, otherwise "check je inbox". Tag `hohoho` = 2311439 (`addOrUpdateContact` skips tag ID 0, for tags that are not set up yet).

## `(tools)` Group
- `/rust-aankoop` — `POST` webhook from a Systeme.io funnel (`customer.sale.completed`). Logs into [The Huddle](../integrations/the-huddle.md) and creates the user or adds level `57520`.
- `/og` — dynamic OpenGraph images via `satori` + `@resvg/resvg-js` (`/og/preview` to inspect).
- `/og/stats/*` — legacy proxies to old self-hosted Matomo/Plausible analytics; no longer referenced, candidates for removal.

## Markdown pages
`.md` files are processed by mdsvex and wrapped in `src/lib/layouts/default.svelte`. Supported frontmatter: `titel`, `omschrijving`, `foto` (image name under `static/images`), `fotoPositie`, `sidebar` (default `true`), `testBanner`, `meta`, `style`.
