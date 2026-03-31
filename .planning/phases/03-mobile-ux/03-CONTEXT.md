# Phase 3: Mobile UX - Context

**Gathered:** 2026-03-31
**Status:** Ready for planning

<domain>
## Phase Boundary

On mobile, the marquee is snappy, the Slixol Model is navigable pod-by-pod, and service cards activate contextually on scroll. Covers MOB-01, MOB-02, MOB-03.

</domain>

<decisions>
## Implementation Decisions

### MOB-01: Marquee Speed
- The marquee uses CSS `animate-marquee` keyframe — speed controlled by animation duration
- On mobile (below md:768px), reduce the animation duration so all 3 words cycle within ~2 seconds
- Use a CSS media query to apply faster duration on mobile only
- Desktop speed stays unchanged

### MOB-02: Slixol Model Mobile Scroll-Pod
- Client chose option B: compact scrollable version, one pod at a time
- Current mobile: accordion with tap-to-expand — replace with scroll-based showcase
- Implementation: sticky/snap scroll container where each pod occupies a viewport-height segment
- As user scrolls, pods transition one at a time (slide up/fade)
- Include a compact mini-diagram at top showing which pod is active (5 dots or mini circle)
- Use `useScroll` + `useTransform` from framer-motion (already used in HowWeWork)
- Wrap in `md:hidden` — desktop version (radial diagram) stays unchanged

### MOB-03: Services Mobile Scroll Trigger
- On desktop: hover activates the blue dot pattern and card highlighting
- On mobile: no hover — use scroll position to trigger same effect
- When a card reaches viewport center, activate it (blue border, dot pattern, left accent)
- Use Intersection Observer or framer-motion `useInView` with `rootMargin` to detect center
- Match the HowWeWork scroll-triggered step pattern
- Only apply on mobile (below md:768px) — desktop hover behavior unchanged

### Claude's Discretion
- Exact marquee animation duration value for mobile
- Scroll snap behavior details (CSS scroll-snap vs JS-driven)
- Pod transition animation style (fade vs slide vs scale)
- Mini-diagram design for active pod indicator

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- HowWeWork.tsx — uses `useScroll` + `useTransform` for scroll-linked step activation, reference pattern for MOB-03
- Framer Motion `useInView` — used throughout for viewport detection
- `animate-marquee` keyframe in globals.css — controls marquee speed

### Established Patterns
- Mobile-first breakpoints: base → `md:` (768px) → `lg:` (1024px)
- SlixolModel already has mobile accordion (`mobileExpanded` state, `md:hidden` wrapper)
- ServiceCard uses `isHovered` state for visual activation — needs scroll-based equivalent

### Integration Points
- `MarqueeStrip.tsx` — `animate-marquee` CSS class, need mobile speed override
- `globals.css` — marquee keyframe definition, add mobile media query
- `SlixolModel.tsx:127-340` — mobile accordion section (replace with scroll-pod)
- `Services.tsx` — hoveredIndex state, needs scroll-based activation on mobile
- `ServiceCard.tsx` — accepts `isHovered` prop, mobile needs scroll-driven equivalent

</code_context>

<specifics>
## Specific Ideas

- Client: "ahogy görget az ember úgy egyszerre mindig egyet lát, és egymás után bemutatjuk az 5 témát" — scroll-based, one at a time
- Client: mobilon "kék, pöttyös design" should activate on scroll like HowWeWork
- Client: marquee "nagyon lassú és sokat kell várni, mire mind a 3 szó megjelenik"

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>
