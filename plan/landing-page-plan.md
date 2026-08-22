# Landing Page Plan — Magazine-Style, No Products Yet

Depends on [design-tokens-plan.md](./design-tokens-plan.md) being implemented
first — every section below is written in terms of semantic tokens
(`bg-primary`, `text-h1`, `font-display`) that plan defines. Building the
layout before the tokens exist just means redoing the classes twice.

## Scope

V1 landing page only. No product data, no catalog grid yet — this is the
front door: it sets the editorial tone (per the dev report's "clean, warm,
visual, professional, brand-friendly" direction) and gives visitors the
brand story plus a signal that the catalog is coming.

Three sections, per your call:

1. Hero
2. Brand / maker story
3. Catalog teaser ("coming soon")

## What "magazine style" means in layout terms

Not this (current `page.tsx`): centered single column, everything the same
width, text stacked and centered.

Instead:
- **Asymmetric grids** — image and text in unequal-width columns, not
  centered blocks. E.g. hero image bleeds to one edge, headline block
  offset rather than centered.
- **Large editorial display type** — `font-display` (Fraunces) at real
  scale for headlines (`text-display` / `text-h1` tokens), tight to the
  image rather than floating in whitespace.
- **Eyebrow labels** — small uppercase letter-spaced `font-sans` tags above
  headlines (already the pattern at `page.tsx:5`, keep it, make it a
  reusable `Eyebrow` piece).
- **Pull quotes / callouts** — a short line of brand voice set large and
  isolated, used in the story section, not just body paragraphs.
- **Full-bleed image blocks** — sections that run edge-to-edge (`w-screen`
  breakout or `max-w-none`), not confined to `max-w-content`.
- **Rule lines / dividers** — thin `border-border` horizontal rules between
  sections instead of just vertical spacing, reinforcing an editorial page
  break feel.

## Placeholder content strategy

No real photography yet. Placeholders should look intentional, not broken:
- Image slots render as a `surface`/`border`-toned rectangle with a centered
  caption label (e.g. "Hero image — [description of what goes here]"), not
  a broken `<img>` or external stock-photo URL. Keeps the build fully local,
  no network dependency, and makes it obvious to whoever adds real photos
  later exactly what each slot is for.
- Copy is real placeholder brand copy (short, on-tone), not lorem ipsum —
  easier to judge whether the layout actually reads as intended.

## Sections

### 1. Hero
- Full-bleed image placeholder (right ~60% on desktop, stacks above text on
  mobile) + offset text block (left ~40%): eyebrow ("Art Yarn Catalog"),
  `text-display` headline, one line of supporting copy, no CTA button yet
  (nothing to link to until catalog exists).
- Background: `bg-background` (flat cream per the token plan — no gradient).

### 2. Brand / Maker Story
- Asymmetric two-column: story copy (maker background, inspiration,
  handmade nature — per dev report section 4.4) on one side, a pull-quote
  or portrait/process image placeholder on the other, columns swapped
  from the hero's image/text order so the page doesn't feel repetitive.
- One large pull-quote line in `font-display`, `text-primary`.

### 3. Catalog Teaser
- Full-width band, `bg-primary` or `bg-surface` (visually distinct from the
  two sections above so it reads as a closing beat, not more story copy).
- Short headline ("The catalog is coming"), one line of copy, and an email
  or contact link if one exists yet — otherwise just the message, no dead
  CTA.

## Component breakdown

| Component | File | Notes |
|---|---|---|
| `Eyebrow` | `src/components/eyebrow.tsx` | Small reusable label, used in hero + teaser |
| `ImagePlaceholder` | `src/components/image-placeholder.tsx` | Takes a `label`/`aspect` prop, renders the bordered placeholder block described above |
| `HeroSection` | `src/components/landing/hero-section.tsx` | |
| `BrandStorySection` | `src/components/landing/brand-story-section.tsx` | |
| `CatalogTeaserSection` | `src/components/landing/catalog-teaser-section.tsx` | |
| `page.tsx` | `src/app/page.tsx` | Composes the three sections only, no layout logic of its own |

Matches AGENTS.md's `src/components/` convention (folder didn't exist yet —
this is the first thing to populate it) and keeps `page.tsx` thin per its
"keep route files small" rule.

## Responsive behavior

- Mobile: all sections stack single-column, image placeholders above their
  text, full-bleed treatment becomes edge-to-edge naturally at narrow
  widths.
- Breakpoint for the asymmetric two-column layouts: `lg:` (matches
  Tailwind's default 1024px) — below that, everything stacks.

## Decisions

- Catalog teaser: static message only, no email capture. The full catalog
  will live on its own page (not built in this pass) — the landing page
  only teases that it's coming.
