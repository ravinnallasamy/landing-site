import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import ctaImage from "@/assets/images/cta.png";
import AnimatedImage from "@/components/ui/animated-image";
import { motion } from "framer-motion";

const CtaSection = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate('/contact');
    // Safe scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden dark">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* CTA Background Image */}
        <AnimatedImage
          src={ctaImage}
          alt="Call to Action Background"
          variant="hover-lift"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto backdrop-blur-md bg-black/30 p-10 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          {/* Main CTA Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="headline-lg"
          >
            Your Memory Is Unreliable.
            <span className="gradient-text block">WayTree Isn't.</span>
          </motion.h2>

          <p className="body-lg text-foreground/90 !mb-12 max-w-2xl mx-auto">
            Every forgotten conversation costs you money. Every missed follow-up loses you opportunities.
            Stop the bleeding. Start today.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              asChild
              variant="primary"
              size="lg"
              className="shadow-soft hover:shadow-strong font-bold text-lg"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.waytree.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.a>
            </Button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleBookDemo}
                className="font-bold text-lg"
              >
                Book A Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="headline-md gradient-text !mb-2">Start Today</div>
              <div className="body-sm text-foreground/70">Stop losing opportunities</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="headline-md gradient-text !mb-2">No Risk</div>
              <div className="body-sm text-foreground/70">14-day guarantee</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="headline-md gradient-text !mb-2">Real Results</div>
              <div className="body-sm text-foreground/70">Or your money back</div>
            </motion.div>
          </motion.div>

          {/* Additional Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="body-sm text-foreground/60 !mt-12"
          >
            ✓ Enterprise-grade security • ✓ GDPR compliant • ✓ Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
