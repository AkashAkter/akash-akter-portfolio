"use client";

import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral/95 backdrop-blur-sm border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Left Side - Name/Logo */}
          <Link href="/">
            <button
              onClick={() => scrollToSection("home")}
              className="group cursor-pointer"
            >
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-success group-hover:from-success group-hover:to-white transition-all duration-500">
                Akash Akter
              </h1>
            </button>
          </Link>

          {/* Right Side - Navigation and Socials */}
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center text-white hover:text-success transition-colors duration-300"
              >
                <FaUser className="mr-2" />
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center text-white hover:text-success transition-colors duration-300"
              >
                <FaCode className="mr-2" />
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="flex items-center text-white hover:text-success transition-colors duration-300"
              >
                <FaCode className="mr-2" />
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="flex items-center text-white hover:text-success transition-colors duration-300"
              >
                <FaGraduationCap className="mr-2" />
                Education
              </button>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 border-l border-gray-600 pl-4">
              <a
                href="https://github.com/AkashAkter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-success transition-colors duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash08akter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-success transition-colors duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-success transition-colors duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
