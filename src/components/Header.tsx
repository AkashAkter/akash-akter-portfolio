"use client";

import Link from "next/link";
import React from "react";
import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { id: "skills", icon: <FaCode className="mr-1.5" />, label: "Skills" },
  {
    id: "experience",
    icon: <FaBriefcase className="mr-1.5" />,
    label: "Experience",
  },
  { id: "projects", icon: <FaCode className="mr-1.5" />, label: "Projects" },
  {
    id: "education",
    icon: <FaGraduationCap className="mr-1.5" />,
    label: "Education",
  },
];

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a]/70 to-[#1e293b]/70 backdrop-blur-md border-b border-[#334155] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.button
              onClick={() => scrollToSection("home")}
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500" />
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-lg">
                Akash Akter
              </h1>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          {/* Navigation & Socials */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-6">
              {navItems.map(({ id, icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center text-gray-300 hover:text-cyan-400 relative group transition-all duration-300"
                >
                  {icon}
                  <span className="relative">
                    {label}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
