---
name: content-updates
description: Update text, images, links, and other content on the FZA website. Use when the user wants to change wording, update statistics, add a reading-room article, book or film, add a community project, add a conference year or team member, modify descriptions, or replace images.
---

# Content Updates

## Overview

This site is Astro (static output, plain CSS, no client framework). Most content edits are one markdown file under `src/content/` or one line in `src/data/site.ts`; page copy lives in `.astro` files under `src/pages/`.

## Where content lives

| Content type | Location |
|--------------|----------|
| Community numbers (10k+, 2500+, ...) | `src/data/site.ts` → `stats` (feeds Home, About, default meta description) |
| Reading-room themes | `src/data/site.ts` → `readingThemes` (display order on /culture; the schema accepts only these keys) |
| Reading room: articles, books, films | `src/content/media/*.md` (one file per piece) |
| "From our community" project tiles | `src/content/projects/*.md` (one file per project; Home + /culture) |
| Conference editions | `src/content/conferences/{year}.md` (hub at /conference lists them) |
| Team members | `src/content/team/*.md` |
| Programs (event types) | `src/pages/programs.astro` → `programs` array, ordered by most recent occurrence |
| About timeline | `src/pages/about.astro` → `timeline` array |
| Homepage copy, tentpoles, wall | `src/pages/index.astro` |
| Parents page (Chinese) | `src/pages/zh.astro` |
| Contact page + Formspree endpoint | `src/pages/contact.astro` |
| Nav (logo, links, Support Us button) | `src/components/Nav.astro` |
| Footer (join links, socials) | `src/components/Footer.astro` |
| Site-wide SEO defaults, org schema | `src/layouts/Base.astro` (pages pass `title`, `description`, `ogImage`, `schema`) |
| Images | `public/images/` (brand kit in `public/images/brand/`, link previews in `public/images/og/`) |
| Styles and brand colors | `src/styles/global.css` (tokens at the top) |

Collection schemas are in `src/content.config.ts`. A build fails loudly if a file does not match its schema.

## Recipes

**Add a reading-room article.** Copy an existing file in `src/content/media/`, name it `outlet-short-title.md`:

```yaml
outlet: Documented
title: "The Last Wedding Shop in Chinatown"   # quote it; use &mdash; for an em dash in a title
url: https://...
author: Jessica Shuran Yu
year: 2024
theme: chinatown        # required for articles; keys in readingThemes
order: 24               # position within its theme group
summary: "One factual line on what the piece covers, under ~22 words."
# featured: 1-6         # only to put it on the homepage press list
```

For a book or film add `kind: book` or `kind: film`; it lists under "Books & film". `publisher:` overrides `outlet` in structured data.

**Add a community project.** New file in `src/content/projects/`: `name`, `url`, `desc` (one line), `credit` ("By ..."), `creators` (list of names), `order`.

**Change a stat.** Edit `stats` in `src/data/site.ts`. Never type a number into a page.

## Steps

1. Find the file from the table. For collection items, copy an existing file as the template.
2. Edit with the Edit tool; keep frontmatter matching the schema.
3. Verify: `npm run build && npm run verify` (schema, every internal link and image, no Webflow URLs).
4. Ship through a branch and PR. `main` auto-deploys to Cloudflare Pages, so do not push to it directly.

## House rules

- No photo credits anywhere on the site.
- Copy says "community projects" or "books & film", never "shelf".
- TTM editions from 2025 on have no theme name.
- Never put scholarship recipients' names in image filenames, URLs, or alt text.
- Image paths start with `/images/...` and the file must exist under `public/images/`.
- The README's "Editing content" section documents the same workflows for non-developers; keep the two consistent.
