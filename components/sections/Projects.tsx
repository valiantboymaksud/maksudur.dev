"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "../ui/framer-wrapper";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

const projects = [
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

export default function Projects() {
  const swiperRef = useRef<any>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="py-16 px-4 relative max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <FadeIn>
          <div className="space-y-2">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              Portfolio
            </h2>
            <h3 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Selected <span className="text-blue-500">Work</span>
            </h3>
          </div>
        </FadeIn>
        
        <div className="flex gap-3">
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className={`group p-4 rounded-full transition-all border ${
              isDark
                ? 'bg-slate-900 border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white'
                : 'bg-white border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600'
            }`}
            aria-label="Previous Slide"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className={`group p-4 rounded-full transition-all border ${
              isDark
                ? 'bg-slate-900 border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white'
                : 'bg-white border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600'
            }`}
            aria-label="Next Slide"
          >
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="!pb-8 overflow-visible"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div 
              whileHover={{ y: -8 }} 
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              <div className={`h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 group ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900' 
                  : 'bg-white border-slate-200 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5'
              }`}>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
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
                  <h4 className={`text-2xl font-bold mb-3 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex gap-2">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${
                          isDark
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/projects/${project.id}`} 
                      className={`flex items-center gap-2 text-sm font-bold transition-all ${
                        isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Case Study <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}