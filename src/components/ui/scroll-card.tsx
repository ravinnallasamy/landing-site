import { motion, HTMLMotionProps, Variants } from "framer-motion";

/**
 * Global Scroll Animation System
 * Import ScrollCard or StaggerGroup anywhere to get scroll-triggered animations.
 * No inline variants needed.
 */

const EASE = [0.23, 1, 0.32, 1] as const;

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
  },
  growY: {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1.2, ease: EASE, delay: 0.3 } },
  },
};

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

interface ScrollCardProps extends HTMLMotionProps<"div"> {
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scaleIn" | "growY";
  delay?: number;
  asChild?: boolean;
}

/**
 * Wrap any element to animate it on scroll.
 * Usage: <ScrollCard animation="fadeUp">...</ScrollCard>
 */
export const ScrollCard = ({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  ...props
}: ScrollCardProps) => {
  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
}

/**
 * Wrap a list of ScrollCard children to stagger their entrance.
 * Children should use ScrollCard (they inherit hidden/visible from parent).
 * Usage: <StaggerGroup>{ items.map(i => <ScrollCard>...</ScrollCard>) }</StaggerGroup>
 */
export const StaggerGroup = ({
  children,
  className,
  staggerDelay,
  ...props
}: StaggerGroupProps) => {
  const parent = staggerDelay
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
        },
      }
    : staggerParent;

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/** Re-export the raw variants for edge cases */
export { variants as scrollVariants };
