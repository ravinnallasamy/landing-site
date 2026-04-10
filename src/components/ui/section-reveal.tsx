import { ReactNode } from "react";
import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/animations";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SectionReveal = ({ children, className = "", delay = 0 }: SectionRevealProps) => (
  <motion.div
    variants={sectionReveal}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
