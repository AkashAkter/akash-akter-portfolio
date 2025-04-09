"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostman,
  SiVercel,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const Skills = () => {
  // Core Web Development Skills
  const coreSkills = [
    {
      icon: <SiNextdotjs size={50} className="text-black dark:text-white" />,
      name: "Next.js",
    },
    { icon: <FaReact size={50} className="text-blue-500" />, name: "React" },
    {
      icon: <SiExpress size={50} className="text-gray-500" />,
      name: "Express",
    },
    {
      icon: <SiMongodb size={50} className="text-green-500" />,
      name: "MongoDB",
    },
  ];

  // Programming Languages
  const programmingLanguages = [
    { icon: <FaPython size={50} className="text-blue-300" />, name: "Python" },
    { icon: <FaJava size={50} className="text-red-500" />, name: "Java" },
    {
      icon: <SiJavascript size={50} className="text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={50} className="text-blue-600" />,
      name: "TypeScript",
    },
  ];

  // Machine Learning Algorithms
  const mlAlgorithms = [
    {
      icon: <GiArtificialIntelligence size={50} className="text-purple-500" />,
      name: "Neural Networks",
    },
    {
      icon: <GiArtificialIntelligence size={50} className="text-green-500" />,
      name: "SVM",
    },
    {
      icon: <GiArtificialIntelligence size={50} className="text-blue-400" />,
      name: "Naive Bayes",
    },
    {
      icon: <GiArtificialIntelligence size={50} className="text-yellow-500" />,
      name: "KNN",
    },
  ];

  // Tools & Platforms
  const tools = [
    {
      icon: <SiTailwindcss size={50} className="text-cyan-400" />,
      name: "Tailwind CSS",
    },
    { icon: <SiRedux size={50} className="text-purple-500" />, name: "Redux" },
    {
      icon: <SiTensorflow size={50} className="text-orange-500" />,
      name: "TensorFlow",
    },
    { icon: <SiPytorch size={50} className="text-red-500" />, name: "PyTorch" },
    { icon: <FaGitAlt size={50} className="text-orange-600" />, name: "Git" },
    {
      icon: <FaGithub size={50} className="text-black dark:text-white" />,
      name: "GitHub",
    },
    {
      icon: <SiPostman size={50} className="text-orange-500" />,
      name: "Postman",
    },
    {
      icon: <SiVercel size={50} className="text-black dark:text-white" />,
      name: "Vercel",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-20 px-4" id="skills">
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
            letterSpacing: "0.1em",
          }}
        >
          MY TECH STACK
        </h1>
        <div className="w-24 h-1 bg-success mx-auto"></div>
      </div>

      <div className="container mx-auto space-y-16">
        {/* Core Web Development Skills */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {coreSkills.map((skill, index) => (
              <SkillCard key={`core-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Programming Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={`lang-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Machine Learning */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Machine Learning
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {mlAlgorithms.map((skill, index) => (
              <SkillCard key={`ml-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Tools & Platforms
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {tools.map((skill, index) => (
              <SkillCard key={`tool-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center p-6 bg-base-100 rounded-xl border border-gray-700 hover:border-success hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-300">
    <div className="mb-3">{skill.icon}</div>
    <p className="font-medium text-xl text-white text-center">{skill.name}</p>
  </div>
);

export default Skills;
