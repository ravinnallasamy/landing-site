import { motion } from "framer-motion";
import { rotateCubeY, repeatViewport } from "@/lib/animations";

interface CubeCardProps {
  feature: {
    image: string;
    title: string;
    description: string;
  };
  showContent?: boolean;
}

const CubeCard = ({ feature, showContent = true }: CubeCardProps) => {
  return (
    <div className="relative group h-full">
      <motion.div 
        className="relative w-32 h-32 mx-auto mb-6" 
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1200px"
        }}
        initial={{ rotateY: 0 }}
        whileInView={rotateCubeY.animate}
        transition={rotateCubeY.transition}
        viewport={repeatViewport}
      >
        {/* Faces */}
        {[0, 90, 180, -90].map((angle, i) => (
          <div 
            key={angle}
            className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-xl bg-white"
            style={{ 
              transform: `rotateY(${angle}deg) translateZ(64px)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          >
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-full h-full object-cover opacity-90" 
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      {/* Ambient Floor Shadow */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/20 blur-xl rounded-full" />
      
      {/* Content */}
      {showContent && (
        <div className="mt-12 text-justify">
          <h3 className="font-display font-semibold text-foreground text-sm mb-4 leading-tight text-left">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed w-full">
            {feature.description}
          </p>
        </div>
      )}
    </div>
  );
};

export { CubeCard };
