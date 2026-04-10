import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  className?: string;
  variant?: "emerald" | "dark" | "blue";
}

export const SectionBackground = ({ className, variant = "emerald" }: SectionBackgroundProps) => {
  const variants = {
    emerald: "bg-gradient-to-br from-emerald-950/30 via-teal-950/30 to-green-950/30",
    dark: "bg-gradient-to-br from-black/90 via-black/80 to-black/90",
    blue: "bg-gradient-to-br from-blue-950/30 via-indigo-950/30 to-slate-950/30",
  };

  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none -z-10",
        variants[variant],
        className
      )} 
    />
  );
};
