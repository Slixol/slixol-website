---
phase: quick
plan: 260331-pfk
type: execute
wave: 1
depends_on: []
files_modified:
  - src/app/components/SlixolModel.tsx
autonomous: true
requirements: []
must_haves:
  truths:
    - "Mobile layout shows 2-card top row (Marketing, Sales), center X logo, 3-card bottom row (Systems, AI, Brand)"
    - "Connector lines visually link the X logo to top and bottom card rows"
    - "activePod scroll detection still works — scrolling changes the highlighted card"
    - "5-dot progress indicator remains at the top and reflects activePod"
    - "Active card highlights with blue border/bg; inactive cards are dimmed"
  artifacts:
    - path: "src/app/components/SlixolModel.tsx"
      provides: "Refactored mobile section (lg:hidden block, lines 378–447)"
      contains: "grid-cols-2, grid-cols-3, glassmorphism center circle, data-pod-index"
  key_links:
    - from: "scroll event → updateActivePod()"
      to: "setActivePod(bestIndex)"
      via: "data-pod-index on each card div"
      pattern: "data-pod-index"
    - from: "activePod state"
      to: "card className"
      via: "ternary on border-blue/30 bg-dark-surface"
      pattern: "activePod === i"
---

<objective>
Refactor the SlixolModel mobile section (lg:hidden block) to replace the flat space-y-4 card list with a structured layout matching the desktop radial pattern: 2-card top row → glassmorphism center circle with connector lines → 3-card bottom row.

Purpose: Visual parity with the premium desktop layout on mobile, reinforcing Slixol's design quality.
Output: Updated src/app/components/SlixolModel.tsx with new mobile JSX. No other files touched.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
</execution_context>

<context>
@src/app/components/SlixolModel.tsx

<interfaces>
<!-- Key state and refs relevant to the mobile section -->

activePod: number          — index of the scroll-nearest pod (0–4)
mobileContainerRef         — ref on the lg:hidden wrapper div
updateActivePod()          — reads data-pod-index from all children, sets activePod to closest to viewport center

Pod order:
  0 = Marketing     (top-left card)
  1 = Sales         (top-right card)
  2 = Systems       (bottom-left card)
  3 = AI            (bottom-center card)
  4 = Brand         (bottom-right card)

Desktop center circle for reference (lines 327–344):
  w-[140px] h-[140px] rounded-full backdrop-blur-md bg-white/[0.04]
  border border-white/[0.08]
  boxShadow: "0 0 60px rgba(0,56,255,0.15), ..."
  Contains: <Image src="/logos/slixol-x-magenta.png" width={70} height={70} />

Desktop labels:
  Top: "Központi stratégia" — text-[11px] uppercase tracking-[0.25em] text-blue
  Bottom: "Egy ügyfél, egy rendszer" — same classes
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Replace mobile flat list with structured 2-center-3 layout</name>
  <files>src/app/components/SlixolModel.tsx</files>
  <action>
Replace the ENTIRE content of the lg:hidden div (lines 378–447) with the new structure. Keep the ref={mobileContainerRef} on the outer wrapper. Keep the 5-dot indicator exactly as-is.

New structure inside the lg:hidden div, after the dot indicator:

```
[5-dot indicator — unchanged]

<div className="space-y-3">

  {/* Top row: pods 0 (Marketing) and 1 (Sales) */}
  <div className="grid grid-cols-2 gap-3">
    {[0, 1].map((i) => MobilePodCard)}
  </div>

  {/* Center: glassmorphism X logo + vertical connector lines + labels */}
  <div className="relative flex flex-col items-center py-3">

    {/* Vertical line UP to top row */}
    <div className="w-px h-5 bg-gradient-to-t from-white/10 to-transparent mb-1" />

    {/* "Központi stratégia" label */}
    <span className="text-[10px] uppercase tracking-[0.2em] text-blue font-medium mb-3">
      Központi stratégia
    </span>

    {/* Glassmorphism circle — smaller than desktop (w-20 h-20) */}
    <div
      className="relative w-20 h-20 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center"
      style={{
        boxShadow: "0 0 40px rgba(0,56,255,0.15), 0 0 80px rgba(0,56,255,0.05), inset 0 0 20px rgba(255,255,255,0.02)",
      }}
    >
      <Image
        src="/logos/slixol-x-magenta.png"
        alt="Slixol X"
        width={44}
        height={44}
        className="object-contain"
      />
    </div>

    {/* "Egy ügyfél, egy rendszer" label */}
    <span className="text-[10px] uppercase tracking-[0.2em] text-blue font-medium mt-3 mb-1">
      Egy ügyfél, egy rendszer
    </span>

    {/* Vertical line DOWN to bottom row */}
    <div className="w-px h-5 bg-gradient-to-b from-white/10 to-transparent mt-1" />
  </div>

  {/* Bottom row: pods 2 (Systems), 3 (AI), 4 (Brand) */}
  <div className="grid grid-cols-3 gap-2">
    {[2, 3, 4].map((i) => MobilePodCard)}
  </div>

</div>
```

