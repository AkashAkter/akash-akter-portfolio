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
      icon: <SiIeee className="text-2xl" />,
      title: "IEEE Symposium Participant",
      subtitle: "IEEE Computer Society BD Chapter",
      badge: "Invited",
      date: "June 9-10, 2023",
      location: "Islamic University, Kushtia",
      description:
        "Selected participant in a prestigious national symposium on cutting-edge computer science research and applications.",
      color: "bg-[#00629B]/10 border-[#00629B]/30 text-[#00629B]",
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Programming Club Executive",
      subtitle: "Pundra University Programming Club",
      description:
        "Organized workshops and coding sessions for 100+ student developers.",
      color: "bg-[#3F72AF]/10 border-[#3F72AF]/30 text-[#3F72AF]",
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "ICPC Participant",
      subtitle: "Asia Dhaka Regional Contest 2023",
      description:
        "Participated in a prestigious algorithmic programming competition.",
      color: "bg-[#112D4E]/10 border-[#112D4E]/30 text-[#112D4E]",
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Web Development Workshop",
      subtitle: "Pundra University",
      description:
        "Certified participant in intensive web development training program.",
      color: "bg-[#3F72AF]/10 border-[#3F72AF]/30 text-[#3F72AF]",
    },
  ];

  const interests = [
    {
      icon: <FaLaptopCode size={22} />,
      text: "Tech Exploration",
      color: "from-[#3F72AF] to-[#112D4E]",
    },
    {
      icon: <FaBook size={22} />,
      text: "Self-Improvement",
      color: "from-[#112D4E] to-[#3F72AF]",
    },
    {
      icon: <FaTrophy size={22} />,
      text: "Competitive Programming",
      color: "from-[#00629B] to-[#3F72AF]",
    },
    {
      icon: <FaGlobe size={22} />,
      text: "Cultural Travel",
      color: "from-[#3F72AF] to-[#00629B]",
    },
    {
      icon: <FaRunning size={22} />,
      text: "Team Sports",
      color: "from-[#112D4E] to-[#00629B]",
    },
  ];

  return (
    <section id="activities" className="bg-[#F9F7F7] pt-32 -mt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
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
              ACTIVITIES & INTERESTS
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
            Beyond coding – my extracurriculars and personal passions
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Extra Curricular Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#112D4E] mb-8 flex items-center"
            >
              <span className="mr-3 p-3 rounded-full bg-[#3F72AF]/10 text-[#3F72AF]">
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
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`${item.color} rounded-xl p-6 border hover:shadow-lg transition-all h-full`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`p-3 rounded-full ${item.color
                          .replace("text-", "bg-")
                          .replace("/10", "/20")}`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-[#112D4E] text-lg font-semibold flex items-center">
                          {item.title}
                          {item.badge && (
                            <span className="ml-2 px-2 py-1 text-xs bg-[#3F72AF]/10 text-[#3F72AF] rounded-full border border-[#3F72AF]/30">
                              {item.badge}
                            </span>
                          )}
                        </h3>
                        <p className="text-[#3F72AF] text-sm font-medium">
                          {item.subtitle}
                        </p>
                        {item.date && (
                          <div className="flex items-center text-sm text-[#112D4E]/80 mt-2">
                            <FaCalendarAlt className="mr-2 text-[#3F72AF]" />{" "}
                            {item.date}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center text-sm text-[#112D4E]/80">
                            <FaMapMarkerAlt className="mr-2 text-[#3F72AF]" />{" "}
                            {item.location}
                          </div>
                        )}
                        <p className="text-[#112D4E]/90 mt-3">
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
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#112D4E] mb-8 flex items-center"
            >
              <span className="mr-3 p-3 rounded-full bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-md transition-all duration-300`}
                  ></div>
                  <div className="relative flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm border border-[#DBE2EF] rounded-xl group-hover:border-transparent transition-all h-full">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${item.color}/10 text-[#112D4E] mb-3 group-hover:bg-gradient-to-br group-hover:${item.color} group-hover:text-white transition-all`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-[#112D4E] text-center text-sm font-medium">
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
