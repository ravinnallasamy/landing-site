import { motion } from "framer-motion";
import { fadeUp, baseViewport, textReveal, paragraphFade } from "@/lib/animations";
import { DetailedCard } from "@/components/ui/detailed-card";

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
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-teal-950/30 to-green-950/30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Problem content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-block">
              <span className="hook-text">THE PROBLEM</span>
            </div>

            {/* Headline */}
            <h2 className="headline-lg">
              Your network is leaking, <br /> <span className="text-primary-accent">And you don't even know it.</span>
            </h2>

            {/* Subheadline */}
            <h3 className="headline-md !text-primary-accent">
              We meet hundreds. We remember dozens.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4">
              <p className="body-lg justified-content">
                You attend events, collect cards, make connections. But without context, they're just names. The real value — the conversations, opportunities, relationships — disappears within weeks.
              </p>
              <p className="body-lg justified-content">
                Traditional tools weren't built for how networking actually works. They store contacts, but they don't capture relationships. They have data, but no memory.
              </p>
            </div>

          </motion.div>

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
      </div>
    </section>
  );
};

export default ProblemSection;
