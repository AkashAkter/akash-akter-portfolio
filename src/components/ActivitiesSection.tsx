"use client";
import React from "react";
import {
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaTrophy,
  FaGlobe,
  FaBook,
  FaRunning,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiIeee } from "react-icons/si";

const ActivitiesSection = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-4" id="activities">
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
            letterSpacing: "0.1em",
          }}
        >
          ACTIVITIES & INTERESTS
        </h1>
        <div className="w-24 h-1 bg-success mx-auto"></div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Beyond coding - my extracurricular engagements and personal passions
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Extra Curriculum Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FaUsers className="text-success mr-3" />
            <span className="border-b-2 border-success pb-1">
              Extra Curriculum
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* IEEE Symposium Card - Enhanced with Event Details */}
            <div className="card bg-base-200 border border-gray-700 hover:border-success transition-all group">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <SiIeee className="text-[#00629B] text-2xl mt-1 group-hover:text-success transition-colors" />
                  <div>
                    <h3 className="card-title text-white flex items-center">
                      IEEE Symposium Participant
                      <span className="badge badge-success badge-sm ml-2">
                        Invited
                      </span>
                    </h3>
                    <p className="text-gray-400">
                      IEEE Computer Society Bangladesh Chapter
                    </p>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-gray-300 text-sm">
                        <FaCalendarAlt className="mr-2 text-success" />
                        <span>June 9-10, 2023</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <FaMapMarkerAlt className="mr-2 text-success" />
                        <span>Islamic University, Kushtia, Bangladesh</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mt-3 text-[16px]">
                      Selected participant for prestigious national symposium on
                      cutting-edge computer science research and applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other cards remain the same */}
            <div className="card bg-base-200 border border-gray-700 hover:border-success transition-all">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <FaLaptopCode className="text-success text-2xl mt-1" />
                  <div>
                    <h3 className="card-title text-white">
                      Programming Club Executive
                    </h3>
                    <p className="text-gray-400">
                      Pundra University Programming Club
                    </p>
                    <p className="text-gray-300 mt-2 text-[16px]">
                      Organized coding workshops and knowledge-sharing sessions
                      for 100+ members
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-gray-700 hover:border-success transition-all">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <FaTrophy className="text-success text-2xl mt-1" />
                  <div>
                    <h3 className="card-title text-white">ICPC Participant</h3>
                    <p className="text-gray-400">
                      2023 Asia Dhaka Regional Contest
                    </p>
                    <p className="text-gray-300 mt-2 text-[16px]">
                      Competed in prestigious algorithmic programming
                      competition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-gray-700 hover:border-success transition-all">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <FaCertificate className="text-success text-2xl mt-1" />
                  <div>
                    <h3 className="card-title text-white">
                      Web Development Workshop
                    </h3>
                    <p className="text-gray-400">Pundra University</p>
                    <p className="text-gray-300 mt-2 text-[16px]">
                      Certified participant in intensive web development
                      training program
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FaGlobe className="text-success mr-3" />
            <span className="border-b-2 border-success pb-1">
              Hobbies & Interests
            </span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <FaLaptopCode size={24} />, text: "Tech Exploration" },
              { icon: <FaBook size={24} />, text: "Self-Improvement" },
              { icon: <FaTrophy size={24} />, text: "Competitive Programming" },
              { icon: <FaGlobe size={24} />, text: "Cultural Travel" },
              { icon: <FaRunning size={24} />, text: "Team Sports" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-base-200 rounded-xl border border-gray-700 hover:border-success transition-all group"
              >
                <div className="text-success mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white text-center font-medium">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
