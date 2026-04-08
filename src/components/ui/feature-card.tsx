import { motion, useTransform, MotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  index: number;
  scrollProgress: MotionValue<number>;
  targetX: number;
  targetY: number;
  delay: number;
  isMobile?: boolean;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  scrollProgress,
  targetX,
  targetY,
  delay,
  isMobile = false
}: FeatureCardProps) => {
  // Since the parent container is fixed at the destination point,
  // we animate from the negative offset (the center of the screen) to 0 (the destination).
  const x = useTransform(scrollProgress, [0, 0.4], [-targetX, 0]);
  const y = useTransform(scrollProgress, [0, 0.4], [-targetY, 0]);

  const opacity = useTransform(
    scrollProgress,
    [0, 0.2],
    [0, 1]
  );

  const scale = useTransform(
    scrollProgress,
    [0, 0.25, 0.4],
    isMobile ? [0, 1.1, 1] : [0, 1.15, 1]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        opacity,
        scale,
        // Perfectly center the origin of the card so `x` and `y` correspond to exactly the center coordinates
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform, opacity",
      }}
      className={`
        absolute
        bg-black/60 backdrop-blur-xl border border-white/20
        rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]
        flex items-center ${isMobile ? 'gap-1.5' : 'gap-3'}
        ${isMobile ? "p-1 pr-2.5" : "py-2 px-3 pr-6"}
        min-w-max
        overflow-hidden
      `}
    >
      <div className={`flex-shrink-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.8)] ${isMobile ? 'w-5 h-5' : 'w-10 h-10'
        }`}>
        <Icon className={`text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] ${isMobile ? 'w-2.5 h-2.5' : 'w-5 h-5'}`} />
      </div>
      <div className="flex flex-col items-start justify-center text-left">
        <h3 className="card-title">
          {title}
        </h3>
        {description && (
          <span className="card-description">
            {description}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;