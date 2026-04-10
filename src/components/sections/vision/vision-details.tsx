import { SectionHeading } from "@/components/ui/section-heading";
import { DetailedCard } from "@/components/ui/detailed-card";
import { BaseSection } from "@/components/layout/base-section";

const VisionSection = () => {
  const cards = [
    {
      title: "AI Memory",
      text: "Every conversation captured, understood, and ready when you need it.",
      isHighlighted: true,
    },
    {
      label: "RELATIONSHIP INTELLIGENCE",
      text: "AI that understands connections, context, and the flow of opportunities.",
      isHighlighted: false,
    },
    {
      label: "PROACTIVE INSIGHTS",
      text: "Get follow-up suggestions, talking points, and relationship nudges automatically.",
      isHighlighted: false,
    },
    {
      label: "EFFORTLESS NETWORKING",
      text: "Focus on conversations, not note-taking. WayTree handles the memory work.",
      isHighlighted: false,
    },
  ];

  return (
    <BaseSection id="vision" backgroundVariant="emerald" showParticles={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Vision content */}
        <SectionHeading
          align="left"
          tag="OUR VISION"
          title={
            <>
              Build relationships that last, <br/> <span className="text-primary-accent">not just contacts that collect dust.</span>
            </>
          }
          description={
            <div className="space-y-4">
              <p className="justified-content">
                Imagine never forgetting a conversation. Never losing touch with valuable connections. Never missing an opportunity because you forgot to follow up.
              </p>
              <p className="justified-content">
                WayTree builds the future of relationship memory — an AI-powered system that remembers everything, understands connections, and helps you nurture the relationships that matter most.
              </p>
            </div>
          }
          className="mb-0"
        />

        {/* Right side - Stacked cards */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <DetailedCard
              key={card.label || card.title}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default VisionSection;
