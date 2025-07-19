"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaCode, FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaStar />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
];

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Header - Floating Glass Morphism */}
      <header className="hidden md:block fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <motion.div
          className="bg-slate-50/80 backdrop-blur-lg rounded-full border border-slate-300 shadow-xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3">
            {/* Animated Logo */}
            <Link href="/">
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 sm:-inset-3 bg-teal-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-500 bg-clip-text text-transparent tracking-tight relative">
                  Akash Akter
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500 to-slate-800"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, origin: 0 }}
                  />
                </h1>
              </motion.div>
            </Link>

            {/* Glowing Navigation */}
            <nav className="flex space-x-1 sm:space-x-2">
              {navItems.map(({ id, icon, label }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative px-3 sm:px-4 py-1 group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-teal-600 group-hover:text-slate-800 transition-colors duration-300 text-sm sm:text-base">
                      {icon}
                    </div>
                    <span className="text-[10px] xs:text-xs font-medium text-slate-700 mt-0.5 sm:mt-1">
                      {label}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-teal-500/10 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_15px_-3px_rgba(20,184,166,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>
      </header>

      {/* Mobile Header - Minimalist */}
      <header className="md:hidden bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sticky top-0 z-40">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/">
            <motion.h1
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-teal-500 bg-clip-text text-transparent"
              whileTap={{ scale: 0.95 }}
            >
              Akash Akter
            </motion.h1>
          </Link>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-teal-500 rounded-full blur-md opacity-0 hover:opacity-40 transition-opacity duration-300" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-teal-500 relative">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
