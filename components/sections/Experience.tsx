"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/framer-wrapper";
import { useTheme } from "@/components/ThemeProvider";

const experiences = [
  {
    role: "Software Engineer / Team Lead",
    company: "SoftRobotics Bangladesh",
    period: "May 2023 - Present",
    description: "Leading fintech product development with direct bank integrations and high-volume payment systems. Implemented structured error mapping for fraud analysis, optimized payment processing, and designed backup strategies for critical transaction tables. Working directly with clients and stakeholders to deliver reliable systems handling 1M+ daily transactions smoothly. Leading the engineering team and coordinating with QA for issue analysis, sprint planning, and deadline management."
  },
  {
    role: "Software Engineer",
    company: "Smart Software Ltd",
    period: "Nov 2020 - April 2023",
    description: "Worked on multiple client-facing software solutions including HRM, POS, Procurement Management (XGroup Ltd), School Management Systems, Garments ERP, Hospital Management Systems, and E-commerce platforms. Delivered small to mid-scale production systems for real business clients, contributing to requirement analysis, development, deployment, and ongoing support."
  }
];


export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span className="text-blue-500">Journey</span>
          </h2>
        </FadeIn>

        <div className={`relative border-l ml-4 md:ml-0 md:ml-6 space-y-12 transition-colors ${
          isDark ? 'border-slate-700' : 'border-slate-300'
        }`}>
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative pl-8 md:pl-12">
                {/* Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
                
                <GlassCard className={`p-6 md:p-8 hover:translate-y-[-5px] transition-transform duration-300 ${isDark ? '' : 'bg-slate-100'}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                      <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                    </div>
                    <span className={`text-sm font-mono mt-2 md:mt-0 px-3 py-1 rounded border transition-colors ${
                      isDark
                        ? 'text-slate-400 bg-slate-800 border-slate-700'
                        : 'text-slate-700 bg-slate-200 border-slate-300'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className={`leading-relaxed transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{exp.description}</p>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}