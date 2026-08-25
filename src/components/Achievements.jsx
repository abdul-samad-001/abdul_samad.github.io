import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SiGoogle } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { Trophy, ExternalLink, Brain, Code, Medal, Flame, Target, Zap } from "lucide-react";
import { TiltCard } from "./UIElements";

export const Achievements = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const data = [
    { id:1, title:"UHack 4.0 — Finalist 🏆", platform:"United Group of Institutions", date:"2026", icon:<Trophy size={28} className="text-gold"/>, color:"from-gold", desc:"Participated in UHack 4.0 Hackathon and advanced to the Finale Round, competing against top teams with an innovative tech solution.", tags:["Hackathon","Finalist","Innovation"], highlight:true },
    { id:2, title:"HackDiwas 3.0 — Finalist 🔥", platform:"HackDiwas", date:"2026", icon:<Flame size={28} className="text-orange-500"/>, color:"from-orange-500", desc:"Competed in HackDiwas 3.0 and reached the Finale Round, showcasing problem-solving skills and building impactful projects under pressure.", tags:["Hackathon","Finalist"], highlight:true },
    { id:3, title:"Google Developer Premium Tier", platform:"Google Developers", date:"Apr 2026", icon:<SiGoogle size={28} className="text-blue-500"/>, color:"from-blue-500", desc:"Achieved premium tier status demonstrating advanced technical contributions and consistent ecosystem engagement.", tags:["Developer Profile","Premium"] },
    { id:4, title:"GDG Solution Challenge 2026", platform:"GDG on Campus", date:"Apr 2026", icon:<Target size={28} className="text-emerald"/>, color:"from-emerald", desc:"Participated in the Global Solution Challenge focusing on leveraging AI & ML to solve UN's 17 Sustainable Development Goals.", tags:["Hackathon","Build with AI"] },
    { id:5, title:"Google Cloud Innovator", platform:"Google Cloud", date:"2026", icon:<Code size={28} className="text-accent"/>, color:"from-accent", desc:"Recognized as a Cloud Innovator for leveraging modern cloud infrastructure and demonstrating deep technical proficiency.", tags:["Cloud","Community"] },
    { id:6, title:"Gen AI Academy 2.0 & APAC", platform:"Hack2Skill", date:"2025-2026", icon:<Brain size={28} className="text-primary2"/>, color:"from-primary2", desc:"Successfully graduated from the rigorous Gen AI Academy (India & APAC Editions), mastering generative modeling frameworks.", tags:["AI","Certification"] },
    { id:7, title:"Hack2Skill AI Bootcamp", platform:"Hack2Skill", date:"2025", icon:<Zap size={28} className="text-accent2"/>, color:"from-accent2", desc:"Completed sequential bootcamps solving advanced engineering problems with practical ML applications.", tags:["Bootcamp","ML"] },
    { id:8, title:"Oracle eCertificate", platform:"Oracle", date:"2024", icon:<GrOracle size={28} className="text-red-500"/>, color:"from-red-500", desc:"Professional certification validating core operational and programming proficiencies on Oracle infrastructure.", link:`${import.meta.env.BASE_URL}oracle_cert.pdf`, tags:["Cloud","Database"] },
  ];

  return (
    <section id="achievements" className="py-32 relative z-10 overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-20">
          <span className="inline-flex items-center justify-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-5">
            <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></span>
            Milestones & Rewards
            <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></span>
          </span>
          <h2 className="font-head text-5xl md:text-7xl font-black mb-6 relative group inline-block cursor-default">
            <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-primary2">ACHIEVEMENTS</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
          </h2>
          <p className="font-body text-text3 text-base max-w-xl mx-auto">A curated timeline of hackathon wins, certifications, and developer milestones.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 overflow-hidden hidden md:block">
            <motion.div style={{scaleY,originY:0}} className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-accent2"/>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {data.map((item, i) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${i%2===0?"md:flex-row-reverse":""}`}>
                <motion.div initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{type:"spring",delay:0.2}}
                  className={`absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full z-20 items-center justify-center hidden md:flex ${item.highlight?"bg-gradient-to-br from-gold to-orange-500 shadow-[0_0_25px_rgba(251,191,36,0.4)]":"bg-dark2 border-2 border-white/10"}`}>
                  {item.highlight?<Trophy size={16} className="text-dark"/>:<div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${item.color} to-primary`}/>}
                </motion.div>

                <motion.div initial={{opacity:0,x:i%2===0?-30:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  className={`w-full md:w-1/2 hidden md:flex flex-col ${i%2===0?"items-start pl-12":"items-end pr-12"} cursor-default`}>
                  <div className="font-head text-xl font-bold text-text mb-1">{item.date}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-text3 uppercase">{item.platform}</div>
                </motion.div>

                <motion.div initial={{opacity:0,x:i%2===0?80:-80,rotateY:i%2===0?-20:20}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true,margin:"-80px"}}
                  transition={{duration:0.8,type:"spring",bounce:0.3,delay:0.1}} style={{transformPerspective:1000}} className="w-full md:w-1/2 z-10 relative">
                  <TiltCard tiltIntensity={7} zTranslate={18} className={`relative group w-full ${i%2===0?"md:mr-8":"md:ml-8"}`}>
                    <div className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 glass-card glass-card-hover ${item.highlight?"border-gold/20 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(251,191,36,0.08)]":""}`}>
                      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${item.color} to-transparent opacity-40`}/>
                      {item.highlight && <div className="absolute top-4 right-4 px-2.5 py-1 bg-gold/10 border border-gold/20 rounded-full"><span className="font-mono text-[9px] font-bold text-gold uppercase tracking-wider">Finalist</span></div>}
                      <div className="flex justify-between items-start mb-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${item.highlight?"bg-gold/10 border border-gold/20":"bg-white/5 border border-white/5"}`}>{item.icon}</div>
                        <div className="md:hidden text-right"><div className="font-head font-bold text-base text-text">{item.date}</div><div className="font-mono text-[9px] text-text3 tracking-wider">{item.platform}</div></div>
                      </div>
                      <h3 className="font-head text-xl md:text-2xl font-extrabold text-text leading-tight mb-3">{item.title}</h3>
                      <p className="font-body text-text3 text-[13px] leading-relaxed mb-5">{item.desc}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-auto">
                        {item.tags.map(t=><span key={t} className="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-lg font-mono text-[9px] uppercase tracking-wider text-text3">{t}</span>)}
                        {item.link&&<a href={item.link} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-primary hover:text-accent transition-colors">VIEW <ExternalLink size={12}/></a>}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
