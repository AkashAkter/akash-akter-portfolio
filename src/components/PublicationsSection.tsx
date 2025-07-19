"use client";
import React from "react";
import { FaExternalLinkAlt, FaUniversity, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const PublicationsSection = () => {
  return (
    // Changed: Section background and standardized padding
    <section id="publications" className="bg-slate-50 py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              RESEARCH & PUBLICATIONS
              <motion.span
                // Changed: Underline gradient
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-slate-800"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          <p className="text-teal-600 text-center text-sm md:text-base font-medium">
            Peer-Reviewed Conference Paper
          </p>
        </motion.div>

        {/* Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          // Changed: Card styling and enhanced hover effect
          className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* Changed: Publication title color */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug">
            Classification of Malicious Financial Applications Using Naive Bayes
            and K-Nearest Neighbor Algorithms Based on Android Permission
          </h2>

          {/* Changed: Info tags styling */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-teal-700 mb-8">
            <span className="px-3 py-1 rounded-full border border-teal-300 bg-teal-50 text-xs sm:text-sm font-semibold">
              IEEE Conference Paper
            </span>
            <span className="flex items-center gap-2 text-sm sm:text-base">
              <FaUniversity />
              ICAEEE 2024
            </span>
            <span className="text-sm text-slate-500">
              DOI: 10.1109/ICAEEE62219.2024.10561780
            </span>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-teal-600 font-semibold mb-3">
              Abstract
            </h3>
            {/* Changed: Abstract text color */}
            <p className="text-slate-600 text-base leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Changed: Inner card styling */}
            <div className="bg-slate-100 p-5 rounded-lg border border-slate-200">
              <h4 className="text-teal-700 font-semibold text-lg mb-4">
                Key Contributions
              </h4>
              {/* Changed: List style to use icons */}
              <ul className="space-y-3 text-slate-700 text-base">
                <li className="flex items-start gap-3">
                  <FaLightbulb className="text-teal-500 mt-1 shrink-0" />
                  <span>Novel permission-based analysis framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaLightbulb className="text-teal-500 mt-1 shrink-0" />
                  <span>Comparative evaluation of ML algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaLightbulb className="text-teal-500 mt-1 shrink-0" />
                  <span>Large-scale dataset creation (12,050 apps)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaLightbulb className="text-teal-500 mt-1 shrink-0" />
                  <span>88.25% detection accuracy with KNN</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg border border-slate-200">
              <h4 className="text-teal-700 font-semibold text-lg mb-4">
                Conference Details
              </h4>
              {/* Changed: List style to key-value pairs for clarity */}
              <div className="space-y-3 text-base">
                <p>
                  <strong className="font-semibold text-slate-700">
                    Event:
                  </strong>{" "}
                  <span className="text-slate-600">
                    3rd Intl. Conference on Advancement in Electrical and
                    Electronic Engineering
                  </span>
                </p>
                <p>
                  <strong className="font-semibold text-slate-700">
                    Date:
                  </strong>{" "}
                  <span className="text-slate-600">25-27 April 2024</span>
                </p>
                <p>
                  <strong className="font-semibold text-slate-700">
                    Location:
                  </strong>{" "}
                  <span className="text-slate-600">Gazipur, Bangladesh</span>
                </p>
                <p>
                  <strong className="font-semibold text-slate-700">
                    Publisher:
                  </strong>{" "}
                  <span className="text-slate-600">IEEE</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-right">
            <Link
              href="https://ieeexplore.ieee.org/document/10561780"
              passHref
              legacyBehavior
            >
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                // Changed: Button styling to match portfolio theme
                className="inline-block w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-slate-800 to-teal-600 text-white font-semibold shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaExternalLinkAlt />
                  View on IEEE Xplore
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
