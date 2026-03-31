# Slixol Website — Client Feedback Iteration

## What This Is

A Slixol Media marketing website (Hungarian B2B digital growth agency) — static Next.js 16 site deployed to Cloudflare Workers. The current milestone focuses on implementing client feedback: UX polish, animation refinements, mobile experience improvements, and content fixes based on the first review round.

## Core Value

The website must feel premium, intentional, and fast — every interaction should reinforce Slixol's positioning as a professional digital growth partner. No janky animations, no broken mobile layouts, no cheap-feeling UI.

## Requirements

### Validated

- ✓ Hero section with video background and CTA — existing
- ✓ Animated marquee strip — existing
- ✓ Challenge/problem statement section — existing
- ✓ Slixol Model radial diagram (desktop) — existing
- ✓ "How We Work" process timeline with scroll-triggered steps — existing
- ✓ Services grid with hover-dim effect and animated SVG icons — existing
- ✓ Case studies section with 4 client stories — existing
- ✓ Partner logos marquee (60+ logos) — existing
- ✓ Culture section with 3D flip cards — existing
- ✓ Manifesto scroll-reveal — existing
- ✓ Calendly consultation embed with lazy loading — existing
- ✓ Categorized FAQ accordion — existing
- ✓ Footer with social links, legal docs, overscroll easter egg — existing
- ✓ Mobile responsive layout with mobile menu — existing
- ✓ Framer Motion animations throughout — existing
- ✓ SEO (robots.txt, sitemap.xml, OG meta) — existing
- ✓ Thank-you page (/koszonjuk) — existing
- ✓ Custom 404 page — existing
- ✓ Cloudflare Workers deployment via OpenNext — existing
- ✓ Brand name lowercase "slixol" everywhere — Phase 1
- ✓ Hero CTA flat magenta with hover glow — Phase 1
- ✓ En-dashes in all content — Phase 1
- ✓ Partners grid behind logos with closed borders — Phase 1
- ✓ Footer overscroll 3x debounced threshold — Phase 1
- ✓ Case studies Lottie animations with lazy loading — Phase 2

### Active

- [ ] Mobile marquee/news bar: speed up animation (3 words appear too slowly)
- [ ] Slixol Model mobile: scroll-based pod showcase, one pod visible at a time, compact circle diagram
- [ ] Services mobile: scroll-triggered card activation (blue dot pattern on viewport center, like HowWeWork)

### Out of Scope

- Calendly embed redesign — client will review live on Wednesday, deferred
- Backend/API/CMS integration — stays static for now
- Analytics integration — not requested this round
- Multilingual support — not requested

## Context

- Client: Slixol Media (Hungarian B2B digital growth agency)
- Language: Hungarian (lang="hu")
- Tech: Next.js 16.1.6, React 19, Tailwind CSS 4, Framer Motion 12, TypeScript 5
- Deploy: Cloudflare Workers via @opennextjs/cloudflare
- No backend, no database, no auth — pure static marketing site
- Lottie files provided in ZIP: 4 geometric animations (1080x1080, 30fps, 4s loops)
- First client feedback round — polish and refinement, not new features

## Constraints

- **Tech stack**: No new frameworks or major dependencies. Lightweight Lottie player only.
- **Deploy target**: Cloudflare Workers — must stay compatible with OpenNext adapter
- **Performance**: No regression. Lottie files are small (~6-8KB JSON each) but lazy-load them.
- **Brand**: "slixol" always lowercase in text. Logo images stay as-is.
- **Content language**: All UI text in Hungarian.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Lottie player library choice | Need lightweight player for 4 small animations | — Pending |
| Slixol Model mobile: scroll-based single-pod view | Client prefers compact scrollable version over vertical list | — Pending |
| Services mobile: scroll trigger like HowWeWork | Consistent UX pattern already used on the site | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-31 after Phase 2 completion*
