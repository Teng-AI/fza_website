# Pre-Implementation Plan: Webflow to Astro Migration

## Problem Statement
Rebuild fuzhouamerica.org as a self-owned Astro static site from four Webflow exports, keeping content and structure (not pixel fidelity), with content collections so a new conference year is one markdown file.

## Existing Code Review
- Old Next.js attempt lives in _archive/ (ignored per user instruction). Repo root has stale .next/ and .vercel/ leftovers.
- Source of truth: webflow_export/fuzhouamerica.webflow for all main pages AND both conference years (its talktoomuch pages are more complete than the microsites).
- takeoutonly-conference-2022.webflow/index.html is the sole source for 2022.
- Full audit in findings.md.

## Source decision per conference year
- 2024: main-site talktoomuch2024.html WINS (12 speakers vs 10 in microsite; has schedule image). Merge from microsite: local copies of speaker/section images that the main page loads from CDN. FAQs from live site (empty CMS in every export).
- 2023: main-site talktoomuch2023.html WINS (equivalent content to microsite index, plus consistent with 2024 structure). Microsite adds nothing unique. FAQs from live site.
- 2022: takeoutonly microsite index.html (only source). No FAQs exist anywhere for 2022: omit FAQ section. Internal nav becomes in-page anchors.

## Proposed Approach
Astro v5, static output, zero client framework, plain CSS, no integrations.

Architecture:
- src/layouts/Base.astro: head (local fonts, global.css), Nav, Footer.
- Nav: Conference dropdown generated from conferences collection, sorted year desc, links /conference/[year]. CSS-only dropdown (hover + :focus-within).
- Content collections (src/content.config.ts, glob loaders):
  - team: name, role, board (executive|advisory), image, linkedin, order
  - media: title, outlet, url, order
  - conferences: year, title, subtitle, dateDisplay, timeDisplay, venue {name, address, mapLinks?}, heroNote, story (body markdown), whyAttend[3] {label, text, image?}, recapVideos[], galleries[], scheduleImage? or agendaItems[]?, speakers[] {name, title, pronouns?, image?, link?}, mcs[], team[] {name, role, link?, image?}, sponsorsImage?, faqs[] {q, a}, ticketNote. All section fields optional; template renders sections conditionally.
- Pages: index, about, team, support-us, contact, conference/[year].astro (getStaticPaths from collection), 404.
- Redirects: public/_redirects (Cloudflare) + astro.config redirects (meta-refresh fallback) for /talktoomuch2024 and /talktoomuch2023.
- Contact form: Formspree placeholder action, README TODO. Newsletter links to beehiiv (no embedded Elfsight widget; static site, no third-party script).
- Analytics/embeds: drop GA (UA is dead), drop Elfsight, keep YouTube iframes, replace Google Map widget with a static address block + map link.
- PayPal donate: keep hosted button form (hosted_button_id XS9M7P7XLF95U) from export.
- Buy Tickets buttons: replace with static "This event has ended" style text per year.

Assets:
- public/fonts/: Montserrat + Bebas Neue self-hosted woff2 (download once), Quentin.otf from export. Body Montserrat, display Bebas Neue, script accent Quentin.
- public/images/: copy ONLY referenced images from exports (site/, team/, conference/2022|2023|2024/). Download the ~24 CDN-only 2024 images (prefer local microsite copies by filename match first).
- Zero website-files.com / uploads-ssl.webflow.com / cloudfront refs in dist.

## Files to Change
| Path | Type | Description |
|---|---|---|
| package.json, astro.config.mjs, tsconfig.json | New | Minimal Astro scaffold, only dependency: astro |
| src/styles/global.css | New | Brand tokens (#d23122 red, #f2f0e9 receipt, #231f20 ink, gold, zodiac), typography, buttons, layout |
| src/layouts/Base.astro, src/components/Nav.astro, Footer.astro | New | Shared chrome |
| src/content.config.ts + src/content/{team,media,conferences}/*.md | New | Collections |
| src/pages/*.astro, src/pages/conference/[year].astro | New | Pages |
| public/_redirects, public/images/**, public/fonts/** | New | Redirects + local assets |
| README.md, .gitignore | New | Deliverables |

## Risk Assessment
| Risk | Mitigation |
|---|---|
| CDN images unavailable or missed | Filename-match against microsite exports first; scripted download with verification; final grep of dist |
| Copying 340MB of images into repo | Copy only referenced files; strip Webflow responsive variants (use base file) |
| Broken internal links (microsite .html links, anchors) | Single-page conference template uses anchors; run a link-check script over dist |
| Conference schema too rigid for future years | All sections optional; 2022/2023/2024 differ enough to prove flexibility |
| Webflow-specific CSS classes lost | Not cloning CSS; rewriting clean semantic markup with own stylesheet (redesign later anyway) |
| Forms silently dead | Formspree placeholder clearly marked TODO in README + page comment |
| Stale data leaking in (Baruch venue on 2023/2024 agenda pages, old Eventbrite IDs) | Documented in findings; only use index/main-site data |

## Test Cases (verification plan)
1. astro build exits 0.
2. Node script: every internal href/src in dist resolves to a file in dist. Zero broken.
3. grep -r "website-files\|uploads-ssl\|cloudfront" dist → only allowed: none.
4. Pages exist: /, /about, /team, /support-us, /contact, /conference/2022|2023|2024, /talktoomuch2023|2024 redirect stubs, 404.
5. Team page shows 6 members; home shows 6 media articles; 2024 page shows 12 speakers + 13 FAQs; 2023 shows 7 speakers + FAQs; 2022 shows 12 speakers + full agenda.
6. External links exact: bit.ly/sitebuttons, fuzhou.beehiiv.com/subscribe, all 6 media URLs.

## Questions for User
None blocking. Decisions taken autonomously (documented above): drop GA/Elfsight, static map link instead of widget, "event ended" text for tickets, omit 2022 FAQs (none exist).
