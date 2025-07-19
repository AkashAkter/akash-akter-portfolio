"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Web Developer",
      company: "Betopia Group",
      duration: "Feb 2025 - Present",
      points: [
        "Developing full-stack applications using React.js, Next.js, and Node.js",
        "Building Shopify CMS solutions for e-commerce clients",
        "Leading client communications and requirements gathering",
        "Implementing responsive designs with Tailwind CSS",
        "Creating RESTful APIs and integrating services",
        "Optimizing web performance and SEO",
      ],
      logo: "/betopia.jpeg",
      current: true,
    },
    {
      role: "Sales Associate",
      company: "Aarong",
      duration: "Mar 2024 - Jan 2025",
      points: [
        "Mentored new team members and improved store processes",
        "Developed client communication and problem-solving skills",
        "Implemented creative merchandising strategies",
        "Maintained 100% accuracy in POS transactions",
        "Increased customer satisfaction scores",
        "Collaborated on inventory decisions",
      ],
      logo: "/aarong.png",
    },
    {
      role: "Web Development Intern",
      company: "Code Studio",
      duration: "Jan 2024 - Mar 2024",
      points: [
        "Built web apps with HTML5, CSS3, and JavaScript",
        "Developed CRUD applications with MySQL",
        "Created responsive layouts with CSS Grid/Flexbox",
        "Implemented form validations and UI components",
        "Collaborated using Git version control",
        "Debugged and optimized codebases",
      ],
      logo: "/code-studio.png",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-50 py-20 sm:py-24 md:py-32 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-3 sm:mb-4">
            <span className="relative inline-block">
              WORK EXPERIENCE
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-slate-800"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          <p className="text-teal-600 text-sm sm:text-base font-medium">
            My professional journey and accomplishments
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-5 md:left-1/2 top-0 h-full w-0.5 bg-slate-200" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`relative pl-12 sm:pl-14 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-5 w-6 h-6 flex items-center justify-center -translate-x-1/2`}
                >
                  <div
                    className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-4 ${
                      exp.current
                        ? "border-teal-500 bg-teal-500 animate-pulse"
                        : "border-teal-500 bg-white"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? "md:ml-[calc(50%+2rem)]"
                      : "md:ml-0 md:mr-[calc(50%+2rem)]"
                  }`}
                >
                  <div
                    className={`bg-white p-5 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      exp.current
                        ? "border-teal-400 shadow-md"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] sm:min-w-[64px] rounded-lg bg-white p-1.5 sm:p-2 border border-slate-200 shadow-sm">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-x-2 mb-1">
                          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                            {exp.role}
                          </h2>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold self-start sm:self-center">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg text-teal-600 font-semibold">
                          {exp.company}
                        </h3>
                        <p className="text-slate-500 mb-3 sm:mb-4 text-xs sm:text-sm">
                          {exp.duration}
                        </p>
                        <ul className="space-y-1.5 sm:space-y-2 text-left">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <HiCheckCircle
                                className="text-teal-500 mt-0.5 sm:mt-1 shrink-0"
                                size={16}
                              />
                              <span className="text-slate-600 text-xs sm:text-sm md:text-base">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
