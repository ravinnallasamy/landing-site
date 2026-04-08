import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeUp, scaleIn, textReveal, paragraphFade, baseViewport } from "@/lib/animations";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import {
  MessageSquare,
  Users,
  Bell,
  Search,
  Calendar,
  Share2,
  Brain,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import backgroundImage from "@/assets/images/background.png";
import heroMobile from "@/assets/images/hero-mobile.png";
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const cardsParentRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  const [lineCoords, setLineCoords] = useState<{ id: string; x1: number; y1: number; x2: number; y2: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [responsivePositions, setResponsivePositions] = useState<{ targetX: number; targetY: number }[]>([]);

  // Feature data with rectangular grid positions
  const features = [
    // Left side (INPUT / CAPTURE)
    {
      icon: MessageSquare,
      title: "Conversations",
      description: "Capture every interaction",
      targetX: -300,
      targetY: -120,
      delay: 0.0
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss moments",
      targetX: -320,
      targetY: 0,
      delay: 0.0
    },
    {
      icon: Calendar,
      title: "Meetings",
      description: "Track every discussion",
      targetX: -300,
      targetY: 120,
      delay: 0.0
    },

    // Right side (OUTPUT / VALUE)
    {
      icon: Users,
      title: "Connections",
      description: "Build stronger relationships",
      targetX: 300,
      targetY: -120,
      delay: 0.0
    },
    {
      icon: Search,
      title: "Instant Recall",
      description: "Find anything instantly",
      targetX: 320,
      targetY: 0,
      delay: 0.0
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Deep relationship insights",
      targetX: 300,
      targetY: 120,
      delay: 0.0
    }
  ];
  // Responsive breakpoint detection with debouncing for performance
  useEffect(() => {
    let timeoutId: any;

    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);

      // Update positions based on screen size
      const newPositions = features.map(feature => {
        if (mobile) {
          // Mobile scale: reduce to keep cards within screen boundaries
          const screenWidth = window.innerWidth;
          let scaleX = 0.45;
          let scaleY = 0.6;

          // Values tuned for mobile viewport constraints to prevent hiding behind the phone
          // Mobile phone is now smaller, so cards can be pushed further out
          if (screenWidth < 360) {
            scaleX = 0.35;
            scaleY = 0.55;
          } else if (screenWidth < 420) {
            scaleX = 0.41;
            scaleY = 0.6;
          } else if (screenWidth < 640) {
            scaleX = 0.56;
            scaleY = 0.7;
          } else if (screenWidth < 768) {
            scaleX = 0.72;
            scaleY = 0.8;
          } else if (screenWidth < 1024) {
            scaleX = 0.82;
            scaleY = 0.9;
          }

          return {
            targetX: feature.targetX * scaleX,
            targetY: feature.targetY * scaleY
          };
        }
        return { targetX: feature.targetX, targetY: feature.targetY };
      });

      setResponsivePositions(newPositions);
    };

    const debouncedCheckMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150); // Debounce for 150ms
    };

    checkMobile();
    window.addEventListener('resize', debouncedCheckMobile);
    return () => {
      window.removeEventListener('resize', debouncedCheckMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll progress with spring physics
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // Shared animation values for the connection lines to prevent hook violations in loop
  const linePathLength = useTransform(smoothScrollProgress, [0, 0.6], [0, 1]);
  const lineOpacity = useTransform(smoothScrollProgress, [0, 0.2], [0, 1]);
  const mobileLineOpacity = useTransform(smoothScrollProgress, [0, 0.2], [0, 0.2]);
  const connectorScale = useTransform(smoothScrollProgress, [0.4, 0.6], [0, 1]);
  const connectorOpacity = useTransform(smoothScrollProgress, [0.4, 0.6], [0, 1]);

  useEffect(() => {
    const updatePositions = () => {
      if (!mobileRef.current || !svgRef.current) return;

      const svgRect = svgRef.current.getBoundingClientRect();
      const mobileRect = mobileRef.current.getBoundingClientRect();

      // Exact center of the mobile phone container
      const startX = mobileRect.left + mobileRect.width / 2 - svgRect.left;
      const startY = mobileRect.top + mobileRect.height / 2 - svgRect.top;

      const newCoords = features.map((feature, index) => {
        const cardNode = cardsParentRef.current[index];
        if (!cardNode) return { id: feature.title, x1: startX, y1: startY, x2: startX, y2: startY };

        const cardRect = cardNode.getBoundingClientRect();
        // Exact center of the destination card container
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

    // Use requestAnimationFrame to ensure layout is ready
    requestAnimationFrame(() => updatePositions());

    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [responsivePositions]); // Re-run when positions change

  // Animation variants for staggered entrance
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden dark"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark gradient overlay with neural network glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Hero content - centered */}
        <div className="flex items-center justify-center pt-32 pb-4 sm:pt-40 sm:pb-20 lg:pt-0 lg:pb-12 lg:min-h-screen">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl"
          >
            {/* Trust badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/90">
                Trusted by 100+ professionals
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={textReveal}
              className="headline-xl gradient-text text-glow-accent !mb-4"
            >
              Stop Forgetting People
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="headline-md text-foreground/90 !mb-4"
            >
              Your Memory Fails. WayTree Doesn't.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={paragraphFade}
              className="body-lg !mb-8 max-w-2xl mx-auto"
            >
              WayTree captures conversations, organizes your network, and tells you exactly who to follow up with.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.waytree.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-lg shadow-md transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="flex relative items-center">
                  {/* Apple icon: normal position (z-10) */}
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center relative z-10">
                    <FaApple className="text-xl text-gray-800" />
                  </div>
                  {/* Google Play icon: absolute left-6 z-0 */}
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center absolute left-6 z-0">
                    <SiGoogleplay className="text-lg text-emerald-500" />
                  </div>
                </div>
                <span className="text-gray-800 font-medium ml-8">
                  Download Mobile App
                </span>
              </motion.a>
              <Link to="/how-it-works">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 hover:text-white shadow-lg hover:shadow-xl"
                  >
                    Watch How It Works
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Neural network visualization - Full screen container, moved outside the max-w-6xl container so it is truly full screen wide */}
      <div className="relative z-10 w-full overflow-hidden">
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
                ease: "easeInOut" as const,
              }}
              style={{ willChange: "transform" }}
            >
              <motion.img
                src={heroMobile}
                alt="WayTree Neural Network"
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Feature cards - neural nodes */}
          <div className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
            {/* SVG Connection Lines Overlay - Responsive */}
            <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              {lineCoords.map((coord) => {
                // Bezier Q curve control point
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
                    {/* Glowing pulse dot at the structural connection */}
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

            {/* Rectangular Cards - Responsive Positioning */}
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

          {/* Mobile responsive - neural network maintained */}
          <div className="lg:hidden absolute inset-0 pointer-events-none z-10 w-full h-full" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
