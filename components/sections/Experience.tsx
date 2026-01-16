"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/framer-wrapper";

const experiences = [
  {
    role: "Software Engineer / Team Lead",
    company: "SoftRobotics Bangladesh",
    period: "May 2023 - Present",
    description: "Leading a team of engineers to build scalable fintech solutions. Optimized database queries reducing latency by 40%."
  },
  {
    role: "Software Engineer",
    company: "Smart Software Ltd",
    period: "Nov 2020 - April 2023",
    description: "Developed core features for enterprise ERP systems. Integrated payment gateways serving 10k+ daily transactions."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Professional <span className="text-blue-500">Journey</span>
          </h2>
        </FadeIn>

        <div className="relative border-l border-slate-700 ml-4 md:ml-0 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative pl-8 md:pl-12">
                {/* Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
                
                <GlassCard className="p-6 md:p-8 hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-sm text-slate-400 font-mono mt-2 md:mt-0 bg-slate-800 px-3 py-1 rounded border border-slate-700">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}