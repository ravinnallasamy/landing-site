import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FeatureCard from "@/components/ui/feature-card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

interface NeuralNetworkProps {
  features: Feature[];
  smoothScrollProgress: MotionValue<number>;
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

    // Use a small delay to ensure layout is settled
    const timeout = setTimeout(() => updatePositions(), 100);
    window.addEventListener("resize", updatePositions);
    
    // Also update on scroll since that might affect positions if anything is sticky/parallax
    window.addEventListener("scroll", updatePositions);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, [features]);

  // Position mapping based on index (to recreate the 3-left, 3-right layout)
  const getPositionClasses = (index: number) => {
    const positions = [
      // Left side nodes - responsive scaling for mobile
      "-translate-x-[80px] -translate-y-[100px] sm:-translate-x-[100px] sm:-translate-y-[120px] md:-translate-x-[220px] md:-translate-y-[120px] lg:-translate-x-[300px] lg:-translate-y-[120px]",
      "-translate-x-[100px] translate-y-0 sm:-translate-x-[120px] md:-translate-x-[250px] lg:-translate-x-[320px]",
      "-translate-x-[80px] translate-y-[100px] sm:-translate-x-[100px] sm:translate-y-[120px] md:-translate-x-[220px] md:translate-y-[120px] lg:-translate-x-[300px] lg:translate-y-[120px]",
      // Right side nodes
      "translate-x-[80px] -translate-y-[100px] sm:translate-x-[100px] sm:-translate-y-[120px] md:translate-x-[220px] md:-translate-y-[120px] lg:translate-x-[300px] lg:-translate-y-[120px]",
      "translate-x-[100px] translate-y-0 sm:translate-x-[120px] md:translate-x-[250px] lg:translate-x-[320px]",
      "translate-x-[80px] translate-y-[100px] sm:translate-x-[100px] sm:translate-y-[120px] md:translate-x-[220px] md:translate-y-[120px] lg:translate-x-[300px] lg:translate-y-[120px]",
    ];
    return positions[index] || "";
  };

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Mobile mockup - neural center */}
      <div ref={mobileRef} className="relative z-20 mx-auto w-[40%] sm:w-[45%] max-w-[120px] sm:max-w-[140px] md:max-w-[200px] lg:max-w-[500px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>

      {/* Feature cards - neural nodes */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {lineCoords.map((coord) => {
            const cx = (coord.x1 + coord.x2) / 2;
            const cy = coord.y1;
            const pathD = `M ${coord.x1} ${coord.y1} Q ${cx} ${cy} ${coord.x2} ${coord.y2}`;

            return (
              <g key={`line-${coord.id}`}>
                <motion.path
                  d={pathD}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1.5"
                  fill="none"
                  style={{
                    pathLength: linePathLength,
                    opacity: lineOpacity
                  }}
                  className="hidden md:block" // Lines only show on tablet+ for clarity
                />
                <motion.path
                  d={pathD}
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                  fill="none"
                  style={{
                    pathLength: linePathLength,
                    opacity: mobileLineOpacity
                  }}
                  className="md:hidden" // Thinner lines for mobile
                />
                <motion.circle
                  cx={coord.x2}
                  cy={coord.y2}
                  r="3.5"
                  fill="#00ff96"
                  className="animate-pulse hidden md:block"
                  style={{
                    scale: connectorScale,
                    opacity: connectorOpacity
                  }}
                />
                <motion.circle
                  cx={coord.x2}
                  cy={coord.y2}
                  r="2"
                  fill="#00ff96"
                  className="animate-pulse md:hidden"
                  style={{
                    scale: connectorScale,
                    opacity: connectorOpacity
                  }}
                />
              </g>
            );
          })}
        </svg>

        {features.map((feature, index) => (
          <div
            key={feature.title}
            ref={(el) => cardsParentRef.current[index] = el}
            className={cn(
              "absolute top-1/2 left-1/2 pointer-events-auto transform-gpu",
              getPositionClasses(index)
            )}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              scrollProgress={smoothScrollProgress}
              delay={feature.delay}
              // We pass the desktop offsets as reference for the fly-in animation
              targetX={index < 3 ? -300 : 300}
              targetY={index % 3 === 0 ? -120 : index % 3 === 1 ? 0 : 120}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

