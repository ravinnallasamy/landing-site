import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import BackgroundParticles from "@/components/ui/background-particles";
import { CubeCard } from "@/components/ui/cube-3d";
import { fadeUp, baseViewport } from "@/lib/animations";
import featureAi from "@/assets/images/feature-ai.jpg";
import featureCapture from "@/assets/images/feature-capture.jpg";
import featureEvents from "@/assets/images/feature-events.jpg";
import featureNetworking from "@/assets/images/feature-networking.jpg";

const sections = [
  {
    tag: "AI Assistant",
    title: "Your Intelligent Networking Companion",
    description: "Chat with your AI assistant to get summaries of past conversations, relationship insights, and personalized follow-up suggestions. It learns from every interaction over time.",
    image: featureAi,
  },
  {
    tag: "Media Capture",
    title: "Capture Every Interaction Effortlessly",
    description: "Record voice memos after meetings, snap photos of business cards, or jot quick notes. WayTree's AI processes everything automatically — extracting names and action items.",
    image: featureCapture,
  },
  {
    tag: "Events",
    title: "Supercharge Conference Networking",
    description: "Activate Event Mode at conferences and meetups. See who's attending, exchange contact info instantly, and let AI organize all new connections in a single evening.",
    image: featureEvents,
  },
  {
    tag: "Networking",
    title: "Your Digital Identity, One Scan Away",
    description: "Share your personalized QR code to instantly connect. Build a rich digital identity that goes beyond a business card — including your interests and mutual connections.",
    image: featureNetworking,
  },
];

const Features = () => (
  <SectionWrapper id="detailed-features" className="pt-24 relative overflow-hidden group bg-white">
    <BackgroundParticles />
    
    {/* Section Header */}
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={baseViewport}
      className="text-center mb-24 relative z-10"
    >
      <span className="text-secondary text-sm font-mono tracking-wider uppercase mb-3 block font-bold">Features</span>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5">
        Everything You Need to{" "}
        <span className="gradient-text">Never Forget</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
        WayTree combines AI, voice capture, and smart organization into one seamless networking tool.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      {sections.map((s, i) => (
        <motion.div
          key={s.tag}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          transition={{ delay: i * 0.1 }}
          className="h-full"
        >
          <GlassCard className="p-10 h-full flex flex-col justify-between group/card transition-all duration-500 hover:scale-[1.02]" variant="light">
            <div>
              <span className="text-primary text-xs font-mono tracking-wider uppercase mb-2 block font-bold">{s.tag}</span>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed font-medium mb-8 text-justify">{s.description}</p>
            </div>
            
            <div className="relative py-12 flex items-center justify-center">
              <div className="scale-125">
                <CubeCard feature={s} showContent={false} />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>

  </SectionWrapper>
);

export default Features;
