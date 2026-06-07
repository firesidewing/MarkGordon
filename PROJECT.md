# Mark Gordon — WordPress → Astro Migration

Living plan for converting markgordon.ca. Re-open this file to resume work without reloading full context.

**Stack:** Vercel · Astro · Bun · Svelte (islands) · Tailwind · *(Phase 2: React · Clerk · Turso)*

---

## Architecture

Two loosely coupled surfaces, split by Astro islands:

| Surface | Routes | Tech | When |
|---------|--------|------|------|
| **Marketing site** | `/`, `/about-mark`, `/blog`, `/keynote-speaker`, … | Astro + Svelte islands + Tailwind | **Now** |
| **Course platform** | `/courses/*`, `/account/*`, auth flows | React islands + Clerk (auth + billing) + Turso | **Later** |

**Clerk owns auth and billing** — no separate Stripe integration. Clerk Billing handles products, checkout, and entitlements; Turso holds course-specific state (lesson progress, completions). Stripe may sit behind Clerk as the payment processor, but you never wire it up directly.

```
src/
  content/
    blog/          ← 25 posts
    pages/         ← ~15 marketing pages
  components/
    layout/        ← Header, Footer, Nav (Astro)
    ui/            ← Buttons, cards, prose (Astro + Tailwind)
    islands/       ← Svelte: mobile nav, newsletter, testimonials carousel
  layouts/
    BaseLayout.astro
    BlogPost.astro
    MarketingPage.astro
  pages/
    index.astro
    blog/[...slug].astro
    [slug].astro   ← catch-all for static pages OR explicit routes
scripts/
  migrate-content.ts   ← output/ → src/content/, slug injection, image moves
output/                ← keep as migration source; do not serve directly
```

**Principle:** Rebuild layout and typography in Tailwind from visual reference (live site + screenshots). Do **not** port Elementor HTML/CSS. Markdown body is already clean.

---

## Content inventory (`output/`)

| Source | Count | Phase 1 action |
|--------|-------|----------------|
| `posts/` | 25 | Migrate → `src/content/blog/` |
| `pages/` (published) | 24 | Migrate ~15 marketing pages; defer auth/course pages |
| `pages/_drafts/` | 9 | Skip unless explicitly needed |
| `custom/elementor_library/` | 17 | **Reference only** (header logo, nav structure) |
| `custom/sfwd-courses/` | 4 | Phase 2 |
| `custom/sfwd-lessons/` | 14 | Phase 2 |
| `custom/ld-coupon/` | 1 | Phase 2 |
| Images | ~85 | Move to `src/assets/` or `public/` |

### URL mapping

Export folders use `YYYY-MM-DD-slug` but WordPress permalinks use `slug` only. Slugs live in `export.xml` (`wp:post_name`). Migration script must inject `slug` into frontmatter.

Examples:
- `output/pages/2023-01-26-home2/` → `/` (not `/home2/`)
- `output/pages/2012-09-21-about-mark/` → `/about-mark/`
- `output/posts/2013-04-29-the-hidden-jewel/` → `/the-hidden-jewel/` (posts at root, not `/blog/slug`)

### Phase 1 pages (migrate)

- [ ] `/` — from `home2` (hero, courses preview, book, keynote, coaching, testimonials, newsletter CTA)
- [ ] `/about-mark/`
- [ ] `/blog/` — listing (export body is empty; generate from collection)
- [ ] `/contact/`
- [ ] `/keynote-speaker/`
- [ ] `/workshop-facilitator/`
- [ ] `/relationship-leadership-coaching/`
- [ ] `/vlogs/`
- [ ] `/relationship-matters/` (book)
- [ ] `/blind-spot-assessment/`
- [ ] `/faith-community-packages/`
- [ ] `/book-now/`
- [ ] `/thank-you/`
- [ ] `/newsletter-signup/`
- [ ] `/products/` *(confirm still linked in nav)*

### Defer to Phase 2 (stub or redirect to WP temporarily)

- `/online-courses/`, `/courses/`, `/courses/[slug]/`
- `/registration/`, `/registration-success/`, `/profile/`, `/reset-password/`
- All `custom/sfwd-*` content

### Skip

- `elementor_library/` templates (except header reference)
- `_drafts/`
- `event-payments/` *(unless still in use)*

---

## Navigation (from `export.xml` → `main_navi`)

```
Online Courses | Videos | Relationship Matters Book | What I Offer ▾ | Contact ▾
  What I Offer: Online Courses, Faith Community Packages, Blind Spot Assessment,
                Keynote Speaker, Workshop Facilitator, Relationship & Leadership Coaching
  Contact: About Mark, Contact
```

Top bar: email + social icons (FB, Twitter/X, LinkedIn, Instagram, YouTube).

---

## Phase 1 — Marketing site

### 1.0 Scaffold
- [ ] Switch package manager to Bun (`bun install`, update scripts)
- [ ] `astro add tailwind svelte @astrojs/vercel`
- [ ] Path aliases (`@/components`, `@/layouts`, `@/content`)
- [ ] `src/styles/global.css` — Tailwind base + prose plugin

### 1.1 Design audit
- [ ] Screenshot live site: home, about, blog post, keynote, mobile nav
- [ ] Extract design tokens: fonts, colors, spacing, button styles, section patterns
- [ ] Document in `src/styles/tokens.css` or Tailwind theme extension
- [ ] Identify reusable section patterns (hero, card grid, testimonial slider, CTA band)

> **Visual parity goal:** Same look, new CSS. Elementor is layout reference only.

