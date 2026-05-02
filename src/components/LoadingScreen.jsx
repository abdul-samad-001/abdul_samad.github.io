import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const text = "ABDUL SAMAD • PORTFOLIO • DESIGNER • DEVELOPER • ";
  const chars = text.split("");
  const radius = 90;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "radial-gradient(ellipse at center, #0e0e18 0%, #06060a 70%)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Ambient Aurora Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 animate-aurora" style={{ background: "conic-gradient(from 0deg, #8b5cf6, #38bdf8, #f472b6, #8b5cf6)", filter: "blur(80px)" }}></div>
      </div>

      {/* Circular Spinning Text Logo */}
      <div className="relative mb-16">
        {/* Outer ring glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-white/5"></div>
        
        <motion.div 
          className="relative flex items-center justify-center"
          style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {chars.map((char, i) => {
            const rotation = (360 / chars.length) * i;
            return (
              <span
                key={i}
                className="absolute font-mono text-[11px] font-medium tracking-wider"
                style={{
                  height: `${radius}px`,
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "bottom center",
                  top: 0,
                  color: `hsl(${260 + (i * 3)}, 70%, ${65 + Math.sin(i * 0.3) * 15}%)`,
                }}
              >
                {char}
              </span>
            );
          })}
        </motion.div>
        
        {/* Center monogram */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="font-head text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-accent2">AS</span>
        </div>
      </div>

      {/* Loading Bar */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-text3">
            Crafting Experience
          </span>
          <span className="font-mono text-xs font-bold text-primary tabular-nums">
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full rounded-full relative"
            style={{ 
              width: `${progress}%`,
              background: "linear-gradient(90deg, #8b5cf6, #38bdf8, #f472b6)"
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/60 blur-[1px]"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
