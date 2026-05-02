import { motion } from "framer-motion";
import { TiltCard } from "./UIElements";

export const Experience = () => {
  const experiences = [
    {
      role: "Generative AI with NLP",
      company: "United Global Infoservice Pvt. Ltd.",
      date: "August 2025",
      points: [
        "Learned NLP fundamentals including tokenization, stemming, stopword removal and TF-IDF",
        "Applied concepts through a Machine Learning-based SMS Spam Detection approach",
        "Gained hands-on experience with real-world NLP applications and text processing pipelines"
      ]
    },
    {
      role: "Python with Data Science",
      company: "United Group of Institutions",
      date: "August 2024",
      points: [
        "Gained hands-on experience in Python programming, Tkinter GUI development and data handling",
        "Developed GUI-based applications and practiced problem-solving using Python",
        "Built foundational skills in data manipulation and visualization techniques"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-20">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-5">
            <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></span>
            My Journey
            <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></span>
          </span>
          <h2 className="font-head text-6xl md:text-7xl font-black mb-4 relative group inline-block cursor-default">
            <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-primary2">EXPERIENCE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
          </h2>
        </motion.div>

        <div className="relative pl-[26px] md:pl-0">
          <div className="absolute left-[26px] md:left-[26px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-accent/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{opacity:0,x:80,rotateY:-20}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true,margin:"-50px"}}
                transition={{duration:0.8,delay:index*0.1,type:"spring",bounce:0.3}} style={{transformPerspective:1000}} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                <div className="absolute -left-[26px] md:relative md:left-0 flex-shrink-0 w-[54px] flex justify-center pt-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-[3px] border-dark shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] group-hover:scale-125 transition-all duration-400 z-10"></div>
                </div>

                <TiltCard tiltIntensity={6} zTranslate={10} className="flex-1 w-full">
                  <div className="w-full h-full glass-card rounded-2xl p-7 relative overflow-hidden transition-all duration-500 hover:translate-x-2 glass-card-hover">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 opacity-50"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
                      <div>
                        <h3 className="font-head text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="font-body text-[14px] text-primary/80 font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3.5 py-1.5 bg-primary/8 border border-primary/15 rounded-lg font-mono text-[11px] text-primary/80 whitespace-nowrap group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                        {exp.date}
                      </span>
                    </div>

                    <ul className="space-y-3.5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="relative pl-5 font-body text-[13px] text-text3 group/li hover:text-text2 hover:pl-7 transition-all duration-300 border-b border-white/[0.03] pb-3.5 last:border-b-0 last:pb-0">
                          <div className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent group-hover/li:shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover/li:scale-150 transition-all duration-300"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
