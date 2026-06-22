# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing website for **Smartick Solutions Ltd** — a UK software consultancy. Built with Astro 5, Tailwind CSS 3, and deployed to GitHub Pages (CNAME: `smarticksolutions.co.uk`).

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build → dist/
npm run preview   # preview the built dist/
```

## Architecture

### Page composition

Every page imports `BaseLayout` (handles `<head>`, SEO meta, OG tags, JSON-LD, Google Fonts, scroll-reveal script) and then composes section components:

```
BaseLayout → Header + <main> (section components) + Footer
```

`src/pages/index.astro` is the reference page showing the full composition order.

### Site-wide constants

`src/config/site.ts` exports `SITE` (name, URL, phone, email, LinkedIn, OG image) and `NAV_LINKS`. Import from here — never hardcode contact details or nav entries.

### Blog content

Posts live in `src/content/blog/*.md` with frontmatter validated by `src/content/config.ts`. Required fields: `title`, `description`, `pubDate` (Date), `category`. Optional: `author`, `tags[]`, `featured`, `readingTime`. The dynamic route `src/pages/blog/[...slug].astro` renders them with `getCollection` + `render`.

### Styling conventions

- **Tailwind classes** for layout/spacing; **`global.css` component classes** for reusable patterns.
- Key utility classes defined in `src/styles/global.css`: `.container-custom`, `.btn-primary`, `.btn-secondary`, `.btn-outline-white`, `.card`, `.section-label`, `.section-label-center`, `.section-title`, `.section-subtitle`, `.badge`, `.reveal` (scroll-reveal), `.text-gradient-navy`, `.text-gradient-scarlet`.
- Brand palette: `navy` (primary, `#1B1F8A`) and `scarlet` (accent, `#E8001D`) — full scale defined in `tailwind.config.mjs`.
- Scroll-reveal: add class `reveal` to any element; the `IntersectionObserver` in `BaseLayout` adds `visible` when it enters the viewport.

### Content vs. styling separation

When asked to redesign, restyle, or change the look and feel/theme, **only touch styling** — Tailwind classes, `global.css`, `tailwind.config.mjs`, and layout structure. Never alter:
- Text copy (headings, body text, labels, CTAs)
- Data arrays (services, portfolio items, testimonials, pricing tiers, process steps, FAQs)
- Blog post content (`src/content/blog/*.md`)
- Site constants in `src/config/site.ts`

Only change content or data when the user explicitly asks for it.

### Components

All reusable UI lives in `src/components/`. Each is a standalone `.astro` file. `CTABanner` accepts props (`title`, `subtitle`, `primaryCta`, `secondaryCta`) — use it at the bottom of pages. `Header` and `Footer` are included on every page directly (not via layout).
