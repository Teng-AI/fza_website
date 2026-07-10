# Handover

**Goal**: fuzhouamerica.org migration off Webflow. Site migration, DNS cutover, and repo audit are DONE; registrar transfers are mid-flight.

**Status**:
- LIVE: fuzhouamerica.org + www serve the Astro site from Cloudflare Pages (project fza-website, auto-deploys from main). 27/27 live checks passed.
- LIVE: fuzhouamerica.com 301-redirects every path to www.fuzhouamerica.org (Cloudflare redirect rule "com to org" + proxied AAAA 100:: records + Always Use HTTPS).
- Email intact on both domains (Google Workspace: 5 MX, SPF, DKIM each). Never delete those records.
- Repo audited: skills rewritten for Astro, work-logs untracked, unused logo removed, migration source zipped to migration-source.zip (569M, gitignored) and the raw folders deleted.
- IN FLIGHT: registrar transfers Squarespace -> Cloudflare. Both domains unlocked at the registry; waiting on auth-code emails to info@fuzhouamerica.org (up to 24h; do NOT re-request, it invalidates the code in flight).

**Decisions made**:
- .org DNS records are CNAME to fza-website.pages.dev set to DNS only (grey cloud): Webflow's Cloudflare-for-SaaS hostname claim hijacked proxied traffic. Claim should expire soon; can retry Proxied.
- .com redirects at the DNS/edge layer instead of being a second Pages domain (preserves SEO, one canonical site).

**What to avoid**:
- Clicking "Update domain" inside Webflow (re-binds its hostname claim).
- Purging cache to fix Webflow-content-after-cutover; the cache was Webflow's, the fix was removing custom domains in Webflow.

**Next step**:
- When the two auth codes arrive at info@fuzhouamerica.org: Cloudflare -> Domain Registration -> Transfer Domains, paste codes, pay (~$11 each, adds a year), then approve Squarespace's transfer-out confirmation email. Then verify: whois registrar = Cloudflare, expiry 2028, site + email checks still green. Same visit: flip the two .org CNAMEs back to Proxied and verify the new site still serves. After all green: user cancels the Webflow subscription.