MobilePodCard inline JSX for each pod card (used in both grid rows):
```tsx
<motion.div
  key={i}
  data-pod-index={i}
  initial={hydrated ? { opacity: 0, y: 16 } : false}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.35, delay: i * 0.05 }}
  className={`rounded-xl border p-3 transition-all duration-300 ${
    activePod === i
      ? "border-blue/30 bg-dark-surface shadow-[0_0_24px_rgba(0,56,255,0.06)]"
      : "elevated-card opacity-60"
  }`}
>
  {/* Icon + Name */}
  <div className="flex items-center gap-2 mb-2">
    <span className={`transition-colors duration-300 ${activePod === i ? "text-blue" : "text-gray"}`}>
      {/* Render podIcons[i] at 16x16 — replace the SVG width/height inline */}
      {React.cloneElement(podIcons[i] as React.ReactElement, { width: 16, height: 16 })}
    </span>
    <span className="font-safiro text-sm text-white heading-card leading-tight">{pods[i].name}</span>
  </div>

  {/* Service tags only — no description paragraph (too verbose on small cards) */}
  <div className="flex flex-wrap gap-1">
    {pods[i].services.map((service) => (
      <span
        key={service}
        className={`px-2 py-0.5 rounded-md border text-[10px] transition-all duration-300 ${
          activePod === i
            ? "bg-blue/[0.08] border-blue/20 text-blue/80"
            : "bg-white/[0.04] border-white/[0.08] text-secondary"
        }`}
      >
        {service}
      </span>
    ))}
  </div>
</motion.div>
```

Implementation notes:
- Add `import React from "react"` if not already present (needed for React.cloneElement). Check existing imports first — React 19 with automatic JSX runtime typically does NOT need an explicit React import. Use React.cloneElement only if React is already in scope; otherwise resize icons by wrapping each podIcons[i] entry with a size prop via a helper: `const resizeIcon = (icon: React.ReactElement, size: number) => React.cloneElement(icon, { width: size, height: size })`. Import React explicitly at top if you use this pattern.
- The description paragraph is intentionally omitted for bottom row (3-col, very narrow cards). Top row (2-col) cards are wider — optionally include a truncated description with `line-clamp-2 text-xs` if it fits, but omit it if the card becomes too tall.
- Keep all existing desktop code (hidden lg:block section) and the scroll effect (useEffect) untouched.
- The `data-pod-index={i}` attribute MUST remain on each card div — the scroll detection depends on it.
- No new imports required beyond potentially `React` for cloneElement.
  </action>
  <verify>
    <automated>npm run build 2>&1 | tail -20</automated>
  </verify>
  <done>
    - Build passes with no TypeScript errors
    - Mobile layout (lg:hidden): 2-col top row → glassmorphism circle with labels and connector lines → 3-col bottom row
    - Desktop layout (hidden lg:block) is visually unchanged
    - 5-dot indicator still present above the grid
    - All 5 data-pod-index attributes present (one per card)
    - activePod scroll logic unchanged
  </done>
</task>

</tasks>

<verification>
- `npm run build` exits 0
- `npm run lint` exits 0
- Visually inspect on mobile viewport: 2 cards top, glassmorphism X center, 3 cards bottom
- Scroll through the section — active dot and card highlight shift correctly
- Desktop view unchanged
</verification>

<success_criteria>
Mobile SlixolModel section displays a structured hub-and-spoke layout (2 + center + 3) mirroring the desktop radial design, with scroll-driven activePod highlighting and the 5-dot progress indicator intact.
</success_criteria>

<output>
No SUMMARY.md needed for quick tasks.
</output>
```
