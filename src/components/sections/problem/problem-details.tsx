import { SectionHeading } from "@/components/ui/section-heading";
import { DetailedCard } from "@/components/ui/detailed-card";
import { BaseSection } from "@/components/layout/base-section";

const ProblemSection = () => {
  const cards = [
    {
      title: "Forgetting 80%",
      text: "The average person forgets 80% of conversations within weeks. Lost opportunities, missed connections.",
      isHighlighted: true,
    },
    {
      label: "SCATTERED",
      text: "Notes in different apps. Business cards in drawers. Contacts in spreadsheets. No unified system.",
      isHighlighted: false,
    },
    {
      label: "CONTEXT LOSS",
      text: "You remember names, not conversations. You have contacts, not relationships.",
      isHighlighted: false,
    },
    {
      label: "FOLLOW-UP FAILURE",
      text: "Good intentions, poor execution. Follow-ups fall through the cracks every single day.",
      isHighlighted: false,
    },
  ];

  return (
    <BaseSection id="problem" backgroundVariant="emerald" showParticles={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Problem content */}
        <SectionHeading
          align="left"
          tag="THE PROBLEM"
          title={
            <>
              Your network is leaking, <br /> <span className="text-primary-accent">And you don't even know it.</span>
            </>
          }
          description={
            <div className="space-y-4">
              <p className="justified-content">
                You attend events, collect cards, make connections. But without context, they're just names. The real value — the conversations, opportunities, relationships — disappears within weeks.
              </p>
              <p className="justified-content">
                Traditional tools weren't built for how networking actually works. They store contacts, but they don't capture relationships. They have data, but no memory.
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

export default ProblemSection;
