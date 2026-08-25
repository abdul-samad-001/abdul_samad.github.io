import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiGoogle,
  SiCanva,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiFlask,
  SiFastapi,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiOpenai,
  SiHuggingface,
  SiPostman,
  SiHtml5,
  SiCplusplus,
  SiApachecouchdb,
  SiRender,
  SiRailway,
  SiVite,
  SiRedux,
  SiFramer,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiDjango,
  SiGraphql,
  SiSpringboot,
  SiNginx,
  SiGithubactions,
  SiJest,
  SiAxios
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrOracle } from "react-icons/gr";
import { FaJava, FaDownload, FaAward, FaTrophy, FaCss3Alt } from "react-icons/fa";
import { BrainCircuit, GraduationCap, Cloud, Server, Database, Layout, Cpu, Wrench, Sparkles, Wand2, Palette, Layers, Binary, ShieldCheck } from "lucide-react";

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
    {
      title: "LANGUAGES",
      icon: <span className="text-primary font-bold">{"</>"}</span>,
      skills: [
        { icon: <FaJava size={24} />, name: "Java" },
        { icon: <SiPython size={24} />, name: "Python" },
        { icon: <span className="font-black text-[20px] tracking-tighter italic text-yellow-400">JS</span>, name: "JavaScript" },
        { icon: <SiCplusplus size={24} className="text-blue-400" />, name: "C++" },
        { icon: <SiHtml5 size={24} className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt size={24} className="text-blue-500" />, name: "CSS3" }
      ]
    },
    {
      title: "FRONTEND",
      icon: <Layout size={18} className="text-accent" />,
      skills: [
        { icon: <SiReact size={24} className="text-cyan-400" />, name: "React JS" },
        { icon: <SiVite size={24} className="text-purple-400" />, name: "Vite" },
        { icon: <SiTailwindcss size={24} className="text-teal-400" />, name: "Tailwind CSS" },
        { icon: <SiRedux size={24} className="text-purple-500" />, name: "Redux Toolkit" },
        { icon: <SiFramer size={24} className="text-pink-500" />, name: "Framer Motion" },
        { icon: <SiAxios size={24} className="text-indigo-400" />, name: "Axios (HTTP)" }
      ]
    },
    {
      title: "BACKEND",
      icon: <Server size={18} className="text-emerald-400" />,
      skills: [
        { icon: <SiNodedotjs size={24} className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress size={24} className="text-text" />, name: "Express.js" },
        { icon: <SiDjango size={24} className="text-emerald-600" />, name: "Django" },
        { icon: <SiFlask size={24} className="text-text2" />, name: "Flask" },
        { icon: <SiFastapi size={24} className="text-teal-300" />, name: "FastAPI" },
        { icon: <SiSpringboot size={24} className="text-green-400" />, name: "Spring Boot" },
        { icon: <SiGraphql size={24} className="text-pink-400" />, name: "GraphQL" }
      ]
    },
    {
      title: "DATABASES",
      icon: <Database size={18} className="text-pink-400" />,
      skills: [
        { icon: <SiPostgresql size={24} className="text-blue-400" />, name: "PostgreSQL" },
        { icon: <SiMongodb size={24} className="text-green-500" />, name: "MongoDB" },
        { icon: <SiMysql size={24} className="text-blue-500" />, name: "MySQL" },
        { icon: <SiRedis size={24} className="text-red-500" />, name: "Redis" },
        { icon: <SiFirebase size={24} className="text-amber-500" />, name: "Firebase Realtime DB" },
        { icon: <SiApachecouchdb size={24} className="text-red-400" />, name: "IBM Cloudant (NoSQL)" }
      ]
    },
    {
      title: "AI & VECTOR SEARCH",
      icon: <Cpu size={18} className="text-purple-400" />,
      skills: [
        { icon: <Binary size={24} className="text-cyan-300" />, name: "FAISS (Vector Search)" },
        { icon: <SiTensorflow size={24} className="text-orange-400" />, name: "TensorFlow" },
        { icon: <SiPytorch size={24} className="text-red-500" />, name: "PyTorch" },
        { icon: <SiOpencv size={24} className="text-green-400" />, name: "OpenCV" },
        { icon: <SiScikitlearn size={24} className="text-amber-500" />, name: "Scikit-Learn" },
        { icon: <SiOpenai size={24} className="text-emerald-300" />, name: "OpenAI API / LLMs" },
        { icon: <SiHuggingface size={24} className="text-yellow-400" />, name: "HuggingFace Spaces" }
      ]
    },
    {
      title: "DESIGNING & AI UI",
      icon: <SiFigma size={18} className="text-purple-400" />,
      skills: [
        { icon: <Wand2 size={24} className="text-indigo-400" />, name: "Stitch AI (Google)" },
        { icon: <SiFigma size={24} className="text-purple-400" />, name: "Figma" },
        { icon: <SiCanva size={24} className="text-cyan-400" />, name: "Canva" },
        { icon: <Palette size={24} className="text-pink-400" />, name: "UI Prototyping" },
        { icon: <Layers size={24} className="text-blue-400" />, name: "Design Systems" }
      ]
    },
    {
      title: "CLOUD & DEVOPS",
      icon: <Cloud size={18} className="text-sky-400" />,
      skills: [
        { icon: <SiDocker size={24} className="text-blue-400" />, name: "Docker" },
        { icon: <SiNginx size={24} className="text-green-500" />, name: "Nginx" },
        { icon: <SiGithubactions size={24} className="text-blue-400" />, name: "GitHub Actions CI/CD" },
        { icon: <SiVercel size={24} className="text-text" />, name: "Vercel" },
        { icon: <SiRender size={24} className="text-cyan-300" />, name: "Render" },
        { icon: <SiRailway size={24} className="text-purple-300" />, name: "Railway" },
        { icon: <SiNetlify size={24} className="text-teal-400" />, name: "Netlify" },
        { icon: <Cloud size={24} className="text-sky-400" />, name: "IBM Cloud" }
      ]
    },
    {
      title: "DEV & TESTING",
      icon: <Wrench size={18} className="text-gold" />,
      skills: [
        { icon: <SiGit size={24} className="text-orange-500" />, name: "Git" },
        { icon: <SiGithub size={24} className="text-text" />, name: "GitHub" },
        { icon: <SiPostman size={24} className="text-orange-400" />, name: "Postman" },
        { icon: <SiJest size={24} className="text-red-400" />, name: "Jest (Testing)" },
        { icon: <VscVscode size={24} className="text-blue-500" />, name: "VS Code" }
      ]
    }
  ];

  const certifications = [
    { title: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", icon: <GrOracle size={18} className="text-red-500" />, year: "2025", link: `${import.meta.env.BASE_URL}oracle_cert.pdf` },
    { title: "AWS Solutions Architecture Simulation", issuer: "AWS", icon: <FaTrophy size={18} className="text-amber-400" />, year: "2025", link: "#" },
    { title: "Google Cloud Skills Boost - GCP", issuer: "Google", icon: <SiGoogle size={18} className="text-[#4285F4]" />, year: "2024", link: "#" },
    { title: "Generative AI using NLP", issuer: "United Global Infoservice", icon: <SiGoogle size={18} className="text-accent" />, year: "2025", link: `${import.meta.env.BASE_URL}gen_ai_cert.jpg` },
    { title: "Python with Data Science", issuer: "United Group of Institutions", icon: <SiPython size={18} className="text-yellow-400" />, year: "2024", link: "#" },
    { title: "HackDiwas 3.0 (Top 40 of 200+ teams)", issuer: "Hackathon", icon: <FaTrophy size={18} className="text-gold" />, year: "2026", link: "#" },
    { title: "UHack 4.0 (Top 65 of 250+ teams)", issuer: "Hackathon", icon: <FaTrophy size={18} className="text-gold" />, year: "2026", link: `${import.meta.env.BASE_URL}uhack_4.jpg` }
  ];

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start mb-20">
          {/* Left Column - Avatar & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: 25 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            style={{ transformPerspective: 1000 }}
            className="flex flex-col gap-10 lg:sticky lg:top-32"
          >
            {/* Avatar Card */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="w-full aspect-[4/5] rounded-[28px] flex flex-col items-center justify-center relative overflow-hidden group glass-card shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/[0.05]">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-white/[0.03] scale-[0.8] group-hover:scale-100 transition-transform duration-1000 ease-out"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border border-white/[0.05] scale-[0.8] group-hover:scale-100 transition-transform duration-700 ease-out delay-75"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[40px] group-hover:bg-accent/20 transition-colors duration-700"></div>

                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    className="relative cursor-pointer select-none"
                    onClick={() => setRoleIndex((prev) => (prev + 1) % roles.length)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                      className="relative"
                    >
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

              {/* Badges */}
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
                <span className="font-head text-3xl font-bold text-text group-hover:text-primary transition-colors">6+</span>
                <span className="font-mono text-[9px] text-text3 tracking-wider uppercase mt-1">Projects Built</span>
              </div>
              <div className="p-5 rounded-2xl glass-card flex flex-col justify-center items-center text-center group hover:border-accent/20 transition-all">
                <span className="font-head text-3xl font-bold text-text group-hover:text-accent transition-colors">3+</span>
                <span className="font-mono text-[9px] text-text3 tracking-wider uppercase mt-1">Years Coding</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Bio & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -25 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
            style={{ transformPerspective: 1000 }}
            className="flex flex-col h-full"
          >
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
                I'm a passionate Software Engineer blending the logical world of <strong className="text-text font-semibold">Machine Learning & Cloud Systems</strong> with the creative realm of <strong className="text-text font-semibold">UI/UX Design</strong>.
              </p>
              <p className="font-body text-text3 text-base leading-relaxed border-l-2 border-primary/20 pl-5 italic">
                "I believe the best products not only function flawlessly under the hood but also captivate users from the very first click."
              </p>
              <p className="font-body text-text3 text-base leading-relaxed">
                Currently pursuing my B.Tech at <strong className="text-text2">United Institute of Technology, Prayagraj</strong>. Experienced in building full-stack web applications, ML pipelines, and cloud deployments.
              </p>
            </div>

            <div className="mt-8 mb-10">
              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-body font-bold text-sm overflow-hidden transition-all text-white"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 transition-opacity"></span>
                <FaDownload className="text-sm relative z-10 group-hover:-translate-y-0.5 transition-transform" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="flex items-center gap-2 font-head text-2xl font-extrabold mb-5 text-text">
                <GraduationCap size={20} className="text-accent" /> Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(showAllCerts ? certifications : certifications.slice(0, 2)).map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className="p-4 glass-card rounded-xl group relative overflow-hidden"
                  >
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
              </div>
              {certifications.length > 2 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="mt-3 p-3 rounded-xl border border-dashed border-white/5 flex items-center justify-center text-text3 hover:text-text hover:border-primary/20 transition-all cursor-pointer font-mono text-[10px] tracking-wider uppercase group bg-white/[0.01]"
                >
                  <FaAward className="mr-2 text-text3 group-hover:text-primary transition-colors text-sm" />
                  {showAllCerts ? "View Less" : "View All"}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* FULL WIDTH EXPANDED TECH STACK SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.25em] font-semibold block mb-2">
              Capabilities & Ecosystem
            </span>
            <h3 className="flex items-center justify-center gap-3 font-head text-4xl sm:text-5xl font-black text-white">
              <BrainCircuit size={32} className="text-primary" />
              Tech Stack
            </h3>
          </div>

          {/* Grid of Tech Stack Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 glass-card rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/5">
                    {cat.icon}
                    <span className="font-mono text-xs font-bold text-text tracking-widest uppercase">
                      {cat.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((s, si) => (
                      <div key={si} className="group/skill relative">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 text-text3 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center">
                          {s.icon}
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-dark2 border border-white/15 rounded-md text-[10px] font-mono text-white opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30 shadow-xl">
                          {s.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
