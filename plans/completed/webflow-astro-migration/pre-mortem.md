# Pre-Mortem: Webflow to Astro Migration

## The Plan
Static Astro rebuild of fuzhouamerica.org from Webflow exports plus live-site recovery. No server, no database, no client JS framework. Blast radius: a public marketing site; worst case is missing content or broken links, not data loss.

## Failure Scenarios (3 months out, it went badly)

### Most likely
1. Webflow subscription got cancelled after launch, CDN images died, and pages we thought were "done" now have broken images because a few srcset/CSS background refs slipped through. Detection window closed forever.
2. Content quietly missing: a section that existed on the live site (FAQ answer, speaker card, gallery photo) never made it in, and nobody compared page-by-page before Webflow went away.
3. The contact form looks real but posts to a placeholder Formspree ID; messages vanish for months.

### Highest impact
1. Old URLs /talktoomuch2023|2024 break (redirects only work on Cloudflare Pages; site later hosted elsewhere) and inbound links die.
2. Repo bloated with 340MB of unreferenced images; clones and Cloudflare builds crawl or fail.
3. A future volunteer adds conferences/2027.md and the build crashes because the schema demanded fields only old years have.

## Assumptions at Risk
| Assumption | Risk if wrong | Verify |
|---|---|---|
| Live site stays up during migration | Cannot recover CDN images/FAQs later | Download ALL CDN-referenced assets in this session, not lazily |
| Export images = live images by filename slug | Wrong/missing headshots | Byte-check downloads; visually spot-check pages |
| Astro v5 static build has no other runtime deps | Build breaks in 5 years | Pin exact versions in package.json, commit package-lock |
| Cloudflare _redirects is enough | Broken old URLs elsewhere | Also emit meta-refresh stub pages via astro.config redirects (works on any host) |
| Fonts in export are licensed for self-hosting | Legal nag | They shipped in the org's own paid export; note in README |

## Required Mitigations (before finishing)
- [ ] Download every CDN-only image THIS SESSION (live site availability is a wasting asset). Keep a manifest of URL -> local path.
- [ ] Copy-only-referenced asset step with a verification script: every src/href in dist must resolve; grep dist for website-files, uploads-ssl, cloudfront, webflow.
- [ ] Both redirect mechanisms (_redirects + astro meta-refresh stubs).
- [ ] Conference schema: everything optional except year + title; build all 3 years to prove it.
- [ ] README flags Formspree TODO loudly; form disabled-looking note on page until endpoint exists.
- [ ] Commit package-lock.json; only dependency is astro.

## Recommended
- [ ] Page-by-page content parity pass at the end against findings.md checklists.
- [ ] 404 page.

## Monitoring & Rollback
- Detect: run the link/asset verification script on every build (npm run verify).
- Rollback: git revert; old Webflow site remains live until DNS cutover, which stays manual and user-controlled.

## Verdict
Proceed with required mitigations. No redesign needed.
