import { motion } from "framer-motion";
import { fadeUp, baseViewport, textReveal, paragraphFade } from "@/lib/animations";
import { DetailedCard } from "@/components/ui/detailed-card";

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
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-teal-950/30 to-green-950/30" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Vision content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-block">
              <span className="hook-text">OUR VISION</span>
            </div>

            {/* Headline */}
            <h2 className="headline-lg">
              Build relationships that last, <br/> <span className="text-primary-accent">not just contacts that collect dust.</span>
            </h2>

            {/* Subheadline */}
            <h3 className="headline-md !text-primary-accent">
              Your network should work for you, not against you.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4">
              <p className="body-lg justified-content">
                Imagine never forgetting a conversation. Never losing touch with valuable connections. Never missing an opportunity because you forgot to follow up.
              </p>
              <p className="body-lg justified-content">
                WayTree builds the future of relationship memory — an AI-powered system that remembers everything, understands connections, and helps you nurture the relationships that matter most.
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

export default VisionSection;
