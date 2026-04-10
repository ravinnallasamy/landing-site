import { teamMembers } from "@/lib/data";
import { TeamCard } from "@/components/ui/team-card";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { DetailedCard } from "@/components/ui/detailed-card";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

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
    <BaseSection id="about-content" className="pt-24 lg:pt-32" showParticles>
      {/* Integrated Title */}
      <SectionHeading
        title={<>About <span className="gradient-text">WayTree</span></>}
        description="Building the future of relationship memory through AI-powered networking."
        className="mb-8 md:mb-16"
      />

      {/* Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start py-8 md:py-12 border-b border-gray-100">
        <ScrollCard animation="slideLeft">
          <SectionHeading
            align="left"
            tag="OUR VISION"
            title={<>Build relationships that last, <span className="gradient-text">not just contacts that collect dust.</span></>}
            description={
              <div className="space-y-4">
                <p className="body-lg !text-amber-600 font-bold">
                  Your network should work for you, not against you.
                </p>
                <div className="body-md space-y-4">
                  <p>
                    Imagine never forgetting a conversation. Never losing touch with valuable connections. Never missing an opportunity because you forgot to follow up.
                  </p>
                  <p>
                    WayTree builds the future of relationship memory - an AI-powered system that remembers everything, understands connections, and helps you nurture the relationships that matter most.
                  </p>
                </div>
              </div>
            }
            className="mb-0"
          />
        </ScrollCard>

        <StaggerGroup className="space-y-4 md:space-y-6 mt-8 lg:mt-0">
          {visionCards.map((card, index) => (
            <ScrollCard key={card.label || card.title} animation="fadeUp">
              <DetailedCard {...card} index={index} />
            </ScrollCard>
          ))}
        </StaggerGroup>
      </div>

      <div className="py-8 md:py-16 lg:py-20 bg-gray-50/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <ScrollCard animation="fadeUp">
          <SectionHeading
            title={<>Why Choose <span className="gradient-text">WayTree</span></>}
            description="Experience the difference with our AI-powered approach to networking."
            className="mb-12 md:mb-20"
          />
        </ScrollCard>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 relative z-10">
          {whyUsCards.map((card, index) => (
            <ScrollCard key={card.label || card.title} animation="fadeUp">
              <DetailedCard {...card} index={index} />
            </ScrollCard>
          ))}
        </StaggerGroup>
      </div>

      {/* Team Section */}
      <div className="py-12 md:py-20 lg:py-28">
        <ScrollCard animation="fadeUp">
          <SectionHeading
            title={<>The minds behind <span className="gradient-text">WayTree</span>.</>}
            description="Built by people who understand real-world systems, not just code."
            className="mb-12 md:mb-16"
          />
        </ScrollCard>

        <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {teamMembers.map((member, index) => (
            <ScrollCard key={member.name} animation="scaleIn">
              <TeamCard member={member} index={index} />
            </ScrollCard>
          ))}
        </StaggerGroup>
      </div>
    </BaseSection>
  </div>
);

export default About;

