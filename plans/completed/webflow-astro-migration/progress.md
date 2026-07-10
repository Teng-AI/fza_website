# Progress: Webflow to Astro Migration

## Status: DONE (pending final commit)

## Completed
- [x] Export inventory (4 parallel audits): see findings.md
- [x] Live-site content recovery (team, media, exact FAQ text for 2023+2024, all page copy)
- [x] strategy.md + pre-mortem.md
- [x] Astro 5.18.2 scaffold on feature/astro-migration; only dependency is astro
- [x] Base layout, Nav (conference dropdown from collection, newest first), Footer, CTA
- [x] Collections: team (6), media (6), conferences (2022/2023/2024)
- [x] Pages: home, about, team, support-us, contact (Formspree TODO), 404, conference/[year]
- [x] Assets: 94 images localized (33MB after downscaling), fonts self-hosted (Montserrat variable, Bebas Neue, Quentin)
- [x] Redirects: public/_redirects + astro.config meta-refresh stubs
- [x] Build passes; verify script: 11 pages, 0 broken refs, 0 Webflow CDN refs
- [x] Browser QA: home, 2022 agenda, 2024 hero, entity decoding, content counts all match sources
- [x] README with non-developer content workflows + Cloudflare Pages deploy

## Source decisions (for final summary)
- 2024 + 2023: main-site export pages won (more speakers, schedule images); microsites contributed local copies of CDN images; FAQs recovered from live site (empty CMS in all exports)
- 2022: takeoutonly microsite index.html, links collapsed to in-page anchors
- Not recovered anywhere: 2022 FAQs (empty CMS in export, no live page exists); sponsor logos exist only as combined "Past Sponsors" images

## Next Steps
- [ ] Commit site on feature/astro-migration
- [ ] Move plan folder to plans/completed/

## Blockers
- (none)
