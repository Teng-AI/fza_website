---
name: content-updates
description: Update text, images, links, and other content on the FZA website. Use when the user wants to change wording, update statistics, add new media links, modify descriptions, or replace images.
---

# Content Updates

## Overview

This skill helps update content on the Fuzhou America website without breaking existing functionality.

## Project Structure

- **Pages**: Located in `src/app/` - each folder is a route (e.g., `about/page.tsx` = `/about`)
- **Components**: Located in `src/components/` (Header, Footer, SectionImage)
- **Images**: Located in `public/images/`
- **Styles**: Tailwind CSS in `src/app/globals.css`

## Common Content Locations

| Content Type | Location |
|--------------|----------|
| Homepage sections | `src/app/page.tsx` |
| About page text/stats | `src/app/about/page.tsx` |
| Team members | `src/app/team/page.tsx` |
| Contact info | `src/app/contact/page.tsx` |
| Navigation links | `src/components/Header.tsx` |
| Footer content | `src/components/Footer.tsx` |
| Site title/description | `src/app/layout.tsx` (metadata) |

## Instructions

### Updating Text Content

1. Identify which page contains the content (ask user if unclear)
2. Read the current file to find the exact text
3. Use the Edit tool to replace old text with new text
4. Run `npm run dev` to verify changes look correct

### Updating Statistics (About Page)

The stats are in the `stats` array at the top of `src/app/about/page.tsx`:
```tsx
const stats = [
  { number: "8000+", label: "Active online members" },
  // ... more stats
];
```

### Updating Media Links (Homepage)

The media links are in the `mediaLinks` array in `src/app/page.tsx`:
```tsx
const mediaLinks = [
  { publication: "Slate", title: "...", url: "..." },
  // ... more links
];
```

### Updating Navigation

Navigation links are in `src/components/Header.tsx`:
- `navLinks` array for main navigation
- `conferenceLinks` array for conference dropdown

### Replacing Images

1. Ask user to provide the new image file
2. Save new image to `public/images/` with a descriptive name
3. Update the `src` attribute in the relevant component
4. Ensure alt text is descriptive for accessibility

## Best Practices

- Always read the file first before making changes
- Keep the same formatting and structure as existing content
- Maintain consistent capitalization and punctuation
- Test changes with `npm run dev` before considering done
- For images, use descriptive filenames and alt text
