import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const TiltCard = ({ children, className, tiltIntensity = 20, zTranslate = 40 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mappings for tilt intensity
  const rotateX = useTransform(y, [-100, 100], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(x, [-100, 100], [-tiltIntensity, tiltIntensity]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div style={{ transform: `translateZ(${zTranslate}px)` }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const CustomCursor = () => {
  useEffect(() => {
    const cDot = document.getElementById("cDot");
    const cRing = document.getElementById("cRing");
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cDot) cDot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    const animRing = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      if (cRing) cRing.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animRing);
    };

    const handleHoverStart = () => {
      if (cRing) cRing.classList.add("hov");
    };
    
    const handleHoverEnd = () => {
      if (cRing) cRing.classList.remove("hov");
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animRing);

    // Apply hover effects
    const interactiveElements = document.querySelectorAll("a, button, .group, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div id="cDot" className="c-dot"></div>
      <div id="cRing" className="c-ring"></div>
    </>
  );
};

export const Background = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle ambient orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[140px] animate-orb" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04), transparent 70%)", top: "-150px", left: "-150px", animationDelay: "0s" }}></div>
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[140px] animate-orb" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.025), transparent 70%)", bottom: "-100px", right: "-100px", animationDelay: "-6s" }}></div>
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[140px] animate-orb" style={{ background: "radial-gradient(circle, rgba(244,114,182,0.015), transparent 70%)", top: "45%", left: "42%", animationDelay: "-12s" }}></div>
      </div>
      
      {/* Grid Pattern - more subtle */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          background: "linear-gradient(rgba(139,92,246,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      ></div>

      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.018] bg-noise"></div>
    </>
  );
};
