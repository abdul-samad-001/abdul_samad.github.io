import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FileText } from "lucide-react";

export const FloatingElements = () => {
  return (
    <>
      {/* Vertical Social Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-center"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-primary/50"></div>
        
        <a href="https://github.com/abdul-samad-001" target="_blank" rel="noreferrer" className="text-text3 hover:text-primary2 hover:-translate-y-1 transition-all duration-300">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/abdul-samad025/" target="_blank" rel="noreferrer" className="text-text3 hover:text-primary2 hover:-translate-y-1 transition-all duration-300">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:abdulsamad9040474@gmail.com" className="text-text3 hover:text-primary2 hover:-translate-y-1 transition-all duration-300">
          <Mail size={22} />
        </a>

        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-primary/50"></div>
      </motion.div>

      {/* Right Side Email Text - Optional but fits the theme */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed right-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-6"
      >
        <a href="mailto:abdulsamad9040474@gmail.com" className="text-text3 hover:text-primary2 transition-all duration-300 text-sm tracking-widest font-mono" style={{ writingMode: "vertical-rl" }}>
          abdulsamad9040474@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-primary/50"></div>
      </motion.div>

      {/* Floating Resume Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50"
      >
        <a 
          href={`${import.meta.env.BASE_URL}resume.pdf`} 
          target="_blank" 
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300"
        >
          <FileText size={22} className="text-white group-hover:scale-110 transition-transform duration-300" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-[11px] font-mono whitespace-nowrap text-text2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 pointer-events-none transition-all duration-300">
            MY RESUME
          </span>
        </a>
      </motion.div>
    </>
  );
};
