import type { Transition, Variants } from "motion/react";

export const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function fadeUpTransition(reducedMotion: boolean | null): Transition {
  if (reducedMotion) return { duration: 0 };
  return { duration: 0.5, ease: smoothEase };
}

export function sectionRevealVariants(reducedMotion: boolean | null): Variants {
  return {
    hidden: {},
    show: {
      transition: reducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.06 },
    },
  };
}

export function fadeUpItemVariants(reducedMotion: boolean | null): Variants {
  return {
    hidden: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: fadeUpTransition(reducedMotion),
    },
  };
}

export const viewportOnce = { once: true as const, margin: "-48px" as const };
