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
  // Data for the sections
  const extraCurriculars = [
    {
      icon: <SiIeee className="text-2xl" />,
      title: "IEEE Symposium Participant",
      subtitle: "IEEE Computer Society BD Chapter",
      badge: "Invited",
      date: "June 9-10, 2023",
      location: "Islamic University, Kushtia",
      description:
        "Selected participant in a prestigious national symposium on cutting-edge computer science research and applications.",
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Programming Club Executive",
      subtitle: "Pundra University Programming Club",
      description:
        "Organized workshops and coding sessions for 100+ student developers.",
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "ICPC Participant",
      subtitle: "Asia Dhaka Regional Contest 2023",
      description:
        "Participated in a prestigious algorithmic programming competition.",
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Web Development Workshop",
      subtitle: "Pundra University",
      description:
        "Certified participant in intensive web development training program.",
    },
  ];

  const interests = [
    { icon: <FaLaptopCode size={24} />, text: "Tech Exploration" },
    { icon: <FaBook size={24} />, text: "Self-Improvement" },
    { icon: <FaTrophy size={24} />, text: "Competitive Programming" },
    { icon: <FaGlobe size={24} />, text: "Cultural Travel" },
    { icon: <FaRunning size={24} />, text: "Team Sports" },
  ];

  return (
    // Changed: Section background to white and standardized padding
    <section id="activities" className="bg-white py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6">
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
              ACTIVITIES & INTERESTS
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
            Beyond coding – my extracurriculars and personal passions
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {/* Extra Curricular Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              // Changed: Subheading styling
              className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-4"
            >
              <span className="p-3 rounded-full bg-teal-100 text-teal-600">
                <FaUsers className="text-xl" />
              </span>
              Extra Curricular
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extraCurriculars.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Changed: Redesigned activity card for consistency */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all h-full">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-slate-800 text-lg font-semibold flex items-center gap-2">
                          {item.title}
                          {item.badge && (
                            <span className="px-2 py-0.5 text-xs bg-teal-100 text-teal-800 rounded-full border border-teal-200">
                              {item.badge}
                            </span>
                          )}
                        </h3>
                        <p className="text-teal-600 text-sm font-medium">
                          {item.subtitle}
                        </p>
                        <div className="text-xs text-slate-500 mt-2 space-y-1">
                          {item.date && (
                            <div className="flex items-center gap-2">
                              <FaCalendarAlt className="text-teal-600" />
                              <span>{item.date}</span>
                            </div>
                          )}
                          {item.location && (
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-teal-600" />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-600 mt-3 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              // Changed: Subheading styling
              className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-4"
            >
              <span className="p-3 rounded-full bg-gradient-to-r from-slate-800 to-teal-500 text-white">
                <FaGlobe className="text-xl" />
              </span>
              Hobbies & Interests
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  {/* Changed: Simplified and cleaned up interest card design */}
                  <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-100 border border-transparent rounded-xl transition-all h-full hover:bg-white hover:border-teal-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="text-teal-500 mb-3">{item.icon}</div>
                    <h3 className="text-slate-700 font-medium text-sm">
                      {item.text}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
