import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import BackgroundParticles from "@/components/ui/background-particles";
import { fadeUp, baseViewport } from "@/lib/animations";
import ceoImage from "@/assets/images/ceo.jpg";
import ctoImage from "@/assets/images/cto.jpg";
import AnimatedImage from "@/components/ui/animated-image";

const visionCards = [
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

const whyUsCards = [
  {
    title: "Real-Time Memory",
    text: "Capture conversations as they happen - no delay, no friction.",
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
];

const teamMembers = [
  {
    name: "Nagarajan",
    role: "Founder & CEO",
    image: ceoImage,
    description: "Driving the vision behind WayTree, Nagarajan focuses on building systems that solve real-world business problems with precision and scalability.",
    focusAreas: ["AI Strategy", "ERP Systems", "Global Expansion"],
  },
  {
    name: "Tamilarasu",
    role: "Chief Technology Officer",
    image: ctoImage,
    description: "Leading the engineering backbone of WayTree, Tamilarasu builds scalable architectures and integrates advanced AI systems into real-world applications.",
    focusAreas: ["GenAI Integrations", "System Architecture", "Mobile Engineering"],
  },
];

const About = () => (
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
          About{" "}
          <span className="gradient-text">WayTree</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Building the future of relationship memory through AI-powered networking.
        </p>
      </motion.div>
    </SectionWrapper>

    {/* Vision Section */}
    <SectionWrapper className="py-20 relative overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={baseViewport}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-amber-600 text-sm font-mono tracking-wider uppercase mb-3 block font-bold">OUR VISION</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              Build relationships that last, <br/> <span className="gradient-text">not just contacts that collect dust.</span>
            </h2>

            <h3 className="font-display text-2xl font-bold text-amber-600">
              Your network should work for you, not against you.
            </h3>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed font-medium">
                Imagine never forgetting a conversation. Never losing touch with valuable connections. Never missing an opportunity because you forgot to follow up.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                WayTree builds the future of relationship memory - an AI-powered system that remembers everything, understands connections, and helps you nurture the relationships that matter most.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {visionCards.map((card, index) => (
              <motion.div
                key={card.label || card.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={baseViewport}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className={`p-6 ${card.isHighlighted ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'}`}>
                  {card.isHighlighted ? (
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  ) : (
                    <span className="text-amber-600 text-xs font-mono tracking-wider uppercase mb-2 block font-bold">{card.label}</span>
                  )}
                  <p className="text-gray-600 leading-relaxed font-medium">{card.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* Why Us Section */}
    <SectionWrapper className="py-20 relative overflow-hidden">
      <BackgroundParticles />
      
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={baseViewport}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Why Choose{" "}
          <span className="gradient-text">WayTree</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Experience the difference with our AI-powered approach to networking.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyUsCards.map((card, index) => (
            <motion.div
              key={card.label || card.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={baseViewport}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className={`p-6 h-full ${card.isHighlighted ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'}`}>
                {card.isHighlighted ? (
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                ) : (
                  <span className="text-amber-600 text-xs font-mono tracking-wider uppercase mb-2 block font-bold">{card.label}</span>
                )}
                <p className="text-gray-600 leading-relaxed font-medium">{card.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Team Section */}
    <SectionWrapper className="py-20 relative overflow-hidden bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          The minds behind <span className="gradient-text">WayTree</span>.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Built by people who understand real-world systems, not just code.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white"
            >
              <div className="relative overflow-hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent max-h-[384px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                    style={
                      member.name === "Nagarajan" ? { objectPosition: 'center top' } : 
                      member.name === "Tamilarasu" ? { objectPosition: 'center bottom' } : {}
                    }
                  />
                </motion.div>
                
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-display text-xl font-bold text-amber-500 mb-1 drop-shadow-2xl shadow-black">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-sm drop-shadow-2xl shadow-black font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="border border-amber-600/50 rounded-full px-3 py-1 text-xs text-amber-600"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

      </div>
);

export default About;
