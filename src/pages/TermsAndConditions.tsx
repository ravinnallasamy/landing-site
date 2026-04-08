import { motion } from "framer-motion";
import { fadeUp, textReveal, baseViewport, pageTransition } from "@/lib/animations";
import BackgroundParticles from "@/components/ui/background-particles";

const TermsAndConditions = () => {
  return (
    <motion.div 
      variants={pageTransition} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
    >
      <BackgroundParticles />
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <motion.div variants={fadeUp} className="mb-16">
          <h1 className="content-h1 tracking-tighter">Terms & Conditions</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="h-[1px] w-12 bg-secondary/30" />
            <p className="text-sm font-medium">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.section variants={fadeUp} initial="initial" whileInView="animate" viewport={baseViewport}>
            <motion.h2 variants={textReveal} className="content-h2">1. Acceptance of Terms</motion.h2>
            <p className="content-p">
              By accessing and using WayTree ("the Service"), you agree to be bound by these Terms & Conditions ("Terms").
              If you do not agree to these Terms, you may not access or use our Service.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
