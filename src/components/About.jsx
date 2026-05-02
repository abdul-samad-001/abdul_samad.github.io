import { useState } from "react";
import { motion } from "framer-motion";
import { SiPython, SiReact, SiFigma, SiMongodb, SiMysql, SiTensorflow, SiGit, SiGithub, SiGoogle, SiCanva } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { FaJava, FaDownload, FaAward, FaTrophy } from "react-icons/fa";
import { BrainCircuit, GraduationCap, Sparkles } from "lucide-react";

export const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const roles = [
    { icon: "👨‍💻", title: "SOFTWARE ENGINEER", subtitle: "Turning coffee into code", gradient: "from-primary to-accent" },
    { icon: "✨", title: "UI/UX DESIGNER", subtitle: "Crafting digital experiences", gradient: "from-[#38bdf8] to-[#0284c7]" },
    { icon: "🚀", title: "ML ENGINEER", subtitle: "Training intelligent models", gradient: "from-[#8b5cf6] to-[#6d28d9]" },
    { icon: "💡", title: "INNOVATOR", subtitle: "Building the future", gradient: "from-[#f59e0b] to-[#d97706]" },
    { icon: "🧠", title: "PROBLEM SOLVER", subtitle: "Optimizing algorithms", gradient: "from-[#10b981] to-[#059669]" }
  ];

  const skillCategories = [
    { title:"LANGUAGES", skills:[{icon:<FaJava size={26}/>,name:"Java"},{icon:<SiPython size={26}/>,name:"Python"},{icon:<span className="font-black text-[22px] tracking-tighter italic">JS</span>,name:"JavaScript"},{icon:<SiReact size={26}/>,name:"React JS"}]},
    { title:"UI/UX", skills:[{icon:<SiFigma size={26}/>,name:"Figma"},{icon:<SiCanva size={26}/>,name:"Canva"}]},
    { title:"DATABASES", skills:[{icon:<SiMongodb size={26}/>,name:"MongoDB"},{icon:<SiMysql size={26}/>,name:"MySQL"}]},
    { title:"ML & AI", skills:[{icon:<SiTensorflow size={26}/>,name:"TensorFlow"},{icon:<BrainCircuit size={26}/>,name:"NLP"}]},
    { title:"TOOLS", skills:[{icon:<SiGit size={26}/>,name:"Git"},{icon:<SiGithub size={26}/>,name:"GitHub"}]},
  ];

  const certifications = [
    { title:"Uhack 4.0 Hackathon", issuer:"United Group Of Institutions", icon:<FaTrophy size={18} className="text-gold"/>, year:"2026", link:"./uhack_4.jpg" },
    { title:"Generative AI with NLP", issuer:"United Global Infoservice Pvt. Ltd.", icon:<SiGoogle size={18} className="text-accent"/>, year:"2025", link:"./gen_ai_cert.jpg" },
    { title:"Gen AI Study Jam", issuer:"Google Developer Groups - UIT", icon:<SiGoogle size={18} className="text-[#4285F4]"/>, year:"2024", link:"./Abdul.jpg" },
    { title:"Oracle eCertificate", issuer:"Oracle", icon:<GrOracle size={18} className="text-red-500"/>, year:"2025", link:"./oracle_cert.pdf" },
  ];

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <motion.div initial={{opacity:0,x:-80,rotateY:25}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true,margin:"-100px"}} transition={{duration:0.8,type:"spring",bounce:0.3}} style={{transformPerspective:1000}} className="flex flex-col gap-10 lg:sticky lg:top-32">
            {/* Avatar Card */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="w-full aspect-[4/5] rounded-[28px] flex flex-col items-center justify-center relative overflow-hidden group glass-card shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/[0.05]">
                {/* Ambient background glow & rings */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Concentric rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-white/[0.03] scale-[0.8] group-hover:scale-100 transition-transform duration-1000 ease-out"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border border-white/[0.05] scale-[0.8] group-hover:scale-100 transition-transform duration-700 ease-out delay-75"></div>
                
                {/* Inner glowing orb behind the avatar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[40px] group-hover:bg-accent/20 transition-colors duration-700"></div>

                {/* Continuously floating & clickable avatar */}
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    className="relative cursor-pointer select-none"
                    onClick={() => setRoleIndex((prev) => (prev + 1) % roles.length)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {/* Floating Avatar Container (Handles continuous Y bounce) */}
                    <motion.div 
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                      className="relative"
                    >
                      {/* Tap indicator */}
                      <motion.div 
                        className="absolute -top-4 -right-10 bg-gradient-to-r from-primary to-accent text-white text-[11px] font-mono font-bold px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)] z-20 border border-white/20 pointer-events-none"
                        variants={{
                          hover: { scale: 1.1, rotate: 5, y: -5 },
                          tap: { scale: 0.8, opacity: 0 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        👆 Tap Me!
                      </motion.div>

                      {/* Emoji Wrapper (Handles scale/rotate on hover/tap) */}
                      <motion.div 
                        variants={{
                          hover: { scale: 1.15, rotate: 5 },
                          tap: { scale: 0.85, rotate: -10 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        title="Click me!"
                      >
                        <span className="text-[9rem] block drop-shadow-2xl leading-none">
                          {roles[roleIndex].icon}
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom text overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark2 via-dark2/80 to-transparent flex flex-col items-center justify-end pb-8 z-10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.span 
                    key={`title-${roleIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`font-mono text-xs tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r ${roles[roleIndex].gradient} font-bold mb-1`}
                  >
                    {roles[roleIndex].title}
                  </motion.span>
                  <motion.span 
                    key={`sub-${roleIndex}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-[11px] text-text3/80 uppercase tracking-widest"
                  >
                    {roles[roleIndex].subtitle}
                  </motion.span>
                </div>
              </div>

              {/* Floating Badge 1 - ML Engineer */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 px-5 py-3.5 glass-card rounded-2xl flex items-center gap-3.5 shadow-2xl border border-white/10 backdrop-blur-xl group/badge cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-xl shadow-[0_0_15px_rgba(139,92,246,0.4)] relative z-10">🚀</div>
                <div className="leading-tight pr-1 relative z-10">
                  <strong className="block font-body text-sm font-bold text-text">ML Engineer</strong>
                  <span className="font-mono text-[9px] text-primary/80 uppercase tracking-wider">Specialized</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 - UI/UX Design */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -left-6 px-5 py-3.5 glass-card rounded-2xl flex items-center gap-3.5 shadow-2xl border border-white/10 backdrop-blur-xl group/badge cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#0284c7] flex items-center justify-center text-xl shadow-[0_0_15px_rgba(56,189,248,0.4)] relative z-10">✨</div>
                <div className="leading-tight pr-1 relative z-10">
                  <strong className="block font-body text-sm font-bold text-text">UI/UX Design</strong>
                  <span className="font-mono text-[9px] text-accent/80 uppercase tracking-wider">Creative</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0 w-full">
              <div className="p-5 rounded-2xl glass-card flex flex-col justify-center items-center text-center group hover:border-primary/20 transition-all">
                <span className="font-head text-3xl font-bold text-text group-hover:text-primary transition-colors">4+</span>
                <span className="font-mono text-[9px] text-text3 tracking-wider uppercase mt-1">Projects Built</span>
              </div>
              <div className="p-5 rounded-2xl glass-card flex flex-col justify-center items-center text-center group hover:border-accent/20 transition-all">
                <span className="font-head text-3xl font-bold text-text group-hover:text-accent transition-colors">3+</span>
                <span className="font-mono text-[9px] text-text3 tracking-wider uppercase mt-1">Years Coding</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div initial={{opacity:0,x:80,rotateY:-25}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true,margin:"-100px"}} transition={{duration:0.8,delay:0.2,type:"spring",bounce:0.3}} style={{transformPerspective:1000}} className="flex flex-col h-full">
            <div className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-4">
              <span className="block w-8 h-[1px] bg-gradient-to-r from-primary to-transparent"></span>
              Know Me Better
            </div>
            
            <h2 className="font-head text-5xl md:text-7xl font-black mb-6 relative group inline-block cursor-default">
              <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-primary2">ABOUT</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
            </h2>
            
            <div className="space-y-5">
              <p className="font-body text-text2 text-lg leading-relaxed font-light">
                I'm a passionate Software Engineer blending the logical world of <strong className="text-text font-semibold">Machine Learning</strong> with the creative realm of <strong className="text-text font-semibold">UI/UX Design</strong>.
              </p>
              <p className="font-body text-text3 text-base leading-relaxed border-l-2 border-primary/20 pl-5 italic">
                "I believe the best products not only function flawlessly under the hood but also captivate users from the very first click."
              </p>
              <p className="font-body text-text3 text-base leading-relaxed">
                Currently pursuing my B.Tech at <strong className="text-text2">United Institute of Technology, Prayagraj</strong>. When I'm not training models or pushing pixels, you can find me exploring cutting-edge tech trends.
              </p>
            </div>

            <div className="mt-8 mb-12">
              <motion.a href="./resume.pdf" target="_blank" rel="noopener noreferrer" whileHover={{scale:1.02}} whileTap={{scale:0.98}}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-body font-bold text-sm overflow-hidden transition-all text-white"
                style={{background:"linear-gradient(135deg, #8b5cf6, #6d28d9)"}}>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 transition-opacity"></span>
                <FaDownload className="text-sm relative z-10 group-hover:-translate-y-0.5 transition-transform"/> <span className="relative z-10">Download Resume</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-auto">
              {/* Tech Stack */}
              <div>
                <h3 className="flex items-center gap-2 font-head text-2xl font-extrabold mb-5 text-text">
                  <BrainCircuit size={20} className="text-primary"/> Tech Stack
                </h3>
                <div className="flex flex-col gap-2.5">
                  {skillCategories.map((cat, idx) => (
                    <motion.div key={idx} initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.1+idx*0.08}}
                      className="p-3.5 glass-card rounded-xl hover:border-white/10 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[9px] font-bold text-text3 tracking-widest uppercase w-14 shrink-0 leading-tight">{cat.title.split(' ')[0]}</span>
                        <div className="flex flex-wrap border-l border-white/5 pl-3.5 gap-2.5">
                          {cat.skills.map((s,si)=>(
                            <div key={si} className="group/skill relative">
                              <div className="text-text3 hover:text-primary transition-colors duration-300 cursor-pointer p-0.5">{s.icon}</div>
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark2 border border-white/10 rounded text-[9px] font-mono text-text opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">{s.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="flex items-center gap-2 font-head text-2xl font-extrabold mb-5 text-text">
                  <GraduationCap size={20} className="text-accent"/> Certifications
                </h3>
                <div className="flex flex-col gap-3">
                  {(showAllCerts ? certifications : certifications.slice(0, 2)).map((cert, idx) => (
                    <motion.div key={idx} initial={{opacity:0,x:10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.2+idx*0.08}}
                      className="p-4 glass-card rounded-xl group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-primary/5 transition-colors duration-500"></div>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0">{cert.icon}</div>
                        <div>
                          <h4 className="font-body text-sm font-bold text-text group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-mono text-[10px] text-text3 uppercase tracking-wide">{cert.issuer}</span>
                            <span className="w-1 h-1 rounded-full bg-white/10"></span>
                            <span className="font-mono text-[10px] text-text3">{cert.year}</span>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                  {certifications.length > 2 && (
                    <motion.div 
                      whileHover={{scale:1.02}} 
                      whileTap={{scale:0.98}}
                      onClick={() => setShowAllCerts(!showAllCerts)}
                      className="mt-1 p-3.5 rounded-xl border border-dashed border-white/5 flex items-center justify-center text-text3 hover:text-text hover:border-primary/20 transition-all cursor-pointer font-mono text-[10px] tracking-wider uppercase group bg-white/[0.01]"
                    >
                      <FaAward className="mr-2 text-text3 group-hover:text-primary transition-colors text-sm"/> 
                      {showAllCerts ? "View Less" : "View All"}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
