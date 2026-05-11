"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Target, Zap, Shield, Code2, Rocket } from "lucide-react";

export default function ProjectDetailContent({ project }: { project: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-200 pb-20 pt-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform mr-2" /> Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-600/20">
                Case Study
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                {project.duration}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {project.overview}
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 dark:border-slate-800">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Role</p>
                <p className="font-bold text-slate-900 dark:text-white">{project.role}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Sector</p>
                <p className="font-bold text-slate-900 dark:text-white">Enterprise Software</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img 
                src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Challenges & Solutions */}
            <section className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <Target className="text-red-500" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
                </div>
                <ul className="space-y-4">
                  {project.challenges.map((c: string, i: number) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Zap className="text-green-500" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Solution</h2>
                </div>
                <ul className="space-y-4">
                  {project.solutions.map((s: string, i: number) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Visual Separation */}
            <div className="h-px bg-slate-100 dark:bg-slate-800" />

            {/* Impact Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Rocket className="text-blue-500" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Measured Impact</h2>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
                <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-4 italic">
                  "{project.impact}"
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs">
                  <Shield size={14} /> System Reliability Verified
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Metadata */}
          <aside className="space-y-12">
            {/* Tech Stack */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Code2 size={20} className="text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Technology</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span 
                    key={t} 
                    className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Engagement</p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold text-slate-900 dark:text-white flex justify-between">
                    <span>Type</span>
                    <span className="text-slate-500">Contract</span>
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white flex justify-between">
                    <span>Year</span>
                    <span className="text-slate-500">2024</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}