import aiChatImage from "@/assets/images/ai-chat.png";
import AnimatedImage from "@/components/ui/animated-image";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import BackgroundParticles from "@/components/ui/background-particles";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";
import { SectionHeading } from "@/components/ui/section-heading";

const AiChatSection = () => {
  const features = [
    {
      title: "Ask About Anyone",
      description: "Search your entire network. 'What did I discuss with Sarah last month?' Instant answers.",
    },
    {
      title: "Get Follow-Up Ideas",
      description: "AI suggests specific topics. Reference past conversations. Never sound generic.",
    },
    {
      title: "Never Forget Details",
      description: "Personal interests, projects, pain points. AI remembers everything about everyone.",
    },
  ];

  return (
    <SectionWrapper id="ai-brain" className="relative group overflow-hidden">
      <BackgroundParticles />
      
      {/* Section Header */}
      <SectionHeading
        title={<>Your <span className="gradient-text">Networking</span> Brain</>}
        description="Ask anything about your network. Get instant, intelligent answers."
        className="mb-16"
      />

      {/* Main Content - Text and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Features */}
        <StaggerGroup 
          className="space-y-6"
        >
          {features.map((feature) => (
            <ScrollCard key={feature.title} animation="slideLeft">
              <GlassCard className="p-8" variant="primary">
                <h3 className="headline-md mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="body-md font-medium">
                  {feature.description}
                </p>
              </GlassCard>
            </ScrollCard>
          ))}
        </StaggerGroup>

        {/* Right side - AI Chat Image */}
        <ScrollCard
          animation="fadeUp"
          delay={0.3}
          className="flex justify-center lg:justify-end items-center"
        >
          <div className="relative w-full max-w-lg aspect-auto">
            {/* AI Chat image with Cinematic high-fidelity animation */}
            <AnimatedImage
              src={aiChatImage}
              alt="AI Chat Interface"
              variant="cinematic"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </ScrollCard>
      </div>

      {/* CTA Button */}
      <ScrollCard
        animation="fadeUp"
        delay={0.6}
        className="text-center mt-16 relative z-10"
      >
        <Button
          asChild
          variant="primary"
          size="lg"
          className="px-8 py-6 text-lg rounded-full font-bold shadow-xl shadow-accent/20 transition-all hover:scale-110 active:scale-95 bg-amber-500 hover:bg-amber-600 border-none"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.waytree.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try AI Chat
          </a>
        </Button>
      </ScrollCard>
    </SectionWrapper>
  );
};

export default AiChatSection;


