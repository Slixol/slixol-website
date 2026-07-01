"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 80;

/**
 * On mount, jumps to the given section id. Because below-the-fold sections are
 * lazy-loaded (next/dynamic), the target's position shifts as content mounts —
 * so we re-align a few times, but bail the moment the user scrolls themselves.
 */
export default function ScrollToSection({ id }: { id: string }) {
  useEffect(() => {
    // Skip if the URL already carries a different hash the browser will handle.
    let userScrolled = false;
    const markUserScroll = () => {
      userScrolled = true;
    };
    window.addEventListener("wheel", markUserScroll, { passive: true });
    window.addEventListener("touchmove", markUserScroll, { passive: true });
    window.addEventListener("keydown", markUserScroll);

    const alignTo = (el: HTMLElement) => {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    let rafId = 0;
    let attempts = 0;
    const waitForElement = () => {
      if (userScrolled) return;
      const el = document.getElementById(id);
      if (el) {
        alignTo(el);
        // Re-align as lazy sections above the target finish mounting.
        [150, 450, 900].forEach((delay) =>
          window.setTimeout(() => {
            if (userScrolled) return;
            const target = document.getElementById(id);
            if (target) alignTo(target);
          }, delay),
        );
      } else if (attempts < 120) {
        attempts += 1;
        rafId = requestAnimationFrame(waitForElement);
      }
    };
    rafId = requestAnimationFrame(waitForElement);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", markUserScroll);
      window.removeEventListener("touchmove", markUserScroll);
      window.removeEventListener("keydown", markUserScroll);
    };
  }, [id]);

  return null;
}
