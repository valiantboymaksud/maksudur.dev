"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/framer-wrapper";
import { useTheme } from "@/components/ThemeProvider";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer / Team Lead",
    company: "SoftRobotics Bangladesh",
    period: "2023 - Present",
    location: "Dhaka, Bangladesh",
    description: "Leading fintech product development with direct bank integrations and high-volume payment systems. Implemented structured error mapping for fraud analysis, optimized payment processing, and designed backup strategies for critical transaction tables. Working directly with clients and stakeholders to deliver reliable systems handling 1M+ daily transactions smoothly. Leading engineering teams through sprint planning and architecture reviews.",
    skills: ["Fintech", "System Design", "Node.js", "PostgreSQL", "Team Leadership"],
  },
  {
    role: "Software Engineer",
    company: "Smart Software Ltd",
    period: "2020 - 2023",
    location: "Dhaka, Bangladesh",
    description: "Developed multiple client-facing solutions including HRM, POS, Procurement Management, and Garments ERP systems. Delivered small to mid-scale production systems for real business clients, contributing to requirement analysis, development, deployment, and ongoing technical support.",
    skills: ["ERP Systems", "Laravel", "React", "MySQL", "AWS"],
  }
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-12 px-3 sm:px-6 lg:px-8 bg-white dark:bg-black/20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-6">
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Professional <span className="text-blue-500">History</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-500 rounded-full mb-3" />
            <p className={`text-lg md:text-xl max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              My career journey as a software engineer, building impactful digital products and leading engineering teams.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-12 border-b ${
                isDark ? 'border-slate-800/60' : 'border-slate-200'
              } last:border-0`}
            >
              {/* Left Column: Date & Company */}
              <div className="space-y-3">
                <div className={`font-mono text-sm font-bold tracking-tighter ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {exp.period}
                </div>
                <div>
                  <h3 className={`text-xl font-bold tracking-tight mb-1 ${
                    isDark ? 'text-slate-100' : 'text-slate-800'
                  }`}>
                    {exp.company}
                  </h3>
                  <div className={`flex items-center gap-1.5 text-xs font-medium ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Right Column: Role & Description */}
              <div className="space-y-5">
                <h4 className={`text-2xl md:text-3xl font-black tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {exp.role}
                </h4>
                <p className={`text-base md:text-lg leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className={`px-3 py-1 text-xs font-bold rounded-md border ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-slate-300' 
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}