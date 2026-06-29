# Signal Foundry interactive blog

A stylish frontend craft blog prototype built as a Next.js App Router site.

## Design read

Reading this as: editorial frontend blog for design-conscious developers, with a kinetic dark lab language, leaning toward Next.js + Tailwind v4 + Motion.

Dials:

- DESIGN_VARIANCE: 8
- MOTION_INTENSITY: 6
- VISUAL_DENSITY: 4

## What is inside

- Interactive homepage at `/`
- Article detail pages at `/posts/[slug]`
- Pointer-follow spotlight using Motion values
- Scroll progress rail and article reading progress
- Tilt-responsive article cards without React state on every pointer frame
- Category filtering with animated layout transitions
- Seeded photographic surfaces using Picsum URLs
- Tailwind v4 PostCSS setup

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

This prototype is intentionally not a normal landing-page blog. The feed is designed as a playable surface: hover, filter, scroll, and article preview states all change the stage.
