"use client";

import Link from "next/link";
import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "skills", icon: <FaCode className="text-lg" />, label: "Skills" },
  {
    id: "experience",
    icon: <FaBriefcase className="text-lg" />,
    label: "Experience",
  },
  { id: "projects", icon: <FaCode className="text-lg" />, label: "Projects" },
  {
    id: "education",
    icon: <FaGraduationCap className="text-lg" />,
    label: "Education",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-2xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/">
            <motion.div
              onClick={() => scrollToSection("home")}
              className="group relative"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Akash Akter
                <motion.span
                  className="block h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-1"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, icon, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center">
                  <span className="mr-2">{icon}</span>
                  <span>{label}</span>
                </div>
                {activeSection === id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-4 h-1 bg-cyan-400 rounded-full -translate-x-1/2"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navItems.map(({ id, icon, label }) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                      activeSection === id
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-3">{icon}</span>
                    <span>{label}</span>
                    {activeSection === id && (
                      <motion.span
                        className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
