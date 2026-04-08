import workflowImage from "@/assets/images/workflow.png";
import AnimatedImage from "@/components/ui/animated-image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { fadeUp, baseViewport, hoverScale, sectionReveal } from "@/lib/animations";
import BackgroundParticles from "@/components/ui/background-particles";

const HowItWorksSection = () => {
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

  return (
    <SectionWrapper id="process" className="relative group overflow-hidden">
      <BackgroundParticles />
      
      {/* Section Header */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={baseViewport}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="headline-lg">
          How WayTree Fixes Your Networking
        </h2>
        <p className="body-lg max-w-2xl mx-auto font-bold">
          Four simple steps. Zero effort. Perfect memory.
        </p>
      </motion.div>

      {/* Main Content - Image and Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side - Workflow Image */}
        <motion.div
          variants={sectionReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={baseViewport}
          className="relative order-2 lg:order-1"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Workflow image with Cinematic high-fidelity animation */}
            <AnimatedImage
              src={workflowImage}
              alt="WayTree Workflow"
              variant="cinematic"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right side - Steps */}
        <div className="space-y-8 order-1 lg:order-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={baseViewport}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-6 group"
            >
              {/* Step Indicator */}
              <motion.div {...hoverScale}>
                <GlassCard className="flex-shrink-0 w-14 h-14 flex items-center justify-center p-0 rounded-full border-accent/20" variant="primary">
                  <span className="text-accent font-bold text-lg">
                    {step.step}
                  </span>
                </GlassCard>
              </motion.div>

              {/* Step Content */}
              <div className="pt-2">
                <h3 className="headline-md group-hover:text-primary-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="body-md font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={baseViewport}
        transition={{ delay: 0.6 }}
        className="text-center mt-20 relative z-10"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full -z-10 animate-pulse" />
          <Button
            asChild
            variant="primary"
            size="lg"
            className="px-8 py-6 text-lg rounded-full font-bold shadow-xl shadow-accent/20 transition-all hover:scale-110 active:scale-95 bg-amber-500 hover:bg-amber-600 border-none"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.waytree.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Journey
            </a>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
