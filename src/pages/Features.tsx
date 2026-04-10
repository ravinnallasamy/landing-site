import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { CubeCard } from "@/components/ui/cube-3d";
import { fadeUp, baseViewport } from "@/lib/animations";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import featureAi from "@/assets/images/feature-ai.jpg";
import featureCapture from "@/assets/images/feature-capture.jpg";
import featureEvents from "@/assets/images/feature-events.jpg";
import featureNetworking from "@/assets/images/feature-networking.jpg";

const sections = [
  {
    tag: "AI Assistant",
    title: "Your Intelligent Networking Companion",
    description: "Chat with your AI assistant to get summaries of past conversations, relationship insights, and personalized follow-up suggestions.",
    image: featureAi,
  },
  {
    tag: "Media Capture",
    title: "Capture Every Interaction Effortlessly",
    description: "Record voice memos, snap photos of business cards. WayTree auto-extracts names and action items.",
    image: featureCapture,
  },
  {
    tag: "Events",
    title: "Supercharge Conference Networking",
    description: "Activate Event Mode. See who's attending, exchange contact info instantly, and let AI organize connections.",
    image: featureEvents,
  },
  {
    tag: "Networking",
    title: "Your Digital Identity, One Scan Away",
    description: "Share your personalized QR code to instantly connect. Build a rich digital identity.",
    image: featureNetworking,
  },
];

const Features = () => (
  <BaseSection id="detailed-features" className="pt-24" showParticles>
    <SectionHeading
      tag="FEATURES"
      title={<>Everything You Need to <span className="gradient-text">Never Forget</span></>}
      description="WayTree combines AI, voice capture, and smart organization into one seamless networking tool."
      className="mb-24"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      {sections.map((s, i) => (
        <motion.div
          key={s.tag}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="h-full"
        >
          <GlassCard className="p-10 h-full flex flex-col justify-between group/card transition-all duration-500 hover:scale-[1.02] border-white/10" variant="dark">
            <div>
              <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-4 block font-bold">{s.tag}</span>
              <h2 className="headline-md !text-white mb-4 transition-colors group-hover/card:text-accent">{s.title}</h2>
              <p className="body-md !text-white/80 mb-8 text-left">{s.description}</p>
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
  </BaseSection>
);

export default Features;
