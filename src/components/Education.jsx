import { motion } from "framer-motion";
import { GraduationCap, School, Award, MapPin } from "lucide-react";
import { TiltCard } from "./UIElements";

export const Education = () => {
  const educationData = [
    { year:"2023 — 2027", degree:"B.Tech — Computer Science & Engineering", school:"United Institute of Technology", location:"Prayagraj, India", progress:"w-[75%]", icon:<GraduationCap size={22}/>, tags:["AI & ML Specialization", "CGPA: 7.84"] },
    { year:"2023", degree:"Senior Secondary", school:"Allahabad Public School & College", location:"Prayagraj, India", progress:"w-[100%]", icon:<School size={20}/>, tags:["PCM","Computer Science"] },
    { year:"2021", degree:"Secondary", school:"Allahabad Public School & College", location:"Prayagraj, India", progress:"w-[100%]", icon:<Award size={20}/>, tags:["Science","Mathematics"] },
  ];

  return (
    <section id="education" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-24">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-5">
            <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></span>
            Academic Background
            <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></span>
          </span>
          <h2 className="font-head text-6xl md:text-7xl font-black mb-4 relative group inline-block cursor-default">
            <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-primary2">EDUCATION</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
          </h2>
        </motion.div>

        <div className="relative py-8">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-primary/40 via-accent/30 to-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]"></div>
          <div className="md:hidden absolute left-[26px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-accent/30 to-primary/20"></div>

          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 !== 0;
              return (
                <motion.div key={index} initial={{opacity:0,x:isEven?80:-80,rotateY:isEven?-20:20}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true,margin:"-100px"}}
                  transition={{duration:0.8,type:"spring",bounce:0.3}} style={{transformPerspective:1000}}
                  className={`relative flex flex-col md:flex-row items-start md:items-center group ${isEven?'md:flex-row-reverse':''}`}>
                  
                  <div className={`w-full md:w-[calc(50%-60px)] ${isEven?'md:ml-[60px]':'md:mr-[60px]'} pl-[68px] md:pl-0`}>
                    <TiltCard tiltIntensity={6} zTranslate={10} className="w-full h-full">
                      <div className="glass-card rounded-2xl p-7 relative transition-all duration-500 hover:-translate-y-2 glass-card-hover">
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 transition-colors duration-400 ${isEven?'-left-2.5':'-right-2.5'}`}
                          style={{background:"rgba(14,14,22,0.6)",backdropFilter:"blur(20px)",border:"1px solid rgba(139,92,246,0.2)"}}></div>

                        <div className="inline-block px-3.5 py-1.5 bg-primary/8 border border-primary/15 rounded-lg font-mono text-[10px] text-primary/80 mb-4 tracking-wider">{edu.year}</div>
                        <h3 className="font-head text-xl font-extrabold mb-1.5 tracking-tight">{edu.degree}</h3>
                        <p className="font-body text-[14px] font-semibold text-accent/80 mb-1">{edu.school}</p>
                        <p className="flex items-center gap-1.5 font-mono text-[11px] text-text3 tracking-wider mb-4"><MapPin size={12} className="text-primary/60"/> {edu.location}</p>

                        <div className="w-full h-[2px] bg-white/[0.03] rounded-full overflow-hidden mt-4 mb-4">
                          <motion.div className={`h-full bg-gradient-to-r from-primary to-accent rounded-full ${edu.progress}`} initial={{width:0}} whileInView={{width:"100%"}} viewport={{once:true}} transition={{duration:1.5,delay:0.2}}/>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.tags.map(tag=>(<span key={tag} className="px-2.5 py-1 bg-accent/8 border border-accent/15 rounded-lg font-mono text-[10px] text-accent/70">{tag}</span>))}
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  <div className="absolute left-[26px] md:left-1/2 -top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-[48px] h-[48px] rounded-full bg-gradient-to-br from-primary to-accent border-4 border-dark flex items-center justify-center text-white shadow-[0_8px_25px_rgba(139,92,246,0.35)] z-10 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_12px_35px_rgba(139,92,246,0.5)]">
                    {edu.icon}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
