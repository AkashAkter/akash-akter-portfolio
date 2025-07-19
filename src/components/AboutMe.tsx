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
  // Handler for resume download remains the same
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf"; // Make sure this path is correct in your `public` folder
    link.download = "AkashAkterResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  // Animation variants for staggered effect
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-50 px-4 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-24"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              About Me
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-slate-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-md md:text-lg text-teal-600 font-medium">
            Full-Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        {/* --- Unified Content Card --- */}
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg"
        >
          {/* Bio Text */}
          <div className="prose prose-lg prose-slate max-w-none text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-800 prose-strong:font-semibold">
            <p>
              I'm a passionate{" "}
              <strong className="text-teal-600">full-stack developer</strong>{" "}
              with expertise in <strong>React, Next.js, and Node.js</strong>. I
              specialize in building{" "}
              <span className="relative inline-block">
                <span className="relative z-10">
                  scalable, performant web applications
                </span>
                <span className="absolute bottom-0.5 left-0 w-full h-2 bg-teal-100 -z-0" />
              </span>{" "}
              with intuitive user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me solving challenges on{" "}
              <strong className="text-teal-600">LeetCode</strong>, exploring new
              technologies, or contributing to open-source projects. I believe
              in <strong>continuous learning</strong> and pushing the boundaries
              of what's possible with code.
            </p>
          </div>

          {/* Divider */}
          <hr className="my-6 sm:my-8 border-slate-200" />

          {/* Card Footer: Socials & Resume */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="relative p-3 rounded-full text-slate-500 hover:text-teal-500 bg-slate-100 hover:bg-white transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-full shadow-[0_0_15px_-3px_rgba(20,184,166,0)] hover:shadow-[0_0_15px_-3px_rgba(20,184,166,0.4)] opacity-0 hover:opacity-100 transition-all duration-300" />
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="relative w-full md:w-auto px-6 py-3 text-base font-semibold rounded-full bg-slate-800 text-white overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2.5 relative z-10">
                <FaFileDownload />
                <span>Download Resume</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
