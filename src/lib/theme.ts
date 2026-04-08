/**
 * WayTree Design System Tokens
 * Centralized source of truth for all primitive values
 */

export const colors = {
  primary: "hsl(155, 56%, 42%)",
  primaryHover: "hsl(155, 40%, 30%)",
  accent: "hsl(168, 76%, 42%)",
  background: "hsl(155, 50%, 7%)",
  card: "hsl(155, 45%, 10%)",
  border: "hsl(155, 30%, 18%)",
  text: "hsl(160, 60%, 95%)",
  muted: "hsl(160, 20%, 60%)",
};

export const gradients = {
  neural: "linear-gradient(135deg, hsl(155, 50%, 7%), hsl(155, 40%, 14%))",
  emerald: "linear-gradient(135deg, hsl(168, 76%, 42%), hsl(155, 56%, 30%))",
  glow: "radial-gradient(ellipse at center, hsl(168, 76%, 42%, 0.15), transparent 70%)",
};

export const glass = {
  primary: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg",
  dark: "bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl",
  light: "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md",
};

export const animations = {
  fast: 0.2,
  normal: 0.6,
  slow: 1.2,
  ease: [0.23, 1, 0.32, 1], // Custom snap easing
};
