'use client';

import { useEffect } from 'react';

/**
 * ScrollReveal — attaches an IntersectionObserver to all elements
 * with class `js-reveal` or `js-reveal-stagger`, adding `is-visible`
 * when they enter the viewport. Smooth scroll reveal per the CSS spec.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.js-reveal, .js-reveal-stagger');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, stop observing to save performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // This component only runs side effects
}
