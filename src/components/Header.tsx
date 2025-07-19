"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Navigation items remain the same
const navItems = [
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaStar />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
];

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to scroll to a section and close the mobile menu if it's open
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <>
      {/* ================================================================== */}
      {/* Desktop Header: Floating Glass Morphism (Largely unchanged, very solid) */}
      {/* ================================================================== */}
      <header className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <motion.div
          className="bg-slate-50/80 backdrop-blur-lg rounded-full border border-slate-300 shadow-xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="flex justify-between items-center px-8 py-3">
            {/* Logo */}
            <Link href="/" passHref>
              <motion.div
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-3 bg-teal-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-500 bg-clip-text text-transparent tracking-tight relative">
                  Akash Akter
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex space-x-2">
              {navItems.map(({ id, icon, label }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative px-4 py-2 group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-teal-600 group-hover:text-slate-800 transition-colors duration-300 text-base">
                      {icon}
                    </div>
                    <span className="text-sm font-medium text-slate-700">
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

      {/* ================================================================== */}
      {/* Mobile Header: Sticky with Hamburger Menu (Refactored for functionality) */}
      {/* ================================================================== */}
      <header className="md:hidden bg-white/80 backdrop-blur-lg border-b border-slate-200 px-4 py-3 sticky top-0 z-40">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Mobile Logo */}
          <Link href="/">
            <motion.h1
              className="text-xl font-bold bg-gradient-to-r from-slate-800 to-teal-500 bg-clip-text text-transparent"
              whileTap={{ scale: 0.95 }}
            >
              Akash Akter
            </motion.h1>
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-slate-700 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30"
          >
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-lg p-8 pt-24"
            >
              <ul className="flex flex-col items-center justify-center space-y-6">
                {navItems.map(({ id, icon, label }) => (
                  <li key={id}>
                    <motion.button
                      onClick={() => scrollToSection(id)}
                      className="flex items-center space-x-3 text-slate-700 hover:text-teal-500 transition-colors duration-300 text-xl font-semibold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{icon}</span>
                      <span>{label}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
