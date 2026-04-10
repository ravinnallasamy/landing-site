import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const NeuralBackground = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div ref={ref} className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {isInView && (
        <>
          {/* Top Right Accent */}
          <div
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[80px] opacity-15 -z-10"
          />

          {/* Bottom Left Primary */}
          <div
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] opacity-10 -z-10"
          />

          {/* Center Ambient */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] opacity-5 -z-10"
          />
        </>
      )}
    </div>
  );
};
