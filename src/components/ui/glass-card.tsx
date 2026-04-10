import * as React from "react";
import { cn } from "@/lib/utils";
import { glass } from "@/lib/theme";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "dark" | "light";
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "primary", hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          glass[variant],
          hoverEffect && "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
          className
        )}
        style={{ willChange: "transform, opacity" }}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";

const MotionGlassCard = motion(GlassCard);

export { GlassCard, MotionGlassCard };
