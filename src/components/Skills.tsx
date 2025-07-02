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
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        {
          icon: (
            <SiNextdotjs size={28} className="text-black dark:text-white" />
          ),
          name: "Next.js",
          color: "hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]",
        },
        {
          icon: <FaReact size={28} className="text-[#61DAFB]" />,
          name: "React",
          color: "hover:shadow-[0_0_15px_rgba(97,218,251,0.3)]",
        },
        {
          icon: <SiExpress size={28} className="text-black dark:text-white" />,
          name: "Express",
          color: "hover:shadow-[0_0_15px_rgba(104,104,104,0.2)]",
        },
        {
          icon: <SiMongodb size={28} className="text-[#47A248]" />,
          name: "MongoDB",
          color: "hover:shadow-[0_0_15px_rgba(71,162,72,0.3)]",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          icon: <FaPython size={28} className="text-[#3776AB]" />,
          name: "Python",
          color: "hover:shadow-[0_0_15px_rgba(55,118,171,0.3)]",
        },
        {
          icon: <FaJava size={28} className="text-[#007396]" />,
          name: "Java",
          color: "hover:shadow-[0_0_15px_rgba(0,115,150,0.3)]",
        },
        {
          icon: <SiJavascript size={28} className="text-[#F7DF1E]" />,
          name: "JavaScript",
          color: "hover:shadow-[0_0_15px_rgba(247,223,30,0.3)]",
        },
        {
          icon: <SiTypescript size={28} className="text-[#3178C6]" />,
          name: "TypeScript",
          color: "hover:shadow-[0_0_15px_rgba(49,120,198,0.3)]",
        },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          icon: <SiTensorflow size={28} className="text-[#FF6F00]" />,
          name: "TensorFlow",
          color: "hover:shadow-[0_0_15px_rgba(255,111,0,0.3)]",
        },
        {
          icon: <SiPytorch size={28} className="text-[#EE4C2C]" />,
          name: "PyTorch",
          color: "hover:shadow-[0_0_15px_rgba(238,76,44,0.3)]",
        },
        {
          icon: (
            <GiArtificialIntelligence size={28} className="text-[#7431A8]" />
          ),
          name: "Neural Nets",
          color: "hover:shadow-[0_0_15px_rgba(116,49,168,0.3)]",
        },
        {
          icon: (
            <GiArtificialIntelligence size={28} className="text-[#00B0D8]" />
          ),
          name: "SVM",
          color: "hover:shadow-[0_0_15px_rgba(0,176,216,0.3)]",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          icon: <SiTailwindcss size={28} className="text-[#06B6D4]" />,
          name: "Tailwind",
          color: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
        },
        {
          icon: <SiRedux size={28} className="text-[#764ABC]" />,
          name: "Redux",
          color: "hover:shadow-[0_0_15px_rgba(118,74,188,0.3)]",
        },
        {
          icon: <FaGitAlt size={28} className="text-[#F05032]" />,
          name: "Git",
          color: "hover:shadow-[0_0_15px_rgba(240,80,50,0.3)]",
        },
        {
          icon: <FaGithub size={28} className="text-black dark:text-white" />,
          name: "GitHub",
          color: "hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#F9F7F7] pt-32 -mt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with refined animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            <span className="relative inline-block">
              MY TECH STACK
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          <p className="text-[#3F72AF] text-center text-sm md:text-base font-medium">
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Skills Grid with enhanced card design */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#DBE2EF] shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-[#112D4E] mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex flex-col items-center p-5 rounded-xl bg-white border border-[#DBE2EF] hover:border-transparent transition-all duration-300 group ${skill.color}`}
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="font-medium text-[#112D4E] group-hover:text-[#3F72AF] transition-colors">
                      {skill.name}
                    </p>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-[#F9F7F7] opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
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
