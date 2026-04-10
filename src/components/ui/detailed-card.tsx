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
        "p-10 h-full transition-all duration-500 rounded-[2rem] group cursor-pointer",
        isHighlighted 
          ? "bg-green-400 text-black border-none shadow-[0_20px_40px_-15px_rgba(74,222,128,0.3)]" 
          : "bg-white/50 backdrop-blur-xl border-gray-100 hover:border-accent/40 shadow-xl"
      )}
    >
      {label && (
        <div className={cn(
          "text-sm font-mono tracking-[0.2em] uppercase mb-6 opacity-60 font-bold",
          isHighlighted ? "text-black/70" : "text-accent"
        )}>
          {label}
        </div>
      )}
      {title && (
        <h3 className={cn(
          "font-display text-3xl font-bold mb-6",
          isHighlighted ? "text-black" : "text-gray-900"
        )}>
          {title}
        </h3>
      )}
      <p className={cn(
        "text-lg leading-relaxed text-justify w-full font-medium",
        isHighlighted ? "text-black/80" : "text-gray-600"
      )}>
        {text}
      </p>
    </MotionGlassCard>
  );
};

