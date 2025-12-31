# Image Guide for Fuzhou America Website

## Folder Structure
```
public/images/
├── hero/
│   └── welcome.jpg          # Hero banner image (1920x1080 recommended)
├── team/
│   ├── allen-cao.jpg        # 400x400 square
│   ├── teng-zheng.jpg
│   ├── angela-li.jpg
│   ├── george-dong.jpg
│   ├── jacky-chen.jpg
│   └── stanley-wong.jpg
├── sections/
│   ├── community.jpg        # Online community section (1200x800)
│   ├── meetup.jpg           # Social hangouts section
│   ├── retreat.jpg          # Retreats section
│   └── basketball.jpg       # Activity image
├── conference/
│   ├── 2024/
│   │   ├── hero.jpg         # Conference hero (1920x600)
│   │   └── speakers/        # Speaker headshots
│   └── 2023/
│       └── hero.jpg
└── logo.png                  # Site logo (200x200)
```

## Image Specifications

### Hero Images
- **Size**: 1920x1080px (or 1920x600 for conference)
- **Format**: JPG (for photos), PNG (if transparency needed)
- **Quality**: 80-85% compression

### Team Photos
- **Size**: 400x400px (square, will be displayed as circle)
- **Format**: JPG
- **Style**: Professional headshots, consistent lighting

### Section Images
- **Size**: 1200x800px (3:2 aspect ratio)
- **Format**: JPG
- **Style**: Community photos, events, activities

## How to Add Images

1. Drop the image file in the appropriate folder
2. Name it according to the guide above (lowercase, hyphens)
3. The website will automatically display it

## Optimization Tips

Before adding images, optimize them:
- Use [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Target file size: <200KB for section images, <500KB for heroes
- Next.js will also auto-optimize on build
