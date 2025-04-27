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
import { motion } from "framer-motion";

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
    {
      icon: <FaLaptopCode size={22} />,
      text: "Tech Exploration",
      color: "bg-cyan-500",
    },
    {
      icon: <FaBook size={22} />,
      text: "Self-Improvement",
      color: "bg-blue-500",
    },
    {
      icon: <FaTrophy size={22} />,
      text: "Competitive Programming",
      color: "bg-purple-500",
    },
    {
      icon: <FaGlobe size={22} />,
      text: "Cultural Travel",
      color: "bg-emerald-500",
    },
    {
      icon: <FaRunning size={22} />,
      text: "Team Sports",
      color: "bg-amber-500",
    },
  ];

  return (
    <div
      className=" bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4"
      id="activities"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3 p-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600">
              <FaGlobe className="text-white" />
            </span>
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 rounded-xl ${item.color} opacity-0 group-hover:opacity-100 blur-md transition-all duration-300`}
                ></div>
                <div className="relative flex flex-col items-center p-6 bg-gray-800/70 border border-gray-700 rounded-xl group-hover:border-transparent transition-all">
                  <div
                    className={`p-3 rounded-full ${item.color}/10 text-white mb-3 group-hover:${item.color} transition-colors`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white text-center text-sm font-medium">
                    {item.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
