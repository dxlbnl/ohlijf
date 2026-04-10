---
tags:
  - architecture
  - database
date: 2026-04-10
---

# Database & ORM

OhLijf utilizes a serverless PostgreSQL database strategy.

## Infrastructure
- **Provider**: Vercel Postgres (`@vercel/postgres`)
- **Connection**: Managed via standard `pg` and `postgres` Node drivers.

## ORM Details
- **Library**: Drizzle ORM (`drizzle-orm`)
- **Migration & Management**: Handled via `drizzle-kit` using the `drizzle.config.ts` configuration file found in the project root.
