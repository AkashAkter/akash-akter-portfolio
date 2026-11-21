"use client";

import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiPython,
  SiPostgresql,
  SiStripe,
} from "react-icons/si";

const techItems = [
  { name: "Next.js", icon: <SiNextdotjs size={20} /> },
  { name: "React", icon: <SiReact size={20} className="text-[#00D8FF]" /> },
  { name: "TypeScript", icon: <SiTypescript size={20} className="text-[#3178C6]" /> },
  { name: "Node.js", icon: <SiNodedotjs size={20} className="text-[#5FA04E]" /> },
  { name: "Express", icon: <SiExpress size={20} /> },
  { name: "MongoDB", icon: <SiMongodb size={20} className="text-[#47A248]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-[#38BDF8]" /> },
  { name: "Redux Toolkit", icon: <SiRedux size={20} className="text-[#764ABC]" /> },
  { name: "Stripe", icon: <SiStripe size={20} className="text-[#635BFF]" /> },
  { name: "Python", icon: <SiPython size={20} className="text-[#3776AB]" /> },
  { name: "Docker", icon: <SiDocker size={20} className="text-[#2496ED]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={20} className="text-[#4169E1]" /> },
];

const TechTicker = () => {
  return (
    <div className="py-8 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Core Technologies & Tools
        </p>
      </div>

      <div className="flex w-full overflow-hidden select-none">
        <div className="flex items-center gap-10 sm:gap-14 animate-[marquee_25s_linear_infinite] shrink-0 whitespace-nowrap px-6">
          {techItems.concat(techItems).map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-slate-500 hover:text-slate-900 transition-colors cursor-default"
            >
              <span>{tech.icon}</span>
              <span className="font-semibold text-sm tracking-tight text-slate-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
