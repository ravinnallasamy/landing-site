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
      initial="initial"
      whileInView="animate"
      viewport={baseViewport}
      transition={{ delay: index * 0.15 }}
      {...hoverScale}
      variant="dark"
      className={cn("overflow-hidden p-0 h-full group", className)}
    >
      {/* Image Section */}
      <div className={cn(
        "relative overflow-hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent max-h-[384px]",
      )}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-auto object-cover"
            style={
              member.name === "Nagarajan" ? { objectPosition: 'center top' } : 
              member.name === "Tamilarasu" ? { objectPosition: 'center bottom' } : {}
            }
          />
        </motion.div>
        
        {/* Name + Role Overlay */}
        <div className="absolute bottom-6 left-8 right-8">
          <h3 className="headline-lg !text-3xl !text-primary-accent mb-2 drop-shadow-2xl shadow-black">
            {member.name}
          </h3>
          <p className="text-xl !text-white/90 drop-shadow-2xl shadow-black font-bold text-left tracking-wide">
            {member.role}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <p className="text-white/90 leading-relaxed mb-8 text-left text-lg font-medium">
          {member.description}
        </p>

        {/* Focus Areas Tags */}
        <div className="flex flex-wrap gap-3">
          {member.focusAreas.map((area) => (
            <span
              key={area}
              className="bg-accent/10 border border-accent/40 rounded-full px-4 py-1.5 text-xs text-accent font-bold tracking-wide uppercase"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </MotionGlassCard>
  );
};
