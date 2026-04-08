import { motion } from "framer-motion";
import { DetailedCard } from "@/components/ui/detailed-card";
import { fadeUp, baseViewport, textReveal, paragraphFade } from "@/lib/animations";

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
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-teal-950/30 to-green-950/30" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Why Us content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            className="space-y-6"
          >
            {/* Hook */}
            <div className="inline-block">
                <span className="hook-text">WHY US</span>
            </div>

            {/* Headline */}
            <h2 className="headline-lg">
              Built for how real <span className="text-primary-accent">networking</span> actually works.
            </h2>

            {/* Subheadline */}
            <h3 className="headline-md !text-primary-accent">
              Not just contacts. Context. Memory. Action.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4">
              <p className="body-lg">
                Most networking tools store information. WayTree understands it. Every interaction is captured, processed, and transformed into something you can actually use.
              </p>
              <p className="body-lg">
                Whether you're meeting 5 people or 500, WayTree ensures nothing is lost — and every connection has a purpose.
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

export default WhyUsSection;
