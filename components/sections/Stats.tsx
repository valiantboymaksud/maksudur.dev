"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experience", value: 5 },
  { label: "Projects Shipped", value: 20 },
  { label: "Team Led", value: 10 },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/10 bg-blue-600/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function Counter({ label, value }: { label: string; value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
        {count}+
      </h3>
      <p className="text-blue-400 font-medium mt-2 uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
}