"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/framer-wrapper";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-4 text-center z-10">
        <FadeIn delay={0.1}>
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm border transition-colors ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-100 border-blue-300 text-blue-700'
          }`}>
            Available for Hire
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 transition-colors leading-[1.1] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Building <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ${isDark ? 'drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'drop-shadow-none'}`}>Scalable</span> <br />
            Enterprise Systems
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className={`text-base sm:text-lg md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed transition-colors ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Software Engineer crafting robust fintech solutions and scalable architecture.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/projects"
                className={`flex justify-center items-center px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/experience"
                className={`flex justify-center items-center px-8 py-4 rounded-lg font-bold text-lg transition-all backdrop-blur-sm border ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                    : 'bg-slate-200/50 hover:bg-slate-300 border-slate-300 text-slate-900'
                }`}
              >
                My Experience
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}