import { Mic, Cpu, FolderTree, BellRing } from "lucide-react";
import SectionReveal from "@/components/ui/section-reveal";
import { motion } from "framer-motion";

const steps = [
  { icon: Mic, title: "Capture", desc: "Record voice notes or snap a photo after any interaction." },
  { icon: Cpu, title: "AI Processes", desc: "Our AI extracts names, topics, and key insights instantly." },
  { icon: FolderTree, title: "Organize", desc: "Connections are auto-organized into your personal network." },
  { icon: BellRing, title: "Follow Up", desc: "Get smart reminders to reconnect at the right time." },
];

const HowItWorksPreview = () => (
  <section className="section-padding bg-card/20">
    <div className="container mx-auto">
      <SectionReveal>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Four simple steps to never lose a connection again.
          </p>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        {steps.map((step, i) => (
          <SectionReveal key={step.title} delay={i * 0.12}>
            <div className="text-center relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5 relative z-10"
              >
                <step.icon className="text-accent" size={28} />
              </motion.div>
              <span className="text-accent/60 text-xs font-mono mb-2 block">0{i + 1}</span>
              <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksPreview;
