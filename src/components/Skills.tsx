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
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";

const Skills = () => {
  // Data structure is clean and maintainable - no changes needed here.
  const skillCategories = [
    {
      title: "Core Web Technologies",
      skills: [
        {
          icon: <SiNextdotjs className="text-black" />,
          name: "Next.js",
          color: "shadow-black/10",
        },
        {
          icon: <FaReact className="text-[#61DAFB]" />,
          name: "React",
          color: "shadow-[#61DAFB]/30",
        },
        {
          icon: <SiExpress className="text-black" />,
          name: "Express.js",
          color: "shadow-black/10",
        },
        {
          icon: <SiMongodb className="text-[#47A248]" />,
          name: "MongoDB",
          color: "shadow-[#47A248]/30",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          icon: <FaPython className="text-[#3776AB]" />,
          name: "Python",
          color: "shadow-[#3776AB]/30",
        },
        {
          icon: <FaJava className="text-[#007396]" />,
          name: "Java",
          color: "shadow-[#007396]/30",
        },
        {
          icon: <SiJavascript className="text-[#F7DF1E]" />,
          name: "JavaScript",
          color: "shadow-[#F7DF1E]/30",
        },
        {
          icon: <SiTypescript className="text-[#3178C6]" />,
          name: "TypeScript",
          color: "shadow-[#3178C6]/30",
        },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          icon: <SiTensorflow className="text-[#FF6F00]" />,
          name: "TensorFlow",
          color: "shadow-[#FF6F00]/30",
        },
        {
          icon: <SiPytorch className="text-[#EE4C2C]" />,
          name: "PyTorch",
          color: "shadow-[#EE4C2C]/30",
        },
        {
          icon: <GiArtificialIntelligence className="text-purple-600" />,
          name: "Neural Nets",
          color: "shadow-purple-600/30",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
          name: "Tailwind CSS",
          color: "shadow-[#06B6D4]/30",
        },
        {
          icon: <SiRedux className="text-[#764ABC]" />,
          name: "Redux",
          color: "shadow-[#764ABC]/30",
        },
        {
          icon: <FaGitAlt className="text-[#F05032]" />,
          name: "Git",
          color: "shadow-[#F05032]/30",
        },
        {
          icon: <FaGithub className="text-black" />,
          name: "GitHub",
          color: "shadow-black/10",
        },
      ],
    },
  ];

  // Animation variants for the main section and the staggered grid
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="bg-slate-100/70 py-20 sm:py-24 md:py-32 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              My Tech Stack
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-teal-400 to-slate-600 rounded-full" />
            </span>
          </h2>
          <p className="text-md md:text-lg text-slate-600 mt-5">
            The tools and technologies I use to build modern web experiences.
          </p>
        </motion.div>

        {/* --- Unified Skills Layout --- */}
        <div className="space-y-12 md:space-y-16">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6 md:mb-8 text-center md:text-left border-b-2 border-teal-500/20 pb-4">
                {category.title}
              </h3>

              {/* Staggered Skill Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ y: -6, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-white border border-transparent shadow-sm transition-all duration-300 cursor-pointer hover:border-slate-300 hover:shadow-xl ${skill.color}`}
                  >
                    <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <p className="text-sm md:text-base font-semibold text-slate-700">
                      {skill.name}
                    </p>
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
