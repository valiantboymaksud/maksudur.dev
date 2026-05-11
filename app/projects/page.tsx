"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projectsData = [
  {
    id: 'payment-gateway',
    title: 'Enterprise Payment Gateway',
    desc: 'Scalable fintech solution handling 1M+ daily transactions with sub-second latency and bank-grade security.',
    tech: ['Laravel', 'MySQL', 'Redis', 'Vue.js'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    category: 'Fintech'
  },
  {
    id: 'school',
    title: 'School Management System',
    desc: 'Unified administrative platform managing academic cycles, student life, and real-time performance analytics.',
    tech: ['Laravel', 'MySQL', 'Livewire', 'Alpine.js'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    category: 'Education'
  },
  {
    id: 'pos',
    title: 'Point of Sale System',
    desc: 'Cloud-based POS with integrated inventory management and multi-outlet synchronization.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    category: 'E-commerce'
  },
  {
    id: 'hrm',
    title: 'HRM Platform',
    desc: 'Centralized workforce management system featuring payroll automation and performance tracking.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    category: 'Enterprise'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="mb-20">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Software <span className="text-blue-500">Showcase</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive overview of enterprise systems and architectural solutions I've engineered.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/projects/${project.id}`} className="group block h-full">
                <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/5 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                      {project.desc}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex gap-2">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}