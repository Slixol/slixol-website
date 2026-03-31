# Roadmap: Slixol Website — Client Feedback Iteration

## Overview

Three phases deliver the full client feedback iteration: quick content and UI fixes ship first, Lottie animation integration comes second (requires one new lightweight dependency), and the complex mobile UX improvements close out the milestone. Each phase is independently verifiable and builds confidence before tackling the next.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Content & UI Polish** - Text fixes, hero CTA redesign, partners grid fix, footer overscroll bug
- [ ] **Phase 2: Lottie Integration** - Replace ImagePlaceholder with Lottie animations in case studies
- [ ] **Phase 3: Mobile UX** - Marquee speed, Slixol Model scroll-pod, Services scroll-activation

## Phase Details

### Phase 1: Content & UI Polish
**Goal**: The site looks and reads correctly — no brand casing issues, no wrong dashes, CTA feels premium, partners grid is visually clean, footer easter egg is not hair-trigger
**Depends on**: Nothing (first phase)
**Requirements**: CONT-01, CONT-02, HERO-01, HERO-02, PART-01, PART-02, FOOT-01
**Success Criteria** (what must be TRUE):
  1. Every visible "Slixol" text instance (headings, body, labels) reads "slixol" in lowercase
  2. Hero CTA button has no 3D transform effect and shows a clean hover state (outline + subtle movement)
  3. All em-dashes in user-facing copy are replaced with en-dashes
  4. Partner logos are visibly in front of the grid pattern, with closed borders top and bottom
  5. Overscroll-to-consultation triggers only after 3 consecutive overscroll attempts, not the first
**Plans**: 3 plans
Plans:
- [x] 01-01-PLAN.md — Brand casing (CONT-01) and em-dash fixes (CONT-02) across 7 files
- [ ] 01-02-PLAN.md — Hero CTA restyle: flat magenta button with hover border glow (HERO-01, HERO-02)
- [x] 01-03-PLAN.md — Partners grid layering + borders (PART-01, PART-02) and footer overscroll debounce (FOOT-01)
**UI hint**: yes

### Phase 2: Lottie Integration
**Goal**: Case study cards show purposeful animated visuals instead of image placeholders, without performance regression
**Depends on**: Phase 1
**Requirements**: CASE-01, CASE-02
**Success Criteria** (what must be TRUE):
  1. All 4 case study cards display their assigned Lottie animation (not a grey placeholder)
  2. Lottie animations only load when the case studies section scrolls into viewport
  3. No measurable increase in initial page load (Lottie files lazy-loaded, not in critical bundle)
**Plans**: TBD
**UI hint**: yes

### Phase 3: Mobile UX
**Goal**: On mobile, the marquee is snappy, the Slixol Model is navigable pod-by-pod, and service cards activate contextually on scroll
**Depends on**: Phase 2
**Requirements**: MOB-01, MOB-02, MOB-03
**Success Criteria** (what must be TRUE):
  1. Marquee news bar on mobile completes a full cycle visibly faster — all 3 words appear within ~2 seconds
  2. Slixol Model on mobile shows one pod at a time with a compact circle diagram, advancing on scroll
  3. Service cards on mobile highlight the active card when it reaches viewport center (matching the HowWeWork blue dot pattern)
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Content & UI Polish | 2/3 | In Progress|  |
| 2. Lottie Integration | 0/TBD | Not started | - |
| 3. Mobile UX | 0/TBD | Not started | - |
