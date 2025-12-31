---
name: page-creation
description: Create new pages for the FZA website following existing patterns. Use when the user wants to add a new page, create an event page, add a blog post, or build a new section of the site.
---

# Page Creation

## Overview

This skill creates new pages for the Fuzhou America website that match the existing design and structure.

## How Pages Work in Next.js

This site uses Next.js App Router:
- Each folder in `src/app/` becomes a URL route
- The `page.tsx` file in each folder is the page content
- Example: `src/app/events/page.tsx` = website.com/events

## Existing Page Patterns

### Standard Page Structure

All pages follow this pattern:

```tsx
export default function PageName() {
  return (
    <>
      {/* Hero Section - Primary color background */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display mb-6">
            Page Title
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            Subtitle or description
          </p>
        </div>
      </section>

      {/* Content Sections - Alternate between bg-cream and bg-white */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content here */}
        </div>
      </section>
    </>
  );
}
```

### Design System

**Colors** (use these class names):
- `bg-primary` / `text-primary` - Brand red color
- `bg-cream` - Off-white background
- `bg-white` - Pure white background
- `text-foreground` - Dark text
- `text-foreground/80` - Slightly lighter text

**Typography**:
- `font-display` - Bebas Neue (headings, all caps)
- `font-serif italic` - Playfair Display (elegant headings)
- Default font is Montserrat

**Common Patterns**:
- Two-column grid: `grid md:grid-cols-2 gap-8 lg:gap-16 items-center`
- Stats grid: `grid grid-cols-2 lg:grid-cols-3 gap-8`
- Max width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Section Types

**Hero Section** (always first):
```tsx
<section className="bg-primary text-white py-20 sm:py-32">
```

**Text + Image Section**:
```tsx
<section className="py-16 sm:py-20 bg-cream">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div>{/* Text content */}</div>
      <div>{/* Image */}</div>
    </div>
  </div>
</section>
```

**Stats Section**:
```tsx
<section className="py-16 sm:py-24 bg-cream">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-display text-primary">{stat.number}</div>
          <div className="text-foreground/70">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Instructions

### Creating a New Page

1. **Create the folder**: `src/app/[page-name]/`
2. **Create the file**: `src/app/[page-name]/page.tsx`
3. **Use the standard structure** from patterns above
4. **Add to navigation** if needed (edit `src/components/Header.tsx`)
5. **Test the page** with `npm run dev`

### Creating a Nested Page (e.g., /conference/2025)

1. **Create the folder**: `src/app/conference/2025/`
2. **Create the file**: `src/app/conference/2025/page.tsx`
3. **Update conference dropdown** in `src/components/Header.tsx`:
   ```tsx
   const conferenceLinks = [
     { href: "/conference/2025", label: "2025" },  // Add new year
     { href: "/conference/2024", label: "2024" },
     // ...
   ];
   ```

### Adding Images to New Pages

1. Place images in `public/images/sections/` or appropriate subfolder
2. Use Next.js Image component:
   ```tsx
   import Image from "next/image";

   <Image
     src="/images/sections/your-image.jpg"
     alt="Descriptive alt text"
     width={600}
     height={400}
     className="w-full h-auto object-cover"
   />
   ```

## Checklist for New Pages

- [ ] Page follows existing structure and patterns
- [ ] Hero section with appropriate title
- [ ] Responsive design (works on mobile)
- [ ] All images have alt text
- [ ] Added to navigation if user-facing
- [ ] Tested with `npm run dev`
