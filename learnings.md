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

## [2026-07-10] Squarespace transfer codes are email-only and go to the registrant contact

**Type:** domain
**Insight:** Squarespace never displays domain transfer auth codes in the dashboard. They email them (up to 24h) to the domain's registrant contact, which can differ from the account login email. Requesting a new code invalidates the previous one, so clicking again restarts the wait.
**Source:** fuzhouamerica.org/.com transfer-out, verified against Squarespace support docs.
**Applies to:** any domain transfer away from Squarespace.
**Scope:** global

## [2026-07-10] Diagnosing "DNS change not working" from one machine

**Type:** pattern
**Context:** After the cutover, the site looked broken locally while fine globally.
**What works:** Compare three views: authoritative (`dig @<ns>`), public resolver (`dig @1.1.1.1`), and the local resolver (`dig` bare, check remaining TTL in the answer). Then test serving with `curl --resolve host:443:<fresh-ip>` to bypass cache entirely. If authoritative and 1.1.1.1 agree, the change is live; the local view is just router cache with a visible TTL countdown.
**Reuse:** any DNS migration where "it doesn't work for me" needs to be split into global vs local.
**Scope:** global

## [2026-07-10] Squarespace Domains II transfers cannot be expedited

**Type:** domain
**Insight:** Domains registered under "Squarespace Domains II LLC" (the post-Google-Domains registrar entity) have a reject-only transfer confirmation: the email exists to cancel hijacked transfers, and no dashboard accept button exists. Transfers auto-complete in about 5 days. Only Squarespace's Tucows-registered domains get a speed-up confirmation email from the gaining side.
**Source:** Squarespace support docs during the fuzhouamerica.org/.com transfer to Cloudflare Registrar.
**Applies to:** planning timelines for any transfer away from Squarespace.
**Scope:** global
