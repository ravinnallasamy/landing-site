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
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 animate-gpu-float">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white">
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-full h-full object-cover rounded-2xl opacity-90 transition-transform hover:scale-110 duration-500" 
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Ambient Floor Shadow */}
      {isInView && <div className="absolute top-20 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-3 md:h-4 bg-black/20 blur-xl rounded-full" />}
      
      {/* Content */}
      {showContent && isInView && (
        <motion.div 
          className="mt-12 text-justify"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={baseViewport}
        >
          <h3 className="headline-md !text-sm mb-4 leading-tight text-left">
            {feature.title}
          </h3>
          <p className="body-sm w-full">
            {feature.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export { CubeCard };
