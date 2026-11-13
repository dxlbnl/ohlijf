---
tags:
  - content
  - marketing
  - lead-magnets
date: 2026-11-12
---

# Marketing Content & Lead Magnets

The site utilizes specialized content pages to capture different segments of traffic. Since mid-2026 the main conversion goal is the free webinar (`ohlijf.systeme.io/webinar-oorzaak-hoofdpijn`).

## The Women's Health Funnel
> 🔗 **Source File:** [src/routes/(site)/tips/+page.md](../../src/routes/(site)/tips/+page.md)

This page is specifically targeted at traffic incoming from a published article in **Women's Health** magazine.
- **The Hook**: Acknowledges the reader's likely familiarity with the author's story in the magazine ("mijn ‘Fit Journey’").
- **The Value Add**: Offers an exclusive PDF download (`/tips/download`) containing practical pain-relief tips.
- **The Sell**: Soft-pitches a free 30-minute discovery call and introduces the upcoming online training starting July 1st.

## The Assessment Engine
> 🔗 **Source File:** [src/routes/(site)/test/+page.svelte](../../src/routes/(site)/test/+page.svelte)

A 13-question interactable test advertised to take "4 minutes", designed to highlight if the user's pain is brain-induced (MBS) rather than structurally induced.
- **Copy Goal**: To provide a definitive "Yes, we can help you" or "No, you should see a doctor for structural damage."
- **Conversion**: The results are withheld and sent via email; contacts are tagged in Systeme.io and stored in the `test_result` table.
- **Status (2026-11)**: Still live, but removed from the menu and banners. Only `/methode` and `/tips` still link to it.
