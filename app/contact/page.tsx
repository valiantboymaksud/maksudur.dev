import MainLayout from "@/components/MainLayout";
import ContactSection from "@/components/sections/Contact"; // Reusing existing logic if preferred, or new below
import { FadeIn } from "@/components/ui/framer-wrapper";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";

export const metadata = {
  title: "Contact Me | Portfolio",
  description: "Get in touch for freelance opportunities or project inquiries.",
};

export default function ContactPage() {
  return (
      <div className="py-24 max-w-5xl mx-auto pt-16 md:pt-0">
        
        {/* Header */}
        <FadeIn>
          <h1 className="text-4xl pt-10 md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Work <span className="text-blue-500">Together</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl">
            Have a project in mind or want to discuss a full-time opportunity? 
            I'm currently available for freelance and remote roles.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info & Socials */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Globe size={20} className="text-blue-500" /> Contact Info
                </h2>
                
                <div className="space-y-4">
                  <a href="mailto:john@example.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                      <p className="font-medium">valiantmaksud@gmail.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                      <p className="font-medium">Remote / Dhaka, BD</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Availability</p>
                      <p className="font-medium text-green-400">Open for work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-6">Connect with Me</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/valiantboymaksud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-slate-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                  >
                    <Github size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                    <span className="font-medium text-slate-300 group-hover:text-white">GitHub</span>
                  </a>
                  
                  <a 
                    href="http://linkedin.com/in/maksudur-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                  >
                    <Linkedin size={24} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span className="font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
                  </a>

                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                  >
                    <Twitter size={24} className="text-slate-400 group-hover:text-sky-500 transition-colors" />
                    <span className="font-medium text-slate-300 group-hover:text-white">Twitter</span>
                  </a>

                  <a 
                    href="https://kodersolution.com" 
                    className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 rounded-xl transition-all hover:-translate-y-1 group"
                  >
                    <Globe size={24} className="text-slate-400 group-hover:text-purple-500 transition-colors" />
                    <span className="font-medium text-slate-300 group-hover:text-white">Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Contact Form */}
          <FadeIn delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell me about your project..." 
                    className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 flex items-center justify-center gap-2"
                >
                  Send Message <span className="text-lg">→</span>
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
  );
}