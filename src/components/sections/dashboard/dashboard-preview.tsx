import dashboardImage from "@/assets/images/dashboard.png";
import AnimatedImage from "@/components/ui/animated-image";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import BackgroundParticles from "@/components/ui/background-particles";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";
import { SectionHeading } from "@/components/ui/section-heading";

const DashboardSection = () => {
  return (
    <SectionWrapper id="dashboard" className="relative group">
      <BackgroundParticles />
      
      {/* Section Header */}
      <SectionHeading
        title={<>See Your Entire <span className="gradient-text">Network</span> At A Glance</>}
        description="Your AI-powered dashboard tracks conversations, suggests follow-ups, and shows you exactly who needs attention."
        className="mb-12 md:mb-16"
      />

      {/* Main Content - Features and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left side - Features */}
        <StaggerGroup 
          className="space-y-4 md:space-y-6"
        >
          {[
            { title: "Smart Tracking", desc: "Every conversation captured" },
            { title: "AI Summaries", desc: "Know what was discussed" },
            { title: "Follow-Up Reminders", desc: "Never miss opportunities" }
          ].map((feature) => (
            <ScrollCard key={feature.title} animation="slideLeft">
              <GlassCard className="p-6 md:p-8" variant="primary">
                <div className="headline-md !text-lg md:!text-xl gradient-text mb-2 md:mb-4">{feature.title}</div>
                <div className="body-md font-medium">{feature.desc}</div>
              </GlassCard>
            </ScrollCard>
          ))}
        </StaggerGroup>

        {/* Right side - Dashboard Image */}
        <ScrollCard
          animation="fadeUp"
          delay={0.3}
          className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-lg">
            <AnimatedImage
              src={dashboardImage}
              alt="WayTree Dashboard"
              variant="cinematic"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </ScrollCard>
      </div>
    </SectionWrapper>
  );
};

export default DashboardSection;


