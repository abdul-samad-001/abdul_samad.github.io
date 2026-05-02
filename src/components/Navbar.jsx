import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 220) {
          current = section;
        }
      }
      if (current) setActiveTab(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-3 bg-dark/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <a href="#" className="group relative inline-flex items-center justify-center w-12 h-12">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-xl transform rotate-45 group-hover:rotate-[225deg] group-hover:scale-110 group-hover:border-primary/30 transition-all duration-700 ease-out overflow-hidden">
               <div className="absolute w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="relative z-10 font-head text-[22px] leading-none font-black tracking-tighter text-text group-hover:text-white transition-colors duration-500">
              A<span className="text-primary group-hover:text-accent transition-colors duration-500">S</span>
            </span>
          </a>

          <ul className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}
                  className={`font-body font-medium text-sm px-4 py-2 rounded-xl transition-all duration-300 tracking-wide ${
                    activeTab === link.href.substring(1)
                      ? "text-primary bg-primary/8 border border-primary/10"
                      : "text-text3 hover:text-text hover:bg-white/[0.03] border border-transparent"
                  }`}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact"
                className="ml-3 font-body font-semibold text-sm px-6 py-2.5 rounded-xl text-white shadow-[0_6px_22px_rgba(139,92,246,0.25)] hover:shadow-[0_12px_35px_rgba(139,92,246,0.35)] transition-all duration-300 relative overflow-hidden group"
                style={{background:"linear-gradient(135deg, #8b5cf6, #6d28d9)"}}>
                <span className="absolute inset-0 bg-gradient-to-r from-primary2 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">Let's Talk</span>
              </a>
            </li>
          </ul>

          <button className="md:hidden text-text3 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}/>
            <motion.div initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}}
              transition={{type:"spring",damping:25,stiffness:200}}
              className="fixed top-0 right-0 w-[270px] h-full bg-dark2/95 backdrop-blur-xl z-50 p-8 border-l border-white/[0.04] pt-24 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)}
                  className="block font-body text-lg font-medium text-text3 py-3 px-4 rounded-xl hover:bg-primary/8 hover:text-primary transition-all duration-300">{link.name}</a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center font-body font-bold text-md px-6 py-3 rounded-xl text-white" style={{background:"linear-gradient(135deg, #8b5cf6, #38bdf8)"}}>Let's Talk</a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
