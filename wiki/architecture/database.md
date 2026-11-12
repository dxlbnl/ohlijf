---
tags:
  - architecture
  - database
date: 2026-11-12
---

# Database & ORM

## Infrastructure
- **Provider**: Neon serverless Postgres
- **Driver**: `@neondatabase/serverless` in HTTP mode (`src/lib/database.ts`, env `POSTGRES_URL`)

## ORM
- **Library**: Drizzle ORM, schema in `src/lib/schema.ts`
- **Migrations**: `drizzle-kit` via `drizzle.config.ts`, which reads `.env.development.local`

## Tables
- `test_result` — assessment submissions (`name`, `email`, `note`, `results` jsonb, `created_at`); written by `/test/resultaat`.
- `contact_log` — contact form messages (`name`, `email`, `message`, `created_at`); written by `/contact`.
