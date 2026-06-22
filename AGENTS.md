# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Static marketing site for Mark Gordon (markgordon.ca) built with **Astro 7**, **Svelte 5 islands**, **React islands** (course platform), and **Tailwind CSS 4**. Phase 2B adds **Clerk** (auth + billing) and **Turso** (enrollments, 365-day expiry). Copy `.env.example` → `.env` for local auth/checkout; Turso optional until testing enrollments.

### Package manager

This repo uses **Bun** (`packageManager: bun@1.0.24` in `package.json`). Ensure Bun is on `PATH`:

```bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

If Bun is missing: `curl -fsSL https://bun.sh/install | bash`

Node **≥ 22.12.0** is required (`.node-version` pins 22.12.0).

### Common commands

| Task | Command |
|------|---------|
| Install deps | `bun install` |
| Dev server | `bun run dev` → http://localhost:4321 |
| Production build | `bun run build` |
| Preview build | `bun run preview` |
| WP content migration | `bun run migrate` (needs `export.xml` + `output/`) |
| Turso schema | `bun --env-file=.env run db:migrate` (once per database; creates `enrollments` etc.) |

See `PROJECT.md` for migration architecture and content inventory.

### Lint / test

No lint or test scripts are configured in `package.json`. Validate changes with `bun run build` and manual route checks.

### Dev server

Run `bun run dev` in a tmux session (port **4321**). The server hot-reloads Astro and Svelte changes.

### External integrations (no local setup)

HubSpot forms, Riddle.com embed (Blind Spot Assessment), and YouTube embeds require outbound network access but no env vars.
