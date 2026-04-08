import dashboardImage from "@/assets/images/dashboard.png";
import AnimatedImage from "@/components/ui/animated-image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { fadeUp, baseViewport, hoverScale } from "@/lib/animations";
import BackgroundParticles from "@/components/ui/background-particles";

const DashboardSection = () => {
  return (
    <SectionWrapper id="dashboard" className="relative group">
      <BackgroundParticles />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          className="text-center mb-16"
        >
          <h2 className="headline-lg">
            See Your Entire Network At A Glance
          </h2>
          <p className="body-lg max-w-2xl mx-auto font-bold">
            Your AI-powered dashboard tracks conversations, suggests follow-ups, and shows you exactly who needs attention.
          </p>
        </motion.div>


      {/* Main Content - Features and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Features */}
        <div className="space-y-6">
          {[
            { title: "Smart Tracking", desc: "Every conversation captured" },
            { title: "AI Summaries", desc: "Know what was discussed" },
            { title: "Follow-Up Reminders", desc: "Never miss opportunities" }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={baseViewport}
              transition={{ delay: i * 0.1 }}
              {...hoverScale}
            >
              <GlassCard className="p-8 text-justify" variant="primary">
                <div className="headline-md gradient-text mb-4 text-left">{feature.title}</div>
                <div className="body-md font-medium">{feature.desc}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Right side - Dashboard Image */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          transition={{ delay: 0.3 }}
          className="flex justify-center lg:justify-end items-center"
        >
          <div className="relative w-full max-w-lg aspect-auto">
            {/* Dashboard image with Cinematic high-fidelity animation */}
            <AnimatedImage
              src={dashboardImage}
              alt="WayTree Dashboard"
              variant="cinematic"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DashboardSection;
