"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/framer-wrapper";
import { useTheme } from "@/components/ThemeProvider";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

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
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
