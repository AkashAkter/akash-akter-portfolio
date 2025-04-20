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
  const extraCurriculars = [
    {
      icon: <SiIeee className="text-2xl text-[#00629B]" />,
      title: "IEEE Symposium Participant",
      subtitle: "IEEE Computer Society BD Chapter",
      badge: "Invited",
      date: "June 9-10, 2023",
      location: "Islamic University, Kushtia",
      description:
        "Selected participant in a prestigious national symposium on cutting-edge computer science research and applications.",
    },
    {
      icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
      title: "Programming Club Executive",
      subtitle: "Pundra University Programming Club",
      description:
        "Organized workshops and coding sessions for 100+ student developers.",
    },
    {
      icon: <FaTrophy className="text-2xl text-cyan-400" />,
      title: "ICPC Participant",
      subtitle: "Asia Dhaka Regional Contest 2023",
      description:
        "Participated in a prestigious algorithmic programming competition.",
    },
    {
      icon: <FaCertificate className="text-2xl text-cyan-400" />,
      title: "Web Development Workshop",
      subtitle: "Pundra University",
      description:
        "Certified participant in intensive web development training program.",
    },
  ];

  const interests = [
    { icon: <FaLaptopCode size={22} />, text: "Tech Exploration" },
    { icon: <FaBook size={22} />, text: "Self-Improvement" },
    { icon: <FaTrophy size={22} />, text: "Competitive Programming" },
    { icon: <FaGlobe size={22} />, text: "Cultural Travel" },
    { icon: <FaRunning size={22} />, text: "Team Sports" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4"
      id="activities"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          ACTIVITIES & INTERESTS
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Beyond coding – my extracurriculars and personal passions
        </p>
      </div>

      <div className="container mx-auto max-w-6xl space-y-20">
        {/* Extra Curricular Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FaUsers className="text-cyan-400 mr-3" />
            Extra Curricular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraCurriculars.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-cyan-400">{item.icon}</div>
                  <div>
                    <h3 className="text-white text-lg font-semibold flex items-center">
                      {item.title}
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                          {item.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-blue-300 text-sm">{item.subtitle}</p>
                    {item.date && (
                      <div className="flex items-center text-sm text-gray-300 mt-2">
                        <FaCalendarAlt className="mr-2 text-cyan-400" />{" "}
                        {item.date}
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center text-sm text-gray-300">
                        <FaMapMarkerAlt className="mr-2 text-cyan-400" />{" "}
                        {item.location}
                      </div>
                    )}
                    <p className="text-gray-300 mt-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FaGlobe className="text-cyan-400 mr-3" />
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-5 bg-gray-800/40 border border-gray-700 rounded-xl hover:border-cyan-400 transition-all group"
              >
                <div className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white text-center text-sm">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
