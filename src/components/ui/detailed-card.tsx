import { motion } from "framer-motion";
import { fadeUp, baseViewport } from "@/lib/animations";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        y: -4,
        transition: { duration: 0.25 }
      }}
      className={`
        rounded-2xl p-6 shadow-lg h-full
        ${isHighlighted 
          ? 'bg-green-400 text-black' 
          : 'bg-gradient-to-br from-[#0B3D2E] to-[#071E16] border border-green-900/30 text-gray-300'
        }
      `}
    >
      {label && (
        <div className="text-xs font-mono tracking-wider uppercase mb-2 opacity-70">
          {label}
        </div>
      )}
      {title && (
        <h3 className="font-display text-lg font-bold mb-2">
          {title}
        </h3>
      )}
      <p className="text-sm leading-relaxed text-justify w-full">
        {text}
      </p>
    </motion.div>
  );
};
