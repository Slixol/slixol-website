import type { MouseEvent } from "react";

/**
 * Menu items point at real URLs (/szolgaltatasok) so Google sees them and
 * "open in new tab" works. But when we're already on the one-pager, a click
 * shouldn't trigger a full route change (which would restart animations) —
 * we just update the URL via pushState and smooth-scroll to the section.
 */
export function navigateToSection(
  e: MouseEvent<HTMLElement>,
  slug: string,
  sectionId: string,
) {
  // Let modified clicks (new tab/window) navigate natively.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  const el = document.getElementById(sectionId);
  if (!el) return; // section not on this page — let the browser navigate

  e.preventDefault();
  if (window.location.pathname !== `/${slug}`) {
    window.history.pushState(null, "", `/${slug}`);
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
