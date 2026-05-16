"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/valiantboymaksud" },
  { name: "LinkedIn", icon: Linkedin, href: "http://linkedin.com/in/maksudur-dev" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Email", icon: Mail, href: "mailto:valiantmaksud@gmail.com" },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`w-full py-6 px-3 transition-colors ${
      isDark 
        ? 'bg-[#0B1120] text-slate-400' 
        : 'bg-slate-50 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-6">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-3">
              <img
                src="/images/logo-h.png"
                alt="M.D Brand Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              Engineering high-performance software solutions with a focus on scalability, security, and exceptional user experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl transition-all ${
                      isDark
                        ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50'
                        : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-500/50'
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability & Contact */}
          <div className="col-span-1">
            <h4 className={`text-sm font-black uppercase tracking-widest mb-6 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
              Availability
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-bold text-green-500">Open for new projects</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest">
                Remote / Freelance / Full-time
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-black text-blue-500 hover:text-blue-400 transition-all group"
                >
                  Hire Me <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links / Location */}
          <div className="col-span-1">
            <h4 className={`text-sm font-black uppercase tracking-widest mb-6 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
              Location
            </h4>
            <p className="text-sm mb-2">Dhaka, Bangladesh</p>
            <p className="text-xs text-slate-500">Available globally via remote collaboration.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <p>&copy; {new Date().getFullYear()} Maksudur Rahman</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700"></span>
            <p>All Rights Reserved</p>
          </div>
          
          <div className="text-[10px] font-bold tracking-widest text-slate-500 flex flex-col md:flex-row items-center gap-1">
            <span>Principal Engineer at</span>
            <a
              href="https://kodersolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline decoration-blue-500 decoration-2 underline-offset-2 hover:text-blue-400 transition-colors"
            >
              kodersolution.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
