/**
 * WayTree Design System Tokens
 * Centralized source of truth for all primitive values
 */

const colors = {
  primary: "hsl(155, 56%, 42%)",
  primaryHover: "hsl(155, 40%, 30%)",
  accent: "hsl(168, 76%, 42%)",
  background: "hsl(155, 50%, 7%)",
  card: "hsl(155, 45%, 10%)",
  border: "hsl(155, 30%, 18%)",
  text: "hsl(160, 60%, 95%)",
  muted: "hsl(160, 20%, 60%)",
};

const gradients = {
  neural: "linear-gradient(135deg, hsl(155, 50%, 7%), hsl(155, 40%, 14%))",
  emerald: "linear-gradient(135deg, hsl(168, 76%, 42%), hsl(155, 56%, 30%))",
  glow: "radial-gradient(ellipse at center, hsl(168, 76%, 42%, 0.15), transparent 70%)",
};

export const glass = {
  primary: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl",
  dark: "bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl",
  light: "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl",
};

export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  amber: "shadow-amber-500/20",
  green: "shadow-green-900/20",
  custom: {
    soft: "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
    strong: "shadow-[0_20px_40px_rgba(0,0,0,0.15)]",
    amber: "shadow-[0_25px_50px_-12px_rgba(251,191,36,0.5)]",
    green: "shadow-[0_48px_96px_-24px_rgba(0,0,0,0.15)]",
  },
};

export const spacing = {
  card: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  },
};

const animations = {
  fast: 0.2,
  normal: 0.6,
  slow: 1.2,
  ease: [0.23, 1, 0.32, 1], // Custom snap easing
};
