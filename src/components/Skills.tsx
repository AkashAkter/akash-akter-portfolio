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

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        {
          icon: <SiNextdotjs size={40} className="text-white" />,
          name: "Next.js",
        },
        {
          icon: <FaReact size={40} className="text-blue-500" />,
          name: "React",
        },
        {
          icon: <SiExpress size={40} className="text-gray-300" />,
          name: "Express",
        },
        {
          icon: <SiMongodb size={40} className="text-green-500" />,
          name: "MongoDB",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          icon: <FaPython size={40} className="text-blue-300" />,
          name: "Python",
        },
        { icon: <FaJava size={40} className="text-red-500" />, name: "Java" },
        {
          icon: <SiJavascript size={40} className="text-yellow-400" />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript size={40} className="text-blue-600" />,
          name: "TypeScript",
        },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          icon: <SiTensorflow size={40} className="text-orange-500" />,
          name: "TensorFlow",
        },
        {
          icon: <SiPytorch size={40} className="text-red-500" />,
          name: "PyTorch",
        },
        {
          icon: (
            <GiArtificialIntelligence size={40} className="text-purple-500" />
          ),
          name: "Neural Nets",
        },
        {
          icon: (
            <GiArtificialIntelligence size={40} className="text-cyan-400" />
          ),
          name: "SVM",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          icon: <SiTailwindcss size={40} className="text-cyan-400" />,
          name: "Tailwind",
        },
        {
          icon: <SiRedux size={40} className="text-purple-500" />,
          name: "Redux",
        },
        {
          icon: <FaGitAlt size={40} className="text-orange-600" />,
          name: "Git",
        },
        { icon: <FaGithub size={40} className="text-white" />, name: "GitHub" },
      ],
    },
  ];

  return (
    <div
      className=" bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4"
      id="skills"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          MY TECH STACK
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 h-32"
                >
                  {skill.icon}
                  <p className="mt-2 font-medium text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
