import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { hoverScale } from "@/lib/animations";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Bell,
  Calendar,
  Users,
  Search,
  Brain,
} from "lucide-react";
import backgroundImage from "@/assets/images/background.png";
import heroMobile from "@/assets/images/hero-mobile.png";
import { NeuralNetwork } from "./neural-network";
import { NeuralBackground } from "@/components/ui/neural-background";
import { AppDownloadButton } from "@/components/ui/app-download-button";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Feature data with base grid positions
  // These will be used as reference but actual positioning will be CSS-driven for responsiveness
  const features = [
    { icon: MessageSquare, title: "Conversations", description: "Capture every interaction", delay: 0 },
    { icon: Bell, title: "Smart Reminders", description: "Never miss moments", delay: 0 },
    { icon: Calendar, title: "Meetings", description: "Track every discussion", delay: 0 },
    { icon: Users, title: "Connections", description: "Build stronger relationships", delay: 0 },
    { icon: Search, title: "Instant Recall", description: "Find anything instantly", delay: 0 },
    { icon: Brain, title: "AI Intelligence", description: "Deep relationship insights", delay: 0 }
  ];

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 40, restDelta: 0.001 });

  const linePathLength = useTransform(smoothScrollProgress, [0.1, 0.6], [0, 1]);
  const lineOpacity = useTransform(smoothScrollProgress, [0.1, 0.3], [0, 1]);
  const mobileLineOpacity = useTransform(smoothScrollProgress, [0.1, 0.3], [0, 0.4]); // Slightly higher for visibility
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

      <div className="relative z-10 container-standard min-h-[90vh] flex flex-col items-center justify-center">
        <ScrollCard animation="fadeUp" className="text-center max-w-4xl pt-20 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-medium text-white/90">
              Trusted by 100+ professionals
            </span>
          </div>

          <ScrollCard animation="scaleIn">
            <h1 className="headline-xl gradient-text text-glow-accent !mb-4">
              Stop Forgetting People
            </h1>
          </ScrollCard>

          <h2 className="headline-md text-white/90 !mb-4">
            Your Memory Fails. WayTree Doesn't.
          </h2>

          <p className="body-lg !mb-8 max-w-2xl mx-auto text-white/80">
            WayTree captures conversations, organizes your network, and tells you exactly who to follow up with.
          </p>

          <StaggerGroup className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScrollCard animation="fadeUp">
              <AppDownloadButton />
            </ScrollCard>
            
            <Link to="/how-it-works">
              <ScrollCard animation="fadeUp" {...hoverScale}>
                <Button variant="outline" size="lg" className="rounded-full shadow-lg border-white/20 text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </ScrollCard>
            </Link>
          </StaggerGroup>
        </ScrollCard>
      </div>

      <div className="relative z-20 w-full overflow-hidden h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        <NeuralNetwork
          features={features}
          smoothScrollProgress={smoothScrollProgress}
          linePathLength={linePathLength}
          lineOpacity={lineOpacity}
          mobileLineOpacity={mobileLineOpacity}
          connectorScale={connectorScale}
          connectorOpacity={connectorOpacity}
        >
          <img
            src={heroMobile}
            alt="WayTree Neural Network"
            className="w-full h-auto rounded-3xl animate-gpu-float shadow-2xl shadow-green-900/20"
          />
        </NeuralNetwork>
      </div>
    </section>
  );
};

export default HeroSection;

