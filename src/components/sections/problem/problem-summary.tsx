import problemImage from "@/assets/images/problem.png";
import AnimatedImage from "@/components/ui/animated-image";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import BackgroundParticles from "@/components/ui/background-particles";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";
import { SectionHeading } from "@/components/ui/section-heading";

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
      <SectionHeading
        title={<>Your Networking Is <span className="gradient-text">Costing You</span></>}
        description="Every forgotten conversation is lost money. Every missed follow-up is a dead opportunity."
        className="mb-8 md:mb-16"
      />

      {/* Problem Image */}
      <ScrollCard animation="scaleIn" className="mb-12 mt-4 md:mt-12 flex justify-center">
        <div className="relative w-full max-w-[240px] md:max-w-xs aspect-square">
          <AnimatedImage
            src={problemImage}
            alt="Networking Problems"
            variant="cinematic"
            className="rounded-2xl shadow-green-900/20 w-full h-full"
          />
        </div>
      </ScrollCard>

      {/* Problem Cards */}
      <StaggerGroup 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {problems.map((problem) => (
          <ScrollCard key={problem.title} animation="fadeUp">
            <GlassCard className="p-6 h-full" variant="primary">
              <h3 className="headline-md !text-lg md:!text-xl text-emerald-600 mb-4">
                {problem.title}
              </h3>
              <p className="body-md">
                {problem.description}
              </p>
            </GlassCard>
          </ScrollCard>
        ))}
      </StaggerGroup>
    </SectionWrapper>
  );
};

export default ProblemSection;


