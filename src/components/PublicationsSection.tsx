"use client";
import React from "react";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";

const PublicationsSection = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-4" id="publications">
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
            letterSpacing: "0.1em",
          }}
        >
          RESEARCH PUBLICATIONS
        </h1>
        <div className="w-24 h-1 bg-success mx-auto"></div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Peer-Reviewed Conference Papers
        </p>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="card bg-base-200 shadow-xl border-2 border-success hover:shadow-2xl transition-all">
          <div className="card-body p-8">
            <h2 className="card-title text-3xl text-white mb-2">
              Classification of Malicious Financial Applications Using Naive
              Bayes and K-Nearest Neighbor Algorithms Based on Android
              Permission
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-success mb-4">
              <span className="badge badge-lg badge-success">
                IEEE Conference Paper
              </span>
              <span className="flex items-center">
                <FaUniversity className="mr-2" />
                ICAEEE 2024
              </span>
              <span>DOI: 10.1109/ICAEEE62219.2024.10561780</span>
            </div>

            <div className="prose prose-invert max-w-none mb-6">
              <h3 className="text-xl text-success">Abstract</h3>
              <p className="text-gray-300">
                In this research, we investigated vulnerabilities in Android
                financial applications through permission analysis to enhance
                user privacy and financial security. Our methodology involved
                creating a high-quality dataset using static analysis of 12,050
                application samples with 1,438 combined attributes from the
                &apos;Permission Dataset&apos; and &apos;Appdroid&apos; dataset.
                We implemented detection models using K-Nearest Neighbor (88.25%
                accuracy) and Naive Bayes (82.07% accuracy) algorithms. The
                results demonstrate effective identification of malicious
                financial apps, providing a framework for improved mobile
                banking security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-base-300 p-4 rounded-lg">
                <h4 className="text-success font-bold mb-2">
                  Key Contributions
                </h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>Novel permission-based analysis framework</li>
                  <li>Comparative evaluation of ML algorithms</li>
                  <li>Large-scale dataset creation (12,050 apps)</li>
                  <li>88.25% detection accuracy with KNN</li>
                </ul>
              </div>
              <div className="bg-base-300 p-4 rounded-lg">
                <h4 className="text-success font-bold mb-2">
                  Conference Details
                </h4>
                <ul className="text-gray-300 space-y-1">
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

            <div className="card-actions justify-end">
              <a
                href="https://ieeexplore.ieee.org/document/10561780"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success text-white"
              >
                <FaExternalLinkAlt className="mr-2" />
                View on IEEE Xplore
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl text-success font-bold mb-4">
            Citation Format
          </h3>
          <div className="bg-base-300 p-4 rounded-lg text-left">
            <code className="text-gray-300 text-sm md:text-base">
              A. Akter, &quot;Classification of Malicious Financial Applications
              Using Naive Bayes and K-Nearest Neighbor Algorithms Based on
              Android Permission,&quot; 2024 3rd International Conference on
              Advancement in Electrical and Electronic Engineering (ICAEEE),
              Gazipur, Bangladesh, 2024, pp. 1-6, doi:
              10.1109/ICAEEE62219.2024.10561780.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;
