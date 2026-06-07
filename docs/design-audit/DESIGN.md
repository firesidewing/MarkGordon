# Design Audit — markgordon.ca

Reference for visual parity during rebuild. Screenshots captured Jun 2026 from live WordPress site.

## Screenshots

| Page | URL | Notes |
|------|-----|-------|
| Home (desktop) | `/` | Hero split, CTA band, course cards, testimonials |
| Home (mobile) | `/` | Hamburger nav, stacked hero, login-only top bar |
| About | `/about-mark/` | Full-width hero with image overlay, 2-col image + prose |
| Blog post | `/the-hidden-jewel/` | 2/3 content + 1/3 sidebar with category list |
| Keynote | `/keynote-speaker/` | Hero + 2-col bullet lists + testimonial block |

Local: `docs/design-audit/mobile-home.png`

---

## Typography

| Role | Font | Size | Weight | Other |
|------|------|------|--------|-------|
| Body | Open Sans | 14px | 400 | line-height 1.8, color `#4A4A4A` |
| Nav links | Montserrat | 15px | 500 | color `#262A2B` |
| Section headings (h2) | Montserrat | 28px | 900 | uppercase, `letter-spacing: 4.7px`, color `#0047AB` |
| Card headings (h3) | Montserrat | 24px | 600 | white on dark card backgrounds |
| Buttons / CTAs | Montserrat | 16px | 500 | uppercase, white on `#0047AB` |
| Logo | Montserrat | — | 300 | thin weight, stacked "Mark / Gordon" |

Google Fonts load: Montserrat 300/500/600/900 + Open Sans 400/600.

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand` | `#0047AB` | Top bar, headings, buttons, CTA bands, accents |
| `brand-dark` | `#003580` | Button hover (derived) |
| `text` | `#4A4A4A` | Body copy |
| `text-heading` | `#262A2B` | Nav, dark headings |
| `text-muted` | `#617175` | Secondary text |
| `text-subtle` | `#69727D` | Meta, captions |
| `quote` | `#5DADE2` | Testimonial / pull quotes |
| `surface` | `#FFFFFF` | Page background |
| `surface-muted` | `#F0F3F6` | Alternating sections |
| `surface-alt` | `#F9F9F9` | Cards, subtle panels |
| `footer` | `#222329` | Footer background |
| `footer-text` | `#BFBFBF` | Footer copy |

---

## Components

### Button (primary)
- Background: brand blue
- Padding: `15px 45px`
- Border-radius: `20px` (pill)
- Text: white, uppercase, Montserrat 500

### Button (text/link CTA)
- White text on blue CTA band, arrow suffix (`→`)
- No fill, underline on hover

### Top utility bar
- Full-width brand blue
- Left: email with envelope icon
- Right: social icons + Login link
- Hidden on mobile (only Login shows)

### Main nav
- White background, bottom border
- Logo left, links right
- Dropdowns: "What I Offer", "Contact"
- Mobile: hamburger → slide/flyout menu

### Page hero (inner pages)
- Full-width background image + dark overlay
- Centered white uppercase heading + intro paragraph

### Blog sidebar
- "Browse Mark's Blog" with blue left accent bar
- Category list with counts, light dividers

---

## Section patterns (homepage)

Map these to Astro components in Phase 1.3–1.5:

| # | Pattern | Component candidate |
|---|---------|-------------------|
| 1 | Top utility bar | `TopBar.astro` |
| 2 | Main navigation | `Header.astro` + `MobileNav.svelte` |
| 3 | Hero split (video + copy + CTAs) | `HeroHome.astro` |
| 4 | Full-width CTA band | `CtaBand.astro` |
| 5 | Centered quote | `QuoteBlock.astro` |
| 6 | Two-column prose + bullet list | `SplitContent.astro` |
| 7 | Section title | `SectionHeading.astro` |
| 8 | Course card grid (image, price, bullets, badge) | `CourseCard.astro` |
| 9 | Tabbed mini-courses | `CourseTabs.svelte` |
| 10 | Feature row (book / keynote / coaching) | `FeatureRow.astro` |
| 11 | Newsletter CTA | `NewsletterCta.astro` |
| 12 | Testimonials carousel | `TestimonialCarousel.svelte` |
| 13 | Footer (3-col links + social + newsletter) | `Footer.astro` |

### Reused on service pages
- Page hero with background image
- Two-column image + prose
- Bullet list grids (2 columns)
- Testimonial block
- "Book Discovery Call" CTA button

---

## Layout widths

- Content max-width: ~1200px (`75rem` token)
- Blog: ~66% main + ~33% sidebar on desktop, stacked on mobile
- Section vertical padding: ~64px (`4rem`)

---

## Implementation files

- Tokens: `src/styles/tokens.css`
- Utilities: `src/styles/global.css` (`.heading-section`, `.btn-primary`, `.container-site`, `.prose-site`)
