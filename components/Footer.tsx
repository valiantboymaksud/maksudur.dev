"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    <footer className={`w-full border-t transition-colors ${
      isDark 
        ? 'border-white/10 bg-[#0B1120] text-slate-400' 
        : 'border-slate-200 bg-slate-50 text-slate-600'
    } py-8 relative z-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Branding & Socials */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link href="/" className={`text-2xl font-bold tracking-tight mb-4 block ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Image src="/images/light-icon.png" width={40} height={40} className="inline-block mr-2 mb-1" alt="Logo" />
              maksudur<span className="text-blue-500">.</span>dev
            </Link>
            <p className={`text-sm leading-relaxed max-w-sm mb-6 mx-auto md:mx-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Software Engineer specializing in scalable enterprise solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#fff" }}
                    className={`p-2 rounded-lg border transition-all ${
                      isDark
                        ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-blue-500/50'
                        : 'bg-slate-200 hover:bg-slate-300 border-slate-300 hover:border-blue-500/50'
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Middle: Availability & CTA */}
          <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-500 font-medium text-sm">Open for new opportunities</span>
            </div>
            <p className={`text-xs mb-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Remote | Freelance | Contract
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40"
            >
              Let's Talk
            </Link>
          </div>

          {/* Right: Back to Top */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`p-3 rounded-full border transition-all group ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/50'
                  : 'bg-slate-200 hover:bg-slate-300 border-slate-300 hover:border-blue-500/50'
              }`}
            >
              <ArrowUp size={20} className={`group-hover:text-blue-500 transition-colors ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`} />
            </motion.button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className={`mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${
          isDark 
            ? 'border-white/5 text-slate-600' 
            : 'border-slate-200 text-slate-500'
        }`}>
          <p>
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <p>
            Founder / Lead Engineer at{" "}
            <a
              href="https://kodersolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 hover:animate-pulse transition duration-500"
            >
              Kodersolution
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}