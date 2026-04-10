import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HTMLAttributes, useState, useRef, MouseEvent } from "react";

type AnimatedImageVariant = "3d-card" | "hover-lift" | "hover-glow" | "hover-tilt" | "hover-zoom-soft" | "hover-focus" | "pulse" | "cinematic";

interface AnimatedImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant?: AnimatedImageVariant;
  loading?: "eager" | "lazy";
  priority?: boolean;
}

const AnimatedImage = ({ src, alt, className, variant = "3d-card", loading = "lazy", priority = false, ...props }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for X and Y rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform spring values to degrees and percentages
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  // High-fidelity entry variants
  const cinematicVariants = {
    initial: { opacity: 0, scale: 1.05, y: 30 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: {
        duration: 1.0,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (variant === "cinematic" || variant === "3d-card") {
    const isCinematic = variant === "cinematic";
    return (
      <div 
        className={`perspective-[1200px] w-full h-full ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          variants={isCinematic ? cinematicVariants : {}}
          initial={isCinematic ? "initial" : {}}
          whileInView={isCinematic ? "animate" : {}}
          viewport={{ once: true }}
          style={{
            rotateX: isCinematic ? rotateX : rotateX, // Using our standardized springs
            rotateY: isCinematic ? rotateY : rotateY,
            transformStyle: "preserve-3d",
            willChange: "transform, opacity"
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className={`relative w-full h-full rounded-2xl shadow-xl overflow-hidden bg-transparent backface-hidden animate-gpu-float`}
        >
          {/* Shine effect overlay (Cinematic only) */}
          {isCinematic && (
            <motion.div
              style={{
                background: `radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 80%)`,
                left: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "120%"]),
                top: useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "120%"]),
                transform: "translate(-50%, -50%) translateZ(20px)", // Parallax depth
              }}
              className="absolute w-full h-full pointer-events-none z-10 brightness-125"
            />
          )}

          <img
            src={src}
            alt={alt}
            loading={loading}
            className="w-full h-full object-cover select-none"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{ 
              opacity: isLoaded || hasError ? 1 : 0,
              transform: "translateZ(0px)",
              transition: "opacity 0.5s ease-in-out"
            }}
            {...props}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={priority ? {} : { opacity: 0, y: 15 }}
      whileInView={priority ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={variant !== "pulse" ? { y: -5, scale: 1.02 } : {}}
      animate={variant === "pulse" ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: 0.4 }}
      className={`${className} animate-gpu-float`}
      style={{ willChange: "transform, opacity" }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="w-full h-full object-cover rounded-xl"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{ 
          opacity: isLoaded || hasError ? 1 : 0,
          transition: "opacity 0.5s ease-in-out" 
        }}
        {...props}
      />
    </motion.div>
  );
};

export default AnimatedImage;
