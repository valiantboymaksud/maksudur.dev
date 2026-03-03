"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Zap, Users } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const stats = [
  { icon: Briefcase, label: "Experience", value: "5+ Years" },
  { icon: Award, label: "Core Expertise", value: "Backend & Scale" },
  { icon: Zap, label: "Focus", value: "Performance & Security" },
  { icon: Users, label: "Collaboration", value: "Remote & Agile" },
];

export default function Intro() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="intro" className={`py-24 px-4 sm:px-6 lg:px-8 relative max-w-5xl mx-auto transition-colors ${isDark ? 'bg-transparent' : 'bg-transparent'}`}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl font-bold mb-6 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Scalable Systems for <span className="text-blue-500">Real-World Impact</span>
          </h2>
          <div className={`space-y-4 leading-relaxed text-lg transition-colors ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <p>
              I am a Software Engineer dedicated to building robust, high-performance applications. 
              My expertise lies in transforming complex business requirements into scalable software architectures.
            </p>
            <p>
              Whether it's optimizing payment gateways for high concurrency or designing secure backend systems, 
              I bring a focus on code quality, maintainability, and measurable business value.
            </p>
          </div>
          <div className="mt-8">
            <a 
              href="#contact" 
              className={`inline-block px-6 py-3 font-bold rounded-lg transition-colors ${
                isDark
                  ? 'bg-white text-[#0B1120] hover:bg-slate-200'
                  : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
            >
              Discuss a Project
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-6 rounded-xl transition-all border ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-slate-100 border-slate-300 hover:bg-slate-200'
            }`}>
              <stat.icon className="text-blue-500 mb-3" size={24} />
              <h3 className={`text-sm font-medium uppercase tracking-wider mb-1 transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>{stat.label}</h3>
              <p className={`text-lg font-bold transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}