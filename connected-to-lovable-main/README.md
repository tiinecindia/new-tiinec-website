# TIINEC Website

Multi-page website for TIINEC, built with Vite, React, TypeScript, and Tailwind CSS.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

## Deployment notes

- `vercel.json` is included for single-page app route rewrites on Vercel.
- The site can also be built locally and the output in `dist/` can be uploaded to static hosting.

## Main page files

- `src/pages/Index.tsx`
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Projects.tsx`
- `src/pages/Resources.tsx`
- `src/pages/Contact.tsx`

## Shared components

- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/PageHeader.tsx`
- `src/components/Footer.tsx`
