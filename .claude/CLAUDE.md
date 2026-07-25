# FZA Website

## What it is

The static public site for fuzhouamerica.org, the Fuzhou America nonprofit. Migrated off Webflow
in July 2026.

## Stack

Astro with `@astrojs/sitemap`. No CMS, no client-side framework, plain CSS. Images and fonts are
served from this repo. Node 18 or newer.

## Commands

- Install: `npm install`
- Dev: `npm run dev` (http://localhost:4321)
- Build: `npm run build`
- Preview: `npm run preview`
- Verify: `npm run verify`

## Invariants

- **This repo is PUBLIC.** FZA operations work does not belong here under any circumstance:
  donor names, finances, Drive inventories, sponsorship material, meeting notes. That work lives
  in `~/Documents/claude/fza/`, which must never get a public remote.
- **Untracking a file does not unpublish it.** `HANDOVER.md` and `learnings.md` were committed
  here and later removed, so they remain readable in history. Keep meta files out in the first
  place; the `.gitignore` block is the mechanism.
- **Cloud-sync conflict copies are a live hazard.** Drive appends " 2" to filenames, which
  defeats an exact-name ignore. `learnings 2.md` and `astro.config 2.mjs` are sitting untracked
  in this working tree right now. The `.gitignore` covers the pattern; do not weaken it.
- **No CMS by design.** Content changes are code changes.

## Pointers

| File | Holds |
|---|---|
| `README.md` | local setup for a contributor |
| `~/Documents/claude/fza/ROADMAP.md` | the FZA work queue, including anything site-adjacent |
| `brain/areas/fza/fza.md` | the nonprofit's hub page |
