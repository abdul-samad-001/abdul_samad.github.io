import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, FolderOpen, MapPin, Code2, Sparkles, Palette } from "lucide-react";
import { TiltCard } from "./UIElements";
import profileImg from "../assets/profile.jpg";

const roles = [
  "Software Engineer",
  "UI/UX Designer",
  "ML Enthusiast",
  "NLP Developer",
  "Problem Solver",
];

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    let timeout;
    const currentFullText = roles[currentRoleIndex];

    if (!isDeleting && currentText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText((prev) =>
            isDeleting
              ? currentFullText.substring(0, prev.length - 1)
              : currentFullText.substring(0, prev.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 z-10 overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '-1.5s' }}></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-emerald/5 border border-emerald/15 rounded-full font-mono text-[11px] text-emerald mb-8 tracking-wider shadow-[0_0_20px_rgba(52,211,153,0.08)]">
            <span className="w-2 h-2 bg-emerald rounded-full shadow-[0_0_10px_#34d399] animate-sPulse"></span>
            Available for opportunities
          </div>
          
          <p className="font-mono text-xs text-text3 tracking-[0.25em] uppercase mb-3">
            // Hello World — I'm
          </p>
          
          <h1 className="font-head text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.02] tracking-tight mb-5">
            <motion.span 
              className="block text-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Abdul
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text pb-2"
              style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #f472b6 100%)", backgroundSize: "200% auto" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <em>Samad</em>
            </motion.span>
          </h1>

          <div className="font-body text-xl md:text-2xl text-text2 mb-6 flex items-center gap-2 flex-wrap min-h-[36px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold">{currentText}</span>
            <span className="inline-block w-[2px] h-6 bg-primary animate-pulse"></span>
          </div>

          <p className="font-body text-lg text-text3 leading-relaxed mb-10 max-w-lg">
            Crafting intelligent digital experiences at the intersection of Machine
            Learning, elegant UI/UX design, and modern web development.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-3.5 rounded-2xl font-body font-bold text-sm tracking-wide text-white flex items-center gap-2.5 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary2 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <Mail size={17} className="relative z-10" /> 
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 shadow-[0_10px_40px_rgba(139,92,246,0.35)] group-hover:shadow-[0_20px_55px_rgba(139,92,246,0.5)] transition-shadow duration-500"></div>
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-transparent border border-white/10 text-text rounded-2xl font-body font-semibold text-sm tracking-wide backdrop-blur-md hover:bg-white/5 hover:border-primary/30 transition-all duration-300 flex items-center gap-2.5"
            >
              <FolderOpen size={17} /> View Work
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Giant 3D Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
          style={{ transformPerspective: 1200 }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0"
        >
          {/* Multi-layered Neon Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] pointer-events-none z-0">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-[100px] animate-glow-pulse"></div>
            <div className="absolute inset-[15%] bg-accent/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '-1.5s' }}></div>
          </div>
          
          <TiltCard className="w-full aspect-[4/5] relative z-10" tiltIntensity={10} zTranslate={40}>
            {/* Gradient border frame */}
            <div className="w-full h-full rounded-[36px] p-[2px] shadow-[0_30px_80px_rgba(139,92,246,0.2),0_0_0_1px_rgba(255,255,255,0.05)]" style={{ background: "linear-gradient(135deg, #a78bfa, #38bdf8, #f472b6, #a78bfa)" }}>
              {/* Image Container */}
              <div className="w-full h-full rounded-[34px] overflow-hidden bg-dark relative group">
                <img 
                  src={profileImg} 
                  alt="Abdul Samad" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Premium overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/50 to-transparent opacity-85"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating Content over Image */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex flex-col items-start">
                  
                  <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl mb-3 sm:mb-4">
                    <Code2 className="text-accent" size={15} />
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">Developer & Designer</span>
                  </div>

                  <h3 className="font-head text-2xl sm:text-4xl font-extrabold text-white mb-1 leading-tight">Abdul Samad</h3>
                  <p className="font-body text-[11px] sm:text-xs text-text3 mb-3 sm:mb-4">B.Tech CSE • AI/ML Specialization</p>
                  
                  <div className="flex items-center justify-between w-full mt-1 sm:mt-2 border-t border-white/10 pt-3 sm:pt-4">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-text3 uppercase tracking-wider">
                      <MapPin size={11} className="text-accent" /> Prayagraj, IN
                    </div>
                    <div className="font-mono text-[8px] sm:text-[9px] text-emerald bg-emerald/8 border border-emerald/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg tracking-widest flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></span> OPEN TO WORK
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Statistic Badges */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 sm:-left-8 lg:-left-10 top-16 sm:top-20 glass-card p-2.5 sm:p-4 w-20 sm:w-28 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20"
            >
               <span className="block text-center font-head text-sm sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-primary">Full Stack</span>
               <span className="block text-center font-mono text-[6.5px] sm:text-[8px] uppercase tracking-widest text-text3 mt-0.5 sm:mt-1">Developer</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 sm:-right-8 lg:-right-10 bottom-24 sm:bottom-32 glass-card px-3 sm:px-5 py-2 sm:py-3.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-1.5 sm:gap-3 z-20"
            >
               <Palette size={14} className="text-accent2" />
               <span className="font-mono text-[8px] sm:text-[10px] font-bold text-text2 uppercase tracking-wider">UI/UX</span>
            </motion.div>

          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text3"
      >
        <div className="w-[1px] h-14 bg-gradient-to-b from-primary/60 to-transparent animate-[sLine_2.5s_ease_infinite] origin-top"></div>
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-text3">Scroll</span>
      </motion.div>
    </section>
  );
};
