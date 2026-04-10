import { motion } from "framer-motion";
import aboutImage from "@/assets/images/about.png";
import AnimatedImage from "@/components/ui/animated-image";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { BaseSection } from "@/components/layout/base-section";
import { fadeUp, baseViewport, hoverScale, sectionReveal } from "@/lib/animations";

const AboutSection = () => {
  const values = [
    {
      title: "Built For Networkers",
      description: "Created by someone who actually networks. Not by corporate committees.",
    },
    {
      title: "Privacy First",
      description: "Your data stays yours. No selling. No ads. No bullshit.",
    },
    {
      title: "Actually Works",
      description: "No vaporware. Real AI that solves real problems. Starting today.",
    },
  ];

  return (
    <BaseSection id="about" showParticles backgroundVariant="none">
      <SectionHeading
        tag="OUR VISION"
        title={
          <>
            Why <span className="text-primary-accent">WayTree</span> Exists
          </>
        }
        description="We meet hundreds. We remember dozens. We lose thousands in missed opportunities."
      />

      {/* Main Content - Image and Values */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 relative z-10">
        {/* Left side - Image with Cinematic Animation */}
        <motion.div
          variants={sectionReveal}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          className="relative"
        >
          <div className="max-w-lg mx-auto lg:mx-0">
            <AnimatedImage
              src={aboutImage}
              alt="About WayTree"
              variant="cinematic"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right side - Story */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            transition={{ delay: 0.2 }}
          >
            <span className="hook-text">THE PROBLEM</span>
            <h2 className="headline-lg !mb-4">
              We meet hundreds. <span className="text-primary-accent">We remember dozens.</span>
            </h2>
            <p className="body-lg mb-6">
              I attended 100+ events and saw thousands of opportunities disappear. 
              Deals were lost, and valuable follow-ups simply never happened because human memory fails.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-black rounded-full mt-1" />
                <p className="body-lg">
                  We needed a <span className="accent-underline font-bold">Networking Brain</span> that captures everything and organizes it for you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={baseViewport}
              transition={{ delay: 0.3 }}
              {...hoverScale}
            >
              <GlassCard className="p-8 text-center" variant="primary">
                <div className="headline-lg gradient-text mb-2">10+</div>
                <div className="hook-text">Active Users</div>
              </GlassCard>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={baseViewport}
              transition={{ delay: 0.4 }}
              {...hoverScale}
            >
              <GlassCard className="p-8 text-center" variant="primary">
                <div className="headline-lg gradient-text mb-2">100+</div>
                <div className="hook-text">Connections Made</div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            transition={{ delay: 0.5 + index * 0.1 }}
            {...hoverScale}
          >
            <GlassCard className="p-10 text-justify h-full flex flex-col justify-center bg-black/40 border-white/10" variant="dark">
              <h3 className="headline-md text-left mb-4 text-white">
                {value.title}
              </h3>
              <p className="body-md text-white/80">
                {value.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </BaseSection>
  );
};

export default AboutSection;
