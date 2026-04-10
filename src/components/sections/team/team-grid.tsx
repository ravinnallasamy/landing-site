import { teamMembers } from "@/lib/data";
import { TeamCard } from "@/components/ui/team-card";
import { SectionHeading } from "@/components/ui/section-heading";

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background gradient - only for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 opacity-0 dark:opacity-100" />
      
      <SectionHeading
        title={
          <>
            The minds behind <span className="gradient-text">WayTree</span>.
          </>
        }
        description="Built by people who understand real-world systems, not just code."
      />

      {/* Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
