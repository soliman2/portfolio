# Images Folder

This folder contains all image assets used across the portfolio website.

## How to Add New Images

1. **Drop your image file** into this folder (`public/images/`)
2. **Reference it in your code** using: `/images/your-filename.ext`

## Current Images

- `soliman-portrait.png` - Profile photo used in Hero section

## Supported Formats

- PNG (`.png`)
- JPEG (`.jpg`, `.jpeg`)
- WebP (`.webp`)
- SVG (`.svg`)
- GIF (`.gif`)

## Example Usage

```tsx
// In any React component
<img src="/images/your-image.png" alt="Description" />

// Or with Next.js Image component
<Image src="/images/your-image.png" alt="Description" width={500} height={300} />
```

## File Naming Conventions

- Use lowercase
- Separate words with hyphens (-)
- Be descriptive: `profile-photo.png`, `project-screenshot-1.png`
- Avoid spaces and special characters

## Organization (Optional)

As the site grows, you can create subfolders:
- `public/images/projects/`
- `public/images/logos/`
- `public/images/icons/`

Then reference as: `/images/projects/myproject.png`
