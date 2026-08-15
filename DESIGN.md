---
name: Mark Gordon
description: Healthy leaders build healthy cultures — leadership speaking, workshops, and coaching.
colors:
  brand: "#0047ab"
  brand-dark: "#003580"
  text: "#4a4a4a"
  text-heading: "#262a2b"
  text-muted: "#617175"
  text-subtle: "#69727d"
  text-inverse: "#ffffff"
  quote: "#5dade2"
  surface: "#ffffff"
  surface-muted: "#f0f3f6"
  surface-alt: "#f9f9f9"
  footer: "#222329"
  footer-text: "#bfbfbf"
typography:
  hero:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.25rem + 2.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.29375rem"
  headline:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Open Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.8
  nav:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  button: "1.25rem"
  sm: "0.125rem"
spacing:
  section: "4rem"
  section-tight: "3rem"
  content: "75rem"
  narrow: "48rem"
  hero-y: "clamp(3rem, 8vw, 5.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.button}"
    padding: "15px 45px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.button}"
    padding: "15px 45px"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand}"
    rounded: "{rounded.button}"
    padding: "15px 45px"
    typography: "{typography.label}"
  button-text:
    textColor: "{colors.text-inverse}"
    typography: "{typography.label}"
---

# Design System: Mark Gordon

## Overview

**Creative North Star: "The Center of the Room"**

The homepage puts Mark where he belongs: in front of leaders who need practical help with culture, trust, and relationships. The visitor should feel they have found a seasoned speaker and facilitator — not a course catalog, not a marriage blog, not a generic coach site.

Visual identity stays **committed cobalt** with cool neutrals. What changes is hierarchy and composition: a **text-first hero** with typographic authority, a single dominant CTA (**Book Mark to Speak**), differentiated offering layouts, and fewer, stronger sections. Warmth comes from copy and photography elsewhere; the homepage sells the conversation.

**Key characteristics:**

- Sentence-case hero headline at display scale; uppercase reserved for section anchors and buttons
- One primary CTA repeated at hero, challenge, and closing — never four competing discovery calls
- Band rhythm (white → cool gray → cobalt) instead of nested identical cards
- Speaking, workshops, and coaching each get a distinct layout treatment
- Courses and mini-offers live off the homepage (Resources), not above the fold

## Colors

Committed coaching palette: authoritative blue, cool neutrals, sky accent for quotes.

### Primary

