import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, ShieldBan, FileText, Gamepad2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TiltCard } from "./UIElements";

export const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(0);
  const projects = [
    { title:"AI Resume Analyzer", desc:"AI-powered resume screening and analysis tool — smart, fast & accurate.", icon:<Bot size={26} className="text-white"/>, language:"JavaScript", langColor:"bg-[#f1e05a]", github:"https://github.com/abdul-samad-001/AI-Resume-Analyzer-React", live:"https://ai-resume-analyzer-react-eta.vercel.app", iconStyle:"from-primary to-primary2", borderHover:"hover:border-primary/30" },
    { title:"SMS Spam Detection", desc:"ML model for detecting spam messages using advanced NLP techniques.", icon:<ShieldBan size={26} className="text-white"/>, language:"Jupyter Notebook", langColor:"bg-[#da5b0b]", github:"https://github.com/abdul-samad-001/SMS-SPAM-DETECTION", live:"https://sms-spam-detection-five.vercel.app/", iconStyle:"from-[#06b6d4] to-[#3b82f6]", borderHover:"hover:border-accent/30" },
    { title:"Yojana Darpan", desc:"AI Scheme Eligibility & Impact Predictor for government welfare schemes.", icon:<FileText size={26} className="text-white"/>, language:"Python", langColor:"bg-[#3572a5]", github:"https://github.com/abdul-samad-001/Yojana-Darpan", live:null, iconStyle:"from-[#ec4899] to-[#f97316]", borderHover:"hover:border-accent2/30" },
    { title:"Hangman Game", desc:"Interactive word guessing game with smooth animations and beautiful UI.", icon:<Gamepad2 size={26} className="text-white"/>, language:"JavaScript", langColor:"bg-[#f1e05a]", github:"https://github.com/abdul-samad-001/Hangman-Game", live:"https://hangman-game-topaz-two.vercel.app", iconStyle:"from-[#22c55e] to-[#06b6d4]", borderHover:"hover:border-emerald/30" },
  ];

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent2/15 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-accent2/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-20">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-5">
            <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></span>
            My Work
            <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></span>
          </span>
          <h2 className="font-head text-6xl md:text-7xl font-black mb-4 relative group inline-block cursor-default">
            <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-primary2">PROJECTS</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[420px] gap-3">
          {projects.map((project, index) => {
            const isActive = activeProjectId === index;
            return (
              <motion.div key={index} onClick={()=>setActiveProjectId(index)} layout
                initial={{opacity:0,rotateX:-20,scale:0.9,y:40}} whileInView={{opacity:1,rotateX:0,scale:1,y:0}} whileHover={{scale:isActive?1:1.03,zIndex:20}}
                viewport={{once:true,margin:"-50px"}}
                transition={{duration:0.8,delay:index*0.1,type:"spring",bounce:0.3,layout:{duration:0.5,ease:"easeInOut"}}}
                style={{flex:isActive?"8 1 0%":"1 1 0%",transformPerspective:1000}}
                className="group relative cursor-pointer transition-all duration-500 flex flex-col">
                <TiltCard tiltIntensity={isActive?10:20} zTranslate={isActive?25:12}
                  className={`w-full h-full overflow-hidden rounded-2xl border transition-all duration-500 ${isActive?'border-primary/30 shadow-[0_0_50px_rgba(139,92,246,0.15)]':'border-white/[0.04] bg-white/[0.01] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]'}`}>
                  
                  <div className="absolute inset-0 z-0 bg-dark2 pointer-events-none overflow-hidden rounded-2xl">
                    {project.live ? (
                      <iframe src={project.live} title={project.title}
                        className="absolute top-0 left-0 w-full h-[600px] object-cover origin-top block"
                        style={{border:"none",opacity:0.7,minWidth:isActive?"100%":"800px",filter:isActive?"none":"grayscale(60%) brightness(0.7)",transition:"all 0.5s ease"}}
                        sandbox="allow-scripts allow-same-origin" scrolling="no"/>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{background:"radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)",opacity:isActive?1:0.5}}>
                        <div className="scale-[8] opacity-[0.06]">{project.icon}</div>
                      </div>
                    )}
                    <div className={`absolute inset-0 ${isActive?'bg-gradient-to-t from-[#06060a] via-[#06060a]/80 to-[#06060a]/10':'bg-gradient-to-t from-[#06060a]/90 via-[#06060a]/60 to-[#06060a]/30'}`}/>
                  </div>

                  <div className="w-full h-full flex flex-col relative z-10">
                    <div className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 flex items-center justify-center p-6 transition-all duration-500 ${isActive?'opacity-0 scale-50 pointer-events-none':'opacity-100 scale-100 group-hover:scale-110'}`}>
                      <h3 className="font-head text-lg font-bold tracking-widest uppercase text-text/50 group-hover:text-primary/80 transition-colors duration-300 drop-shadow-md whitespace-nowrap">{project.title}</h3>
                    </div>

                    {isActive && (
                      <motion.div initial={{opacity:0,x:-30,rotateY:10}} animate={{opacity:1,x:0,rotateY:0}} exit={{opacity:0,x:30}}
                        transition={{delay:0.3,duration:0.6,type:"spring"}}
                        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 lg:p-8 lg:w-[90%] xl:w-[80%]"
                        style={{transformStyle:'preserve-3d'}}>
                        <div style={{transform:'translateZ(50px)'}} className="pointer-events-none">
                          <div className="flex items-center gap-3.5 mb-3">
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.iconStyle} shadow-lg shrink-0`}>{project.icon}</div>
                            <h3 className="font-head text-2xl lg:text-3xl font-bold text-text drop-shadow-sm">{project.title}</h3>
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-lg font-mono text-[10px] text-text2 mb-3 w-fit">
                            <span className={`w-2 h-2 rounded-full ${project.langColor}`}></span>{project.language}
                          </div>
                          <p className="font-body text-text3 text-sm leading-relaxed mb-4 drop-shadow-sm line-clamp-2 lg:line-clamp-none">{project.desc}</p>
                          <div className="flex flex-wrap gap-3 mt-auto pointer-events-auto">
                            <a href={project.github} target="_blank" rel="noreferrer" className="py-2.5 px-5 glass-card hover:bg-white/5 rounded-xl flex items-center gap-2 font-body font-bold text-sm text-text transition-all duration-300 hover:scale-105">
                              <FaGithub size={16}/> Source Code</a>
                            {project.live&&<a href={project.live} target="_blank" rel="noreferrer" className="py-2.5 px-5 text-white rounded-xl flex items-center gap-2 font-body font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]" style={{background:"linear-gradient(135deg, #8b5cf6, #6d28d9)"}}>
                              <ExternalLink size={16}/> Live Demo</a>}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
