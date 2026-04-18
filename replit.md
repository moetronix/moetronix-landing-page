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

- **Nextteam Landing Page** (`artifacts/nextteam-landing`) — React + Vite + Tailwind single-page premium SaaS agency landing page at `/`. Includes a sticky navbar, gradient hero, growth/trust section, problem cards, approach grid, tools, portfolio, pricing estimator, FAQ, CTA, and footer.
- **API Server** (`artifacts/api-server`) — shared Express API service at `/api`.
- **Canvas** (`artifacts/mockup-sandbox`) — design/mockup preview sandbox at `/__mockup`.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/nextteam-landing run dev` — run the Nextteam landing page locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
