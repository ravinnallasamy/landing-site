import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundParticles = () => {
  const [particles, setParticles] = useState<{ id: number; size: number; xOffset: number; yOffset: number; duration: number; delay: number; color: string; blur: string; xDrift: number }[]>([]);

  useEffect(() => {
    const mobileCheck = window.innerWidth < 768;
    const count = mobileCheck ? 10 : 20;
    const colors = ["bg-emerald-400", "bg-cyan-400", "bg-blue-500", "bg-green-300", "bg-indigo-400"];
    const blurs = ["blur-[60px]", "blur-[90px]", "blur-[120px]"];
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 250 + 150,
      xOffset: Math.random() * 100,
      yOffset: Math.random() * -100 - 50,
      duration: Math.random() * 10 + 15,
      delay: i < count / 2 ? 0 : Math.random() * 4, // 50% start instantly, others within 4s
      color: colors[i % colors.length],
      blur: blurs[i % blurs.length],
      xDrift: (Math.random() - 0.5) * 40,
    }));

    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div 
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-transparent"
      style={{ perspective: "1200px" }}
    >
      {particles.map((p, i) => {
        const startZ = (i % 5) * -150 - 100;
        const endZ = startZ + 400;
        
        return (
          <motion.div
            key={p.id}
            initial={{
              x: `${p.xOffset}%`,
              y: `${p.yOffset}%`,
              z: startZ,
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              x: [`${p.xOffset}%`, `${p.xOffset + p.xDrift}%`],
              y: [`${p.yOffset}%`, `125%`],
              z: [startZ, endZ],
              opacity: [0, 0.15, 0.15, 0], // Reduced opacity from 0.3 to 0.15
              scale: [0.4, 1.1, 0.4],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: p.size,
              height: p.size,
              willChange: "transform",
              transformStyle: "preserve-3d"
            }}
            className={`absolute rounded-full ${p.color} ${p.blur} mix-blend-screen opacity-10`}
          />
        );
      })}
    </div>
  );
};
export default BackgroundParticles;