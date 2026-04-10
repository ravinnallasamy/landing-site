import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NeuralBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Top Right Accent */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10"
      />

      {/* Bottom Left Primary */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"
      />

      {/* Center Ambient */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -z-10"
      />
    </div>
  );
};
