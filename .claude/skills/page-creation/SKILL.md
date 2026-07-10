---
name: page-creation
description: Create new pages for the FZA website following existing patterns. Use when the user wants to add a new page, create an event page, add a blog post, or build a new section of the site.
---

# Page Creation

## Overview

This site is Astro with static output. Every `.astro` file under `src/pages/` becomes a route: `src/pages/about.astro` serves `/about`. There is no client-side JavaScript; keep it that way unless the user explicitly asks (current exceptions: the beehiiv embed script and YouTube iframes).

## Special case: a new conference year is NOT a new page

Adding `/conference/2027` means creating one markdown file, `src/content/conferences/2027.md`. The dynamic route `src/pages/conference/[year].astro` renders it and the nav dropdown picks it up automatically. Copy `2024.md` as the fullest template; every section in the schema (`src/content.config.ts`) is optional.

## Creating a genuinely new page

1. Copy the structure of the closest existing page (`about.astro` is a good general-purpose example).
2. Standard skeleton:

```astro
---
import Base from '../layouts/Base.astro';
---

<Base title="Page Name" description="One-sentence description for search and social." current="page-slug">
  <section class="section">
    <div class="container">
      <span class="label">SECTION LABEL</span>
      <h2>Heading</h2>
      <p>Body copy.</p>
    </div>
  </section>
</Base>
```

3. `Base.astro` provides nav, footer, and all SEO tags. The `current` prop highlights the active nav link; add a nav entry in `src/components/Nav.astro` only if the page belongs in the main navigation.
4. Reuse classes from `src/styles/global.css` (`.section`, `.container`, `.label`, `.button`, `.feature-row`, card grids). Brand colors are CSS custom properties at the top of that file (`--fza-red`, `--receipt`, `--ink`, `--gold`). Add new CSS at the bottom of global.css, scoped with a page-specific class prefix.
5. Images go in `public/images/` and are referenced as `/images/...`.

## Verify before finishing

```bash
npm run build && npm run verify
```

The verifier checks every internal link and image and fails on any Webflow CDN reference. New pages are included in the sitemap automatically. Commit and push to `main`; Cloudflare Pages deploys it.
