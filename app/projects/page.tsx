"use client";

import { useState, useEffect } from 'react';
import { Project } from '@/types';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';

// Full Data
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Payment Gateway',
    description: 'Robust payment solution handling bank integrations with optimized flow.',
    fullDetails: 'A comprehensive payment gateway system designed for high-volume transactions...',
    tech: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    image: 'https://picsum.photos/seed/payment/800/600',
  },
  {
    id: '2',
    title: 'BOS (Back Office System)',
    description: 'Enterprise management system for tracking operational workflows.',
    fullDetails: 'This BOS serves as the central nervous system for internal operations...',
    tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/bos/800/600',
  },
  {
    id: '3',
    title: 'HRM System',
    description: 'Comprehensive HR solution for employee onboarding and payroll.',
    fullDetails: 'A full-stack Human Resource Management System covering the entire employee lifecycle...',
    tech: ['Python', 'Django', 'React', 'Docker'],
    image: 'https://picsum.photos/seed/hrm/800/600',
  },
  {
    id: '4',
    title: 'Garments ERP',
    description: 'Specialized ERP for the textile industry managing production and supply chain.',
    fullDetails: 'Tailored specifically for the garments industry, this ERP manages production lines...',
    tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
    image: 'https://picsum.photos/seed/garments/800/600',
  },
  {
    id: '5',
    title: 'School Management System',
    description: 'Complete administrative suite for educational institutions.',
    fullDetails: 'A unified platform for schools to manage academic and administrative activities...',
    tech: ['Laravel', 'MySQL', 'Alpine.js', 'Tailwind'],
    image: 'https://picsum.photos/seed/school/800/600',
  },
];

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle URL Hash for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const project = projectsData.find(p => p.id === hash);
        if (project) setSelectedProject(project);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-[#0f172a]">
      <AnimatedBackground />
      
      {/* STRICT HEADER ON THIS PAGE TOO */}
      <Navbar /> 

      <div className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="max-w-7xl mx-auto mb-12">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition mb-4">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Software Showcase
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            A collection of enterprise-grade systems I have engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <GlassCard key={project.id} className="overflow-hidden flex flex-col group cursor-pointer hover:border-blue-500/50 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium text-sm hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                >
                  View Details
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <GlassCard className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-0 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800/30">
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p className="text-lg font-medium">{selectedProject.description}</p>
                <p>{selectedProject.fullDetails}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                <button onClick={() => setSelectedProject(null)} className="px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition">
                  Close Details
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}