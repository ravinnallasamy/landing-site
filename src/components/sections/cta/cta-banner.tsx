import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import ctaImage from "@/assets/images/cta.png";
import AnimatedImage from "@/components/ui/animated-image";
import { motion } from "framer-motion";
import { GlassCard, MotionGlassCard } from "@/components/ui/glass-card";
import { fadeUp, scaleIn, hoverScale, baseViewport } from "@/lib/animations";

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
      
      <div className="container mx-auto relative z-10 px-6">
        <MotionGlassCard
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={baseViewport}
          variant="dark"
          className="text-center max-w-4xl mx-auto p-12 md:p-20 rounded-[2.5rem]"
        >
          {/* Main CTA Content */}
          <h2 className="headline-lg">
            Your Memory Is Unreliable.
            <span className="gradient-text block">WayTree Isn't.</span>
          </h2>

          <p className="body-lg text-foreground/90 !mb-12 max-w-2xl mx-auto">
            Every forgotten conversation costs you money. Every missed follow-up loses you opportunities.
            Stop the bleeding. Start today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="shadow-soft hover:shadow-strong font-bold text-lg"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.waytree.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                Get Started Now
              </a>
            </Button>

            <div className="transition-transform hover:scale-105">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBookDemo}
                className="font-bold text-lg"
              >
                Book A Demo
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Start Today", desc: "Stop losing opportunities" },
              { title: "No Risk", desc: "14-day guarantee" },
              { title: "Real Results", desc: "Or your money back" }
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center transition-transform hover:scale-105"
              >
                <div className="headline-md gradient-text !mb-2">{item.title}</div>
                <div className="body-sm text-foreground/70">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Additional Trust Text */}
          <p className="body-sm text-foreground/60 !mt-12">
            ✓ Enterprise-grade security • ✓ GDPR compliant • ✓ Cancel anytime
          </p>
        </MotionGlassCard>
      </div>
    </section>
  );
};

export default CtaSection;
