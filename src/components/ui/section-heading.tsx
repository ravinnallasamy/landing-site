import { motion } from "framer-motion";
import { fadeUp, textReveal, baseViewport, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  delay?: number;
}

export const SectionHeading = ({
  tag,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  delay = 0,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right ml-auto items-end",
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={baseViewport}
      transition={{ delay }}
      className={cn("max-w-4xl mb-16 relative z-10 flex flex-col", alignmentClasses[align], className)}
    >
      {tag && (
        <motion.span 
          variants={fadeUp}
          className="hook-text block mb-4 uppercase tracking-[0.2em]"
        >
          {tag}
        </motion.span>
      )}
      
      <motion.h2 
        variants={textReveal}
        className={cn("headline-lg !mb-4", titleClassName)}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.div 
          variants={fadeUp}
          className={cn("body-lg font-medium max-w-2xl", align === "center" && "mx-auto", descriptionClassName)}
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
};
