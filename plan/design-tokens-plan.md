# Design Tokens Plan — Color, Font, Sizing

Goal: change brand color/font/sizing decisions in **one place** and have every
component pick it up automatically. No hunting through `.tsx` files for
hardcoded hex codes or font sizes.

## Problem with the current setup

`tailwind.config.ts` hardcodes hex values directly in `theme.extend.colors`:

```ts
colors: {
  ink: "#251f1d",
  linen: "#f8f1e8",
  ...
}
```

`globals.css` *also* hardcodes some of the same hex values independently
(`:root { color: #251f1d; background: #f8f1e8; }`, the `::selection` rule,
the gradient stops). Two sources of truth for the same colors — changing a
brand color means editing both files and keeping them in sync by hand.

Component code then uses Tailwind utilities built from those tokens
(`text-clay`, `bg-linen`), which is fine, but the *names* are raw palette
names (`clay`, `moss`) rather than roles (`accent`, `success`). If the accent
color changes from orange to something else, `clay` becomes a lie — either
rename it everywhere (multi-file change) or leave a misleading name in place.

## Target architecture: two-tier tokens, one source of truth

**Tier 1 — raw palette.** CSS custom properties in `globals.css`, one line
per color. This is the *only* place a hex value is ever written.

**Tier 2 — semantic roles.** CSS custom properties that alias Tier 1
(`--color-primary: var(--color-royal-blue-600)`). Components and Tailwind
utilities only ever reference Tier 2 names (`primary`, `accent`,
`background`, `foreground`, `muted`, `border`). Rebranding = edit Tier 1
values or repoint a Tier 2 alias; nothing else changes.

`tailwind.config.ts` doesn't hardcode any hex — it just wires Tailwind
color/font utility names to the CSS variables via `var(...)`, so
`bg-primary`, `text-accent`, `font-display` etc. all resolve through the
CSS layer.

```
globals.css (Tier 1: raw hex)
      │
      ▼
globals.css (Tier 2: semantic aliases, var() of Tier 1)
      │
      ▼
tailwind.config.ts (utility names → var(--color-*))
      │
      ▼
components (bg-primary, text-muted, font-display, text-h1, ...)
```

One file (`globals.css`) holds every color value. Everything downstream is a
reference, never a duplicate.

## Color tokens (Tier 1 → Tier 2)

Tier 1 (raw palette, `globals.css :root`):

| Variable | Hex |
|---|---|
| `--color-cream` | `#FAF5EE` |
| `--color-warm-white` | `#FFFDF9` |
| `--color-royal-blue-600` | `#29408C` |
| `--color-royal-blue-400` | `#3E5BB0` |
| `--color-burnt-orange-600` | `#C1531D` |
| `--color-burnt-orange-400` | `#D97A3F` |
| `--color-ink` | `#1C2333` |
| `--color-slate` | `#6B7280` |
| `--color-border` | `#E4DCCE` |

Tier 2 (semantic roles, also `globals.css :root`, all `var()` of the above):

| Semantic name | Points to |
|---|---|
| `--background` | `--color-cream` |
| `--surface` | `--color-warm-white` |
| `--foreground` | `--color-ink` |
| `--muted` | `--color-slate` |
| `--border` | `--color-border` |
| `--primary` | `--color-royal-blue-600` |
| `--primary-hover` | `--color-royal-blue-400` |
| `--accent` | `--color-burnt-orange-600` |
| `--accent-hover` | `--color-burnt-orange-400` |

`--status-available` (and its raw color) is deferred to when the product
catalog page is planned — not needed for the landing page.

`tailwind.config.ts` maps Tailwind color names 1:1 to the Tier 2 variables
(`primary: "var(--primary)"`, etc.) so class names in components stay
role-based: `bg-primary`, `hover:bg-primary-hover`, `text-muted`,
`border-border`.

## Font tokens

Same pattern, already half in place:

- `next/font` loaders in `layout.tsx` emit CSS variables
  (`--font-geist-sans`, `--font-geist-mono`, and a new `--font-fraunces`
  for the serif display face) — this part doesn't change, it's already the
  correct pattern for Next.js.
- `tailwind.config.ts` `fontFamily` maps `sans` / `display` / `mono` to
  those variables — also already the pattern, just adding a `display` entry
  for Fraunces.
- Component code uses `font-sans` (default body) or `font-display`
  (headlines) — never a raw font name.

## Type scale

Add a fixed `fontSize` scale in `tailwind.config.ts` (`display`, `h1`, `h2`,
`h3`, `body`, `small`, `caption`), each an array of `[size, { lineHeight,
letterSpacing? }]` defined once. Components use `text-h1`, `text-body`,
etc., never raw `text-5xl` / `text-lg` picked ad hoc — this is what removes
the inconsistency in the current `page.tsx` (`text-5xl`, `text-lg`,
`text-sm` all picked independently with no shared scale).

## Radius / spacing

- `borderRadius`: `sm` / `md` / `lg` tokens in `tailwind.config.ts`, values
  defined once, used for all cards/buttons/inputs.
- Spacing: no new tokens — Tailwind's default 4px scale is kept as-is, just
  used consistently. Only addition is a `maxWidth.content` token for page
  container width so section widths don't drift per-page.

## What changes, file by file

| File | Change |
|---|---|
| `src/app/globals.css` | Replace hardcoded hex in `:root`/body/selection with Tier 1 + Tier 2 CSS variables. Flatten the background gradient to flat `var(--background)` per the "let photos carry weight" rule. |
| `tailwind.config.ts` | Replace hardcoded hex in `colors` with `var(--...)` references to Tier 2 names. Add `fontFamily.display` (Fraunces). Add `fontSize` scale. Add `borderRadius` and `maxWidth.content` tokens. |
| `src/app/layout.tsx` | Add Fraunces `next/font` loader, add its CSS variable to the `body` className alongside the existing Geist variables. |
| `src/app/page.tsx` | Swap raw utilities (`text-clay`, `text-5xl`, `text-ink/75`) for the new semantic/scale utilities (`text-accent`, `text-h1`, `text-muted`). Existing content/structure untouched. |

No component beyond `page.tsx` currently exists, so this is the full
blast radius today. Every future component only ever touches semantic
Tailwind classes, so a future rebrand is a `globals.css`-only edit.

## Decisions

- Display font: **Fraunces** (via `next/font/google`).
- Availability status color (`--color-available`): deferred — not needed
  until the product catalog page exists. Drop it from this pass; revisit
  when that page is planned.
