# Handover

**Goal**: fuzhouamerica.org migration off Webflow. Site migration, DNS cutover, and repo audit are DONE; registrar transfers are mid-flight.

**Status**:
- LIVE: fuzhouamerica.org + www serve the Astro site from Cloudflare Pages (project fza-website, auto-deploys from main). 27/27 live checks passed.
- LIVE: fuzhouamerica.com 301-redirects every path to www.fuzhouamerica.org (Cloudflare redirect rule "com to org" + proxied AAAA 100:: records + Always Use HTTPS).
- Email intact on both domains (Google Workspace: 5 MX, SPF, DKIM each). Never delete those records.
- Repo audited: skills rewritten for Astro, work-logs untracked, unused logo removed, migration source zipped to migration-source.zip (569M, gitignored) and the raw folders deleted.
- IN FLIGHT: registrar transfers Squarespace -> Cloudflare initiated and PAID for both domains (2026-07-10, ~$22 total). Squarespace Domains II has no expedite path; transfers auto-complete by 2026-07-15. Registrant: Teng Zheng / Fuzhou America Inc / info@fuzhouamerica.org / home address.

**Decisions made**:
- .org DNS records are CNAME to fza-website.pages.dev set to DNS only (grey cloud): Webflow's Cloudflare-for-SaaS hostname claim hijacked proxied traffic. Claim should expire soon; can retry Proxied.
- .com redirects at the DNS/edge layer instead of being a second Pages domain (preserves SEO, one canonical site).

**What to avoid**:
- Clicking "Update domain" inside Webflow (re-binds its hostname claim).
- Purging cache to fix Webflow-content-after-cutover; the cache was Webflow's, the fix was removing custom domains in Webflow.

**Next step**:
- By 2026-07-15 the transfers complete on their own. Then: (1) user clicks Cloudflare's registrant-verification email at info@fuzhouamerica.org (mandatory; ignoring it suspends the domains after ~15 days), (2) verify whois registrar = Cloudflare and expiry = 2028 for both, nameservers unchanged, site + email checks green, (3) flip the two .org CNAMEs back to Proxied and confirm the new site still serves (Webflow SaaS claim should be long gone), (4) user cancels the Webflow subscription and the Squarespace account is then empty.