- **Cobalt Conviction** (#0047AB): Buttons, CTA bands, section h2 accents, nav hover. Structural, not wallpaper.
- **Cobalt Deep** (#003580): Button hover and pressed states.

### Neutral

- **Ink Body** (#4A4A4A): Prose and descriptions.
- **Ink Heading** (#262A2B): Nav, card titles on light surfaces.
- **Slate Muted** (#617175): Supporting copy, credibility lines.
- **Clean Surface** (#FFFFFF): Default background, hero base.
- **Cool Band** (#F0F3F6): Alternating sections.
- **Footer Charcoal** (#222329) / **Footer Mist** (#BFBFBF): Footer.

### Tertiary

- **Sky Quote** (#5DADE2): Testimonial emphasis; use sparingly.

### Named rules

**The Committed Blue Rule.** Cobalt may occupy 30–60% of visible surface on marketing pages. Never gradient text or decorative stripes.

**The Cool Neutral Rule.** Backgrounds stay cool-tinted; warmth comes from voice and photography, not cream or sand fills.

## Typography

**Display:** Montserrat · **Body:** Open Sans

**Character:** Authority through scale and weight contrast — not through more font families or marketing buzzwords.

### Hierarchy

- **Hero** (700, clamp 2rem–3.25rem, line-height 1.12, sentence case): Homepage h1 only. Must dominate the first viewport on mobile and desktop.
- **Display** (900, 1.75rem, uppercase, tracked): Section h2 anchors on light or brand bands.
- **Headline** (600, 1.5rem): Offering titles, topic card titles, inner-page subheads.
- **Body** (400, 0.875rem, line-height 1.8): Prose; cap at ~65ch in long blocks.
- **Eyebrow** (600, 0.75rem, uppercase, tracked): Credibility lines ("Keynote Speaker • Leadership Facilitator • …"), kicker labels.
- **Label** (500, 1rem, uppercase on buttons): CTAs and nav actions.

### Named rules

**The Hero Exception Rule.** Only the homepage h1 uses the hero scale and sentence case. Every other heading level follows display/headline rules.

**The Uppercase Anchor Rule.** Uppercase Montserrat is for section h2s, buttons, and short labels (≤4 words). Body copy is always sentence case.

## Layout

- **Content max-width:** 75rem; hero copy max ~42rem for readability.
- **Section padding:** 4rem default; 3rem for tight stacks (teaser rows).
- **Hero padding:** `clamp(3rem, 8vw, 5.5rem)` vertical on first viewport.
- **Mobile priority:** Headline → one short intro → primary CTA visible without scrolling. No 3-up card grids on small screens.
- **Homepage section count:** Target 7–8 bands, not 10+. Combine newsletter + final CTA when possible.

## Elevation & Depth

Tonal layering with subtle lift. Depth from alternating surface bands, not stacked shadows.

### Shadow vocabulary

- **Resting lift:** `0 1px 2px 0 rgb(0 0 0 / 0.05)` — sticky header, contained cards.
- **Dropdown float:** `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` — nav dropdowns only.

### Named rules

**The Band Rhythm Rule.** Alternate Clean Surface / Cool Band / Cobalt Conviction. Cards are for discrete offerings, not wrapping every paragraph.

**The Subtle Lift Rule.** No nested cards. No shadow stacks.

## Shapes

- **Buttons:** Pill radius 1.25rem.
- **Cards:** Square outer corners on offering panels; internal elements may use small radius (0.125rem).
- **No** colored border-left accent stripes >1px.

## Components

### Buttons

- **Primary:** Cobalt fill, white uppercase label. Default label on homepage: **Book Mark to Speak**.
- **Secondary:** White fill, cobalt text and border — pairs with primary in hero and final CTA.
- **Text CTA:** On cobalt bands; underline on hover, optional arrow.

### Text hero (homepage)

- Full-width **Clean Surface** or light band — no video, no split panel.
- Composition: h1 → intro (max ~2 lines mobile) → button row → eyebrow credibility line.
- Secondary action: **Explore Speaking Topics** (outline/secondary style).
- No course cards, book promos, or audience-path forks in the hero.

### Offering panels (What Mark Does)

Three offerings — **Keynotes**, **Workshops**, **Coaching** — each with a **different layout**:

| Offering | Layout cue |
|----------|------------|
| Keynotes | Text-forward, optional pull quote or topic hint |
| Workshops | List or framework bullets, transformation angle |
| Coaching | Portrait or intimate single-column, deeper-conversation tone |

Never three identical dark-header ProductCards in a row.

### Topic teaser

- 2–3 featured speaking topics as compact cards or list blocks.
- Link: **See All Speaking Topics** → `/keynote-speaker/`.

### CTA band (blind spot)

- Cobalt full-width strip.
- Copy frames assessment as leadership blind spots, not generic "stronger relationships."
- Text-link CTA: **Take the Free Assessment →**

### Testimonials

- Section title: **Leaders Experience the Difference.**
- Short excerpts only on homepage; full quotes on dedicated page.
- Carousel dots meet 44px touch targets on mobile.

### Section shell

- `Section` variants: `default`, `muted`, `brand`.
- `SectionHeading` for uppercase display h2s with optional subtitle.

### Navigation (target IA)

Speaking · Workshops · Coaching · About · Testimonials · Relationship Matters · Resources · Contact

Courses move under **Resources**, not top-level homepage prominence.

## Do's and Don'ts

### Do

- **Do** lead the homepage with a text hero and **Book Mark to Speak** above the fold on mobile.
- **Do** use cobalt for buttons, one CTA band, and section h2 accents.
- **Do** differentiate keynote, workshop, and coaching layouts.
- **Do** keep paragraphs to 2–4 lines on mobile; use lists for tension copy (challenge section).
- **Do** repeat the primary CTA at hero, mid-page challenge, and final close.
- **Do** frame Relationship Matters as leadership-relational IP, not marriage-only.

### Don't

- **Don't** put course grids, tabbed mini-courses, or price cards on the homepage.
- **Don't** use dual audience path cards (couples vs organizations) in the hero.
- **Don't** repeat "Book Discovery Call" four times with identical labels.
- **Don't** use identical icon-bullet-card grids for every offering.
- **Don't** rely on video in the homepage hero (inner pages and vlogs may still use video).
- **Don't** use buzzwords: empower, transform, flourish, unlock, journey (unless in Mark's approved copy).
- **Don't** add Leadership Accelerator to homepage until the offering page exists.
