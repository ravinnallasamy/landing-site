import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const BackgroundParticles = () => {
  const [particles, setParticles] = useState<{ id: number; size: number; xOffset: number; yOffset: number; duration: number; delay: number; color: string; blur: string; xDrift: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0 });

  useEffect(() => {
    const mobileCheck = window.innerWidth < 768;
    const count = mobileCheck ? 5 : 12; // reduced count
    const colors = ["bg-emerald-400", "bg-cyan-400", "bg-blue-500"];
    const blurs = ["blur-[40px]", "blur-[60px]"]; // reduced blurs
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      xOffset: Math.random() * 100,
      yOffset: Math.random() * -100 - 50,
      duration: Math.random() * 8 + 10,
      delay: i < count / 2 ? 0 : Math.random() * 2,
      color: colors[i % colors.length],
      blur: blurs[i % blurs.length],
      xDrift: (Math.random() - 0.5) * 30,
    }));

    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-transparent"
      style={{ perspective: "1200px" }}
    >
      {isInView && particles.map((p, i) => {
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
            whileInView={{
              x: [`${p.xOffset}%`, `${p.xOffset + p.xDrift}%`],
              y: [`${p.yOffset}%`, `125%`],
              z: [startZ, endZ],
              opacity: [0, 0.1, 0.1, 0], 
              scale: [0.4, 1.1, 0.4],
              rotateX: [0, 180],
              rotateY: [0, 180],
            }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              width: p.size,
              height: p.size,
              willChange: "transform, opacity",
            }}
            className={`absolute rounded-full ${p.color} ${p.blur} mix-blend-screen opacity-10`}
          />
        );
      })}
    </div>
  );
};
export default BackgroundParticles;