<!-- GSD:project-start source:PROJECT.md -->
## Project

**Slixol Website — Client Feedback Iteration**

A Slixol Media marketing website (Hungarian B2B digital growth agency) — static Next.js 16 site deployed to Cloudflare Workers. The current milestone focuses on implementing client feedback: UX polish, animation refinements, mobile experience improvements, and content fixes based on the first review round.

**Core Value:** The website must feel premium, intentional, and fast — every interaction should reinforce Slixol's positioning as a professional digital growth partner. No janky animations, no broken mobile layouts, no cheap-feeling UI.

### Constraints

- **Tech stack**: No new frameworks or major dependencies. Lightweight Lottie player only.
- **Deploy target**: Cloudflare Workers — must stay compatible with OpenNext adapter
- **Performance**: No regression. Lottie files are small (~6-8KB JSON each) but lazy-load them.
- **Brand**: "slixol" always lowercase in text. Logo images stay as-is.
- **Content language**: All UI text in Hungarian.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.9.3 - All source code (`src/**/*.ts`, `src/**/*.tsx`)
- TSX - React components (`src/app/components/**/*.tsx`)
- CSS - Global styles and Tailwind v4 theme (`src/app/globals.css`)
- JSONC - Wrangler config (`wrangler.jsonc`)
## Runtime
- Node.js v24.12.0
- No `.nvmrc` or `.node-version` file present
- npm 11.6.2
- Lockfile: `package-lock.json` (present)
## Frameworks
- Next.js 16.1.6 - App Router, React Server Components
- React 19.2.3 - UI library
- React DOM 19.2.3 - DOM rendering
- Tailwind CSS 4.2.1 - Utility-first CSS framework (v4 with `@tailwindcss/postcss` plugin)
- PostCSS - Via `postcss.config.mjs` with `@tailwindcss/postcss` plugin
- Framer Motion 12.36.0 - Page animations, scroll-based effects, hover interactions
- @opennextjs/cloudflare 1.17.1 - Cloudflare Workers adapter for Next.js
- Wrangler - Cloudflare Workers deployment CLI
- ESLint 9.x - With `eslint-config-next` (core-web-vitals + TypeScript presets)
## Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.6 | Core framework - App Router with RSC |
| `react` | 19.2.3 | UI rendering |
| `react-dom` | 19.2.3 | DOM rendering |
| `framer-motion` | 12.36.0 | All animations: scroll-linked, viewport entrance, hover, layout |
## Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `@opennextjs/cloudflare` | ^1.17.1 | Cloudflare Workers build adapter |
| `@tailwindcss/postcss` | ^4 | Tailwind v4 PostCSS integration |
| `@types/node` | ^20 | Node.js type definitions |
| `@types/react` | ^19 | React type definitions |
| `@types/react-dom` | ^19 | React DOM type definitions |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | 16.1.6 | Next.js ESLint rules (core-web-vitals + typescript) |
| `tailwindcss` | ^4 | Tailwind CSS framework |
| `typescript` | ^5 | TypeScript compiler |
## Configuration
- Target: ES2017
- Module: ESNext with bundler resolution
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Incremental compilation enabled
- Next.js plugin active
- Images: `unoptimized: true` (required for Cloudflare Workers - no image optimization API)
- No other custom configuration
- Custom color tokens: `--color-magenta`, `--color-blue`, `--color-dark`, `--color-dark-card`, `--color-dark-surface`, `--color-gray`, `--color-light-gray`, `--color-off-white`, `--color-white`, `--color-dark-purple`
- Custom gradients: `--gradient-blue`, `--gradient-magenta`
- Custom fonts: `--font-safiro`, `--font-inter`
- Custom spacing scale: 8px base (`--space-xs` through `--space-5xl`)
- Note: Tailwind v4 uses `@theme inline` blocks in CSS instead of `tailwind.config.js`
- Single plugin: `@tailwindcss/postcss`
- Flat config format (ESLint 9+)
- `eslint-config-next/core-web-vitals` preset
- `eslint-config-next/typescript` preset
- Worker name: `slixol-website`
- Main: `.open-next/worker.js`
- Compatibility date: 2025-12-30
- Compatibility flags: `nodejs_compat`
- Assets directory: `.open-next/assets`
- Default Cloudflare config via `defineCloudflareConfig()`
- R2 incremental cache commented out (not enabled)
## Fonts
- Inter - Primary body font, loaded with `latin` and `latin-ext` subsets
- CSS variable: `--font-inter`
- Safiro Medium - Display/heading font
- Files: `public/fonts/safiro-medium-webfont.woff2`, `public/fonts/safiro-medium-webfont.woff`
- Loaded via `@font-face` in `src/app/globals.css`
- Preloaded via `<link rel="preload">` in `src/app/layout.tsx`
- CSS variable: `--font-safiro`
## Build & Deploy
- Build outputs to `.open-next/` directory
- Worker entry: `.open-next/worker.js`
- Static assets: `.open-next/assets/`
## Platform Requirements
- Node.js v24+ (no pinned version)
- npm as package manager
- No Docker or container setup
- Cloudflare Workers (serverless edge)
- No database required
- No server-side environment variables required for the app itself
- Static site with embedded Calendly iframe as the only dynamic integration
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## TypeScript Patterns
- `strict: true` in `tsconfig.json` -- enforced across entire codebase
- Target: `ES2017`, module: `esnext`, module resolution: `bundler`
- JSX: `react-jsx` (automatic runtime)
- Use `interface` for component props -- every component defines `ComponentNameProps` interface
- Use `type` for unions and utility types (e.g., `type` for icon types in `ServiceIcon.tsx`)
- Inline typing is acceptable for small data structures (e.g., `{ num: string; title: string; items: string[] }`)
- `const` assertions used for fixed arrays (e.g., `as const` in `src/app/components/ServiceCard.tsx`)
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Usage: `import { useHydrated } from "@/app/hooks/useHydrated"`
## Component Patterns
- Almost all components use `"use client"` -- the site is animation-heavy with Framer Motion
- Only exception: route files that don't need interactivity (e.g., `src/app/not-found.tsx`, `src/app/koszonjuk/page.tsx`, `src/app/layout.tsx`)
- `src/app/components/ui/ImagePlaceholder.tsx` is the only UI component without `"use client"` (it uses `next/image` only)
- `src/app/hooks/useHydrated.ts` provides a global hydration flag
- All animated components use this to prevent hydration mismatch flicker:
- `initial={false}` on SSR prevents flash of unstyled → animated content
- Below-the-fold sections use `next/dynamic` in `src/app/page.tsx`
- Only `Header`, `Hero`, and `MarqueeStrip` are eagerly loaded
- All other sections: `const Section = dynamic(() => import("./components/Section"))`
- All components use `export default function` (Next.js route convention)
- This applies to both route files AND shared components (deviation from AGENTS.md which says "named exports only except route files")
## Naming
- Components: `PascalCase.tsx` -- `Hero.tsx`, `ServiceCard.tsx`, `CaseStudies.tsx`
- UI primitives: `PascalCase.tsx` in `ui/` subfolder -- `Button.tsx`, `AnimatedText.tsx`, `SectionLabel.tsx`
- Hooks: `camelCase.ts` with `use` prefix -- `useHydrated.ts`
- Route files: `page.tsx`, `layout.tsx`, `not-found.tsx` (Next.js conventions)
- Config/metadata: `robots.ts`, `sitemap.ts`
- `.elevated-card`, `.glass-card`, `.section-padding`, `.heading-display`, `.text-gradient-blue`
## Code Style
- No Prettier config detected -- relies on editor defaults
- No `.editorconfig` detected
- ESLint only: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`
- Config: `eslint.config.mjs` (flat config format)
- Rules: Next.js core-web-vitals + TypeScript rules (defaults, no custom overrides)
- Run: `npm run lint` (which runs `eslint`)
## Import Organization
## Error Handling
- `src/app/not-found.tsx` provides a custom 404 page
- No `error.tsx` boundary detected at any route level
- No try/catch blocks in the codebase -- the site is static content with no data fetching
- No form validation (Calendly is embedded as iframe)
## Styling Approach
- Brand colors: `--color-magenta`, `--color-blue`, `--color-dark`, etc.
- Gradients: `--gradient-blue`, `--gradient-magenta`
- Typography: `--font-safiro`, `--font-inter`
- Spacing scale: `--space-xs` through `--space-5xl` (8px base grid)
- Headings: Safiro font (`font-safiro` class) -- loaded via `@font-face` in globals.css + preloaded in `layout.tsx`
- Body: Inter font -- loaded via `next/font/google` in `layout.tsx`
- Letter-spacing utilities: `.heading-display` (-0.04em), `.heading-section` (-0.035em), `.heading-card` (-0.02em)
- Mobile-first breakpoints: base → `md:` (768px) → `lg:` (1024px)
- Container pattern: `mx-auto max-w-7xl px-6`
- Section spacing: `.section-padding` custom class (responsive via media queries)
- Cards: `.glass-card`, `.elevated-card`
- Backgrounds: `.glow-orb-blue`, `.glow-orb-magenta`, `.bg-grid-pattern`, `.bg-dot-pattern`
- Separators: `.section-separator`, `.section-break-blue`, `.section-break-magenta`
- Text: `.text-primary`, `.text-secondary`, `.text-tertiary`, `.text-gradient-blue`, `.text-gradient-magenta`
- Card accents: `.card-accent-blue`, `.card-accent-magenta`
## Animation Patterns
- Cards use `delay: index * 0.08` for staggered entrance
- Consistent across all grid-based sections
- Standard: `[0.25, 0.46, 0.45, 0.94]` -- used in most scroll reveals
- Premium: `[0.16, 1, 0.3, 1]` -- used in Hero for a snappier feel
- Cards use `style={{ transition: "..." }}` with conditional state for hover effects
- Buttons use `whileHover={{ scale: 1.02 }}` and `whileTap={{ scale: 0.98 }}`
- Service icons use animated SVG paths via `motion.rect`, `motion.path`, etc.
- `useScroll` + `useTransform` for scroll-linked animations (progress bar in `HowWeWork.tsx`, opacity in `Manifesto.tsx`)
- CSS `@media (prefers-reduced-motion: reduce)` disables marquee animations
- No Framer Motion reduced motion handling detected
- Used for mount/unmount animations (mobile menu in `Header.tsx`, accordion in `FAQ.tsx`, mobile accordion in `SlixolModel.tsx`)
## Common Patterns
- `SectionLabel` -- pill-shaped section tag with blue border
- `AnimatedText` -- scroll-reveal text wrapper supporting `h1`-`h3`, `p`, `span`
- `Button` -- multi-variant (primary/secondary/outline) with Framer Motion hover/tap
- `ImagePlaceholder` -- fallback placeholder or `next/image` wrapper
- All section content is defined as typed arrays/objects at module level
- Components iterate over data with `.map()` -- no hardcoded repetitive JSX
- Examples: `services[]` in `Services.tsx`, `caseStudies[]` in `CaseStudies.tsx`, `categories[]` in `FAQ.tsx`
- No icon library used -- all icons are hand-crafted inline SVGs
- Social icons in `Footer.tsx`, service icons in `ServiceIcon.tsx`, navigation icons
- Animated SVGs via Framer Motion's `motion.path`, `motion.rect`, etc.
- `next/image` used for logos and partner images
- Hero uses `<video>` element with `autoPlay muted loop playsInline`
- Images are unoptimized (`images.unoptimized: true` in `next.config.ts`) due to Cloudflare deployment
- Anchor-based scrolling (`href="#section-id"`)
- `scroll-behavior: smooth` set on `<html>` via CSS
- Nav items defined as static arrays in `Header.tsx` and `Footer.tsx` (duplicated)
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Static marketing site deployed to Cloudflare Workers via OpenNext
- All page sections are client components (`"use client"`) for Framer Motion animations
- Below-the-fold sections are dynamically imported via `next/dynamic` for bundle splitting
- No server-side data fetching, no API routes, no database -- pure static content
- Hungarian-language content, `lang="hu"` on `<html>`
## Layers
- Purpose: Provides global HTML structure, fonts, and metadata
- Location: `src/app/layout.tsx`
- Contains: Root `<html>` and `<body>`, Inter font setup via `next/font/google`, Safiro custom font preload, global metadata (OG, Twitter, canonical)
- Depends on: `src/app/globals.css`
- Used by: All pages
- Purpose: Composes the full landing page from ordered section components
- Location: `src/app/page.tsx`
- Contains: Section ordering, `next/dynamic` imports for code splitting
- Depends on: All section components in `src/app/components/`
- Pattern: Header + main (12 sections) + Footer. Only Header, Hero, and MarqueeStrip are eagerly loaded; the rest use `dynamic(() => import(...))`
- Purpose: Self-contained page sections, each with its own data, animations, and layout
- Location: `src/app/components/*.tsx`
- Contains: 13 section-level components, each marked `"use client"`
- Depends on: UI primitives in `src/app/components/ui/`, `useHydrated` hook, Framer Motion
- Pattern: Each section owns its static data as module-level constants (arrays of objects), renders its own grid/layout, handles its own scroll-based animations
- Purpose: Shared reusable UI atoms
- Location: `src/app/components/ui/*.tsx`
- Contains: `Button.tsx`, `AnimatedText.tsx`, `SectionLabel.tsx`, `ImagePlaceholder.tsx`
- Depends on: Framer Motion, `useHydrated`
- Used by: Most section components
- Purpose: Shared client-side logic
- Location: `src/app/hooks/useHydrated.ts`
- Contains: Single hook `useHydrated()` -- prevents SSR/hydration mismatch for animations
- Pattern: Module-level `let hydrated = false` singleton that flips to `true` after first client-side mount. Used throughout to conditionally apply `initial` animation states only after hydration
- Purpose: Global CSS, Tailwind theme configuration, custom utilities
- Location: `src/app/globals.css`
- Contains: Tailwind v4 `@theme inline` color/spacing/font tokens, custom CSS classes (`elevated-card`, `glass-card`, `glow-orb-*`, `section-padding`, marquee keyframes, heading letter-spacing utilities)
- Pattern: Tailwind v4 with CSS-only theme (no `tailwind.config.js`)
## Data Flow
- No global state management library
- All state is local `useState` within individual components
- State types: toggle states (mobile menu, accordion, flip cards), hover tracking (service cards, SlixolModel pods), scroll position detection (Header transparency, HowWeWork active step)
## Routing
- `/` -- Main landing page (`src/app/page.tsx`)
- `/koszonjuk` -- Thank-you page after form submission (`src/app/koszonjuk/page.tsx`)
- `404` -- Custom not-found page (`src/app/not-found.tsx`)
- `src/app/robots.ts` -- Generates `robots.txt` allowing all crawlers
- `src/app/sitemap.ts` -- Generates `sitemap.xml` with `/` and `/koszonjuk`
## Key Abstractions
- Purpose: Prevents hydration mismatch flicker for animated components
- Pattern: Returns `false` during SSR/initial render, `true` after first client mount
- Usage: Every animated component passes `hydrated ? { opacity: 0, y: 20 } : false` as `initial` prop to Framer Motion, ensuring animations only fire client-side
- Critical: Uses a module-level singleton (`let hydrated = false`) so subsequent component mounts during the same session skip the animation entirely
- Purpose: Reusable scroll-triggered text animation wrapper
- Pattern: Wraps any heading/paragraph with `whileInView` fade-up animation
- Props: `as` (HTML tag), `delay`, `className`
- Purpose: Consistent section category badge (pill with blue border + uppercase tracking)
- Used at top of most sections (Challenge, SlixolModel, Services, CaseStudies, Culture, FAQ, Consultation, Manifesto, PartnerLogos)
- Purpose: Animated CTA button with 3 variants (primary/magenta, secondary/blue, outline)
- Pattern: Renders `motion.a` when `href` is provided, `motion.button` otherwise
- Includes `whileHover` and `whileTap` micro-interactions
- Purpose: Interactive service card with hover dimming effect
- Pattern: Parent (`Services.tsx`) tracks `hoveredIndex` and passes `isAnyHovered`/`isHovered` to enable focus-on-hover where non-hovered cards dim to 45% opacity
- Purpose: Animated SVG icons for each service category
- Pattern: Each icon type has unique hover micro-animations (bar chart bouncing, gear rotating, rocket shifting, etc.)
## Component Hierarchy
```
```
## Entry Points
- Location: `src/app/page.tsx`
- Triggers: Browser navigation to `/`
- Responsibilities: Composes all 13 section components in order
- Location: `src/app/koszonjuk/page.tsx`
- Triggers: Redirect after Calendly booking or form submission
- Responsibilities: Confirmation message with back-to-home link
- Location: `src/app/not-found.tsx`
- Triggers: Any unmatched route
- Responsibilities: Custom 404 with branding and back-to-home link
## Error Handling
- No `error.tsx` or `global-error.tsx` boundaries defined
- Custom `not-found.tsx` provides branded 404 page
- Calendly embed has loading fallback (spinner) while iframe loads
- No try/catch blocks needed as there are no async operations in components
## Cross-Cutting Concerns
- Entrance animations (`whileInView`, `initial`/`animate`)
- Hover micro-interactions (`whileHover`, `whileTap`)
- Scroll-driven transforms (`useScroll`, `useTransform`)
- Layout animations (`AnimatePresence` for accordions/modals)
- Mobile: default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Some components have completely different layouts per breakpoint (SlixolModel: radial diagram vs accordion)
- Inter (Google Font via `next/font/google`) -- body text
- Safiro (custom, self-hosted woff2 via `@font-face`) -- headings, preloaded in `<head>`
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
