import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ctaImage from "@/assets/images/cta.png";
import AnimatedImage from "@/components/ui/animated-image";
import { GlassCard } from "@/components/ui/glass-card";
import { hoverScale } from "@/lib/animations";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

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
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      </div>

      <div className="container-standard relative z-10">
        <ScrollCard
          animation="scaleIn"
          className="text-center max-w-4xl mx-auto"
        >
          <GlassCard
            variant="dark"
            className="p-8 md:p-20 rounded-[2rem] md:rounded-[2.5rem]"
          >
            {/* Main CTA Content */}
            <h2 className="headline-lg">
              Your Memory Is Unreliable.
              <span className="gradient-text block">WayTree Isn't.</span>
            </h2>

            <p className="body-lg text-foreground/90 !mb-8 md:!mb-12 max-w-2xl mx-auto">
              Every forgotten conversation costs you money. Every missed follow-up loses you opportunities.
              Stop the bleeding. Start today.
            </p>

            {/* CTA Buttons */}
            <StaggerGroup className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16">
              <ScrollCard animation="fadeUp">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="shadow-soft hover:shadow-strong font-bold text-base md:text-lg w-full sm:w-auto px-8 py-6 rounded-full"
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
              </ScrollCard>

              <ScrollCard animation="fadeUp">
                <div className="transition-transform hover:scale-105 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBookDemo}
                    className="font-bold text-base md:text-lg w-full sm:w-auto px-8 py-6 rounded-full border-white/20 text-white hover:bg-white/10"
                  >
                    Book A Demo
                  </Button>
                </div>
              </ScrollCard>
            </StaggerGroup>

            {/* Trust Indicators */}
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Start Today", desc: "Stop losing opportunities" },
                { title: "No Risk", desc: "14-day guarantee" },
                { title: "Real Results", desc: "Or your money back" }
              ].map((item) => (
                <ScrollCard
                  key={item.title}
                  animation="fadeUp"
                  {...hoverScale}
                  className="text-center"
                >
                  <div className="headline-md !text-lg md:!text-xl gradient-text !mb-1 md:!mb-2">{item.title}</div>
                  <div className="body-sm text-foreground/70">{item.desc}</div>
                </ScrollCard>
              ))}
            </StaggerGroup>

            {/* Additional Trust Text */}
            <ScrollCard animation="fadeUp" delay={0.4}>
              <p className="body-sm text-foreground/60 !mt-8 md:!mt-12">
                ✓ Enterprise-grade security • ✓ GDPR compliant • ✓ Cancel anytime
              </p>
            </ScrollCard>
          </GlassCard>
        </ScrollCard>
      </div>
    </section>
  );
};

export default CtaSection;

