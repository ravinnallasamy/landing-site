import { ReactNode, memo } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: "section" | "div";
}

/**
 * Standardized Section Wrapper
 * Handles layout consistently across all feature sections
 */
const SectionWrapper = memo(({ 
  children, 
  className = "", 
  containerClassName = "",
  id,
  as: Component = "section"
}: SectionWrapperProps) => (
  <Component 
    id={id}
    className={cn(
      "section-padding relative overflow-hidden",
      className
    )}
    style={{ transform: "translateZ(0)" }}
  >
    <div className={cn("container mx-auto px-4 md:px-8", containerClassName)}>
      {children}
    </div>
  </Component>
));

SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
