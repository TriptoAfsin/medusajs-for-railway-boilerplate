"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatingContainerProps {
  children: ReactNode;
  animation:
    | "fade"
    | "slideDown"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "zoomIn"
    | "scaleUp"
    | "scaleDown"
    | "zoomDown"
    | "bounceIn";
  duration?: number;
  className?: string;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
  },
  scaleDown: {
    initial: { scale: 1.2 },
    animate: { scale: 1 },
  },
  zoomDown: {
    initial: { opacity: 0, scale: 1.2, y: -20 },
    animate: { opacity: 1, scale: 1, y: 0 },
  },
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  },
};

export default function AnimatingContainer({
  children,
  animation = "fade",
  duration = 0.5,
  className = "",
}: AnimatingContainerProps) {
  return (
    <motion.div
      initial={animations[animation].initial}
      animate={animations[animation].animate}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
