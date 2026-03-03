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
    desc: 'High-volume processing system handling 10k+ TPS with ACID compliance.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Redis', 'Postgres'],
    image: 'https://picsum.photos/seed/pay/600/400',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'pos',
    title: 'Point of Sale System',
    desc: 'Real-time dashboard for tracking logistic fleets and inventory.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    image: 'https://picsum.photos/seed/bos/600/400',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'garments',
    title: 'Garments ERP',
    desc: 'End-to-end production tracking for textile manufacturing.',
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    image: 'https://picsum.photos/seed/gar/600/400',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'hrm',
    title: 'HRM Platform',
    desc: 'Multi-tenant HR solution for global workforce management.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    image: 'https://picsum.photos/seed/hrm/600/400',
    color: 'from-green-500 to-teal-600'
  }
];

export default function Projects() {
  const swiperRef = useRef<any>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
     
      <div className="flex justify-between items-end mb-12">
        <div>
          <FadeIn>
              <h2 className={`text-3xl font-bold mb-3 flex items-center gap-3 transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Selected Work
              </h2>
            </FadeIn>
        </div>
        <div className="flex gap-2">
          <button onClick={() => swiperRef.current?.slidePrev()} className={`p-3 rounded-full transition-all border ${
            isDark
              ? 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-blue-500/50'
              : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300 hover:border-blue-500/50'
          }`}>
            <ArrowLeft size={20} />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className={`p-3 rounded-full transition-all border ${
            isDark
              ? 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-blue-500/50'
              : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300 hover:border-blue-500/50'
          }`}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="!pb-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <GlassCard className={`h-full flex flex-col overflow-hidden group relative ${isDark ? '' : 'bg-slate-100'}`}>
                {/* Image Area */}
                <div className="h-48 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-10 transition-opacity z-10`}></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                  <p className={`text-sm mb-4 flex-1 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{project.desc}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.slice(0, 2).map(t => (
                        <span key={t} className={`text-[10px] uppercase font-bold px-2 py-1 rounded border transition-colors ${
                          isDark
                            ? 'bg-white/5 text-slate-300 border-white/5'
                            : 'bg-slate-200 text-slate-700 border-slate-300'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/projects/${project.id}`} 
                      className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-900/20"
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}