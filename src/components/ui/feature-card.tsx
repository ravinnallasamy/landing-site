import { motion, useTransform, MotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { MotionGlassCard } from "@/components/ui/glass-card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  index: number;
  scrollProgress: MotionValue<number>;
  targetX: number;
  targetY: number;
  delay: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  scrollProgress,
  targetX,
  targetY,
}: FeatureCardProps) => {
  // Since the parent container is fixed at the destination point,
  // we animate from the negative offset (the center of the screen) to 0 (the destination).
  const x = useTransform(scrollProgress, [0.1, 0.5], [-targetX, 0]);
  const y = useTransform(scrollProgress, [0.1, 0.5], [-targetY, 0]);

  const opacity = useTransform(
    scrollProgress,
    [0.1, 0.3],
    [0, 1]
  );

  const scale = useTransform(
    scrollProgress,
    [0.1, 0.35, 0.5],
    [0, 1.1, 1]
  );

  return (
    <MotionGlassCard
      style={{
        x,
        y,
        opacity,
        scale,
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform, opacity",
      }}
      variant="dark"
      className="absolute rounded-full shadow-lg shadow-black/20 flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1 pr-2 sm:pr-2.5 md:py-2 md:px-3 md:pr-6 min-w-max overflow-hidden"
    >
      <div className="flex-shrink-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md shadow-green-400/40 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10">
        <Icon className="text-white w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5" />
      </div>
      <div className="flex flex-col items-start justify-center text-left">
        <h3 className="card-title text-[9px] sm:text-[10px] md:text-xs">
          {title}
        </h3>
        {description && (
          <span className="card-description text-[7px] sm:text-[8px] md:text-[10px]">
            {description}
          </span>
        )}
      </div>
    </MotionGlassCard>
  );
};


export default FeatureCard;