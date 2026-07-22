import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ShieldBan, FileText, Gamepad2, X, Rocket, Code2, Play, MapPin, Cloud, Trophy, Tv } from "lucide-react";

import aiResumeImg from "../assets/projects/ai_resume.png";
import smsSpamImg from "../assets/projects/sms_spam.png";
import yojanaDarpanImg from "../assets/projects/yojana_darpan.png";
import hangmanImg from "../assets/projects/hangman.png";
import nagarNazarImg from "../assets/projects/nagarnazar.png";
import nagarNazarModalImg from "../assets/projects/nagarnazar_modal.png";
import cloudantImg from "../assets/projects/cloudant.png";
import cloudantModalImg from "../assets/projects/cloudant_modal.png";
import candidateRankingImg from "../assets/projects/candidate_ranking.png";
import netflixCloneImg from "../assets/projects/netflix_clone.png";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const projects = [
    // 1) Cloudant Task Manager (Featured Card)
    {
      id: "cloudant",
      title: "Cloudant Task",
      titleHighlight: "Manager",
      subtitle: "Task Synchronization",
      category: "CLOUD & PRODUCTIVITY",
      desc: "Distributed task management engine backed by IBM Cloudant NoSQL database for real-time multi-user synchronization.",
      fullDesc: "An enterprise-grade cloud task management application leveraging IBM Cloudant NoSQL DB for real-time document synchronization, multi-user task workflows, offline data persistence, and security access controls.",
      icon: <Cloud size={22} className="text-sky-300" />,
      iconBoxBg: "bg-sky-500/20 border-sky-500/30 text-sky-300",
      image: cloudantImg,
      modalImage: cloudantModalImg,
      layoutType: "featured",
      cardTech: [
        { name: "Node.js", dotColor: "bg-green-400" },
        { name: "IBM Cloudant", dotColor: "bg-sky-400" }
      ],
      engineeringStack: ["Node.js", "IBM Cloudant", "CouchDB", "Express.js", "JavaScript", "REST API", "HTML5/CSS3"],
      github: "https://github.com/abdul-samad-001/cloudant-task-manager",
      live: "https://cloudant-task-manager.onrender.com/"
    },
    // 2) NagarNazar (Featured Card)
    {
      id: "nagarnazar",
      title: "Nagar",
      titleHighlight: "Nazar",
      subtitle: "Urban Infrastructure",
      category: "CIVIC TECH & SMART CITY",
      desc: "Civic issue reporting & real-time monitoring portal for urban municipal management and risk analytics.",
      fullDesc: "NagarNazar is an intelligent civic tech platform enabling citizens to report local municipal issues (road damage, sanitation, public lighting) with geo-tagging, status tracking, and automated department dispatch.",
      icon: <MapPin size={22} className="text-teal-300" />,
      iconBoxBg: "bg-teal-500/20 border-teal-500/30 text-teal-300",
      image: nagarNazarImg,
      modalImage: nagarNazarModalImg,
      layoutType: "featured",
      cardTech: [
        { name: "React", dotColor: "bg-cyan-400" },
        { name: "Express", dotColor: "bg-teal-400" }
      ],
      engineeringStack: ["React.js", "Node.js", "Express.js", "MongoDB", "GeoJSON", "Tailwind CSS", "REST API"],
      github: "https://github.com/abdul-samad-001/NagarNazar",
      live: "https://nagar-nazar.vercel.app/"
    },
    // 3) India Runs Candidate Ranking
    {
      id: "candidate-ranking",
      title: "India Runs Candidate Ranking",
      subtitle: "Candidate Analytics",
      category: "DATA ANALYTICS & RECRUITMENT",
      desc: "Automated candidate evaluation and algorithmic ranking system for talent pipelines.",
      fullDesc: "An algorithmic candidate ranking and talent evaluation platform designed to score applicant profiles, analyze skill-weighted benchmarks, and rank candidates efficiently for large-scale recruitment drives.",
      icon: <Trophy size={22} className="text-amber-300" />,
      iconBoxBg: "bg-amber-500/20 border-amber-500/30 text-amber-300",
      image: candidateRankingImg,
      layoutType: "standard",
      cardTech: ["PYTHON", "DATA SCIENCE", "PANDAS"],
      engineeringStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Flask", "React.js", "Data Visualization"],
      github: "https://github.com/abdul-samad-001/india-runs-candidate-ranking",
      live: "https://huggingface.co/spaces/Noman-Ahmad25/india-runs-candidate-ranking"
    },
    // 4) AI Resume Analyzer
    {
      id: "ai-resume",
      title: "AI Resume Analyzer",
      subtitle: "The Intelligent Curator",
      category: "ELITE CAREER ASSISTANT",
      desc: "AI-powered resume screening and analysis tool. Optimizes professional narratives with precision.",
      fullDesc: "An advanced AI-powered platform designed to disrupt the recruitment landscape. Utilizing custom-trained Large Language Models, it provides deep semantic analysis of professional profiles, identifying skill gaps, quantifying impact statements, and predicting role suitability with unprecedented accuracy. Built to bridge the gap between human potential and algorithmic screening.",
      icon: <Bot size={22} className="text-purple-300" />,
      iconBoxBg: "bg-purple-600/20 border-purple-500/30 text-purple-300",
      image: aiResumeImg,
      layoutType: "standard",
      cardTech: ["JAVASCRIPT", "AI/ML", "OPENAI"],
      engineeringStack: ["JavaScript", "AI/ML", "Tailwind CSS", "Python", "OpenAI API", "React.js", "Node.js"],
      github: "https://github.com/abdul-samad-001/AI-Resume-Analyzer-React",
      live: "https://ai-resume-analyzer-react-eta.vercel.app"
    },
    // 5) SMS Spam Detection
    {
      id: "sms-spam",
      title: "SMS Spam Detection",
      subtitle: "Threat Intelligence",
      category: "CYBERSECURITY & NLP",
      desc: "Advanced NLP model to filter communication channels with 99% accuracy.",
      fullDesc: "A high-performance machine learning model and interactive web application designed for real-time text message classification. Built using TF-IDF vectorization and Naive Bayes / Scikit-Learn algorithms, it screens suspicious SMS content with instant security scores and actionable insights.",
      icon: <ShieldBan size={22} className="text-cyan-300" />,
      iconBoxBg: "bg-cyan-500/20 border-cyan-500/30 text-cyan-300",
      image: smsSpamImg,
      layoutType: "standard",
      cardTech: ["#Python", "#NLP", "#ScikitLearn"],
      engineeringStack: ["Python", "Scikit-Learn", "NLP", "Pandas", "Flask", "Streamlit", "Jupyter Notebook"],
      github: "https://github.com/abdul-samad-001/SMS-SPAM-DETECTION",
      live: "https://sms-spam-detection-five.vercel.app/"
    },
    // 6) Hangman Game
    {
      id: "hangman",
      title: "Hangman Game",
      subtitle: "Hangman Protocol",
      category: "GAMING & INTERACTIVE UI",
      desc: "A classic word puzzle re-imagined with a high-fidelity aesthetic and responsive keyboard controls.",
      fullDesc: "A sleek, sci-fi cyber-themed word guessing web application featuring custom canvas animations, retro sound effects, adaptive difficulty modes, and responsive keyboard controls. Re-engineered with modern web standards and smooth state management.",
      icon: <Gamepad2 size={22} className="text-emerald-300" />,
      iconBoxBg: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
      image: hangmanImg,
      layoutType: "standard",
      cardTech: ["JAVASCRIPT", "HTML5 CANVAS", "VITE"],
      engineeringStack: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3 Animations", "Vite", "Web Audio API"],
      github: "https://github.com/abdul-samad-001/Hangman-Game",
      live: "https://hangman-game-topaz-two.vercel.app"
    },
    // 7) Netflix Clone
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      subtitle: "Entertainment Platform",
      category: "MEDIA STREAMING & UI",
      desc: "Feature-rich OTT media streaming web app with live movie previews and TMDB API integration.",
      fullDesc: "A high-fidelity Netflix web application replica featuring dynamic movie trailers, categorized carousel feeds, trailer popups, TMDB API movie catalog integration, and sleek dark UI styling.",
      icon: <Tv size={22} className="text-rose-300" />,
      iconBoxBg: "bg-rose-500/20 border-rose-500/30 text-rose-300",
      image: netflixCloneImg,
      layoutType: "standard",
      cardTech: ["REACT", "TMDB API", "TAILWIND"],
      engineeringStack: ["React.js", "TMDB API", "Tailwind CSS", "Axios", "Framer Motion", "Firebase Auth"],
      github: "https://github.com/abdul-samad-001/netflix-clone",
      live: null
    },
    // 8) Yojana Darpan
    {
      id: "yojana-darpan",
      title: "Yojana Darpan",
      subtitle: "Welfare Portal",
      category: "GOVTECH & CIVIC TECH",
      desc: "A comprehensive portal for government scheme accessibility and management.",
      fullDesc: "An AI-powered citizen service platform designed to demystify government welfare schemes. Analyzes user demographics, income eligibility, and family profiles to recommend active government schemes, streamline application tracking, and maximize citizen welfare accessibility.",
      icon: <FileText size={22} className="text-pink-300" />,
      iconBoxBg: "bg-pink-500/20 border-pink-500/30 text-pink-300",
      image: yojanaDarpanImg,
      layoutType: "standard",
      cardTech: ["REACT", "MONGODB", "EXPRESS"],
      engineeringStack: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "REST API"],
      github: "https://github.com/abdul-samad-001/Yojana-Darpan",
      live: null
    }
  ];

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent2/15 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-accent2/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-4">
            <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></span>
            My Work
            <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></span>
          </span>
          <h2 className="font-head text-5xl md:text-7xl font-black mb-4 relative group inline-block cursor-default">
            <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.12em] group-hover:from-white group-hover:to-primary2">
              PROJECTS
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
          </h2>
        </motion.div>

        {/* TOP FEATURED CARDS SECTION (Cloudant & NagarNazar side-by-side featured cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="lg:col-span-6 cursor-pointer group relative rounded-3xl p-6 sm:p-8 bg-[#101422]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Ambient Backlight */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center z-10">
                {/* Content Column */}
                <div className="md:col-span-7 flex flex-col items-start">
                  {/* Header Icon + Subtitle */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl ${project.iconBoxBg} flex items-center justify-center shadow-lg`}>
                      {project.icon}
                    </div>
                    <span className="font-mono text-xs text-text2 tracking-wider">{project.subtitle}</span>
                  </div>

                  {/* Category Capsule */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-semibold tracking-wider uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-head text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-tight">
                    {project.title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                      {project.titleHighlight}
                    </span>
                  </h3>

                  {/* Short Description */}
                  <p className="font-body text-text2 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex items-center gap-2.5 mt-auto flex-wrap">
                    {project.cardTech.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text2">
                        <span className={`w-2 h-2 rounded-full ${t.dotColor}`} />
                        {t.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Frame Column */}
                <div className="md:col-span-5 relative flex items-center justify-center">
                  <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative bg-[#0b0e17] p-1.5 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* REMAINING PROJECTS GRID (India Runs, AI Resume, SMS Spam, Hangman, Netflix Clone, Yojana Darpan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(2).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative rounded-3xl p-6 bg-[#101422]/90 border border-white/10 hover:border-purple-500/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${project.iconBoxBg} flex items-center justify-center shrink-0`}>
                    {project.icon}
                  </div>
                  <span className="font-mono text-[10px] text-text3 uppercase tracking-widest text-right">
                    {project.category}
                  </span>
                </div>

                {/* Screenshot Preview Box inside card */}
                <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 bg-[#0b0e17] p-1 mb-4 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-head text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-text2 text-xs leading-relaxed line-clamp-2 mb-4">
                  {project.desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.cardTech.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-text3 group-hover:text-primary transition-colors shrink-0">
                  View →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* IMAGE 3 MODAL POPUP COMPONENT */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box (Image 3 Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0d111a] border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Left Column: Image Preview Container + Floating Icon */}
              <div className="md:w-1/2 relative bg-[#06080e] min-h-[260px] md:min-h-full flex items-center justify-center p-4 sm:p-6 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                <div className="w-full h-full min-h-[220px] max-h-[380px] md:max-h-full relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0b0e17] flex items-center justify-center">
                  <img
                    src={selectedProject.modalImage || selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Floating Icon Box at bottom left (matching Image 3) */}
                <div className="absolute bottom-6 left-6 w-12 h-12 rounded-2xl bg-[#161b26]/90 border border-white/15 shadow-xl flex items-center justify-center backdrop-blur-md z-10">
                  {selectedProject.icon}
                </div>
              </div>

              {/* Right Column: Project Details & Tech Stack */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  {/* Top Bar: Subtitle & Close Button */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="font-mono text-[11px] font-bold text-cyan-400 tracking-widest uppercase">
                      {selectedProject.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 flex items-center justify-center text-text2 hover:text-white transition-colors shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="font-head text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    {selectedProject.title}{" "}
                    {selectedProject.titleHighlight && (
                      <span className="text-cyan-400">{selectedProject.titleHighlight}</span>
                    )}
                  </h3>

                  {/* Full Description */}
                  <p className="font-body text-text2 text-sm leading-relaxed mb-6 font-normal">
                    {selectedProject.fullDesc}
                  </p>

                  {/* Engineering Stack Header */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] font-bold text-text3 uppercase tracking-widest block mb-3">
                      ENGINEERING STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.engineeringStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text hover:border-primary/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-4">
                  {selectedProject.live ? (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all transform hover:scale-[1.02]"
                    >
                      <Rocket size={16} />
                      Launch Project
                    </a>
                  ) : null}

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`py-3 px-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${
                      selectedProject.live ? "flex-1" : "w-full"
                    }`}
                  >
                    <Code2 size={16} />
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
