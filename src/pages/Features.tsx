import { GlassCard } from "@/components/ui/glass-card";
import { CubeCard } from "@/components/ui/cube-3d";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import featureAi from "@/assets/images/feature-ai.jpg";
import featureCapture from "@/assets/images/feature-capture.jpg";
import featureEvents from "@/assets/images/feature-events.jpg";
import featureNetworking from "@/assets/images/feature-networking.jpg";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

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
  <BaseSection id="detailed-features" className="pt-24 lg:pt-32" showParticles>
    <SectionHeading
      tag="FEATURES"
      title={<>Everything You Need to <span className="gradient-text">Never Forget</span></>}
      description="WayTree combines AI, voice capture, and smart organization into one seamless networking tool."
      className="mb-12 md:mb-24"
    />

    <StaggerGroup
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10"
    >
      {sections.map((s) => (
        <ScrollCard
          key={s.tag}
          animation="fadeUp"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="h-full"
        >
          <GlassCard className="p-8 md:p-10 h-full flex flex-col justify-between group/card transition-all duration-500 hover:scale-[1.02] bg-white/50 backdrop-blur-xl border-gray-100 shadow-xl" variant="primary">
            <div>
              <span className="hook-text !mb-4">{s.tag}</span>
              <h2 className="headline-md !text-lg md:!text-2xl !text-gray-900 mb-4 transition-colors group-hover/card:text-emerald-500">{s.title}</h2>
              <p className="body-md !text-gray-600 mb-6 md:mb-8">{s.description}</p>
            </div>
            
            <div className="relative py-6 md:py-10 lg:py-12 flex items-center justify-center overflow-hidden">
              <div className="scale-90 sm:scale-100 md:scale-110 lg:scale-125">
                <CubeCard feature={s} showContent={false} />
              </div>
            </div>
          </GlassCard>
        </ScrollCard>
      ))}
    </StaggerGroup>
  </BaseSection>
);

export default Features;


