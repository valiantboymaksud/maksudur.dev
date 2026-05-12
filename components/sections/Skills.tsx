"use client";

import { FadeIn } from "@/components/ui/framer-wrapper";
import { Server, Layout, Database, Shield, Terminal, Layers } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tech: ["PHP", "Laravel", "Python", "Django"]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Database & Caching",
    icon: Database,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    icon: Terminal,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    tech: ["Docker", "AWS", "CI/CD Pipelines", "Linux"]
  },
  {
    title: "Architecture",
    icon: Layers,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    tech: ["REST APIs", "Microservices", "Event Driven", "System Design"]
  },
  {
    title: "Tools & Security",
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    tech: ["Git", "SonarQube", "JWT", "Jira"]
  }
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-12 px-3 sm:px-6 lg:px-8 relative max-w-6xl mx-auto">
      <FadeIn>
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive stack of technologies I use to build scalable systems.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <FadeIn key={category.title} delay={idx * 0.1} className="h-full">
            <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
              isDark
                ? `bg-white/5 hover:bg-white/10 ${category.border}`
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300'
            }`}>
              <div className={`w-12 h-12 rounded-xl ${category.bg} ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-4 transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tech.map(t => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-md border transition-colors ${
                    isDark
                      ? 'bg-white/5 text-slate-300 border-white/5 group-hover:border-white/10'
                      : 'bg-slate-200 text-slate-700 border-slate-300 group-hover:border-slate-400'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}