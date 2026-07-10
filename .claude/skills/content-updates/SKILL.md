---
name: content-updates
description: Update text, images, links, and other content on the FZA website. Use when the user wants to change wording, update statistics, add new media links, modify descriptions, or replace images.
---

# Content Updates

## Overview

This site is Astro (static output, plain CSS, no client framework). Most content edits are markdown changes under `src/content/`; page copy lives in `.astro` files under `src/pages/`.

## Where content lives

| Content type | Location |
|--------------|----------|
| Team members | `src/content/team/*.md` (one file per person) |
| Media/press links | `src/content/media/*.md` (one file per article) |
| Conference pages | `src/content/conferences/{year}.md` (one file per year) |
| Homepage copy | `src/pages/index.astro` |
| About page copy | `src/pages/about.astro` |
| Contact page + Formspree endpoint | `src/pages/contact.astro` |
| Nav (logo, links, CTA button) | `src/components/Nav.astro` |
| Footer (beehiiv form ID, socials) | `src/components/Footer.astro` |
| Site-wide SEO/meta defaults | `src/layouts/Base.astro` |
| Images | `public/images/` (brand kit in `public/images/brand/`) |
| Styles and brand colors | `src/styles/global.css` (CSS custom properties at top) |

Collection schemas are defined in `src/content.config.ts`. A build fails loudly if a markdown file does not match its schema.

## Instructions

1. Find the file using the table above. For collection items, copy an existing file as the template.
2. Edit with the Edit tool. Keep frontmatter fields matching the schema.
3. Verify: `npm run build && npm run verify` (checks every internal link and image, and that no Webflow URLs remain).
4. Commit and push to `main`. Cloudflare Pages auto-deploys in about a minute.

## Gotchas

- Image paths in content start with `/images/...` and the file must exist under `public/images/`.
- The README's "Editing content" section documents the same workflows for non-developers; keep the two consistent if workflows change.
- External embeds: contact form posts to Formspree (endpoint const in `contact.astro`); newsletter form is a beehiiv embed (form ID const in `Footer.astro`).
