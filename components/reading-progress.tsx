"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-cyan-200"
      style={{ scaleX }}
    />
  );
}
