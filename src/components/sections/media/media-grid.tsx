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
        className="mb-8 md:mb-16"
      />

      {/* Main Content - Image and Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 mb-12 md:mb-20">
        {/* Media Image with Cinematic high-fidelity animation */}
        <ScrollCard
          animation="fadeUp"
          className="relative order-2 lg:order-1"
        >
          <div className="max-w-xl mx-auto lg:mx-0 aspect-[4/3] md:aspect-[3/4]">
            <AnimatedImage
              src={mediaImage}
              alt="Media Search Interface"
              variant="cinematic"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
              priority={true}
            />
          </div>
        </ScrollCard>

        {/* Features list */}
        <StaggerGroup 
          className="space-y-4 md:space-y-6 order-1 lg:order-2"
        >
          {features.map((feature) => (
            <ScrollCard key={feature.title} animation="slideRight">
              <GlassCard className="p-6 md:p-8" variant="primary">
                <h3 className="headline-md !text-lg md:!text-xl mb-2 md:mb-4">
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
              className="p-6 md:p-8"
            >
              <h4 className="headline-md !text-base md:!text-lg text-emerald-600 mb-2">
                Professional Media Library
              </h4>
              <p className="body-md">
                Keep all your professional media organized and accessible from anywhere, anytime.
              </p>
            </GlassCard>
          </ScrollCard>
        </StaggerGroup>
      </div>

      {/* Bottom Stats Grid */}
      <StaggerGroup 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10"
      >
        {stats.map((stat) => (
          <ScrollCard key={stat.label} animation="scaleIn">
            <GlassCard className="text-center p-6 md:p-8" variant="primary">
              <div className="headline-lg !text-2xl md:!text-3xl gradient-text mb-2">{stat.value}</div>
              <div className="hook-text !mb-0 text-muted-foreground">
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



