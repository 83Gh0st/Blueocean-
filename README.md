# Blue Ocean Chemicals — Website & Internal Portal

A single Next.js 15 (App Router) codebase covering the public marketing site and a private staff portal shell.

- **Public marketing site** — a story-driven home page (hero → company story → product lines → process →
  capabilities → contact), a full **chemical catalog** (`/chemicals`) with search and filtering, and an
  **About** page with the company's story, values and journey.
- **WhatsApp click‑to‑chat** — a floating button on every page, plus CTA buttons throughout, all opening a
  pre‑filled WhatsApp chat.
- **Internal staff portal** (`/internal`) — password‑gated, `noindex`, never linked from the public site. It's a
  clean dashboard shell with no tools built into it yet — see §5 for how to add one (accounting, ERP,
  inventory, whatever the business needs).
- **No backend, no database** — everything ships as one Next.js app, deployed to Vercel as a single project.
  Nothing here requires a database until you build an internal tool that needs one.
- **Production‑ready by default** — responsive mobile‑first layout, dynamically generated favicon/app icon/social
  share image, branded error pages, sitemap, and a locked‑down robots.txt.

---

## 1. Getting started locally

```bash
npm install
cp .env.example .env.local   # then fill in the two values inside — see §2
npm run dev
```

Open `http://localhost:3000`. The staff portal shell is at `http://localhost:3000/internal`.

## 2. Environment variables

Set these in `.env.local` for local dev, and again in **Vercel → Project → Settings → Environment Variables**
for your deployment (see `.env.example` for the full template):

| Variable | Purpose |
|---|---|
| `INTERNAL_APP_PASSWORD` | The single shared password staff use to log into `/internal`. |
| `INTERNAL_SESSION_SECRET` | Random secret used to sign the login session cookie. Generate with `openssl rand -hex 32`. |

Without both set, the login route returns a clear error instead of failing silently.

## 3. Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo (or run `vercel` from this folder with the Vercel CLI).
2. Import the repo in Vercel and connect your domain under **Project → Settings → Domains**.
3. Add both environment variables from §2 under **Project → Settings → Environment Variables** (Production,
   Preview, and Development).
4. Deploy. No other services or servers are required.

---

## 4. The internal staff portal — access control

- **Guarded routes**: `middleware.ts` guards every `/internal/*` and `/api/internal/*` route. Anyone without a
  valid session is redirected to `/internal/login`. The portal is also excluded from `robots.txt` and marked
  `noindex` at both the page and HTTP‑header level, and responses are sent with `Cache-Control: no-store`.
- **Login**: one shared password (`INTERNAL_APP_PASSWORD`) protects the whole portal — appropriate for a small
  team. The session is a signed, expiring cookie (7 days), verified with HMAC‑SHA256 (`lib/auth.ts`) using the
  Web Crypto API, so it works identically on Vercel's Edge and Node runtimes.
