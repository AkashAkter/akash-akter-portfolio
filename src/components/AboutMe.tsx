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
import { SiLeetcode } from "react-icons/si";

const AboutMe = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 text-center"
          variants={item}
        >
          About Me
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-40 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-10 opacity-80"
          variants={item}
        />

        {/* Content */}
        <motion.div variants={item}>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 text-center">
            I'm a passionate{" "}
            <span className="font-semibold text-cyan-400">
              full-stack developer
            </span>{" "}
            specializing in{" "}
            <span className="font-medium text-blue-400">React</span>,{" "}
            <span className="font-medium text-blue-400">Next.js</span>, and{" "}
            <span className="font-medium text-blue-400">Node.js</span>. I craft{" "}
            <span className="italic text-gray-200">
              scalable, performant web applications
            </span>{" "}
            with exceptional user experiences.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 text-center">
            When I'm not coding, you'll find me solving challenges on{" "}
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-cyan-400 transition-colors inline-flex items-center"
            >
              LeetCode <SiLeetcode className="ml-1" />
            </a>
            , contributing to open source, or exploring the latest in web
            technology.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center gap-6 mb-12" variants={item}>
          {[
            {
              icon: <FaGithub size={24} />,
              href: "https://github.com/AkashAkter",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin size={24} />,
              href: "https://www.linkedin.com/in/akash08akter/",
              label: "LinkedIn",
            },
            {
              icon: <FaEnvelope size={24} />,
              href: "mailto:your.akash.akter08@gmail.com",
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label={social.label}
            >
              {social.icon}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-300 transition-opacity">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div className="text-center" variants={item}>
          <motion.button
            onClick={handleResumeDownload}
            className="px-8 py-3.5 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              <FaFileDownload className="text-lg" />
              Download Resume
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
