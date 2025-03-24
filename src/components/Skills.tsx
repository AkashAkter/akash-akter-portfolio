import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiPostman,
  SiVercel,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { DiCode } from "react-icons/di"; // For DSA

const Skills = () => {
  const skills = [
    // Frontend
    { icon: <SiHtml5 size={50} className="text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 size={50} className="text-blue-400" />, name: "CSS3" },
    {
      icon: <SiJavascript size={50} className="text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={50} className="text-blue-600" />,
      name: "TypeScript",
    },
    { icon: <FaReact size={50} className="text-blue-500" />, name: "React" },
    { icon: <SiRedux size={50} className="text-purple-500" />, name: "Redux" },
    {
      icon: <SiNextdotjs size={50} className="text-black dark:text-white" />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss size={50} className="text-cyan-400" />,
      name: "Tailwind CSS",
    },

    // Backend/Databases
    {
      icon: <FaNodeJs size={50} className="text-green-600" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={50} className="text-gray-500" />,
      name: "Express",
    },
    {
      icon: <SiMongodb size={50} className="text-green-500" />,
      name: "MongoDB",
    },

    // Programming Languages
    { icon: <SiC size={50} className="text-blue-700" />, name: "C" },
    { icon: <SiCplusplus size={50} className="text-blue-600" />, name: "C++" },
    { icon: <FaPython size={50} className="text-blue-300" />, name: "Python" },

    // DSA (General)
    { icon: <DiCode size={50} className="text-gray-600" />, name: "DSA" },

    // Tools/Platforms
    { icon: <FaGitAlt size={50} className="text-orange-600" />, name: "Git" },
    {
      icon: <FaGithub size={50} className="text-black dark:text-white" />,
      name: "GitHub",
    },
    { icon: <FaNpm size={50} className="text-red-500" />, name: "npm" },
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-md mb-12">
          <h1
            className="text-5xl font-bold text-success"
            style={{ textShadow: "0px 0px 20px #ffffff" }}
          >
            TECHNOLOGIES I USE
          </h1>
        </div>

        {/* Responsive Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>{skill.icon}</div>
              <p className="mt-3 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
