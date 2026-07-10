## [2026-07-09] Webflow exports drop CMS content but keep images across sister exports

**Type:** pattern
**Context:** Migrating fuzhouamerica.org from 4 Webflow exports; CMS-bound lists (FAQs, some galleries) render "No items found" in exports, and some pages reference CDN-only images.
**What works:** Recover CMS text by curling the live site and parsing w-dyn-item blocks; recover CDN-only images by filename-matching against the OTHER exports' local images/ folders (same asset, different site). Zero downloads were needed.
**Reuse:** Any Webflow-to-static migration. Audit each page for w-dyn-empty before trusting an export.

## [2026-07-10] Webflow keeps serving after DNS points elsewhere (Cloudflare for SaaS)

**Type:** domain
**Insight:** Webflow serves custom domains via Cloudflare for SaaS. If you move a domain's DNS zone onto Cloudflare and point proxied records at new hosting, Webflow's custom-hostname claim still wins at the edge and visitors keep getting the old Webflow site (its surrogate-key headers give it away). Fix: remove the custom domains in Webflow site settings, and grey-cloud (DNS only) the new CNAMEs until the claim expires.
**Source:** fuzhouamerica.org cutover debugging; purge-cache had no effect because the cache was in Webflow's zone, not ours.
**Applies to:** any migration off Webflow (or any Cloudflare-for-SaaS platform) onto Cloudflare-proxied hosting.
**Scope:** global
