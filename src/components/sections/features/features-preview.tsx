import { Mic, Sparkles, QrCode, CalendarDays } from "lucide-react";
import SectionReveal from "@/components/ui/section-reveal";
import { motion } from "framer-motion";

const features = [
  { icon: Mic, title: "Voice Capture", desc: "Record conversations on the go and let AI do the rest." },
  { icon: Sparkles, title: "AI Insights", desc: "Get intelligent summaries and relationship recommendations." },
  { icon: QrCode, title: "QR Networking", desc: "Share your digital identity card with a single scan." },
  { icon: CalendarDays, title: "Event Mode", desc: "Supercharge your networking at conferences and meetups." },
];

const FeaturesPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionReveal>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for <span className="gradient-text">Meaningful</span> Connections
          </h2>
        </div>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <SectionReveal key={f.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="glass rounded-2xl p-7 group cursor-pointer transition-shadow hover:glow-accent"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <f.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesPreview;
