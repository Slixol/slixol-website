# Page Factory

Landing page factory for real-estate agents — ship beautiful, blazing-fast websites to market in record time.

## IMPORTANT

Always enter into **planning mode** before writing code.

---

## Architecture — Nx Monorepo

This is an **Nx monorepo**. Every website is a standalone Next.js application assembled from shared, reusable libraries.

```
page-factory/
├── apps/
│   ├── luxe-realty/                # Next.js app — one website
│   ├── coastal-homes/              # Next.js app — another website
│   └── ...
├── libs/
│   ├── ui/                         # type:ui — shadcn/ui design system primitives
│   ├── animations/                 # type:ui — Framer Motion primitives & presets
│   ├── sections/                   # type:feature — reusable page sections (Hero, CTA, Testimonials…)
│   ├── layouts/                    # type:feature — shared layouts (marketing, dashboard, auth)
│   ├── data-access/                # type:data-access — Supabase clients, API calls, state
│   ├── hooks/                      # type:util — shared React hooks
│   ├── utils/                      # type:util — cn(), formatters, validators
│   └── types/                      # type:util — shared TypeScript types & Zod schemas
├── tools/
│   └── generators/                 # Custom Nx generators for scaffolding
├── nx.json
├── tsconfig.base.json
└── package.json
```

### Nx Library Types

Every library must be tagged with a **type** and a **scope**. These tags enforce module boundary rules via `@nx/enforce-module-boundaries`.

| Type | Purpose | Can depend on | Examples |
|------|---------|---------------|----------|
| `type:app` | Deployable applications | feature, ui, data-access, util | `apps/luxe-realty` |
| `type:feature` | Smart components, page sections, business logic | ui, data-access, util | `libs/sections`, `libs/layouts` |
| `type:ui` | Presentational components, design primitives | ui, util | `libs/ui`, `libs/animations` |
| `type:data-access` | API calls, Supabase clients, state management | data-access, util | `libs/data-access` |
| `type:util` | Pure functions, helpers, types, hooks | util | `libs/utils`, `libs/hooks`, `libs/types` |

**Dependency flow is strictly one-directional:** `app → feature → ui / data-access → util`. Circular dependencies are forbidden.

### Monorepo Rules

1. **Apps are thin shells.** An app in `apps/` imports and composes components from `libs/`. It owns only its routes, content/copy, branding overrides, and configuration.
2. **Libs are the source of truth.** Every UI component, page section, layout, animation primitive, and utility lives in `libs/`. If you build something reusable, it goes in a lib — never in an app.
3. **Never duplicate.** Before creating a component, search `libs/` for an existing one. Extend or compose — never copy-paste.
4. **New website = new Nx app.** Scaffold with `nx g @nx/next:application apps/<name>` and wire it to the shared libs. The app should be mostly composition and content, not new components.
5. **Tag everything.** Every project must have `type:` and `scope:` tags in its `project.json`. Enforce boundaries with the ESLint Nx module boundary rule.
6. **Use affected commands.** Never build/test/lint everything — run `nx affected -t <target>` to only process what changed.
7. **Cache aggressively.** All `build`, `lint`, `test`, and `e2e` targets must be cacheable in `nx.json`.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Monorepo | **Nx** (latest) — computation caching, affected builds, project graph, module boundaries |
| Framework | **Next.js 16+** (App Router) — RSC, PPR, `use cache`, streaming |
| Styling | **Tailwind CSS v4** — utility-first, CSS-first config, `@theme` blocks |
| Components | **shadcn/ui** — copied into `libs/ui/`, fully owned and customizable |
| Animations | **Framer Motion** — scroll reveals, page transitions, micro-interactions |
| Auth | **Supabase** (Auth + Postgres + Realtime) |
| Forms | **React Hook Form** + **Zod** validation |
| AI | **Vercel AI SDK** |

---

## Design Philosophy

Every landing page must be **stunning, fast, and mobile-first**.

### Mobile First

