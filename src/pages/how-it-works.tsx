import { motion } from "framer-motion";
import workflowImage from "@/assets/images/workflow.png";
import AnimatedImage from "@/components/ui/animated-image";
import { Button } from "@/components/ui/button";
import { BaseSection } from "@/components/layout/base-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

const steps = [
  {
    step: "01",
    title: "Capture Everything",
    description: "WayTree records your conversations. Voice, photos, notes. All automatically.",
  },
  {
    step: "02", 
    title: "AI Understands",
    description: "Our AI analyzes what was said. Finds action items. Identifies opportunities.",
  },
  {
    step: "03",
    title: "Organize Automatically",
    description: "Contacts get updated. Conversations get tagged. Everything finds its place.",
  },
  {
    step: "04",
    title: "Get Follow-Up Insights",
    description: "AI tells you who to contact. When to reach out. What to say.",
  },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-white">
    {/* Main Unified Content Section */}
    <BaseSection id="unified-process" className="pt-32 pb-24" showParticles>
      {/* Integrated Title */}
      <SectionHeading
        tag="PROCESS"
        title={<>Your Networking, <span className="gradient-text">Automated.</span></>}
        description="We've built a system that handles the heavy lifting of relationship management, so you can focus on building the human connection."
        className="mb-24"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-24 border-b border-gray-100">
        {/* Left side - Visual Representation (Centered) */}
        <div className="relative">
          <ScrollCard animation="fadeUp">
            <div className="relative group p-4 lg:p-0">
              <div className="absolute -inset-10 bg-amber-400/10 blur-[120px] rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
              <AnimatedImage
                src={workflowImage}
                alt="WayTree Workflow"
                variant="cinematic"
                className="rounded-3xl shadow-[0_48px_96px_-24px_rgba(0,0,0,0.15)] relative z-10 w-full hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </ScrollCard>
        </div>

        {/* Right side - The Vertical 1234 Steps */}
        <div className="relative pl-0">
          {/* Animated vertical connection line */}
          <ScrollCard
            className="absolute left-[28px] lg:left-[40px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-amber-400 via-amber-200 to-transparent opacity-40 z-0 origin-top"
            animation="growY"
          />

          <StaggerGroup className="space-y-20">
            {steps.map((step) => (
              <ScrollCard
                key={step.step}
                animation="slideLeft"
                className="relative flex flex-col items-start group z-10"
              >
                {/* Step Circle Indicator */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-0 top-0 w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-white border-[3px] border-amber-400 shadow-[0_10px_30px_rgba(251,191,36,0.2)] transition-all group-hover:bg-amber-400 group-hover:shadow-[0_15px_40px_rgba(251,191,36,0.3)] z-10"
                >
                  <span className="text-amber-600 font-display font-bold text-xl lg:text-3xl group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                </motion.div>

                {/* Content offset to account for circle size */}
                <div className="ml-20 lg:ml-32 pt-2">
                  <h3 className="headline-md !text-2xl lg:!text-3xl mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="body-lg text-left text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </ScrollCard>
            ))}
          </StaggerGroup>
        </div>
      </div>

      {/* Narrative Split - Minimal gap to keep continuity */}
      <div className="py-24">
        <ScrollCard animation="fadeUp" className="text-center max-w-3xl mx-auto">
          <SectionHeading
            title="Ready to transform your network?"
            description="Join thousands of professionals using WayTree to build lasting relationships with zero effort."
            className="mb-12"
          />
          
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-amber-400/20 blur-3xl rounded-full -z-10 animate-pulse" />
            <Button
              asChild
              variant="primary"
              size="lg"
              className="px-12 py-10 text-2xl rounded-full font-bold shadow-[0_25px_50px_-12px_rgba(251,191,36,0.5)] transition-all hover:scale-105 active:scale-95 bg-amber-500 hover:bg-amber-600 border-none relative z-10"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.waytree.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </Button>
          </div>
        </ScrollCard>
      </div>
    </BaseSection>
  </div>
);

export default HowItWorks;


