# HANDOVER

## Goal
Migrate fuzhouamerica.org from Webflow to a self-owned Astro static site. Migration is COMPLETE and live at https://fza-website.pages.dev (Cloudflare Pages, auto-deploys from main on github.com/Teng-AI/fza_website). Only the DNS cutover to fuzhouamerica.org remains.

## Done (this session)
- Full Webflow-to-Astro migration: 8 pages + 404, content collections (team/media/conferences), all assets local, verified zero Webflow CDN refs
- Deployed to Cloudflare Pages; old Vercel project fza_website deleted (was sending failed-build emails)
- Contact form wired to Formspree xeebyoyo (tested end to end)
- Footer consolidated: Join Our Community message + beehiiv subscribe embed (form ID e2fb6eff-997e-49e0-9395-dae1bed1cd85 in src/components/Footer.astro) + social icon circles; separate CTA section removed
- beehiiv welcome email written and activated by user
- Brand: no-comma "Fuzhou America" logos (public/images/brand/ kit), header/footer/favicon swapped, titles updated
- Nav: CSS-only hamburger on mobile; "Follow Our Journey" button links to Instagram
- SEO: og/twitter cards with og-image.png, canonical URLs, NonprofitOrganization JSON-LD, @astrojs/sitemap, robots.txt
- Typography pass: 68ch measure, 14px labels, 80px sections, 17px body
- Content edits: Richard Lou replaced Jacky Chen (advisory), captions updated, contact page trimmed to email only, dead links delinked (chanlinart.com, yidagao LinkedIn)
- Final audit: 26/26 live checks, 105/105 images, all links verified

## In progress
- Nothing mid-flight. Working tree clean, all pushed.

## Open decisions
- DNS cutover timing (user's call; steps below)
- beehiiv embed still shows on a white card; user can set background transparent in beehiiv Style tab (no code change)
- Optional post-cutover: Google Search Console verification + submit sitemap

## File map
- src/content/{team,media,conferences}/ - all editable content, one md file per item
- src/components/Footer.astro - beehiiv form ID at top
- src/pages/contact.astro - Formspree endpoint const
- scripts/verify.mjs - post-build link/asset checker (npm run verify)
- public/images/brand/ - logo kit; public/og-image.png - social share image
- plans/completed/webflow-astro-migration/ - migration research + decisions
- Memory: ~/.claude/projects/-Users-Teng-Documents-claude-fza-website/memory/fza-deployment.md

## Next step
DNS cutover: in Cloudflare Pages project fza-website, Custom domains tab, add fuzhouamerica.org and www.fuzhouamerica.org, then update DNS records where the domain is registered (likely currently pointing at Webflow). After propagation: re-run the live check suite against fuzhouamerica.org, verify the /talktoomuch redirects and og images, THEN cancel the Webflow subscription.
