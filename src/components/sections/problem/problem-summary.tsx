import { motion } from "framer-motion";
import problemImage from "@/assets/images/problem.png";
import AnimatedImage from "@/components/ui/animated-image";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { fadeUp, staggerContainer, baseViewport } from "@/lib/animations";
import BackgroundParticles from "@/components/ui/background-particles";
import { ScrollCard } from "@/components/ui/scroll-card";

const ProblemSection = () => {
  const problems = [
    {
      title: "You Met Them. Then Forgot Everything.",
      description: "Great conversation. Amazing ideas. Two days later? Gone forever.",
    },
    {
      title: "Notes Everywhere. No Clarity.", 
      description: "Digital notes, paper notes, voice notes. All scattered. All useless.",
    },
    {
      title: "Follow-Ups? Never Happened.",
      description: "Without reminders, valuable connections die before they grow.",
    },
  ];

  return (
    <SectionWrapper id="problem">
      <BackgroundParticles />
      {/* Section Header */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={baseViewport}
        className="text-center mb-16"
      >

        <h2 className="headline-lg">
          Your Networking Is Costing You
        </h2>
        <p className="body-lg max-w-2xl mx-auto">
          Every forgotten conversation is lost money. Every missed follow-up is a dead opportunity.
        </p>
      </motion.div>

      {/* Problem Image */}
      <div className="mb-12 mt-12 flex justify-center">
        <div className="max-w-xs relative w-full aspect-square">
          <AnimatedImage
            src={problemImage}
            alt="Networking Problems"
            variant="cinematic"
            className="rounded-2xl shadow-green-900/20"
          />
        </div>
      </div>

      {/* Problem Cards */}
      <div 
        className="grid md:grid-cols-3 gap-6"
      >
        {problems.map((problem, index) => (
          <ScrollCard key={problem.title}>
            <GlassCard className="p-6 h-full text-justify">
              <h3 className="headline-md text-emerald-400 mb-4 text-left">
                {problem.title}
              </h3>
              <p className="body-sm">
                {problem.description}
              </p>
            </GlassCard>
          </ScrollCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
