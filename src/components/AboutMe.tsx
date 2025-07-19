/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/AkashAkter",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/akash08akter/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:your.akash.akter08@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="about"
      // Changed: Section background to light slate
      className="min-h-screen bg-slate-50 px-6 pt-36 md:pt-44 pb-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header with refined animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-14 md:mb-20"
        >
          {/* Changed: Heading color to dark slate */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 text-center">
            <span className="relative inline-block">
              ABOUT ME
              <motion.span
                // Changed: Underline gradient to match new palette
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-slate-800"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          {/* Changed: Subtitle color to accent teal */}
          <p className="text-teal-600 text-center text-sm md:text-base font-medium">
            Full-Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        {/* Content with improved spacing */}
        <div className="grid gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            // Changed: Card background to white, border to light slate
            className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm"
          >
            {/* Changed: Body text color to a softer slate for readability */}
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              I'm a passionate {/* Changed: Highlight color to accent teal */}
              <span className="font-semibold text-teal-600">
                full-stack developer
              </span>{" "}
              with expertise in {/* Changed: Text color to dark slate */}
              <span className="font-medium text-slate-800">
                React, Next.js, and Node.js
              </span>
              . I specialize in building{" "}
              {/* Changed: Highlight effect to use accent color */}
              <span className="relative inline-block">
                <span className="relative z-10">
                  scalable, performant web applications
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-teal-100 -z-0" />
              </span>{" "}
              with intuitive user experiences.
            </p>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              When I'm not coding, you'll find me solving challenges on{" "}
              {/* Changed: Highlight color to accent teal */}
              <span className="font-medium text-teal-600">LeetCode</span>,
              exploring new technologies, or contributing to open-source
              projects. I believe in {/* Changed: Text color to dark slate */}
              <span className="font-semibold text-slate-800">
                continuous learning
              </span>{" "}
              and pushing the boundaries of what's possible with code.
            </p>
          </motion.div>

          {/* Social and Resume Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 pt-4" // Added top padding for better spacing
          >
            {/* Social Icons with refined hover effects */}
            <div className="flex gap-5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  // Changed: Icon colors to match new palette
                  className="relative p-3 rounded-full text-slate-600 hover:text-teal-500 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Changed: Background and shadow glows to accent teal */}
                  <div className="absolute inset-0 rounded-full bg-teal-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_10px_-2px_rgba(20,184,166,0.4)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Resume Button with enhanced animation */}
            <motion.button
              onClick={handleResumeDownload}
              // Changed: Gradient to match new palette and refined hover shadow
              className="relative px-8 py-3.5 text-base font-medium rounded-full bg-gradient-to-r from-slate-800 to-teal-500 text-white hover:shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 group overflow-hidden"
              whileTap={{ scale: 0.98 }}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div className="flex items-center gap-2.5 relative z-10">
                <FaFileDownload />
                <span>Download Resume</span>
              </div>
              {/* Improved: Cleaned up hover animation using variants */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-800 -z-0"
                variants={{
                  rest: { x: "-101%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
