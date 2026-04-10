import { MotionGlassCard } from "./glass-card";
import { fadeUp, baseViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface DetailedCardProps {
  title?: string;
  text: string;
  label?: string;
  isHighlighted?: boolean;
  index: number;
}

export const DetailedCard = ({
  title,
  text,
  label,
  isHighlighted = false,
  index,
}: DetailedCardProps) => {
  return (
    <MotionGlassCard
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={baseViewport}
      transition={{ delay: index * 0.1 }}
      variant={isHighlighted ? "primary" : "primary"}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "p-6 md:p-8 lg:p-10 h-full transition-all duration-500 rounded-2xl group cursor-pointer",
        isHighlighted 
          ? "bg-green-400 text-black border-none shadow-[0_20px_40px_-15px_rgba(74,222,128,0.3)]" 
          : "bg-white/50 backdrop-blur-xl border-gray-100 hover:border-accent/40 shadow-xl"
      )}
    >
      {label && (
        <div className={cn(
          "hook-text !text-sm !mb-6 opacity-60",
          isHighlighted ? "text-black/70" : "text-accent"
        )}>
          {label}
        </div>
      )}
      {title && (
        <h3 className={cn(
          "headline-lg mb-4 md:mb-6",
          isHighlighted ? "text-black" : "text-foreground"
        )}>
          {title}
        </h3>
      )}
      <p className={cn(
        "body-lg !text-base md:!text-lg leading-relaxed text-justify w-full",
        isHighlighted ? "text-black/80" : "text-muted-foreground"
      )}>
        {text}
      </p>
    </MotionGlassCard>
  );
};