- **If you need more than one shared password later** (individual logins, roles, an audit trail), swap
  `lib/auth.ts` and the login route for a proper auth provider such as [Auth.js](https://authjs.dev/) — the
  middleware and page structure won't need to change.

## 5. Adding an internal tool (accounting, ERP, or anything else)

The `/internal` dashboard (`app/internal/(app)/page.tsx`) reads its tool grid from one file,
**`lib/internal-tools.ts`**. Right now every entry is `status: "coming-soon"` — there's no tool built yet, just
the scaffold. To add a real one:

1. Create `app/internal/(app)/<your-tool>/page.tsx` (and any sub-routes it needs). It's automatically behind
   the password gate and `noindex`/no-cache headers — nothing extra to wire up.
2. Flip its entry in `lib/internal-tools.ts` to `status: "active"` and set the right `href`.
3. If it needs a database or third-party API, add the relevant packages and environment variables at that
   point — don't add them speculatively before there's a real tool to use them.

The generic dashboard UI kit (`.panel`, `.stat-card`, `.data-table`, `.entry-form`, `.tool-grid`, etc. in
`app/globals.css`, all styled for the internal portal's dark "operations console" look) is already there for
reuse by whatever you build next.

## 6. The chemical catalog (`/chemicals`)

All catalog content lives in one file: **`lib/chemicals-data.ts`**. Edit product names, codes, descriptions,
packaging, or add/remove products there — the page updates automatically, including the search index and filter
chips.

## 7. WhatsApp integration

Every WhatsApp link reads from **`lib/site-config.ts`**:

```ts
whatsapp: {
  number: "971561154831", // international format, no + or spaces
  defaultMessage: "Hello Blue Ocean Chemicals, I'd like to enquire about your water treatment chemicals.",
}
```

Change the number there once and it updates the floating button, the contact section, the CTA bands, and every
per‑product "Enquire" link (which also pre‑fills the product name/code into the WhatsApp message).

## 8. Contact section & map

The contact section (`components/home/ContactSection.tsx`) shows facility address, sales/accounts phone, email,
hours, and an embedded Google Map (`components/home/ContactMap.tsx`) with a "Get directions" link — no Google
Maps API key required, since it uses the key‑free embed format. It currently geocodes from the address text in
`siteConfig.address.mapsQuery`; once you have the exact coordinates for the facility, swap that for a
`"lat,lng"` pair for pinpoint accuracy.

## 9. Design assets — logo, colors & photography

- **Logo**: `components/Logo.tsx` reads from your real brand artwork in `public/brand/` —
  `logo-color.svg` / `logo-icon-color.svg` for light backgrounds, `logo-white.png` / `logo-icon-white.png` for
  dark ones. To update the logo later, replace those four files — nothing else needs to change. The nav now
  always renders the **color** logo on a permanent frosted-glass bar (see §11), so it stays legible everywhere;
  the white variant is reserved for genuinely dark surfaces like the footer and the internal portal header.
- **Brand colors**: `--indigo`, `--ocean`, `--sky`, `--cyan` in `app/globals.css` are sampled directly from the
  logo artwork, plus `--brand-gradient`, the one recurring gradient used for accents, CTAs, and the wave motif.
- **Photography**: hero/section backgrounds use royalty‑free Unsplash photography relevant to chemical
  manufacturing, water treatment and industrial facilities, loaded through `next/image` for automatic
  optimisation. Swap any `src` in `components/home/` or `app/(marketing)/about/` for real facility photography
  whenever you have it — that will make the biggest visual difference of anything in this codebase.

## 10. Telling the company's story

Two things carry the narrative:

- **`/about`** (`app/(marketing)/about/page.tsx`) — origin, mission/vision/values, and a journey timeline.
  The specific milestones and dates in the timeline are placeholders (clearly marked in the component with a
  comment) — swap them for the business's real history whenever you have it.
- **Home page** — a condensed "Our Story" section right after the hero teases the same narrative and links
  through to the full About page, so the story is present from the very first scroll rather than buried on a
  separate page nobody clicks into.

## 11. Design system

`app/globals.css` holds every design token (`--ink`, `--ocean`, `--cyan`, `--brand-gradient`, etc.), plus
sections for the catalog page, the About page, and the internal portal (deliberately styled as a quieter,
distinct "operations console" so it never feels like part of the public marketing site). Fonts (Fraunces,
Space Grotesk, JetBrains Mono) load via a `<link>` tag to Google Fonts in `app/layout.tsx`.

**Nav** (`components/Nav.tsx`) is a permanent frosted-glass bar rather than a transparent-over-hero bar that
swaps logo/link colors on scroll. That fixed two real bugs: the white logo going invisible against light
backgrounds, and the mobile menu's "Request a Quote" button rendering the same dark navy as the panel behind
it (background matched foreground exactly once scrolled). Both are gone now because there's only one visual
state for the nav to be in, on any page, at any scroll position.

Motion is handled by [Framer Motion](https://www.framer.com/motion/): scroll‑triggered reveals
(`components/Reveal.tsx`), parallax background photography (`components/ParallaxPhoto.tsx`), the animated
process‑flow diagram, the word‑by‑word statement reveal, and the About page's timeline are all built on it.

The whole site is mobile‑first responsive — checked at a 390px viewport in addition to desktop, including the
nav, the timeline, and every form.

## 12. Production-readiness features

- **Icons & social sharing**: `app/icon.png` / `app/apple-icon.png`, and `app/opengraph-image.tsx` provide the
  favicon/touch icon/social share preview.
- **Error handling**: `app/global-error.tsx` catches root-level errors; `app/(marketing)/error.tsx` and
  `app/internal/error.tsx` give the public site and the staff portal their own branded, in-context error
  screens with a "Try again" button instead of a blank crash page.
- **`app/manifest.ts`**, **`app/robots.ts`**, **`app/sitemap.ts`** — all auto-generated Next.js metadata routes,
  no static files to keep in sync by hand.

## 13. Project structure

```
app/
  layout.tsx                    Root layout: fonts, metadata, JSON-LD
  icon.png / apple-icon.png     Favicon / touch icon
  opengraph-image.tsx            Generated social share image
  global-error.tsx                Root error boundary
  manifest.ts / robots.ts / sitemap.ts   Auto-generated metadata routes
  (marketing)/                  Route group: public site (Nav + Footer + WhatsApp button)
    error.tsx / page.tsx          Home
    about/page.tsx                  Company story, mission, values, journey
    chemicals/page.tsx             Chemical catalog
  internal/
    layout.tsx                     Shared shell for the whole /internal area
    error.tsx
    login/page.tsx                  Login screen (not behind the header chrome)
    (app)/                          Route group: everything with the staff header
      layout.tsx
      page.tsx                        Dashboard / tool grid (empty scaffold — see §5)
  api/
    internal/login/, internal/logout/    Session cookie
middleware.ts                 Guards /internal/* and /api/internal/*
lib/
  site-config.ts               Company contact info, WhatsApp number — edit here
  chemicals-data.ts             All catalog content — edit here
  internal-tools.ts             Dashboard tool registry — add new tools here
  auth.ts                       Session signing/verification (Web Crypto)
components/
  home/                        Home page sections (incl. ContactMap, Story)
  about/                       About page sections (Timeline, Values, etc.)
  chemicals/                    Catalog page pieces
  internal/                     Staff portal header
public/brand/                 Real logo artwork (color + white, full + icon)
```
