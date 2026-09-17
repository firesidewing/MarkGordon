---
target: site-wide
total_score: 32
p0_count: 0
p1_count: 2
timestamp: 2026-09-17T02:55:00Z
slug: site-wide-audit-post-contact
---
## Design Health Score (major marketing surfaces)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Contact form uses mailto until HubSpot `contactForm.formId` is set |
| 2 | Match System / Real World | 4 | Speaking-first IA; contact page matches low-pressure conversation brief |
| 3 | User Control and Freedom | 4 | Clear back paths via nav; contact form optional fields |
| 4 | Consistency and Standards | 3 | Primary CTAs still mix HubSpot discovery vs `/contact/` by page |
| 5 | Error Prevention | 3 | Required fields on contact form; topic dropdown optional |
| 6 | Recognition Rather Than Recall | 4 | Contact page routes visitors by intent (speak, workshop, coaching, church) |
| 7 | Flexibility and Efficiency | 3 | Mobile contact: form near top — good; some legacy pages still long-scroll |
| 8 | Aesthetic and Minimalist Design | 4 | Refreshed pages share cobalt bands, portrait warmth, sentence-case narrative |
| 9 | Error Recovery | 3 | Contact form error state + mailto fallback |
| 10 | Help and Documentation | 3 | “What happens next” on contact sets expectations |
| **Total** | | **32/40** | **Good — contact hub complete; integration + legacy gaps remain** |

## 30-Second Success Test (by page)

| Page | Who / What / For whom / Why / Next step |
|------|----------------------------------------|
| **Home** | Mark, leadership speaker + workshops + coaching; org leaders; practical culture work; **Book Mark to Speak** (+ Start a Conversation → contact) |
| **Speaking** | Keynote facilitator; events & teams; engagement + tools; **Book Mark to Speak** / Start a Conversation |
| **Workshops** | Team development; HR/L&D; applied frameworks; Talk With Mark (discovery) + contact secondary (fixed) |
| **Coaching** | Executive/leadership coaching; leaders in tension; outside perspective; **Start a Coaching Conversation** → contact |
| **About** | Credibility + story; all buyers; 35+ years pastoral leadership; Book / **Start a Conversation** |
| **Contact** | Low-pressure entry; any path; conversation not qualification; **Send Message** form |
| **Leadership Accelerator** | Cohort program; serious leaders; external product site; Learn More (external) + **Talk With Mark** → contact |
| **Faith Community** | Church packages; pastors; partial legacy layout; mostly discovery CTAs — **refresh candidate** |
| **Relationship Matters** | Book + framework; individuals/couples; supports leadership brand; product CTAs |
| **Online Courses** | Self-serve learning; secondary to speaking; catalog + Clerk checkout |
| **Blind Spot** | Assessment lead magnet; leaders; Riddle embed; assessment + contact secondary |
| **Book Now** | Legacy discovery-call landing; overlaps contact — **consider redirect or merge** |

**Verdict: PASS** on refreshed core funnel (home → offering pages → contact). Secondary surfaces (faith community, book-now) lag the new system.

## What's Working

1. **Contact as convergence point** — Dedicated `/contact/` with warm hero, early form on mobile, intent cards, and process steps.
2. **Speaking / coaching / about** — Secondary “Start a Conversation” (or equivalent) points to contact while primary stays discovery or contact-aligned.
3. **Design system cohesion** — Montserrat display, cobalt CTAs, portrait photography on contact and coaching.
4. **Homepage close** — Secondary CTA already routes to `/contact/`.

## Priority Issues

### [P1] HubSpot contact form not wired
- **Why:** `hubspot.contactForm.formId` is empty; submissions open mailto (fragile on mobile, no CRM capture).
- **Fix:** Create HubSpot form with name/email/message (+ optional fields), paste GUID into `site.ts`, verify field names match `ContactForm.svelte` API payload.
- **Suggested command:** `/impeccable polish contact form hubspot`

### [P1] Faith Community Packages still legacy-forward
- **Why:** Page predates section-based refresh; discovery CTAs dominate; visual rhythm differs from speaking/workshops.
- **Fix:** Section-based rebuild aligned to other offering pages + contact secondary.
- **Suggested command:** `/impeccable shape faith-community-packages`

### [P2] `/book-now/` redundant with contact + discovery
- **Why:** Two paths for the same intent confuses “what’s next?”
- **Fix:** Redirect to `/contact/` or fold copy into contact hero as optional discovery callout.
- **Suggested command:** `/impeccable distill booking paths`

### [P2] Workshops hero lacks contact secondary
- **Why:** Speaking/coaching heroes pair discovery + contact; workshops hero is discovery-only.
- **Fix:** Mirror speaking hero CTA pair on `WorkshopsHero.astro`.
- **Suggested command:** `/impeccable distill workshops CTAs`

### [P2] Primary CTA label variance
- **Why:** “Book Mark to Speak”, “Talk With Mark”, “Start a Coaching Conversation” — intentional but increases recall load.
- **Fix:** Keep contextual primaries; standardize secondaries to “Start a Conversation” where not already.

## Anti-Patterns Verdict

Refreshed pages do not read as template slop. Contact page fulfills designer brief (warm, personal, low-pressure). Remaining WordPress-era tone lives mainly in faith-community and book-now.

## Persona Red Flags

**Jordan (event planner):** Clear speaking → book path; contact form may feel less “official” than HubSpot until wired.

**Casey (mobile):** Contact form above fold — strong. Mailto fallback on submit is weak on iOS.

**Morgan (pastor):** Faith community page doesn’t yet feel as welcoming as new contact page.
