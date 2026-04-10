import mediaImage from "@/assets/images/media.png";
import AnimatedImage from "@/components/ui/animated-image";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { BaseSection } from "@/components/layout/base-section";
import { ScrollCard, StaggerGroup } from "@/components/ui/scroll-card";

const MediaSection = () => {
  const features = [
    {
      title: "Capture Everything",
      description: "Photos, voice notes, documents. All media gets tagged and searchable instantly.",
    },
    {
      title: "Smart Organization",
      description: "AI knows what matters. Important content surfaces automatically. No manual sorting.",
    },
    {
      title: "Share Instantly",
      description: "Need to send that presentation? Find it in seconds. Share with one click.",
    },
  ];

  const stats = [
    { label: "Storage", value: "Unlimited" },
    { label: "Smart Tagging", value: "AI-Powered" },
    { label: "Cloud Storage", value: "Secure" },
  ];

  return (
    <BaseSection id="media" showParticles backgroundVariant="none">
      <SectionHeading
        title={
          <>
            Your <span className="gradient-text">Media</span> Hub.
          </>
        }
        description="Every photo, every voice note, every interaction — all in one place."
      />

      {/* Main Content - Image and Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mb-20">
        {/* Left side - Media Image with Cinematic high-fidelity animation */}
        <ScrollCard
          animation="fadeUp"
          className="relative order-2 lg:order-1"
        >
          <div className="max-w-xl mx-auto lg:mx-0 aspect-[3/4]">
            <AnimatedImage
              src={mediaImage}
              alt="Media Search Interface"
              variant="cinematic"
              className="rounded-2xl shadow-2xl w-full h-full"
              priority={true}
            />
          </div>
        </ScrollCard>

        {/* Right side - Features list */}
        <StaggerGroup 
          className="space-y-6 order-1 lg:order-2"
        >
          {features.map((feature) => (
            <ScrollCard key={feature.title} animation="slideRight">
              <GlassCard className="p-8 text-justify" variant="primary">
                <h3 className="headline-md mb-4 text-left">
                  {feature.title}
                </h3>
                <p className="body-md">
                  {feature.description}
                </p>
              </GlassCard>
            </ScrollCard>
          ))}
          
          <ScrollCard animation="fadeUp">
            <GlassCard
              variant="primary"
              className="p-8"
            >
              <h4 className="font-display font-bold text-emerald-400 text-lg mb-2">
                Professional Media Library
              </h4>
              <p className="text-muted-foreground font-medium leading-relaxed text-justify">
                Keep all your professional media organized and accessible from anywhere, anytime.
              </p>
            </GlassCard>
          </ScrollCard>
        </StaggerGroup>
      </div>

      {/* Bottom Stats Grid */}
      <StaggerGroup 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {stats.map((stat) => (
          <ScrollCard key={stat.label} animation="scaleIn">
            <GlassCard className="text-center p-8" variant="primary">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </GlassCard>
          </ScrollCard>
        ))}
      </StaggerGroup>
    </BaseSection>
  );
};

export default MediaSection;



