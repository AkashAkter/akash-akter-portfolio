"use client";
import React from "react";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";

const PublicationsSection = () => {
  return (
    <div
      className=" bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 px-4"
      id="publications"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_2px_4px_rgba(34,211,238,0.3)] mb-4">
          RESEARCH PUBLICATIONS
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Peer-Reviewed Conference Papers
        </p>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan-400 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
          <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
            Classification of Malicious Financial Applications Using Naive Bayes
            and K-Nearest Neighbor Algorithms Based on Android Permission
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-cyan-400 mb-4">
            <span className="px-3 py-1 rounded-full border border-cyan-400 text-sm font-semibold">
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

          <div className="mb-6">
            <h3 className="text-xl text-cyan-400 font-semibold mb-2">
              Abstract
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-700">
              <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                Key Contributions
              </h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-base">
                <li>Novel permission-based analysis framework</li>
                <li>Comparative evaluation of ML algorithms</li>
                <li>Large-scale dataset creation (12,050 apps)</li>
                <li>88.25% detection accuracy with KNN</li>
              </ul>
            </div>
            <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-700">
              <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                Conference Details
              </h4>
              <ul className="text-gray-300 space-y-1 text-base">
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
            <a
              href="https://ieeexplore.ieee.org/document/10561780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-md shadow-md hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300"
            >
              <FaExternalLinkAlt />
              View on IEEE Xplore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;
