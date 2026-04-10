import { ReactNode } from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionBackground } from "@/components/ui/section-background";
import BackgroundParticles from "@/components/ui/background-particles";
import { cn } from "@/lib/utils";

interface BaseSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  showParticles?: boolean;
  backgroundVariant?: "emerald" | "dark" | "blue" | "none";
}

export const BaseSection = ({
  id,
  children,
  className,
  containerClassName,
  showParticles = true,
  backgroundVariant = "none",
}: BaseSectionProps) => {
  return (
    <SectionWrapper
      id={id}
      className={cn("relative group overflow-hidden", className)}
    >
      {showParticles && <BackgroundParticles />}
      {backgroundVariant !== "none" && (
        <SectionBackground variant={backgroundVariant} />
      )}
      
      <div className={cn("relative z-10", containerClassName)}>
        {children}
      </div>
    </SectionWrapper>
  );
};
