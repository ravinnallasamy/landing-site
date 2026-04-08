import { Variants } from "framer-motion";

/**
 * Standardized Animation Variants
 */

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const hoverLift = {
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
 * 3D Cube Animation
 */
export const rotateCubeY = {
  animate: { 
    rotateY: [0, 0, -90, -90, -180, -180, -270, -270, -360] 
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1],
    ease: "easeInOut" as const
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

export const repeatViewport = {
  once: false,
  amount: 0.3
};

export const textReveal: Variants = {
  initial: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
  animate: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

export const letterStagger: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const paragraphFade: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut"
    }
  }
};

export const gradientReveal: Variants = {
  initial: { backgroundPosition: "200% center" },
  animate: {
    backgroundPosition: "0% center",
    transition: { duration: 3, repeat: Infinity, ease: "linear" }
  }
};

export const staggerChildren: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const sectionReveal: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const pageTransition: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.3 }
  }
};
