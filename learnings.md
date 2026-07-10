## [2026-07-09] Webflow exports drop CMS content but keep images across sister exports

**Type:** pattern
**Context:** Migrating fuzhouamerica.org from 4 Webflow exports; CMS-bound lists (FAQs, some galleries) render "No items found" in exports, and some pages reference CDN-only images.
**What works:** Recover CMS text by curling the live site and parsing w-dyn-item blocks; recover CDN-only images by filename-matching against the OTHER exports' local images/ folders (same asset, different site). Zero downloads were needed.
**Reuse:** Any Webflow-to-static migration. Audit each page for w-dyn-empty before trusting an export.
