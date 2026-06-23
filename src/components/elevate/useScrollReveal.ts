"use client";

import { useEffect } from "react";

/**
 * Initializes scroll-reveal animations for elements with the
 * `.reveal`, `.reveal-left`, or `.reveal-right` classes.
 * Should be called once per page mount.
 *
 * Uses an interval to re-observe dynamically-loaded content
 * (e.g., projects fetched after mount) so they also get observed.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll(
          ".reveal:not(.observed), .reveal-left:not(.observed), .reveal-right:not(.observed)"
        )
        .forEach((el) => {
          el.classList.add("observed");
          observer.observe(el);
        });
    };

    observeAll();

    // Re-observe periodically to catch dynamically loaded content
    const interval = setInterval(observeAll, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
}
