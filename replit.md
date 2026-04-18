# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- **Moetronix Group** (`artifacts/nextteam-landing`) — React + Vite + Tailwind single-page premium IT solutions landing page at `/`. Includes a sticky navbar, premium gradient hero, client marquee, services grid, About section, advantage section, work process, contact form, CTA, and footer. Contact details: `info@moetronixgroup.com`, `314-280-9043`, `3320 Locust St, Saint Louis, MO`.
- **API Server** (`artifacts/api-server`) — shared Express API service at `/api`.
- **Canvas** (`artifacts/mockup-sandbox`) — design/mockup preview sandbox at `/__mockup`.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/nextteam-landing run dev` — run the Moetronix Group landing page locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
