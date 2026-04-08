import voiceImage from "@/assets/images/voice.png";
import aiInsightsImage from "@/assets/images/ai-insights.png";
import qrImage from "@/assets/images/qr.png";
import eventsImage from "@/assets/images/events.png";
import BackgroundParticles from "@/components/ui/background-particles";
import { CubeCard } from "@/components/ui/cube-3d";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { fadeUp, baseViewport } from "@/lib/animations";

const FeaturesSection = () => {
  const features = [
    {
      image: voiceImage,
      title: "Capture It Before It Disappears.",
      description: "Record conversations instantly with voice and media. WayTree turns raw moments into structured memory.",
    },
    {
      image: aiInsightsImage,
      title: "Know What Matters Instantly.",
      description: "AI extracts key details, summaries, and follow-ups. No more digging through notes.",
    },
    {
      image: qrImage,
      title: "Connect In Seconds. Not Minutes.",
      description: "Scan. Save. Done. No manual entry. No typos. No lost business cards.",
    },
    {
      image: eventsImage,
      title: "Handle 100 People Without Losing Track.",
      description: "Track every interaction during events automatically. Never miss a connection again.",
    },
  ];

  return (
    <SectionWrapper id="features" className="relative group">
      <BackgroundParticles />
      
      {/* Section Header */}
      <motion.div 
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={baseViewport}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="headline-lg">
          Never Lose A Connection Again
        </h2>
        <p className="body-md max-w-2xl mx-auto">
          These tools fix your biggest networking problems. Period.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-8 h-full flex flex-col items-center">
              <CubeCard feature={feature} />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;
