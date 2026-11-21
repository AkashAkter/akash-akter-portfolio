"use client";

import React from "react";
import { motion } from "framer-motion";
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

const activities = [
  {
    icon: <SiIeee className="text-xl" />,
    title: "IEEE Symposium Participant",
    subtitle: "IEEE Computer Society BD Chapter",
    date: "June 2023",
    location: "Islamic University, Kushtia",
    description: "Selected participant in a prestigious national symposium on cutting-edge computer science research.",
    badge: "Invited Delegate",
  },
  {
    icon: <FaUsers className="text-xl" />,
    title: "Programming Club Executive",
    subtitle: "Pundra University Programming Club",
    date: "2022 - 2024",
    location: "Bogura, Bangladesh",
    description: "Organized algorithmic problem-solving bootcamps and hackathons for 100+ student developers.",
    badge: "Leadership",
  },
  {
    icon: <FaTrophy className="text-xl" />,
    title: "ICPC Regional Contestant",
    subtitle: "Asia Dhaka Regional Contest 2023",
    date: "2023",
    location: "Dhaka, Bangladesh",
    description: "Competed in high-pressure competitive programming challenges focusing on data structures and algorithms.",
    badge: "Competitive",
  },
  {
    icon: <FaCertificate className="text-xl" />,
    title: "Web Development Bootcamp",
    subtitle: "Pundra University Tech Series",
    date: "2022",
    location: "Bogura, Bangladesh",
    description: "Certified participant in intensive full-stack JavaScript and responsive web design training.",
    badge: "Certified",
  },
];

const interests = [
  { icon: <FaLaptopCode size={20} />, label: "Tech Exploration" },
  { icon: <FaBook size={20} />, label: "Continuous Learning" },
  { icon: <FaTrophy size={20} />, label: "Competitive Coding" },
  { icon: <FaGlobe size={20} />, label: "Cultural Travel" },
  { icon: <FaRunning size={20} />, label: "Athletics & Fitness" },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Beyond The Code
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Leadership & Activities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Active community involvement, competitive programming, and lifelong passions.
          </p>
        </motion.div>

        {/* Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#FAFAFC] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#5D3BEE] flex items-center justify-center shrink-0 shadow-2xs">
                  {act.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base text-[#111827]">
                      {act.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                      {act.badge}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#5D3BEE]">
                    {act.subtitle}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={10} />
                      {act.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt size={10} />
                      {act.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 mt-4 border-t border-slate-200/60">
                {act.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interests Row */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            Personal Interests & Hobbies
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((item, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-2xl bg-[#FAFAFC] border border-slate-200/80 flex items-center gap-2.5 text-xs font-bold text-slate-700 hover:border-[#5D3BEE] transition-colors"
              >
                <span className="text-[#5D3BEE]">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
