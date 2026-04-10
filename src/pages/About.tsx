import { teamMembers } from "@/lib/data";
import { TeamCard } from "@/components/ui/team-card";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { DetailedCard } from "@/components/ui/detailed-card";

const visionCards = [
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
];

const whyUsCards = [
  {
    title: "Real-Time Memory",
    text: "Capture conversations as they happen - no delay, no friction.",
    isHighlighted: true,
  },
  {
    label: "INTELLIGENCE",
    text: "AI transforms raw interactions into structured insights and follow-ups.",
    isHighlighted: false,
  },
];

const About = () => (
  <div className="min-h-screen bg-white">
    {/* Main Unified Content Section */}
    <BaseSection id="about-content" className="pt-32 pb-24" showParticles>
      {/* Integrated Title */}
      <SectionHeading
        title={<>About <span className="gradient-text">WayTree</span></>}
        description="Building the future of relationship memory through AI-powered networking."
        className="mb-16"
      />

      {/* Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-12 border-b border-gray-100">
        <SectionHeading
          align="left"
          tag="OUR VISION"
          title={<>Build relationships that last, <br/> <span className="gradient-text">not just contacts that collect dust.</span></>}
          description={
            <div className="space-y-4">
              <p className="text-left font-bold text-amber-600 text-xl">
                Your network should work for you, not against you.
              </p>
              <p className="text-left">
                Imagine never forgetting a conversation. Never losing touch with valuable connections. Never missing an opportunity because you forgot to follow up.
              </p>
              <p className="text-left">
                WayTree builds the future of relationship memory - an AI-powered system that remembers everything, understands connections, and helps you nurture the relationships that matter most.
              </p>
            </div>
          }
          className="mb-0"
        />

        <div className="space-y-6">
          {visionCards.map((card, index) => (
            <DetailedCard key={card.label || card.title} {...card} index={index} />
          ))}
        </div>
      </div>

      <div className="py-24 bg-gray-50/50 -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12">
        <SectionHeading
          title={<>Why Choose <span className="gradient-text">WayTree</span></>}
          description="Experience the difference with our AI-powered approach to networking."
          className="mb-20"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyUsCards.map((card, index) => (
              <DetailedCard key={card.label || card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24">
        <SectionHeading
          title={<>The minds behind <span className="gradient-text">WayTree</span>.</>}
          description="Built by people who understand real-world systems, not just code."
          className="mb-16"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </BaseSection>
  </div>
);

export default About;