- All layouts start at the smallest breakpoint and scale up (`sm:`, `md:`, `lg:`, `xl:`).
- Touch targets are minimum 44x44px.
- Navigation collapses to mobile patterns by default.
- Images use responsive `sizes` and `next/image` for optimal loading.
- Test every component at 320px width before wider breakpoints.

### Performance

- Target **100 Lighthouse performance score**.
- Use Next.js `use cache` and PPR (Partial Prerendering) for instant static shells with streamed dynamic content.
- Lazy-load below-the-fold sections with `dynamic()` or `Suspense`.
- Animate only GPU-accelerated properties (`opacity`, `transform`) — never `width`, `height`, `top`, `left`.
- Use `next/image` for all images (never raw `<img>`), `next/font` for all fonts.
- Prefer Server Components. Only add `'use client'` when the component genuinely needs browser APIs, state, or event handlers.

### Visual Quality

- Every page must look **intentionally designed** — not generic AI output.
- Choose a bold aesthetic direction per website and commit to it.
- Use distinctive typography — avoid generic fonts like Arial, Inter, Roboto.
- Use striking color palettes with dominant colors and sharp accents.
- Add depth with scroll-triggered animations, parallax effects, and staggered reveals.
- Leverage negative space, asymmetric layouts, and layered compositions.
- Read the `frontend-design` skill before building any page or component.

---

## Skills

Read the relevant skill in `.agents/skills/` **before** writing code in that domain. Skills contain patterns, code examples, and rules that must be followed.

### Skill Reference

| Skill | Path | Read when... |
|-------|------|-------------|
| **Nx Workspace Patterns** | `nx-workspace-patterns/SKILL.md` | Setting up the workspace, creating apps/libs, configuring project boundaries, tagging, caching, affected commands, CI pipelines, custom generators. The architectural backbone of the monorepo. |
| **Frontend Design** | `frontend-design/SKILL.md` | Building any page, component, or UI. Defines the visual quality bar — distinctive typography, bold palettes, spatial composition, depth and texture. |
| **Framer Motion Animator** | `framer-motion-animator/SKILL.md` | Adding any animation — scroll reveals, page transitions, hover effects, staggered lists, parallax, gestures, micro-interactions. Contains reusable animation components and transition presets. |
| **Next.js Best Practices** | `next-best-practices/SKILL.md` | Server vs Client decisions, data fetching, error/loading boundaries, file conventions, RSC boundaries, async patterns, image/font optimization, metadata, route handlers, bundling. Hub skill with sub-documents for each topic. |
| **Next.js Cache Components** | `next-cache-components/SKILL.md` | Using `use cache` directive, PPR (Partial Prerendering), `cacheLife`, `cacheTag`, `updateTag`. Essential for performance — mix static, cached, and dynamic content in a single route. |
| **shadcn/ui** | `shadcn-ui/SKILL.md` | Discovering, installing, and customizing shadcn components. Component architecture, `cn()` utility, theming with CSS variables, extending components, blocks, accessibility. |
| **shadcn (CLI & Rules)** | `shadcn/SKILL.md` | Using the shadcn CLI, enforcing composition rules (forms, icons, styling, component structure), working with registries and presets. Contains critical rules that must always be followed. |

### Skill Combinations

Use skills in the order listed — each builds on the previous.

| Task | Skills (in order) |
|------|------------------|
| **Setting up the monorepo** | `nx-workspace-patterns` |
| **New website app** | `nx-workspace-patterns` → `next-best-practices` → `next-cache-components` → then per-section skills below |
| **New landing page** | `frontend-design` → `framer-motion-animator` → `shadcn/ui` → `next-best-practices` → `next-cache-components` |
| **Reusable section** (Hero, CTA, Testimonials) | `frontend-design` → `framer-motion-animator` → `shadcn/ui` |
| **New shared library** | `nx-workspace-patterns` (tagging, boundaries, generators) |
| **Animation work** | `framer-motion-animator` |
| **Performance optimization** | `next-cache-components` → `next-best-practices` (image, font, bundling sub-docs) |
| **UI component work** | `shadcn` (rules) → `shadcn-ui` (integration) |
| **Auth flows** | `next-best-practices` → `shadcn/ui` |
| **Dashboard pages** | `next-best-practices` → `shadcn/ui` → `frontend-design` |
| **CI/CD pipeline** | `nx-workspace-patterns` (affected commands, remote caching, CI template) |

