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
      <header className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <motion.div
          className="bg-[#F9F7F7]/90 backdrop-blur-lg rounded-full border border-[#DBE2EF] shadow-xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-between items-center px-8 py-3">
            {/* Animated Logo */}
            <Link href="/">
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-3 bg-[#3F72AF]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#112D4E] to-[#3F72AF] bg-clip-text text-transparent tracking-tight relative">
                  Akash Akter
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3F72AF] to-[#112D4E]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </h1>
              </motion.div>
            </Link>

            {/* Glowing Navigation */}
            <nav className="flex space-x-1">
              {navItems.map(({ id, icon, label }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative px-5 py-2 group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-[#3F72AF] group-hover:text-[#112D4E] transition-colors duration-300">
                      {icon}
                    </div>
                    <span className="text-xs font-medium text-[#112D4E] mt-1">
                      {label}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#DBE2EF] opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_12px_-2px_#3F72AF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>
      </header>

      {/* Mobile Header - Minimalist */}
      <header className="md:hidden bg-[#F9F7F7] border-b border-[#DBE2EF] px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.h1
              className="text-xl font-bold bg-gradient-to-r from-[#112D4E] to-[#3F72AF] bg-clip-text text-transparent"
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
            <div className="absolute inset-0 bg-[#3F72AF] rounded-full blur-md opacity-0 hover:opacity-40 transition-opacity duration-300" />
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#3F72AF] relative">
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
