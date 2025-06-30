"use client";
import React from "react";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const PublicationsSection = () => {
  return (
    <section id="publications" className="bg-[#F9F7F7] pt-32 -mt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            <span className="relative inline-block">
              RESEARCH PUBLICATIONS
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
            Peer-Reviewed Conference Papers
          </p>
        </motion.div>

        {/* Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-[#DBE2EF] shadow-sm hover:shadow-md transition-all"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#112D4E] mb-4 leading-snug">
            Classification of Malicious Financial Applications Using Naive Bayes
            and K-Nearest Neighbor Algorithms Based on Android Permission
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-[#3F72AF] mb-6">
            <span className="px-3 py-1 rounded-full border border-[#3F72AF] text-sm font-semibold">
              IEEE Conference Paper
            </span>
            <span className="flex items-center gap-2">
              <FaUniversity />
              ICAEEE 2024
            </span>
            <span className="text-sm">
              DOI: 10.1109/ICAEEE62219.2024.10561780
            </span>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-[#3F72AF] font-semibold mb-3">
              Abstract
            </h3>
            <p className="text-[#112D4E]/90 text-base leading-relaxed">
              In this research, we investigated vulnerabilities in Android
              financial applications through permission analysis to enhance user
              privacy and financial security. Our methodology involved creating
              a high-quality dataset using static analysis of 12,050 application
              samples with 1,438 combined attributes from the &apos;Permission
              Dataset&apos; and &apos;Appdroid&apos; dataset. We implemented
              detection models using K-Nearest Neighbor (88.25% accuracy) and
              Naive Bayes (82.07% accuracy) algorithms. The results demonstrate
              effective identification of malicious financial apps, providing a
              framework for improved mobile banking security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#DBE2EF]/30 p-5 rounded-lg border border-[#DBE2EF]">
              <h4 className="text-[#3F72AF] font-semibold text-lg mb-3">
                Key Contributions
              </h4>
              <ul className="list-disc pl-5 text-[#112D4E]/90 space-y-2 text-base">
                <li>Novel permission-based analysis framework</li>
                <li>Comparative evaluation of ML algorithms</li>
                <li>Large-scale dataset creation (12,050 apps)</li>
                <li>88.25% detection accuracy with KNN</li>
              </ul>
            </div>
            <div className="bg-[#DBE2EF]/30 p-5 rounded-lg border border-[#DBE2EF]">
              <h4 className="text-[#3F72AF] font-semibold text-lg mb-3">
                Conference Details
              </h4>
              <ul className="text-[#112D4E]/90 space-y-2 text-base">
                <li>
                  <strong>Event:</strong> 3rd International Conference on
                  Advancement in Electrical and Electronic Engineering
                </li>
                <li>
                  <strong>Date:</strong> 25-27 April 2024
                </li>
                <li>
                  <strong>Location:</strong> Gazipur, Bangladesh
                </li>
                <li>
                  <strong>Publisher:</strong> IEEE
                </li>
              </ul>
            </div>
          </div>

          <div className="text-right">
            <motion.a
              href="https://ieeexplore.ieee.org/document/10561780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#112D4E] to-[#3F72AF] text-white font-medium rounded-lg hover:from-[#3F72AF] hover:to-[#112D4E] transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaExternalLinkAlt />
                View on IEEE Xplore
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
