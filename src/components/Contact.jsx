import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("loading");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then((result) => {
      console.log(result.text);
      setFormStatus("success");
      formRef.current.reset();
    }, (error) => {
      console.error(error.text);
      setFormStatus("error");
    });
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"></div>
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-8 relative">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold text-primary tracking-[0.25em] uppercase mb-5">
            <span className="block w-8 h-[1px] bg-gradient-to-r from-primary to-transparent"></span>
            Let's Connect
          </span>
          <h2 className="font-head text-6xl md:text-7xl font-black mb-4 relative group inline-block cursor-default">
            <span className="uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-text to-text2 transition-all duration-500 group-hover:tracking-[0.15em] group-hover:from-white group-hover:to-primary2">CONTACT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">.</span>
          </h2>
          <p className="font-body text-text3 text-base mt-5 max-w-2xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or exciting opportunities. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email Card */}
          <motion.div initial={{opacity:0,y:40,rotateX:-20}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,margin:"-50px"}}
            transition={{duration:0.8,type:"spring",bounce:0.3}} style={{transformPerspective:1000}}
            className="glass-card rounded-2xl p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 glass-card-hover">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-primary2 to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 opacity-50"></div>
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-7 shadow-[0_8px_25px_rgba(139,92,246,0.2)] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-400 relative z-10"
              style={{background:"linear-gradient(135deg, #8b5cf6, #6d28d9)"}}>
              <Mail size={22}/>
            </div>
            <div className="font-mono text-[9px] text-text3 uppercase tracking-[0.2em] mb-1.5 relative z-10">Email Me</div>
            <h3 className="font-head text-xl font-bold mb-2 relative z-10">Direct Mail</h3>
            <p className="font-body text-text3 text-sm mb-7 relative z-10">abdulsamad9040474@gmail.com<br/>I reply within 24 hours</p>
            <a href="mailto:abdulsamad9040474@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/8 border border-primary/15 rounded-xl font-body font-semibold text-[13px] text-primary/80 hover:bg-primary hover:text-white hover:border-primary transition-all relative z-10">
              Send Email <ArrowRight size={16}/>
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div initial={{opacity:0,y:40,rotateX:-20}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,margin:"-50px"}}
            transition={{duration:0.8,delay:0.15,type:"spring",bounce:0.3}} style={{transformPerspective:1000}}
            className="glass-card rounded-2xl p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 glass-card-hover">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#0077b5] to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 opacity-50"></div>
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#0077b5]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b5] to-[#00a0dc] flex items-center justify-center text-white mb-7 shadow-[0_8px_25px_rgba(0,119,181,0.2)] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-400 relative z-10">
              <FaLinkedin size={22}/>
            </div>
            <div className="font-mono text-[9px] text-text3 uppercase tracking-[0.2em] mb-1.5 relative z-10">Connect</div>
            <h3 className="font-head text-xl font-bold mb-2 relative z-10">LinkedIn</h3>
            <p className="font-body text-text3 text-sm mb-7 relative z-10">Abdul Samad<br/>Let's grow our network</p>
            <a href="https://www.linkedin.com/in/abdul-samad025/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077b5]/8 border border-[#0077b5]/15 rounded-xl font-body font-semibold text-[13px] text-[#38bdf8] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all relative z-10">
              View Profile <ArrowRight size={16}/>
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div initial={{opacity:0,y:50,rotateX:-20}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,margin:"-50px"}}
          transition={{duration:0.8,delay:0.2,type:"spring",bounce:0.3}} style={{transformPerspective:1000}}
          className="glass-card rounded-2xl p-8 mt-6 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 glass-card-hover">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-accent to-accent2 opacity-40"></div>
          
          {formStatus === "success" ? (
            <div className="py-12 text-center relative z-10">
              <CheckCircle size={56} className="text-emerald mx-auto mb-6"/>
              <h4 className="font-head text-2xl font-bold mb-3">Message Sent!</h4>
              <p className="font-body text-text3 text-base">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-mono text-[9px] text-text3 tracking-[0.2em] uppercase mb-2">Your Name</label>
                  <input type="text" name="from_name" placeholder="John Doe" required className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-text font-body text-sm focus:outline-none focus:border-primary/40 focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all"/>
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-text3 tracking-[0.2em] uppercase mb-2">Your Email</label>
                  <input type="email" name="from_email" placeholder="john@example.com" required className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-text font-body text-sm focus:outline-none focus:border-primary/40 focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all"/>
                </div>
              </div>
              <div className="mb-5">
                <label className="block font-mono text-[9px] text-text3 tracking-[0.2em] uppercase mb-2">Message</label>
                <textarea name="message" placeholder="Write your message here..." required rows="5" className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-text font-body text-sm resize-y focus:outline-none focus:border-primary/40 focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all"></textarea>
              </div>
              <button disabled={formStatus==="loading"} type="submit"
                className="w-full py-3.5 rounded-xl text-white font-body font-bold text-base flex items-center justify-center gap-3 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_35px_rgba(139,92,246,0.25)]"
                style={{background:"linear-gradient(135deg, #8b5cf6, #6d28d9)"}}>
                {formStatus==="loading"?"Sending...":<><span>Send Message</span> <Send size={18}/></>}
              </button>
              {formStatus==="error"&&<p className="mt-4 text-red-400 font-body text-center text-sm">Failed to send message. Please try again later.</p>}
            </form>
          )}
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* GitHub Card */}
          <motion.div initial={{opacity:0,y:40,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,margin:"-50px"}}
            transition={{duration:0.8,delay:0.3,type:"spring",bounce:0.3}} style={{transformPerspective:1000}}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 glass-card-hover h-full justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-[#24292e]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#24292e] to-[#57606a] flex shrink-0 items-center justify-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.3)] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-400">
                  <FaGithub size={24}/>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-text3 tracking-[0.2em] uppercase">Open Source</div>
                  <h3 className="font-head text-lg font-bold leading-tight">GitHub</h3>
                </div>
              </div>
              <p className="font-body text-[13px] text-text3 mb-6">Explore my projects, contributions & code repositories.</p>
              <a href="https://github.com/abdul-samad-001" target="_blank" rel="noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 text-white rounded-xl font-body font-bold text-[13px] hover:-translate-y-1 transition-all"
                style={{background:"linear-gradient(135deg, #24292e, #57606a)"}}>
                <FaGithub size={16}/> View GitHub
              </a>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div initial={{opacity:0,y:40,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,margin:"-50px"}}
            transition={{duration:0.8,delay:0.4,type:"spring",bounce:0.3}} style={{transformPerspective:1000}}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 glass-card-hover h-full justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffa116]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffa116] to-[#d68512] flex shrink-0 items-center justify-center text-white shadow-[0_8px_25px_rgba(255,161,22,0.3)] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-400">
                  <SiLeetcode size={24}/>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-text3 tracking-[0.2em] uppercase">Problem Solving</div>
                  <h3 className="font-head text-lg font-bold leading-tight">LeetCode</h3>
                </div>
              </div>
              <p className="font-body text-[13px] text-text3 mb-6">Check out my algorithmic problem-solving skills and coding stats.</p>
              <a href="https://leetcode.com/u/abdul_samad_025/" target="_blank" rel="noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 text-white rounded-xl font-body font-bold text-[13px] hover:-translate-y-1 transition-all"
                style={{background:"linear-gradient(135deg, #ffa116, #d68512)"}}>
                <SiLeetcode size={16}/> View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
