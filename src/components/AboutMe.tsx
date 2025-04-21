"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutMe = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            ABOUT ME
          </h1>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8" />

          <p className="py-6 text-gray-300 text-xl leading-relaxed">
            A passionate full-stack developer skilled in{" "}
            <span className="font-medium text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              React, Next.js, and Node.js
            </span>
            , I build scalable, user-friendly web solutions. I thrive in
            collaborative environments, love solving challenges, and am always
            learning. When not coding, I enjoy exploring new tech and solving
            problems on{" "}
            <span className="font-medium text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
              LeetCode
            </span>
            .
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6 mt-4">
            <a
              href="https://github.com/AkashAkter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/akash08akter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="mailto:your.akash.akter08@gmail.com"
              className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={26} />
            </a>
          </div>

          {/* Resume Button */}
          <button
            onClick={handleResumeDownload}
            className="mt-2 px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
