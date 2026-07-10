# Fuzhou America Website

Static site for [fuzhouamerica.org](https://www.fuzhouamerica.org), built with [Astro](https://astro.build). Migrated from Webflow in July 2026. No CMS, no client-side framework, plain CSS. All images and fonts are served from this repo.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install     # first time only
npm run dev     # opens http://localhost:4321
```

Other commands:

```bash
npm run build    # writes the production site to dist/
npm run verify   # after a build: checks every link and image, and that no Webflow URLs remain
npm run preview  # serves the built dist/ folder locally
```

## Editing content (no coding needed)

Content lives in markdown files under `src/content/`. Each file is one item. Edit or add a file, commit, and the site rebuilds with it.

### Add a conference year

Create `src/content/conferences/2027.md`. That is the only step: the page appears at `/conference/2027` and the nav dropdown picks it up automatically (newest first).

Copy an existing year (`2024.md` is the fullest example) and change the fields. Every section is optional; leave out what the year does not have. The important fields:

```yaml
year: 2027
name: TALK TOO MUCH
theme: Your Theme Here
presenterLine: "fuzhou America Presents 2027 Conference:"
dateDisplay: 01 Aug 2027
venueShort: Venue Name
heroImage: /images/conference/2027/hero-bg.jpg
ticketUrl: https://www.eventbrite.com/e/your-event   # while tickets are on sale
# pastEventNote: This event has ended.               # swap to this after the event
```

Put that year's images in `public/images/conference/2027/` and reference them with paths starting `/images/...`.

### Add a team member

Create `src/content/team/firstname-lastname.md`:

```yaml
---
name: Jane Lin
role: Program Director
board: executive        # or: advisory
image: /images/team/jane-lin.jpg
linkedin: https://www.linkedin.com/in/janelin
order: 4                # position within the board section
---
```

Add the headshot to `public/images/team/`.

### Add a media article

Create `src/content/media/outlet-short-title.md`:

```yaml
---
outlet: NBC News
title: "Article Headline Here"
url: https://www.nbcnews.com/the-article
order: 7                # position in the list on the homepage
---
```

## Contact form (TODO)

The contact page form posts to a **Formspree placeholder** and does not deliver messages yet:

1. Create a free form at [formspree.io](https://formspree.io) (point it at info@fuzhouamerica.org).
2. In `src/pages/contact.astro`, replace `YOUR_FORM_ID` in the `FORMSPREE_ENDPOINT` line with the ID Formspree gives you.

## Deploy on Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy, then add the custom domain (fuzhouamerica.org) under the project's **Custom domains** tab and follow the DNS instructions.

Old URLs `/talktoomuch2024` and `/talktoomuch2023` redirect to `/conference/2024` and `/conference/2023`. On Cloudflare Pages this is a proper 301 (via `public/_redirects`); on any other host a fallback redirect page covers it.

## Project layout

```
src/
  content/            # all editable content (markdown)
    conferences/      # one file per conference year
    team/             # one file per team member
    media/            # one file per press article
  pages/              # one file per page; conference/[year].astro renders every year
  layouts/Base.astro  # shared shell: <head>, nav, footer
  components/         # nav, footer, join-our-community block
  styles/global.css   # brand colors, fonts, shared styles
public/
  images/             # all site images, organized by section
  fonts/              # self-hosted fonts (Montserrat, Bebas Neue, Quentin)
  _redirects          # Cloudflare Pages redirects
scripts/verify.mjs    # post-build link/asset checker
```

## Notes

- The only npm dependency is Astro itself, pinned via `package-lock.json`.
- Fonts are self-hosted; there are no calls to Google Fonts or any CDN at runtime.
- Donations use the organization's existing PayPal hosted button (ID `XS9M7P7XLF95U`).
- The Quentin, Bebas Neue, and Montserrat font files came from the organization's paid Webflow export and Google Fonts (OFL-licensed) respectively.
