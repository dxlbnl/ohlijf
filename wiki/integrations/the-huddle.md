---
tags:
  - integrations
  - memberships
date: 2026-04-10
---

# The Huddle Integration

`src/lib/thehuddle/api.ts`

To deliver the online courses and build the community, OhLijf interfaces with **The Huddle** (`api-v3.thehuddle.nl`). The integration is highly custom, attempting to bridge system state via Single Sign-On (SSO).

## Environment Variables
- `THEHUDDLE_CLIENT_ID`
- `THEHUDDLE_TENANT_ID`
- `THEHUDDLE_CLIENT_SECRET`

## Workflows

### 1. Single Sign On (SSO) & Internal State
The `login()` function fetches a Bearer token via standard password grant, then calls `/users/single-sign-on` to generate a secure SSO link hash for the target user. It uses cookies via `tough-cookie` to capture web sessions.

### 2. Administrator Emulation
Since The Huddle's V3 API requires a CSRF token for user creation that is only available within the browser UI, the script performs a sophisticated workaround:
- After SSO authentication finishes, it curls the `https://ohlijf.thehuddle.nl/admin/v2` page directly.
- It parses the response HTML with `JSDOM` to extract the `_token` meta tag. 
- The extracted `csrfToken` is injected into the POST headers to successfully hit the `createUser` endpoint without full enterprise API access.

### 3. User Management
The API library (`api.ts`) surfaces explicit methods:
- `getOrCreateUser(user)` 
- `findUserByEmail(email)`
- `updateUserLevels(userId, levelIds)`
