import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import BackgroundParticles from "@/components/ui/background-particles";
import { fadeUp, baseViewport } from "@/lib/animations";
import workflowImage from "@/assets/images/workflow.png";
import AnimatedImage from "@/components/ui/animated-image";
import { Button } from "@/components/ui/button";
import { Mic, Cpu, FolderTree, BellRing } from "lucide-react";

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

const previewSteps = [
  { icon: Mic, title: "Capture", desc: "Record voice notes or snap a photo after any interaction." },
  { icon: Cpu, title: "AI Processes", desc: "Our AI extracts names, topics, and key insights instantly." },
  { icon: FolderTree, title: "Organize", desc: "Connections are auto-organized into your personal network." },
  { icon: BellRing, title: "Follow Up", desc: "Get smart reminders to reconnect at the right time." },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <SectionWrapper className="pt-24 relative overflow-hidden group">
      <BackgroundParticles />
      
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={baseViewport}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          How WayTree Fixes Your{" "}
          <span className="gradient-text">Networking</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Four simple steps. Zero effort. Perfect memory.
        </p>
      </motion.div>
    </SectionWrapper>

    {/* Preview Section */}
    <SectionWrapper className="py-20 relative overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={baseViewport}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Four simple steps to never lose a connection again.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

          {previewSteps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={baseViewport}
              transition={{ delay: i * 0.12 }}
              className="text-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-5 relative z-10"
              >
                <step.icon className="text-amber-600" size={28} />
              </motion.div>
              <span className="text-amber-600/60 text-xs font-mono mb-2 block">0{i + 1}</span>
              <h3 className="font-display font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Detailed Process Section */}
    <SectionWrapper className="py-20 relative overflow-hidden">
      <BackgroundParticles />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Workflow Image */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            className="order-2 lg:order-1"
          >
            <div className="max-w-xl mx-auto lg:mx-0">
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-amber-50 border border-amber-200"
                >
                  <span className="text-amber-600 font-bold text-lg">
                    {step.step}
                  </span>
                </motion.div>

                <div className="pt-2">
                  <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* CTA Section */}
    <SectionWrapper className="py-20 relative overflow-hidden bg-gray-50">
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={baseViewport}
        className="text-center"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-4 bg-amber-400/20 blur-2xl rounded-full -z-10 animate-pulse" />
          <Button
            asChild
            variant="primary"
            size="lg"
            className="px-8 py-6 text-lg rounded-full font-bold shadow-xl shadow-amber-500/20 transition-all hover:scale-110 active:scale-95 bg-amber-500 hover:bg-amber-600 border-none"
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
  </div>
);

export default HowItWorks;
