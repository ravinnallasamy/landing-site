import SectionReveal from "@/components/ui/section-reveal";
import dashboardImg from "@/assets/images/dashboard-showcase.jpg";
import AnimatedImage from "@/components/ui/animated-image";

const ShowcaseSection = () => (
  <section className="section-padding bg-card/20">
    <div className="container mx-auto">
      <SectionReveal>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Network, <span className="gradient-text">Visualized</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A powerful dashboard that gives you full visibility into your relationships, interactions, and follow-ups.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="relative max-w-4xl mx-auto">
          <AnimatedImage
            src={dashboardImg}
            alt="WayTree analytics dashboard"
            variant="float-pulse"
            className="rounded-2xl shadow-2xl w-full"
          />
          <div className="absolute -inset-6 rounded-3xl bg-accent/8 blur-xl -z-10" />
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default ShowcaseSection;
