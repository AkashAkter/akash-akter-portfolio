"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    year: "2020 - 2024",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Pundra University of Science & Technology, Bogura",
    highlights: [
      { label: "CGPA", value: "3.56 / 4.00", prominent: true },
      { label: "Thesis", value: "Classification of Malicious Financial Applications (IEEE Published)" },
    ],
    featured: true,
  },
  {
    id: 2,
    year: "2018",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Shah Sultan College, Bogura",
    highlights: [
      { label: "GPA", value: "3.92 / 5.00", prominent: true },
      { label: "Discipline", value: "Science Division" },
    ],
    featured: false,
  },
  {
    id: 3,
    year: "2016",
    degree: "Secondary School Certificate (SSC)",
    institution: "Faizullah High School, Bogura",
    highlights: [
      { label: "GPA", value: "5.00 / 5.00 (Golden A+)", prominent: true },
      { label: "Discipline", value: "Science Division" },
    ],
    featured: false,
  },
];

const Educations = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#5D3BEE]/10 text-[#5D3BEE] text-xs font-bold uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Education & Degrees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Formal foundations in computer science theory, algorithms, and applied software engineering.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                item.featured
                  ? "bg-[#111115] text-white shadow-xl ring-2 ring-[#5D3BEE]/40"
                  : "bg-[#FAFAFC] text-[#111827] border border-slate-200/80 shadow-xs hover:shadow-lg"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      item.featured
                        ? "bg-[#5D3BEE] text-white"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.featured ? <FaGraduationCap size={22} /> : <FiBookOpen size={20} />}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      item.featured
                        ? "bg-white/10 text-amber-300"
                        : "bg-slate-200/70 text-slate-700"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-snug">
                    {item.degree}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1.5 ${
                      item.featured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.institution}
                  </p>
                </div>
              </div>

              <div
                className={`pt-6 border-t mt-6 space-y-2 ${
                  item.featured ? "border-white/10" : "border-slate-200"
                }`}
              >
                {item.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="text-xs flex items-start justify-between gap-2">
                    <span
                      className={`font-medium ${
                        item.featured ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {hl.label}:
                    </span>
                    <span
                      className={`font-bold text-right ${
                        hl.prominent
                          ? item.featured
                            ? "text-[#FBBF24]"
                            : "text-[#5D3BEE]"
                          : item.featured
                          ? "text-slate-200"
                          : "text-slate-700"
                      }`}
                    >
                      {hl.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
