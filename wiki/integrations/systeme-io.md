---
tags:
  - integrations
  - crm
date: 2026-04-10
---

# Systeme.io Integration

`src/lib/systeme.ts`

The platform uses Systeme.io as its central CRM and funnel builder. OhLijf interfaces with it server-side to manage contact records based on site activity (e.g., taking the test).

## Authentication
Interacts via the `https://api.systeme.io/api/` endpoint using the `X-API-Key` header populated by the private env variable `SYSTEME_API_KEY`.

## Operations Supported
The integration exposes `addOrUpdateContact`.
It checks if a contact exists using `getContact`, patches fields via `updateContact`, or provisions them via `createContact`.

### Tagging Ecosystem
Tags are crucial to Systeme.io's email automation. The codebase enforces strict typings to map user intent to internal CRM lists.

Supported Enums mapping to specific Tag IDs:
- `interesse` (1151851)
- `nieuwsbrief` (1076903) 
- `MBS` (868210)
- `Geen MBS` (868215)
- `Vermoeidheid` (868216)
- `Pijn` (868217)
- `Anders` (868214)
