import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FeatureCard from "@/components/ui/feature-card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  targetX: number;
  targetY: number;
  delay: number;
}

interface NeuralNetworkProps {
  features: Feature[];
  smoothScrollProgress: MotionValue<number>;
  isMobile: boolean;
  responsivePositions: { targetX: number; targetY: number }[];
  linePathLength: MotionValue<number>;
  lineOpacity: MotionValue<number>;
  mobileLineOpacity: MotionValue<number>;
  connectorScale: MotionValue<number>;
  connectorOpacity: MotionValue<number>;
  children?: React.ReactNode;
}

export const NeuralNetwork = ({
  features,
  smoothScrollProgress,
  isMobile,
  responsivePositions,
  linePathLength,
  lineOpacity,
  mobileLineOpacity,
  connectorScale,
  connectorOpacity,
  children,
}: NeuralNetworkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const cardsParentRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const [lineCoords, setLineCoords] = useState<{ id: string; x1: number; y1: number; x2: number; y2: number }[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!mobileRef.current || !svgRef.current) return;

      const svgRect = svgRef.current.getBoundingClientRect();
      const mobileRect = mobileRef.current.getBoundingClientRect();

      const startX = mobileRect.left + mobileRect.width / 2 - svgRect.left;
      const startY = mobileRect.top + mobileRect.height / 2 - svgRect.top;

      const newCoords = features.map((feature, index) => {
        const cardNode = cardsParentRef.current[index];
        if (!cardNode) return { id: feature.title, x1: startX, y1: startY, x2: startX, y2: startY };

        const cardRect = cardNode.getBoundingClientRect();
        const endX = cardRect.left + cardRect.width / 2 - svgRect.left;
        const endY = cardRect.top + cardRect.height / 2 - svgRect.top;

        return {
          id: feature.title,
          x1: startX,
          y1: startY,
          x2: endX,
          y2: endY
        };
      });

      setLineCoords(newCoords);
    };

    requestAnimationFrame(() => updatePositions());
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [responsivePositions, features]);

  return (
    <div ref={containerRef} className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen flex items-center justify-center -mt-16 sm:mt-0">
      {/* Mobile mockup - neural center */}
      <div ref={mobileRef} className="relative z-20 mx-auto w-[42%] max-w-[180px] sm:max-w-none sm:w-64 md:w-80 lg:w-[600px] flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        >
          {children}
        </motion.div>
      </div>

      {/* Feature cards - neural nodes */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {lineCoords.map((coord) => {
            const cx = (coord.x1 + coord.x2) / 2;
            const cy = coord.y1;
            const pathD = `M ${coord.x1} ${coord.y1} Q ${cx} ${cy} ${coord.x2} ${coord.y2}`;

            return (
              <g key={`line-${coord.id}`}>
                <motion.path
                  d={pathD}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth={isMobile ? 1 : 1.5}
                  fill="none"
                  style={{
                    pathLength: linePathLength,
                    opacity: isMobile ? mobileLineOpacity : lineOpacity
                  }}
                />
                <motion.circle
                  cx={coord.x2}
                  cy={coord.y2}
                  r={isMobile ? 2 : 4}
                  fill="#00ff96"
                  filter={isMobile ? "drop-shadow(0 0 3px rgba(0,255,150,0.6))" : "drop-shadow(0 0 6px rgba(0,255,150,0.8))"}
                  style={{
                    scale: connectorScale,
                    opacity: connectorOpacity
                  }}
                  className="animate-pulse"
                />
              </g>
            );
          })}
        </svg>

        {features.map((feature, index) => {
          const responsivePos = responsivePositions[index] || { targetX: feature.targetX, targetY: feature.targetY };
          return (
            <div
              key={feature.title}
              ref={(el) => cardsParentRef.current[index] = el}
              className="absolute top-1/2 left-1/2 pointer-events-auto"
              style={{
                marginLeft: `${responsivePos.targetX}px`,
                marginTop: `${responsivePos.targetY}px`
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                scrollProgress={smoothScrollProgress}
                targetX={responsivePos.targetX}
                targetY={responsivePos.targetY}
                delay={feature.delay}
                isMobile={isMobile}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