### 1.2 Content pipeline
- [ ] Write `scripts/migrate-content.ts`:
  - Parse `export.xml` → slug map (post_name → folder)
  - Copy markdown to `src/content/{blog,pages}/`
  - Inject frontmatter: `slug`, `draft: false`, preserve `title`, `date`, `categories`, `tags`
  - Move `images/` → `src/assets/content/[slug]/` and rewrite `![](images/...)` paths
  - Strip `<!--more-->` (use as excerpt split or remove)
  - Normalize YouTube embeds → frontmatter `videoId` or shared `<YouTube>` component
- [ ] Define Astro content collections + Zod schemas
- [ ] Run migration; verify 25 posts + 15 pages build

### 1.3 Layout shell
- [ ] `BaseLayout.astro` — meta, fonts, global styles
- [ ] `Header.astro` — logo, top bar (email + social), main nav
- [ ] `MobileNav.svelte` — island for hamburger + dropdowns
- [ ] `Footer.astro` — newsletter snippet, links, social, copyright

### 1.4 Page templates
- [ ] `MarketingPage.astro` — title hero + prose body + optional sidebar CTA
- [ ] `BlogPost.astro` — title, date, categories, prose, related posts
- [ ] `BlogIndex.astro` — paginated post grid
- [ ] Shared components: `Button`, `Section`, `Card`, `Testimonial`, `YouTube`, `HubSpotCTA`

### 1.5 Build pages (in order)
- [ ] **Homepage** — highest complexity; decompose `home2` markdown into structured sections/components (don't dump raw markdown)
- [ ] **About, Contact** — simpler prose pages
- [ ] **Service pages** — keynote, workshop, coaching (shared template)
- [ ] **Book page** — relationship-matters
- [ ] **Blog index + posts**
- [ ] **Remaining** — vlogs, blind-spot, faith-community, book-now, thank-you, newsletter

### 1.6 Interactive bits (Svelte islands — only where needed)
- [ ] Mobile navigation
- [ ] Testimonials carousel (homepage)
- [ ] Newsletter form *(provider TBD: existing WP plugin? Mailchimp? HubSpot?)*
- [ ] Blind spot assessment *(likely external embed — confirm)*

### 1.7 SEO & redirects
- [ ] `astro.config.mjs` → `site: 'https://www.markgordon.ca'`
- [ ] Per-page `<title>`, description, OG image
- [ ] `public/robots.txt`, sitemap ( `@astrojs/sitemap` )
- [ ] `vercel.json` redirects: `/home2` → `/`, preserve all existing post/page slugs
- [ ] Course URLs → temporary redirect to WP or "coming soon" page

### 1.8 Deploy
- [ ] Vercel project + preview deploys on PR
- [ ] Point staging subdomain; visual QA against live site
- [ ] Cutover checklist (DNS, redirects, search console)

---

## Phase 2 — Course platform *(do not start until Phase 1 ships)*

- [ ] React integration in Astro (`@astrojs/react`)
- [ ] Clerk auth (sign-in, sign-up, profile, session on course routes)
- [ ] Clerk Billing — define course products/plans, checkout, entitlements (gate lesson access by Clerk feature/plan)
- [ ] Turso schema: lesson progress, completions, course metadata *(not payments — Clerk owns that)*
- [ ] Course catalog UI at `/courses/` with Clerk `<PricingTable>` or custom buy buttons
- [ ] Lesson player + progress tracking (sync progress to Turso; check entitlement via Clerk)
- [ ] Migrate `sfwd-courses` + `sfwd-lessons` content
- [ ] Replace WP registration/profile/reset-password flows (all via Clerk)
- [ ] Coupons — map `ld-coupon` to Clerk promo codes or Billing discounts *(confirm Clerk supports your coupon model)*

---

## Content cleanup notes

Issues spotted in export — handle in migration script or templates:

| Issue | Example | Fix |
|-------|---------|-----|
| `<!--more-->` | blog posts | Split excerpt or strip |
| Old YouTube iframes | `http://youtube.com/embed/...` | `YouTube.svelte` with https + responsive |
| Mashed inline links | homepage CTAs on one line | Restructure into component props in homepage |
| Relative image paths | `![](images/foo.png)` | Rewrite to asset imports |
| Empty blog page body | `pages/.../blog/` | Generate listing from collection |
| Lorem ipsum | `courses/index.md` | Replace or defer to Phase 2 |

---

## Session prompts (copy-paste to resume)

**Scaffold:** "Do PROJECT.md Phase 1.0 — Bun, Tailwind, Svelte, Vercel adapter."

**Content:** "Do PROJECT.md Phase 1.2 — migration script from output/ and export.xml."

**Layout:** "Do PROJECT.md Phase 1.3 — header/footer matching live site; use elementor header export for nav items only."

**Homepage:** "Do PROJECT.md Phase 1.5 homepage — decompose home2 content into section components."

**Blog:** "Do PROJECT.md Phase 1.5 blog — collection, index, post template, all 25 posts."

---

## Open decisions

- [ ] Newsletter provider (keep WP plugin embed vs Mailchimp vs HubSpot forms)
- [ ] Blind spot assessment — external tool embed URL?
- [ ] Contact form — static mailto vs form service?
- [ ] Course URLs during Phase 1 — redirect to live WP or placeholder page?
- [ ] `/products/` and `/event-payments/` — still needed?
- [ ] Clerk Billing plan structure — one product per course vs bundles (e.g. Faith Community Packages)
- [ ] Clerk promo codes vs custom coupon logic for legacy `ld-coupon` codes

---

## Current state

- Astro 6 minimal starter (`src/pages/index.astro` placeholder)
- WordPress export in `output/` (clean markdown, no Elementor CSS)
- `export.xml` available for slug/URL mapping
- Live reference: https://www.markgordon.ca/

**Next action:** Phase 1.0 scaffold, then 1.1 design audit (screenshots before writing CSS).
