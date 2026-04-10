import { Variants } from "framer-motion";

/**
 * Standardized Animation Variants
 * Performance Optimized: Uses only opacity and transform properties.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, willChange: "transform, opacity" },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0, willChange: "opacity" },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, willChange: "transform, opacity" },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const hoverLift = {
  whileHover: { 
    y: -5, 
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" as const }
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" as const }
  }
};

/**
 * Common Viewport Options
 */
export const baseViewport = {
  once: true,
  amount: 0.2,
  margin: "-10% 0px"
};

const lazyViewport = {
  once: true,
  amount: 0.1
};

export const textReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05, willChange: "transform, opacity" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export const paragraphFade: Variants = {
  hidden: { opacity: 0, y: 15, willChange: "transform, opacity" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30, willChange: "transform, opacity" },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, x: -10, willChange: "transform, opacity" },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    x: 10,
    transition: { duration: 0.2 }
  }
};
