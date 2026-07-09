# Repository Guidelines

Short, precise, and practical. Follow this to write code and reviews that fit the repo.

## Folder Map

- `src/app/` - Next.js App Router routes, layouts, loading states, and route handlers. Keep route files focused.
- `src/components/` - Reusable UI components. Add this folder when the first shared component is needed.
- `src/lib/` - Shared helpers, Supabase clients, data access, formatting, constants, and server utilities.
- `src/lib/supabase/` - Supabase browser/server client setup and generated database types.
- `supabase/` - SQL migrations, storage policy notes, and seed files when Supabase schema work starts.
- `public/` - Static assets that are safe to serve directly.
- Secrets live in `.env.local` copied from `.env.example`. Never commit secrets.

## Product Scope

- V1 is a product showcase with direct inquiry links, not a full checkout app.
- Customers browse products, view details, check availability, and contact the seller to order.
- Admins will manage products through Supabase Auth plus an admin email allowlist.
- Keep cart, payments, customer accounts, order tracking, discounts, and delivery calculations out of V1 unless explicitly requested.

## Code Style

- Language: TypeScript. Prefer server components by default.
- Imports: use the `@/` alias for local modules.
- Components: use PascalCase exports and explicit prop types.
- Files: use kebab-case for route/component/helper filenames.
- Keep route files small. Move reusable logic into `src/lib/` and reusable UI into `src/components/`.
- Avoid magic values in UI and data logic. Use named constants when values are shared or meaningful.
- Keep comments sparse and useful. Add comments only for non-obvious logic, security boundaries, or external service behavior.
- Do not add console logging unless it is temporary debugging explicitly requested by the user.
- ESLint and production build must pass before handoff when dependencies are installed.

## Next.js Patterns

- Use App Router conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, and route handlers where appropriate.
- Keep data loading close to the route when it is route-specific.
- Use server actions only for form mutations that need server-side credentials or auth checks.
- Use client components only for interactivity that actually requires browser state or event handlers.
- Do not put secrets in client components or expose service-role keys to the browser.

## Supabase Boundaries

- Public reads should only return published products.
- Admin writes require an authenticated Supabase user whose email exists in `admin_users`.
- Use Supabase Storage for product images in the `product-images` bucket.
- Prefer database-level RLS policies for access control. UI hiding is not a permission boundary.
- Keep Supabase client creation centralized in `src/lib/supabase/`.
- Add or update database types when schema changes are introduced.

## Data And API

- Product data should be typed before it reaches UI components.
- Keep network and database logic out of presentational components.
- Use cents for product prices in database records and format prices at the display boundary.
- Use slugs for public product detail URLs.
- Keep category values consistent between UI, seed data, and database constraints.

## Styling

- Use Tailwind CSS utilities and the theme tokens in `tailwind.config.ts`.
- Build responsive layouts from the start.
- Keep UI quiet, warm, and product-focused. Product images should carry the visual weight.
- Avoid decorative UI that does not help browsing, comparing, or ordering products.
- Buttons and links should have clear hover, focus, and disabled states.

## Accessibility

- Use semantic HTML before custom ARIA.
- Images need useful alt text unless decorative.
- Form inputs need labels.
- Interactive controls must be reachable by keyboard and have visible focus states.
- Do not rely on color alone to communicate availability or errors.

## Testing

- Run `npm run lint` for style and static checks.
- Run `npm run build` before handoff when changing app code.
- For future tests, prefer behavior and visible-output checks over brittle implementation details.
- Mock Supabase in unit tests. Do not rely on production data.

## Commits And PRs

- Commit subjects should be short and imperative.
- PRs should include summary, scope, screenshots for UI changes, test steps, and required env or migration notes.
- Call out breaking changes and new Supabase migration requirements clearly.

## Review Checklist

Before pushing:

- `npm run lint` passes.
- `npm run build` passes.
- No secrets are committed.
- Public pages cannot expose unpublished products.
- Admin routes and mutations are protected server-side.
- New env keys are documented in `.env.example` and `README.md`.
- Supabase schema changes include migrations and matching type updates.
