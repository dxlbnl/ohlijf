---
tags:
  - concepts
  - email
date: 2026-11-12
---

# Email Integrations

## Notification Emails
- **Transport**: Resend (`src/lib/mail.ts`, env `RESEND_API_KEY`)
- `mailHome(subject, text)` sends plain-text notifications to `info@ohlijf.com`, currently from `ohlijf@lab.dxlb.nl`.
- Used by: contact form, training interest form, test results.
- MJML is still a dependency but not used by the current mail code.

## Marketing & Newsletter
- **Provider**: [Systeme.io](../integrations/systeme-io.md) — contacts are tagged (`nieuwsbrief`, `interesse`, test outcome tags) and Systeme.io handles the email automations.
- **Mailchimp** was removed in November 2026 (code and packages); `MAILCHIMP_API_KEY` is no longer needed.
