import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeUp, scaleIn, textReveal, paragraphFade, baseViewport, staggerContainer, hoverScale } from "@/lib/animations";
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
import { GlassCard, MotionGlassCard } from "@/components/ui/glass-card";
import { NeuralNetwork } from "./neural-network";
import { NeuralBackground } from "@/components/ui/neural-background";
import { AppDownloadButton } from "@/components/ui/app-download-button";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [responsivePositions, setResponsivePositions] = useState<{ targetX: number; targetY: number }[]>([]);

  // Feature data with rectangular grid positions
  const features = [
    { icon: MessageSquare, title: "Conversations", description: "Capture every interaction", targetX: -300, targetY: -120, delay: 0 },
    { icon: Bell, title: "Smart Reminders", description: "Never miss moments", targetX: -320, targetY: 0, delay: 0 },
    { icon: Calendar, title: "Meetings", description: "Track every discussion", targetX: -300, targetY: 120, delay: 0 },
    { icon: Users, title: "Connections", description: "Build stronger relationships", targetX: 300, targetY: -120, delay: 0 },
    { icon: Search, title: "Instant Recall", description: "Find anything instantly", targetX: 320, targetY: 0, delay: 0 },
    { icon: Brain, title: "AI Intelligence", description: "Deep relationship insights", targetX: 300, targetY: 120, delay: 0 }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setResponsivePositions(features.map(f => {
        if (!mobile) return { targetX: f.targetX, targetY: f.targetY };
        const sw = window.innerWidth;
        const scaleX = sw < 360 ? 0.35 : sw < 420 ? 0.41 : sw < 640 ? 0.56 : sw < 768 ? 0.72 : 0.82;
        const scaleY = sw < 360 ? 0.55 : sw < 640 ? 0.7 : sw < 768 ? 0.8 : 0.9;
        return { targetX: f.targetX * scaleX, targetY: f.targetY * scaleY };
      }));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 40, restDelta: 0.001 });

  const linePathLength = useTransform(smoothScrollProgress, [0.1, 0.6], [0, 1]);
  const lineOpacity = useTransform(smoothScrollProgress, [0.1, 0.3], [0, 1]);
  const mobileLineOpacity = useTransform(smoothScrollProgress, [0.1, 0.3], [0, 0.2]);
  const connectorScale = useTransform(smoothScrollProgress, [0.4, 0.6], [0, 1]);
  const connectorOpacity = useTransform(smoothScrollProgress, [0.4, 0.6], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden dark bg-black"
    >
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
      <NeuralBackground />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={baseViewport}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-medium text-white/90">
              Trusted by 100+ professionals
            </span>
          </div>

          <motion.h1 variants={textReveal} className="headline-xl gradient-text text-glow-accent !mb-4">
            Stop Forgetting People
          </motion.h1>

          <h2 className="headline-md text-white/90 !mb-4">
            Your Memory Fails. WayTree Doesn't.
          </h2>

          <p className="body-lg !mb-8 max-w-2xl mx-auto text-white/80">
            WayTree captures conversations, organizes your network, and tells you exactly who to follow up with.
          </p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={baseViewport} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AppDownloadButton />
            
            <Link to="/how-it-works">
              <motion.div variants={fadeUp} {...hoverScale}>
                <Button variant="outline" size="lg" className="rounded-full shadow-lg">
                  Watch Demo
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-20 w-full overflow-hidden">
        <NeuralNetwork
          features={features}
          smoothScrollProgress={smoothScrollProgress}
          isMobile={isMobile}
          responsivePositions={responsivePositions}
          linePathLength={linePathLength}
          lineOpacity={lineOpacity}
          mobileLineOpacity={mobileLineOpacity}
          connectorScale={connectorScale}
          connectorOpacity={connectorOpacity}
        >
          <img
            src={heroMobile}
            alt="WayTree Neural Network"
            className="w-full h-auto rounded-3xl animate-gpu-float"
          />
        </NeuralNetwork>
      </div>
    </section>
  );
};
export default HeroSection;
