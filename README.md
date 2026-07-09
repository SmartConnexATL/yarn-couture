# Yarn Couture

Yarn Couture is a handmade crochet product showcase and future e-commerce web
application. The first version will focus on browsing products, viewing product
details, and contacting the seller to order. Cart, checkout, payments, and order
tracking are planned for a later phase.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add your Supabase project values to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SELLER_EMAIL=
NEXT_PUBLIC_SELLER_WHATSAPP_URL=
NEXT_PUBLIC_SELLER_SOCIAL_URL=
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## CI/CD

GitHub Actions runs CI on pull requests and pushes to `main`:

- `npm ci`
- `npm run lint`
- `npm run build`

Production deployment is configured for Vercel on pushes to `main` and manual
workflow runs. Add these GitHub repository secrets before enabling deployment:

```bash
VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
```

Application environment variables should be configured in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SELLER_EMAIL=
NEXT_PUBLIC_SELLER_WHATSAPP_URL=
NEXT_PUBLIC_SELLER_SOCIAL_URL=
```

## V1 Scope

- Public product showcase
- Product gallery and product detail pages
- Configurable seller inquiry links
- Supabase-backed product data
- Protected admin area for product uploads and edits
- Supabase Auth with an admin email allowlist

## Out Of Scope For V1

- Shopping cart
- Checkout
- Payment processing
- Customer accounts
- Order tracking
- Discount codes
- Delivery fee calculation

## Supabase Plan

The app will use Supabase for product data, product images, and admin access.
The expected first tables are:

- `products`
- `product_images`
- `admin_users`

The expected storage bucket is:

- `product-images`

Public users should only read published products. Authenticated users should
only access admin product management when their email exists in `admin_users`.

## Roadmap

1. Initial project setup
2. Supabase schema and storage policies
3. Public product showcase
4. Admin product management
5. Future cart, checkout, payments, accounts, and order workflows
