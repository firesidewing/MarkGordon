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

**Clerk owns auth and billing** — no separate Stripe integration. Clerk Billing handles products, checkout, and purchase records; Turso holds course-specific state (lesson progress, completions, **365-day access expiry**). Stripe may sit behind Clerk as the payment processor, but you never wire it up directly.

```
src/
  content/
    blog/          ← 25 posts
    pages/         ← ~15 marketing pages
    courses/       ← Phase 2: course + lesson content
  components/
    layout/        ← Header, Footer, Nav (Astro)
    ui/            ← Buttons, cards, prose (Astro + Tailwind)
    sections/      ← CourseCard, etc.
    courses/       ← Phase 2: catalog, sales, player shells
    islands/       ← Svelte: mobile nav, newsletter, testimonials, CourseTabs
  layouts/
    BaseLayout.astro
    BlogPost.astro
    MarketingPage.astro
    CourseLayout.astro   ← Phase 2
  pages/
    index.astro
    blog/[...slug].astro
    online-courses.astro
    courses/
      index.astro
      [slug]/
        index.astro      ← sales page
        [lesson].astro   ← gated player (Phase 2C)
    account/
      courses.astro      ← my courses (Phase 2C)
    [slug].astro   ← catch-all for static pages OR explicit routes
public/
  course-materials/    ← Phase 2: PDF workbooks
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

- [x] `/` — from `home2` (hero, courses preview, book, keynote, coaching, testimonials, newsletter CTA)
- [x] `/about-mark/`
- [x] `/blog/` — listing (export body is empty; generate from collection)
- [x] `/contact/`
- [x] `/keynote-speaker/`
- [x] `/workshop-facilitator/`
- [x] `/relationship-leadership-coaching/`
- [x] `/vlogs/`
- [x] `/relationship-matters/` (book)
- [x] `/blind-spot-assessment/`
- [x] `/faith-community-packages/`
- [x] `/book-now/`
- [x] `/thank-you/`
- [x] `/newsletter-signup/`
- [x] `/products/` *(confirm still linked in nav)*

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
- [x] Switch package manager to Bun (`bun install`, update scripts)
- [x] `astro add tailwind svelte @astrojs/vercel`
- [x] Path aliases (`@/components`, `@/layouts`, `@/content`)
- [x] `src/styles/global.css` — Tailwind base + prose plugin

### 1.1 Design audit
- [x] Screenshot live site: home, about, blog post, keynote, mobile nav
- [x] Extract design tokens: fonts, colors, spacing, button styles, section patterns
- [x] Document in `src/styles/tokens.css` or Tailwind theme extension
- [x] Identify reusable section patterns (hero, card grid, testimonial slider, CTA band)

> **Visual parity goal:** Same look, new CSS. Elementor is layout reference only.

### 1.2 Content pipeline
- [x] Write `scripts/migrate-content.ts`:
  - Parse `export.xml` → slug map (post_name → folder)
  - Copy markdown to `src/content/{blog,pages}/`
  - Inject frontmatter: `slug`, `draft: false`, preserve `title`, `date`, `categories`, `tags`
  - Move `images/` → `src/assets/content/[slug]/` and rewrite `![](images/...)` paths
  - Strip `<!--more-->` (use as excerpt split or remove)
  - Normalize YouTube embeds → frontmatter `videoId` or shared `<YouTube>` component
- [x] Define Astro content collections + Zod schemas (`src/content.config.ts`)
- [x] Run migration; verify 25 posts + 15 pages build

### 1.3 Layout shell
- [x] `BaseLayout.astro` — meta, fonts, global styles
- [x] `Header.astro` — logo, top bar (email + social), main nav
- [x] `MobileNav.svelte` — island for hamburger + dropdowns
- [x] `Footer.astro` — newsletter snippet, links, social, copyright

### 1.4 Page templates
- [x] `MarketingPage.astro` — title hero + prose body + optional sidebar CTA
- [x] `BlogPost.astro` — title, date, categories, prose, related posts
- [x] `BlogIndex.astro` — paginated post grid
- [x] Shared components: `Button`, `Section`, `Card`, `Testimonial`, `YouTube`, `HubSpotCTA`

### 1.5 Build pages (in order)
- [x] **Homepage** — highest complexity; decompose `home2` markdown into structured sections/components (don't dump raw markdown)
- [x] **About, Contact** — simpler prose pages
- [x] **Service pages** — keynote, workshop, coaching (shared template)
- [x] **Book page** — relationship-matters
- [x] **Blog index + posts**
- [x] **Remaining** — vlogs, blind-spot, faith-community, book-now, thank-you, newsletter

### 1.6 Interactive bits (Svelte islands — only where needed)
- [x] Mobile navigation
- [x] Testimonials carousel (homepage)
- [x] Newsletter form — HubSpot embed (portal `23748604`, form `14655439-…`)
- [x] Blind spot assessment — Riddle embed (`yMIVAotF`), fallback to blindspots.me

### 1.7 SEO & redirects
- [x] `astro.config.mjs` → `site: 'https://www.markgordon.ca'`
- [x] Per-page `<title>`, description, OG image
- [x] `public/robots.txt`, sitemap ( `@astrojs/sitemap` )
- [x] `vercel.json` redirects: `/home2` → `/`, preserve all existing post/page slugs
- [x] Course URLs → coming-soon stubs (`/online-courses/`, `/courses/*`, auth routes)

### 1.8 Deploy

**Vercel project:** `short-matter` · team `firesidewings-projects` · GitHub `firesidewing/MarkGordon`  
**Preview URL:** https://short-matter.vercel.app

- [x] Vercel project linked + GitHub connected → preview deploys on every PR
- [x] Initial production deploy live at `short-matter.vercel.app`
- [ ] Push latest to `origin` so Vercel builds from Git (not just CLI)
- [x] Staging subdomain `staging.markgordon.ca` added in Vercel — **DNS pending:** `A staging.markgordon.ca 76.76.21.21`
- [ ] Visual QA on staging vs live site
- [ ] Production cutover (DNS, redirects, Search Console)

#### Vercel settings (confirm in dashboard)

| Setting | Value |
|---------|-------|
| Framework | Astro |
| Install | `bun install` |
| Build | `bun run build` |
| Output | `.vercel/output` (adapter handles this) |
| Node | ≥ 22.12 (`package.json` engines) |
| Lockfile | `bun.lockb` |

Preview deployments are automatic on PRs once GitHub is connected. Each PR gets a unique `*.vercel.app` URL in the PR checks.

#### Staging subdomain

1. Vercel → Project → Settings → Domains → add `staging.markgordon.ca`
2. DNS (at registrar): `CNAME staging → cname.vercel-dns.com`
3. Optional: assign staging to a `staging` branch (Settings → Git → Production Branch stays `master`/`main`)
4. Run visual QA on staging before touching production DNS

#### Visual QA checklist (staging vs https://www.markgordon.ca)

| Page | Routes | Check |
|------|--------|-------|
| Home | `/` | Hero, course cards, testimonials carousel, newsletter CTA |
| About | `/about-mark/` | Hero overlay, prose, discovery CTA |
| Blog index | `/blog/` | Pagination, category links |
| Blog post | `/the-hidden-jewel/` | Prose, sidebar categories, related posts |
| Keynote | `/keynote-speaker/` | Hero, bullet grids, testimonial |
| Contact | `/contact/` | HubSpot discovery link, email |
| Blind spot | `/blind-spot-assessment/` | Riddle embed loads |
| Newsletter | `/newsletter-signup/` | HubSpot form submits |
| Mobile | any | Hamburger nav, dropdowns, top bar |
| Course stubs | `/online-courses/`, `/courses/*` | Coming-soon page (not 404) |
| Redirect | `/home2` | 301 → `/` |

#### Production cutover checklist

- [ ] Final visual QA on staging passes
- [ ] `bun run build` clean locally
- [ ] Vercel production deploy green
- [ ] DNS: `www.markgordon.ca` CNAME → `cname.vercel-dns.com` (or A records per Vercel docs)
- [ ] DNS: apex `markgordon.ca` → Vercel (A record or redirect to www)
- [ ] SSL certificates issued (automatic on Vercel)
- [ ] Spot-check 10+ legacy post URLs (slug-only, no `/blog/` prefix)
- [ ] `vercel.json` redirect `/home2` → `/` works
- [ ] `robots.txt` + `/sitemap-index.xml` reachable
- [ ] Google Search Console: add property, submit sitemap, request indexing for `/`
- [ ] HubSpot forms + Riddle embed work on production domain
- [ ] Social/OG previews (share a blog post link)
- [ ] Keep WordPress live 1–2 weeks as rollback; then decommission

---

## Phase 2 — Course platform *(do not start until Phase 1 ships)*

WordPress ran **LearnDash** (`sfwd-courses`, `sfwd-lessons`) with **Stripe checkout** (via LearnDash), **WP user accounts**, and **365-day course access**. We replace that with **Clerk** (auth + billing) and **Turso** (progress + access expiry). See `DESIGN.md` for tokens; course UI has its own register below.

### What existed on WordPress

**User flow:**

```
Browse catalog → Buy Now on course → /registration/ (WP account)
  → Stripe payment (LearnDash pay-now)
  → /registration-success/ (set password, ld-course-list)
  → /courses/[slug]/ → gated lessons
```

**Routes:**

| Route | Purpose |
|-------|---------|
| `/online-courses/` | Marketing catalog (primary) |
| `/courses/` | Alternate catalog (similar content; had lorem ipsum) |
| `/courses/[slug]/` | Course landing + enrollment |
| `/courses/[slug]/[lesson-slug]/` | Gated lesson player |
| `/registration/` | LearnDash registration (`ld-registration`) |
| `/registration-success/` | Login + my courses (`ld-login`, `ld-course-list`) |
| `/profile/` | LearnDash profile |
| `/reset-password/` | LearnDash password reset |

**Top bar:** Login → `/registration/` (replace with Clerk in Phase 2).

### Course inventory

| Course | Slug | Price | Lessons | Access |
|--------|------|-------|---------|--------|
| Relationship Matters | `relationship-matters` | $79 | 6 (intro + 5 pillars) | 365 days |
| Godfidence | `godfidence-building-confidence-that-lasts-forever` | $29 | 4 | 365 days |
| Understanding Anger | `understanding-anger` | $29 | 2 | 365 days |
| Punching Shame in the Face | `punching-shame-in-the-face` | $29 | 1 in export *(marketing says 2 videos)* | 365 days |

**Lesson content shape:** short intro prose, **YouTube URL**, optional **PDF workbook** link. Relationship Matters also had a **course-level materials list** (all 5 pillar PDFs on the course page).

**Relationship Matters lesson order:**

1. `introduction-to-relationship-matters`
2. `relationship-matters-pillar-one` … `pillar-five`

**Not used on WP (skip):** 0 quizzes, 0 topics, 0 groups. Certificate Elementor template exists but **none assigned** to courses. No prerequisites, drip dates, or seat limits. Lesson progression was enabled in LD but without quizzes it was weak; free navigation at launch is fine.

**Coupon in export:** `Loyal15` — 15% off all courses, expired ~Jun 2024. Map to Clerk promo if still needed.

**Content source files:**

- `output/custom/sfwd-courses/` — 4 course markdown files
- `output/custom/sfwd-lessons/` — 14 lesson markdown files
- `export.xml` — pricing, lesson order (`ld_course_steps`), PDF URLs, Stripe product IDs

**Content audit before launch:**

- [ ] Confirm Punching Shame second lesson on live WP (export has only `shadow-boxing-punching-shame-in-the-face`)
- [ ] Support **multiple videos per lesson** (Pillar Two has 2 YouTube URLs in export)
- [ ] Reconcile 13 `sfwd-lessons` posts in XML vs 14 markdown files in `output/`

### Current Astro state (Phase 1)

- Homepage previews: `CourseCard.astro`, `CourseTabs.svelte`, data in `src/data/home.ts` → links to `/online-courses/`
- `/online-courses/`, `/courses/`, `/courses/[slug]/` → `ComingSoon` stubs
- `/registration/`, `/profile/`, `/registration-success/`, `/reset-password/` → stubs
- No Clerk, React, Turso, or lesson player yet

### Target content model

Migrate export → `src/content/courses/` (collection or structured data):

```ts
Course {
  slug, title, subtitle, price, badge?,
  description, bullets[], coverImage,
  accessDays: 365,
  lessons: Lesson[]
}
Lesson {
  slug, title, order, body,
  videoUrls: string[],      // support multiple per lesson
  downloads?: { label, url }[]
}
```

Extend `scripts/migrate-content.ts` to parse `export.xml` for lesson order, pricing, and PDF URLs (markdown alone is incomplete).

### Feature parity

| Feature | WP (LearnDash) | Our plan | Status |
|---------|----------------|----------|--------|
| 4 paid courses ($79 / $29) | ✓ | Clerk Billing one-time products | Planned |
| 365-day access | ✓ | Turso `purchased_at` + `expires_at` | **Must implement** — Clerk entitlements alone are typically permanent |
| Course catalog | `/online-courses/`, `/courses/` | Rebuild catalog; canonical URL TBD | Planned |
| Course sales pages | `/courses/[slug]/` | Same | Planned |
| Gated video lessons | YouTube | Player + entitlement check | Planned |
| PDF workbooks | Per-lesson + RM course materials | `public/course-materials/`; links on gated pages | Planned |
| Register / login | `/registration/`, header Login | Clerk + `UserButton` in top bar | Planned |
| My courses | `ld-course-list` | `/account/courses` | Planned |
| Lesson progress | LD completion | Turso | Planned |
| Coupons | `Loyal15` (expired) | Clerk promo codes | Optional |
| Quizzes, certificates, groups | Not used | Skip | N/A |

**Gaps to explicitly build (not optional for parity):**

1. **365-day expiry** — store `purchased_at` / `expires_at` in Turso; gate on `now < expires_at` in addition to Clerk purchase record
2. **Lesson URL redirects** — preserve `/courses/[course]/[lesson]/` permalinks
3. **`/courses/` vs `/online-courses/`** — pick canonical catalog; 301 the other
4. **Header Login** — `TopBar.astro` → Clerk sign-in / user menu
5. **RM course materials block** — aggregate PDF list on course page, not only per-lesson
6. **Legacy WP enrollments** — migration path or clean break (decision still open)

### Infrastructure decisions

| Decision | Choice | Notes |
|----------|--------|-------|
| Access duration | **365 days** | Matches LearnDash; enforce in Turso, not Clerk alone |
| PDF hosting | **`public/course-materials/`** for v1 | ~6 small static PDFs; WP used direct `wp-content/uploads` URLs anyway. Link only on gated lesson pages = practical parity. Vercel Blob later if signed/expiring URLs or admin uploads needed |
| Payments | **Clerk Billing** | No direct Stripe integration; Stripe may sit behind Clerk |
| Progress / expiry | **Turso** | Lesson completions + enrollment expiry dates |
| Auth | **Clerk** | Replaces WP registration, profile, reset-password |

### Course UI — design direction

**North star: "The Studio, not the syllabus."** Premium = editorial confidence, calm layout, one focal point at a time, real copy and video. Same tokens as `DESIGN.md` (cobalt, Montserrat + Open Sans, cool neutrals, pill CTAs). **Not** a generic LMS skin.

**Avoid (LMS template tells):** identical course card grids, purple/gradient heroes, "Start your journey" copy, progress rings/badges/streaks, numbered chapter scaffolding (01/02/03), nested cards in the player, stock thumbnails, dashboard sidebar clichés.

#### Register split

| Surface | Register | Tone |
|---------|----------|------|
| Catalog + sales pages | **Brand** (see `DESIGN.md`) | Editorial, persuasive, cobalt bands |
| Lesson player + account | **Product** (warm, not cold) | Cinema-first, minimal chrome, sentence-case prose |

#### Catalog (`/online-courses/`)

- Featured course (Relationship Matters): large asymmetric layout — copy + cover/still, price as quiet detail
- Secondary courses: evolve `CourseCard` DNA (dark header, cobalt checks); max 2 columns, not a 4-up grid
- Mini-courses: keep `CourseTabs` pattern; refine styling only

#### Course sales page (`/courses/[slug]/`)

- Long-form persuasion: display title, subtitle, single primary CTA (price secondary)
- 1–2 testimonials, typographic curriculum list (not locked-module icons)
- Workbook links as simple text + icon, not a "Resources" card grid
- Sticky purchase bar on mobile only

#### Lesson player

- **Video ~70% of viewport** on desktop; no nested cards around player
- Slim sidebar: lesson list only; cobalt indicator for current lesson; no progress % gamification
- Lesson intro prose (max ~65ch), download link, "Next lesson →"
- Mobile: full-width video; lesson list as bottom sheet or horizontal chips
- Multi-video lessons: stacked players or Part 1 / Part 2 tabs

```
┌─────────────────────────────────────────────────────┐
│  [logo]                         Relationship Matters ▾│
├──────────────────────────────┬──────────────────────┤
│      VIDEO (16:9, large)     │  Lesson 3 of 6       │
│                              │  ○ Intro  ● Pillar 2 │
├──────────────────────────────┴──────────────────────┤
│  Lesson intro · [Download workbook] · [Next lesson →]│
└─────────────────────────────────────────────────────┘
```

**Evolve `CourseCard` for catalog/sales; do not reuse in the player** (dark header + centered price reads "pricing table," wrong for enrolled experience).

#### My courses (`/account/courses`)

- Wide horizontal rows: thumb, title, "Continue →" (resume last lesson)
- Quiet expiry line: "Access until Mar 12, 2027"
- Empty state in Mark's voice + link to catalog

#### Auth / checkout

- Clerk components styled to match: cobalt primary, pill buttons, Open Sans forms
- Checkout should feel like booking a session, not SaaS subscription

#### Token usage in learning app

| Token | Catalog / sales | Player / account |
|-------|-----------------|------------------|
| Montserrat 900 uppercase | Section anchors, hero titles | Page titles only |
| Montserrat 600 | Card headers | Lesson titles, nav |
| Open Sans 14px / 1.8 | Body, bullets | Lesson prose |
| `#0047AB` | CTAs, accents | Current lesson accent only |
| `#2d2d2d` card headers | Course cards | Skip in player |
| `shadow-sm` | Catalog cards | None in player — flat, tonal |
| Cool Band `#F0F3F6` | Section alternation | Sidebar background |

### Phase 2 build order

#### Phase 2A — Content + marketing (no auth)

- [x] Migration script: `sfwd-*` + `export.xml` → `src/content/courses/`
- [x] Copy course cover images + PDFs → `public/course-materials/` (or `src/assets/`)
- [x] Real `/online-courses/` page (editorial catalog)
- [x] Public `/courses/[slug]/` sales pages (buy → coming soon or Clerk when ready)
- [x] Canonical catalog URL + redirect for the duplicate
- [x] Replace lorem on `/courses/` or redirect to canonical

#### Phase 2B — Platform foundation

- [x] `@astrojs/react` integration
- [x] Clerk auth (sign-in, sign-up, profile, `UserButton` in top bar)
- [x] Clerk Billing — 4 one-time products; checkout; purchase webhooks
- [x] Turso schema: enrollments (`purchased_at`, `expires_at`), lesson progress, completions
- [x] Access gate: Clerk purchase **and** `now < expires_at`

#### Phase 2C — Learning experience

- [ ] Lesson player at `/courses/[slug]/[lesson-slug]/` (premium layout above)
- [ ] My courses at `/account/courses` (+ continue / resume)
- [ ] Post-checkout success page (replaces `/registration-success/`)
- [ ] Redirects: `/registration/` → Clerk sign-up; `/profile/` → account
- [ ] Lesson permalink redirects from legacy URLs
- [ ] Clerk promo codes (optional; `Loyal15` if still needed)
- [ ] Legacy WP enrollment migration (if decided)

### Phase 2 checklist (rollup)

- [x] React integration in Astro (`@astrojs/react`)
- [x] Clerk auth + billing
- [x] Turso: progress + **365-day expiry enforcement**
- [ ] Course catalog + sales pages (premium UI)
- [ ] Lesson player + progress tracking
- [ ] Migrate `sfwd-courses` + `sfwd-lessons` content
- [ ] PDFs in `public/course-materials/`
- [x] Replace WP registration/profile/reset-password (Clerk)
- [x] Header Login → Clerk
- [ ] Content audit (Shame lesson count, multi-video lessons)

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

**Courses (content):** "Do PROJECT.md Phase 2A — migrate sfwd content from output/ + export.xml; build /online-courses/ and /courses/[slug]/ sales pages."

**Courses (platform):** "Do PROJECT.md Phase 2B — Clerk + Turso with 365-day expiry; then Phase 2C lesson player per premium UI spec."

---

## Open decisions

- [x] Newsletter provider — HubSpot forms (same as live WP site)
- [x] Blind spot assessment — Riddle embed on `/blind-spot-assessment/`, nav links to blindspots.me
- [x] Course URLs during Phase 1 — coming-soon stubs on `/online-courses/`, `/courses/*`, auth routes
- [x] Course access duration — **365 days** (match LearnDash; enforce via Turso)
- [x] PDF hosting — **`public/course-materials/`** for v1; Blob only if signed URLs needed later
- [x] Course UI direction — premium editorial / studio feel; see Phase 2 design section
- [ ] Contact form — static mailto vs form service?
- [ ] `/products/` and `/event-payments/` — still needed?
- [x] Canonical catalog URL — `/online-courses/` (301 `/courses/` → `/online-courses/`)
- [ ] Clerk Billing plan structure — one product per course vs bundles (e.g. Faith Community Packages)
- [ ] Clerk promo codes — honor legacy `Loyal15` or issue new codes only?
- [ ] Legacy WP enrollments — migrate active students or fresh start on Clerk?

---

## Current state

- **Phase 1 marketing site:** built (homepage, blog, service pages, layout shell). Course/auth routes are Coming Soon stubs.
- **Phase 2A (content + marketing):** done — 4 courses migrated, `/online-courses/` catalog, `/courses/[slug]/` sales pages, PDFs in `public/course-materials/`.
- **Phase 2B (platform):** done — Clerk auth/billing, Turso enrollments + 365-day expiry gate, checkout on sales pages, `/account/courses`.
- **Phase 2C:** lesson player, progress UI — not started.
- WordPress export in `output/` + `export.xml` for course migration
- Live reference: https://www.markgordon.ca/
- Design tokens: `DESIGN.md`

**Next action (Phase 1):** production DNS cutover when staging QA passes.

**Next action (Phase 2):** Phase 2C — lesson player at `/courses/[slug]/[lesson]/`, wire access gate, resume/progress UI.
