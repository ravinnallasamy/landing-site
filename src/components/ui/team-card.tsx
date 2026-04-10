import { motion } from "framer-motion";
import { MotionGlassCard } from "@/components/ui/glass-card";
import { fadeUp, baseViewport, hoverScale } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  focusAreas: string[];
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
  className?: string;
}

export const TeamCard = ({ member, index, className }: TeamCardProps) => {
  return (
    <MotionGlassCard
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={baseViewport}
      transition={{ delay: index * 0.15 }}
      {...hoverScale}
      variant="primary"
      className={cn("overflow-hidden p-0 h-full group bg-white/50 backdrop-blur-xl border-gray-100 shadow-xl", className)}
    >
      {/* Image Section - Maintained dark overlay for text readability over photo */}
      <div className={cn(
        "relative overflow-hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent max-h-[280px] sm:max-h-[320px] md:max-h-[384px]",
      )}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={
              member.name === "Nagarajan" ? { objectPosition: 'center top' } : 
              member.name === "Tamilarasu" ? { objectPosition: 'center bottom' } : {}
            }
          />
        </motion.div>
        
        {/* Name + Role Overlay */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 lg:bottom-6 lg:left-8 lg:right-8">
          <h3 className="headline-lg !text-xl md:!text-2xl lg:!text-3xl !text-primary-accent mb-1 md:mb-2 drop-shadow-2xl shadow-black">
            {member.name}
          </h3>
          <p className="text-base md:text-lg lg:text-xl !text-white/90 drop-shadow-2xl shadow-black font-bold text-left tracking-wide">
            {member.role}
          </p>
        </div>
      </div>

      {/* Content Section - Updated to dark text for light background */}
      <div className="p-6 md:p-8">
        <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-left text-base md:text-lg font-medium">
          {member.description}
        </p>

        {/* Focus Areas Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {member.focusAreas.map((area) => (
            <span
              key={area}
              className="bg-accent/5 border border-accent/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-xs text-accent font-bold tracking-wide uppercase"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </MotionGlassCard>
  );
};

