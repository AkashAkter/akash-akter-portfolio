"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiBriefcase, FiCalendar, FiCheck } from "react-icons/fi";

const experiences = [
  {
    role: "Full-Stack Web Developer",
    company: "Betopia Group",
    duration: "Feb 2025 - Present",
    type: "Full-time",
    points: [
      "Architecting and delivering full-stack web applications using React 19, Next.js 16, and Node.js.",
      "Developing headless e-commerce solutions with custom Shopify CMS and automated sync.",
      "Spearheading client discovery sessions, requirement definitions, and agile sprints.",
      "Implementing responsive Tailwind designs, reducing bundle sizes, and optimizing Web Vitals.",
      "Building high-throughput RESTful endpoints and integrating multi-tier payment gateways.",
    ],
    logo: "/betopia.jpeg",
    current: true,
  },
  {
    role: "Sales Associate",
    company: "Aarong",
    duration: "Mar 2024 - Jan 2025",
    type: "Contract",
    points: [
      "Mentored cross-functional team members and streamlined in-store POS workflow operations.",
      "Cultivated strategic client communications and resolved customer escalations effectively.",
      "Maintained 100% precision in inventory management and POS retail transactions.",
      "Spearheaded creative merchandising campaigns that boosted engagement metrics.",
    ],
    logo: "/aarong.png",
  },
  {
    role: "Web Development Intern",
    company: "Code Studio",
    duration: "Jan 2024 - Mar 2024",
    type: "Internship",
    points: [
      "Engineered full CRUD applications utilizing JavaScript, modern CSS Grid/Flexbox, and MySQL.",
      "Created reusable UI components, modal flows, and client-side form validation mechanisms.",
      "Collaborated via Git branch workflows and executed automated code quality reviews.",
    ],
    logo: "/code-studio.png",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAFAFC] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professional trajectory demonstrating progressive engineering responsibility and measurable client impact.
          </p>
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-xs hover:shadow-xl ${
                exp.current
                  ? "border-[#5D3BEE]/40 ring-1 ring-[#5D3BEE]/15"
                  : "border-slate-200/80"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full rounded-lg"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#5D3BEE]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/80">
                  <FiCalendar />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="pt-6 space-y-2.5">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#5D3BEE]/10 text-[#5D3BEE] flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck size={12} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
