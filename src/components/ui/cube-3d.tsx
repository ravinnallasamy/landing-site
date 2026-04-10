import { motion, useInView } from "framer-motion";
import { fadeUp, baseViewport } from "@/lib/animations";
import { useRef } from "react";

interface CubeCardProps {
  feature: {
    image: string;
    title: string;
    description: string;
  };
  showContent?: boolean;
}

const CubeCard = ({ feature, showContent = true }: CubeCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div ref={ref} className="relative group h-full">
      {isInView && (
        <div className="relative w-32 h-32 mx-auto mb-6 animate-gpu-float">
          <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-xl bg-white">
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-full h-full object-cover opacity-90 transition-transform hover:scale-110 duration-500" 
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Ambient Floor Shadow */}
      {isInView && <div className="absolute top-28 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/20 blur-xl rounded-full" />}
      
      {/* Content */}
      {showContent && isInView && (
        <motion.div 
          className="mt-12 text-justify"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={baseViewport}
        >
          <h3 className="font-display font-semibold text-foreground text-sm mb-4 leading-tight text-left">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed w-full">
            {feature.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export { CubeCard };
