import { SectionHeading } from "@/components/ui/section-heading";
import { DetailedCard } from "@/components/ui/detailed-card";
import { BaseSection } from "@/components/layout/base-section";

const WhyUsSection = () => {
  const cards = [
    {
      title: "Real-Time Memory",
      text: "Capture conversations as they happen — no delay, no friction.",
      isHighlighted: true,
    },
    {
      label: "INTELLIGENCE",
      text: "AI transforms raw interactions into structured insights and follow-ups.",
      isHighlighted: false,
    },
    {
      label: "CONSISTENCY",
      text: "Never lose track of people, conversations, or opportunities again.",
      isHighlighted: false,
    },
    {
      label: "PRECISION",
      text: "Everything is organized, searchable, and instantly accessible.",
      isHighlighted: false,
    },
  ];

  return (
    <BaseSection id="why-us" backgroundVariant="emerald" showParticles={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Why Us content */}
        <SectionHeading
          align="left"
          tag="WHY US"
          title={
            <>
              Built for how real <span className="text-primary-accent">networking</span> actually works.
            </>
          }
          description={
            <div className="space-y-4">
              <p>
                Most networking tools store information. WayTree understands it. Every interaction is captured, processed, and transformed into something you can actually use.
              </p>
              <p>
                Whether you're meeting 5 people or 500, WayTree ensures nothing is lost — and every connection has a purpose.
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

export default WhyUsSection;
