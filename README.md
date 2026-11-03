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

Content lives in markdown files under `src/content/`. Each file is one item. Numbers and lists shared by several pages live in `src/data/site.ts`. Edit or add a file on a branch, open a pull request, and the site rebuilds when it merges to `main`.

### Change a community number

Edit `stats` in `src/data/site.ts`. The homepage stat band, the About page, and the default page description all read from it.

### Add a conference year

Create `src/content/conferences/2027.md`. That is the only step: the page appears at `/conference/2027` and the Talk Too Much hub at `/conference` lists it automatically (newest first).

Copy an existing year (`2024.md` is the fullest example) and change the fields. Every section is optional; leave out what the year does not have. The important fields:

```yaml
year: 2027
name: TALK TOO MUCH
# theme: ...           # editions from 2025 on have no theme name; leave this out
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

### Add a reading-room article, book, or film

Create `src/content/media/outlet-short-title.md`. It appears on `/culture` under its theme:

```yaml
---
outlet: NBC News
title: "Article Headline Here"
url: https://www.nbcnews.com/the-article
author: Jane Lin
year: 2027
theme: chinatown        # required for articles: history, immigration, chinatown, food, second-gen
order: 7                # position within its theme group
summary: "One factual line on what the piece covers."
# featured: 1           # 1-6 puts it on the homepage press list, in that order
# kind: book            # or film; lists it under "Books & film" instead
---
```

Themes and their order are set in `readingThemes` in `src/data/site.ts`. The build fails if an article has no theme, so nothing drops off the page silently.

### Add a community project

Create `src/content/projects/project-name.md`. It appears in "From our community" on the homepage and `/culture`:

```yaml
---
name: Project Name
url: https://example.com
desc: One line on what it is.
credit: By Jane Lin & Sam Wu
creators: [Jane Lin, Sam Wu]
order: 6                # position among the tiles
---
```

## Contact form

The contact page form posts to Formspree (form ID `xeebyoyo`, set in `src/pages/contact.astro`). Manage submissions and notification emails at [formspree.io](https://formspree.io). After a visitor submits, Formspree shows its hosted thank-you page and returns them to the site.

## Event announcements

The footer's "Event announcements" link goes to the hosted beehiiv signup page (`https://fuzhou.beehiiv.com/subscribe`, set in `src/components/Footer.astro`). The list is used only to announce big events.

## Deploy on Cloudflare Pages

Production is already set up: the Pages project `fza-website` auto-deploys every push to `main`, and both `fuzhouamerica.org` and `www.fuzhouamerica.org` are attached as custom domains (DNS also lives in the same Cloudflare account; `fuzhouamerica.com` redirects there). The steps below are only needed to recreate the setup from scratch.

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy, then add the custom domain (fuzhouamerica.org) under the project's **Custom domains** tab and follow the DNS instructions.

Old URLs `/talktoomuch2024` and `/talktoomuch2023` redirect to `/conference/2024` and `/conference/2023`, and `/talktoomuch` redirects to the `/conference` hub. On Cloudflare Pages this is a proper 301 (via `public/_redirects`); on any other host a fallback redirect page covers it.

## Project layout

```
src/
  content/            # all editable content (markdown)
    conferences/      # one file per conference year
    team/             # one file per team member
    media/            # one file per reading-room article, book, or film
    projects/         # one file per community project tile
  data/site.ts        # stats and reading-room themes shared across pages
  pages/              # one file per page; conference/[year].astro renders every year
  layouts/Base.astro  # shared shell: <head>, nav, footer
  components/         # nav, footer, community project tiles
  styles/global.css   # brand colors, fonts, shared styles
public/
  images/             # all site images, organized by section
  images/brand/       # logo kit: full / mark / stacked, each in color / black / white
  fonts/              # self-hosted fonts (Montserrat, Bebas Neue, Quentin)
  _redirects          # Cloudflare Pages redirects
scripts/verify.mjs    # post-build link/asset checker
```

## Notes

- The only npm dependency is Astro itself, pinned via `package-lock.json`.
- Fonts are self-hosted; there are no calls to Google Fonts or any CDN at runtime.
- Donations use the organization's existing PayPal hosted button (ID `XS9M7P7XLF95U`).
- The Quentin, Bebas Neue, and Montserrat font files came from the organization's paid Webflow export and Google Fonts (OFL-licensed) respectively.
