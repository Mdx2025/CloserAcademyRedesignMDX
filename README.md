# started-sveltekit

Opinionated SvelteKit starter for landings and visual-heavy sites at MDX.
Comes pre-wired with smooth scroll, scroll-driven animations, a carousel
library, and the Tailwind Plus elements collection — so a new project
can focus on the actual design instead of plumbing.

## Stack

- **SvelteKit 2** + **Svelte 5** (runes-ready)
- **Vite 8**
- **adapter-node** for SSR deploys behind nginx / Dokploy / systemd
- **Tailwind CSS 4** via the `@tailwindcss/vite` plugin
- **`@tailwindplus/elements`** — Headless UI custom elements
- **Lenis** for smooth scroll, wired to the **GSAP** ticker so
  `ScrollTrigger` and Lenis share a single animation loop
- **Swiper** ready to import for carousels

The project is plain JavaScript with JSDoc — no TypeScript.

## Requirements

- Node ≥ 20
- **pnpm** 11 (pinned via `packageManager`)

## Scripts

```sh
pnpm install
pnpm dev               # vite dev — http://localhost:5173
pnpm build             # production build into ./build
pnpm start             # node build/index.js (after build)
pnpm preview           # vite preview of the built bundle
```

## What's already wired

- `src/lib/lenis.svelte` — Lenis initialisation, GSAP `ticker` sync, and
  anchor link handler (`a[href^="#"]` → `lenis.scrollTo`).
- `src/lib/lenis-store.js` — `writable` store exposing the live Lenis
  instance so any component can call `scrollTo` programmatically.
- `src/routes/+layout.svelte` — mounts `<Lenis />`, runs
  `ScrollTrigger.refresh(true)` after every navigation, and snaps scroll
  back to the top.
- `src/app.css` — Tailwind import + two extra `@theme` breakpoints
  (`--breakpoint-2xxl: 160rem`, `--breakpoint-3xl: 220rem`) for
  ultra-wide displays.

## Project layout

```
src/
├── app.css            ← Tailwind import + custom breakpoints
├── app.html           ← shell, preloads navigations on hover
├── lib/
│   ├── index.js       ← reusable component re-exports (empty by default)
│   ├── lenis.svelte   ← Lenis + GSAP ScrollTrigger bootstrap
│   └── lenis-store.js ← writable store with the active Lenis instance
└── routes/
    ├── +layout.svelte ← global shell, navigation hooks
    └── +page.svelte   ← demo page, replace with the real one
```

## Deploy

Build outputs a self-contained Node server in `./build`. Drop it on any
host that can run `node build/index.js`. We typically ship it behind
nginx as a systemd service.
