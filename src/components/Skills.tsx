"use client";

import React from "react";
import { FaReact, FaGitAlt, FaGithub, FaPython, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiDocker,
  SiStripe,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Full-Stack",
    subtitle: "Daily Drivers for High-Performance Web Apps",
    skills: [
      { name: "Next.js 16", icon: <SiNextdotjs className="text-slate-900" size={26} />, level: "Advanced" },
      { name: "React 19", icon: <FaReact className="text-[#00D8FF]" size={26} />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={26} />, level: "Advanced" },
      { name: "Node.js", icon: <span className="font-bold text-[#5FA04E] text-xl">Node</span>, level: "Advanced" },
      { name: "Express.js", icon: <SiExpress className="text-slate-900" size={26} />, level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={26} />, level: "Advanced" },
    ],
  },
  {
    title: "Languages & Architecture",
    subtitle: "Solid CS Foundation & Clean Code",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" size={26} />, level: "Advanced" },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" size={26} />, level: "Proficient" },
      { name: "Java", icon: <FaJava className="text-[#007396]" size={26} />, level: "Intermediate" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" size={26} />, level: "Advanced" },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" size={26} />, level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={26} />, level: "Proficient" },
    ],
  },
  {
    title: "Applied AI & Research",
    subtitle: "Data Mining, Classification & ML Security",
    skills: [
      { name: "Machine Learning", icon: <GiArtificialIntelligence className="text-[#7C3AED]" size={26} />, level: "Research" },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" size={26} />, level: "Applied" },
      { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" size={26} />, level: "Applied" },
      { name: "Data Analysis", icon: <span className="font-bold text-amber-500 text-xl">NumPy</span>, level: "Applied" },
    ],
  },
  {
    title: "Tooling & Cloud",
    subtitle: "Deployment, Version Control & Integrations",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" size={26} />, level: "Advanced" },
      { name: "Stripe API", icon: <SiStripe className="text-[#635BFF]" size={26} />, level: "Production" },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={26} />, level: "Container" },
      { name: "Vercel / Cloud", icon: <span className="font-bold text-slate-900 text-xl">▲</span>, level: "Deployment" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#5D3BEE]/10 text-[#5D3BEE] text-xs font-bold uppercase tracking-wider">
            Tech Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Modern, battle-tested tools and frameworks I use to engineer robust, high-performance web applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#FAFAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:border-[#5D3BEE]/40 transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#111827] tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center justify-between gap-3 min-h-[110px]"
                  >
                    <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-tight">
                        {skill.name}
                      </p>
                      <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
