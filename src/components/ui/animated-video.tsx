import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedVideoVariant = "hover-lift" | "hover-glow" | "hover-tilt" | "hover-zoom-soft" | "hover-focus";

interface AnimatedVideoProps {
  src: string;
  alt: string;
  className?: string;
  variant?: AnimatedVideoVariant;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  priority?: boolean;
}

const AnimatedVideo = ({ 
  src, 
  alt, 
  className, 
  variant = "hover-lift",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "none",
  priority = false
}: AnimatedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simplified scroll animation for performance
  const scrollAnimation = priority ? {} : {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  // Hover animation variants
  const hoverVariants = {
    "hover-lift": {
      whileHover: { 
        y: -6, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" as const }
      }
    },
    "hover-glow": {
      whileHover: { 
        scale: 1.04,
        boxShadow: "0px 20px 40px rgba(26, 188, 156, 0.25)",
        transition: { duration: 0.3, ease: "easeOut" as const }
      }
    },
    "hover-tilt": {
      whileHover: { 
        rotate: 1, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" as const }
      }
    },
    "hover-zoom-soft": {
      whileHover: { 
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" as const }
      }
    },
    "hover-focus": {
      whileHover: { 
        scale: 1.03,
        filter: "brightness(1.1)",
        transition: { duration: 0.3, ease: "easeOut" as const }
      }
    }
  };

  const currentVariant = hoverVariants[variant];

  useEffect(() => {
    const video = videoRef.current;
    if (video && autoPlay && isLoaded) {
      // Attempt to play the video only after it's loaded
      video.play().catch(() => {
        // Autoplay was prevented, we can show a play button or handle it gracefully
        setIsPlaying(false);
      });
    }
    
    // Cleanup function to prevent accessing unmounted DOM nodes
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [autoPlay, isLoaded]);

  return (
    <motion.div
      {...scrollAnimation}
      {...currentVariant}
      className={className}
    >
      <video
        ref={videoRef}
        src={src}
        preload={preload}
        className={`w-full h-full object-cover rounded-2xl bg-transparent transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: 'transparent' }}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        onLoadedData={() => {
          setIsLoaded(true);
          setIsPlaying(true);
        }}
      />
    </motion.div>
  );
};

export default AnimatedVideo;