---

## Clean Code

These principles are non-negotiable. Every file committed must follow them.

### Single Responsibility

- One component does one thing. If a component handles layout AND data fetching AND animations, split it.
- One file per component. No multi-component files except tiny private helpers used only by the main export.
- Libs are focused. `libs/ui/` does not contain business logic. `libs/data-access/` does not contain UI.

### Meaningful Names

- **Components**: describe what they render — `PropertyHeroSection`, `AgentTestimonialCard`, `MortgageCalculator`. Never `Component1`, `MyCard`, `Wrapper`.
- **Props**: describe what they accept — `headline`, `agentName`, `testimonials`. Never `data`, `info`, `stuff`.
- **Functions**: describe what they do — `formatPhoneNumber`, `calculateMortgage`, `fetchListings`. Never `doStuff`, `handleIt`, `process`.
- **Booleans**: phrase as yes/no questions — `isVisible`, `hasTestimonials`, `canSubmit`. Never `flag`, `status`, `check`.
- **Constants**: uppercase snake_case for true constants — `MAX_LISTINGS_PER_PAGE`, `DEFAULT_HERO_HEIGHT`.

### Small Functions

- Functions should do one thing and fit on one screen (~30 lines max).
- If a function needs a comment explaining what a block does, that block should be its own function with a descriptive name.
- Extract complex conditionals into named boolean variables or predicate functions.

### No Dead Code

- Delete unused imports, variables, functions, and components. Never comment out code "for later."
- No `console.log` in committed code. Use proper error handling or debug utilities.
- No `TODO` or `FIXME` without an associated ticket/issue number.

### DRY — Don't Repeat Yourself

- If the same pattern appears twice, extract it. Three times is a hard rule — refactor into a shared function or component in `libs/`.
- Configuration values used in multiple places must be constants or environment variables, never magic strings.
- Styles that repeat across components should become Tailwind utilities, CSS variables, or shared class compositions.

### Composition Over Inheritance

- Build complex UI by composing simple components, not by passing dozens of props to a mega-component.
- Use the children pattern and render props. Avoid prop drilling deeper than 2 levels — use context or composition instead.
- Prefer many small, focused components over few large, configurable ones.

### Explicit Over Implicit

- No default exports (except Next.js route files which require them). Use named exports so refactoring tools and imports are unambiguous.
- Props must be typed with interfaces — no `Record<string, any>` or implicit `any`.
- Side effects (data fetching, subscriptions, timers) must be obvious in the component — not hidden in a utility that silently mutates state.

### Error Handling

- Never swallow errors with empty `catch` blocks.
- Use Next.js `error.tsx` boundaries at every route segment.
- Validate all external data at the boundary with Zod schemas — never trust untyped API responses.
- User-facing errors must be helpful, not stack traces.

### File Organization

- Imports are ordered: React/Next → external packages → `libs/` imports → relative imports. Group with blank lines between sections.
- Each lib has a barrel `index.ts` that exports the public API. Internal implementation details are not exported.
- Test files live next to the source file: `hero-section.tsx` and `hero-section.spec.tsx` in the same directory.

---

## Workflow: Creating a New Website

