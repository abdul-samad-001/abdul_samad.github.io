export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/[0.04] relative z-10 overflow-hidden" style={{background:"linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))"}}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-primary to-accent opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-2">
            <div className="font-head text-[1.8rem] font-black mb-4 group cursor-default inline-block w-fit relative">
              <span className="uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-accent">ABDUL.</span>
              <span className="uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:from-accent group-hover:to-primary">SAMAD</span>
            </div>
            <p className="font-body text-sm text-text3 leading-relaxed max-w-sm mb-6">
              Passionate developer & UI/UX designer dedicated to creating innovative solutions and turning ideas into reality through code and design.
            </p>
            <div className="flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text3">
              <a href="https://github.com/abdul-samad-001" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/abdul-samad025/" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://leetcode.com/u/abdul_samad_025/" className="hover:text-primary transition-colors">LeetCode</a>
              <a href="mailto:abdulsamad9040474@gmail.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-head text-base font-bold text-text mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-text3">
              <a href="#about" className="hover:text-text2 transition-colors w-fit">About</a>
              <a href="#projects" className="hover:text-text2 transition-colors w-fit">Projects</a>
              <a href="#achievements" className="hover:text-text2 transition-colors w-fit">Achievements</a>
              <a href="#contact" className="hover:text-text2 transition-colors w-fit">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-head text-base font-bold text-text mb-5">Get In Touch</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-text3">
              <p>Prayagraj, Uttar Pradesh</p>
              <a href="mailto:abdulsamad9040474@gmail.com" className="hover:text-text2 transition-colors">abdulsamad9040474@gmail.com</a>
              <p>+91 9140346582</p>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] text-text3">
            © {new Date().getFullYear()} Abdul Samad. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-text3 uppercase tracking-[0.2em]">
            Designed & Built with ♡
          </p>
        </div>
      </div>
    </footer>
  );
};
