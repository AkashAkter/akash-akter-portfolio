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
      className="min-h-screen bg-[#F9F7F7] px-6 pt-36 md:pt-44 pb-20"
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4 text-center">
            <span className="relative inline-block">
              ABOUT ME
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          <p className="text-[#3F72AF] text-center text-sm md:text-base font-medium">
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
            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#DBE2EF] shadow-sm"
          >
            <p className="text-lg md:text-xl text-[#112D4E] leading-relaxed mb-6">
              I'm a passionate{" "}
              <span className="font-semibold text-[#3F72AF] relative">
                full-stack developer
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DBE2EF] -z-10" />
              </span>{" "}
              with expertise in{" "}
              <span className="font-medium text-[#112D4E]">
                React, Next.js, and Node.js
              </span>
              . I specialize in building{" "}
              <span className="relative inline-block">
                <span className="relative z-10">
                  scalable, performant web applications
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#DBE2EF]/60 -z-0" />
              </span>{" "}
              with intuitive user experiences.
            </p>

            <p className="text-lg md:text-xl text-[#112D4E] leading-relaxed">
              When I'm not coding, you'll find me solving challenges on{" "}
              <span className="font-medium text-[#3F72AF]">LeetCode</span>,
              exploring new technologies, or contributing to open-source
              projects. I believe in{" "}
              <span className="font-semibold text-[#112D4E]">
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
            className="flex flex-col items-center gap-8"
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
                  className="relative p-3 rounded-full text-[#112D4E] hover:text-[#3F72AF] transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#DBE2EF] opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_8px_-1px_rgba(63,114,175,0.4)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Resume Button with enhanced animation */}
            <motion.button
              onClick={handleResumeDownload}
              className="relative px-8 py-3.5 text-base font-medium rounded-full bg-gradient-to-r from-[#112D4E] to-[#3F72AF] text-[#F9F7F7] hover:shadow-lg transition-all group overflow-hidden"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2.5 relative z-10">
                <FaFileDownload className="group-hover:animate-bounce transition-transform" />
                <span>Download Resume</span>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
