---
phase: 01-content-ui-polish
plan: 03
subsystem: ui-polish
tags: [partners, footer, grid, overscroll, animation]
dependency_graph:
  requires: [01-01]
  provides: [PART-01, PART-02, FOOT-01]
  affects: [PartnerLogos.tsx, Footer.tsx, globals.css]
tech_stack:
  added: []
  patterns: [css-opacity-layering, timestamp-debounce, z-index-stacking]
key_files:
  created: []
  modified:
    - src/app/globals.css
    - src/app/components/PartnerLogos.tsx
    - src/app/components/Footer.tsx
decisions:
  - "Grid opacity halved (0.08→0.04) so logos visually pop in front of grid without needing extra CSS stacking context"
  - "Footer overscroll debounce uses local closure variable (not ref) — only needed within the effect closure"
metrics:
  duration: ~5m
  completed: 2026-03-31
  tasks_completed: 2
  files_modified: 3
---

# Phase 01 Plan 03: Partners Grid Fix + Footer Overscroll Debounce Summary

**One-liner:** Halved grid opacity and added z-10 stacking so logos sit visually in front, added top+bottom section borders, and replaced rapid wheel event counting with 400ms timestamp debounce so 3 distinct trackpad gestures (not 3 rapid events) trigger the overscroll easter egg.

## Tasks Completed

| # | Task | Commit | Files |
|---|------|--------|-------|
| 1 | Partners grid — opacity, z-index, borders | 92be5a9 | globals.css, PartnerLogos.tsx |
| 2 | Footer overscroll debounce | aea3883 | Footer.tsx |

## Changes Made

### Task 1: Partners grid fix

**globals.css**
- `.bg-grid-pattern` opacity: `0.08` → `0.04` on both gradient lines
- Grid is now a subtle texture, not a competing visual element

**PartnerLogos.tsx**
- Section element: added `border-t border-b border-white/8`
- Row 1 motion.div: added `relative z-10`
- Row 2 motion.div: added `relative z-10`

### Task 2: Footer overscroll debounce

**Footer.tsx**
- Replaced raw `overscrollCount.current++` per wheel event with a timestamp-gated counter
- `lastAttemptTime` local closure variable initialized at 0
- Gate: `now - lastAttemptTime > 400` — only increments once per 400ms window
- Reset condition changed from `else` (any non-overscroll event) to `else if (!atBottom)` — avoids resetting during scroll momentum at bottom

## Deviations from Plan

### Pre-existing lint error (out of scope)

`useHydrated.ts` line 12 has a `react-hooks/set-state-in-effect` ESLint error that pre-dates this plan. Confirmed by reverting changes and re-running lint. Not caused by this plan's changes. Logged for deferred fix.

No auto-fixes were applied — all changes match the plan exactly.

## Known Stubs

None. All changes are complete and functional.

## Self-Check: PASSED

- `92be5a9` exists in git log: FOUND
- `aea3883` exists in git log: FOUND
- `src/app/globals.css` contains `0.04`: FOUND
- `src/app/components/PartnerLogos.tsx` contains `border-t border-b`: FOUND
- `src/app/components/Footer.tsx` contains `lastAttemptTime`: FOUND