1. **Plan** — Enter planning mode. Define the aesthetic direction, sections needed, and content structure.
2. **Scaffold the app** — `nx g @nx/next:application apps/<website-name>` with tags `type:app,scope:<website-name>`.
3. **Audit libs** — Check what already exists in `libs/sections/`, `libs/ui/`, `libs/animations/`, `libs/layouts/`. Reuse everything possible.
4. **Build missing sections** — If a section doesn't exist in `libs/sections/`, build it there as a reusable component with props for content/branding. Read `frontend-design` + `framer-motion-animator` skills first.
5. **Assemble the page** — In the app's route files, import sections from libs and pass content/config props. The app should be mostly composition.
6. **Animate** — Add scroll-triggered reveals, staggered entrances, and page transitions using shared primitives from `libs/animations/`.
7. **Optimize** — Apply `use cache`, PPR, responsive images, font optimization. Target 100 Lighthouse.
8. **Mobile QA** — Verify every section at 320px, 375px, 768px, 1024px, 1440px.
9. **Lint & test** — Run `nx affected -t lint test` before committing.

---

## Workflow: Creating a Reusable Component

1. **Check if it exists** — Search `libs/` before writing anything.
2. **Choose the right lib** — UI primitives → `libs/ui/`. Page sections → `libs/sections/`. Animation wrappers → `libs/animations/`. Layouts → `libs/layouts/`. Hooks → `libs/hooks/`. Pure functions → `libs/utils/`.
3. **Make it configurable** — Accept content, variant, and branding props. Never hardcode copy or colors into a shared component.
4. **Mobile first** — Build for the smallest screen, then add responsive breakpoints.
5. **Animate by default** — Sections should include tasteful entrance animations using shared animation primitives.
6. **Export from the barrel** — Add the component to the lib's `index.ts`.
7. **Tag the lib** — Ensure `project.json` has the correct `type:` and `scope:` tags.

---

## Code Conventions

### TypeScript

- Strict mode everywhere. No `any`. No `@ts-ignore` unless annotated with a justification.
- Use `interface` for component props, `type` for unions and intersections.
- Prefer `const` assertions and discriminated unions over enums.
- All function arguments and return types must be explicitly typed.

### Naming

- **Files**: `kebab-case.tsx` for components, `kebab-case.ts` for utilities.
- **Components**: `PascalCase` — `HeroSection`, `TestimonialCard`, `PropertyListingGrid`.
- **Props**: `ComponentNameProps` — `HeroSectionProps`, `TestimonialCardProps`.
- **Lib imports**: `@page-factory/<lib-name>` alias (configured in `tsconfig.base.json`).
- **Event handlers**: `onVerbNoun` — `onSubmitForm`, `onClickListing`, `onChangeFilter`.
- **Hook names**: `use` prefix — `useListings`, `useScrollAnimation`, `useMediaQuery`.

### Tailwind

- Mobile-first breakpoints always. Never write desktop-first styles.
- Use `gap-*` for spacing, never `space-x-*` or `space-y-*`.
- Use `size-*` when width and height are equal.
- Use semantic color tokens (`bg-primary`, `text-muted-foreground`) — never raw values like `bg-blue-500` in shared components.
- Use `cn()` for conditional classes — never template literal ternaries.

### Components

- Server Components by default. Add `'use client'` only when the component genuinely needs browser APIs, state, or event handlers.
- All shared components must live in `libs/`, never in `apps/`.
- shadcn/ui components live in `libs/ui/` and follow all rules from the `shadcn` skill.
- Every image uses `next/image`. Every font uses `next/font`.
- Named exports only (except Next.js route files).

---

## Nx Commands Reference

```bash
# Scaffold a new website app
nx g @nx/next:application apps/<website-name> --tags="type:app,scope:<name>"

# Scaffold a new shared library
nx g @nx/react:library libs/<lib-name> --tags="type:<type>,scope:shared"

# Run a specific app in dev mode
nx dev <app-name>

# Build a specific app for production
nx build <app-name> --configuration=production

# Run only affected targets (lint, test, build, e2e)
nx affected -t lint test build --parallel=3

# Visualize the project dependency graph
nx graph

# Reset Nx cache
nx reset

# Run Nx migrations after updating
nx migrate latest && nx migrate --run-migrations
```
