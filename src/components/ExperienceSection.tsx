"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Jr. Web Developer",
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
    <section id="experience" className="bg-[#F9F7F7] pt-32 -mt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with consistent animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            <span className="relative inline-block">
              WORK EXPERIENCE
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
            My professional journey from internship to junior developer
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#DBE2EF] -z-10"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full border-4 border-[#3F72AF] bg-white -ml-2 ${
                  exp.current ? "animate-pulse" : ""
                }`}
              ></div>

              {/* Experience card */}
              <div
                className={`bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#DBE2EF] shadow-sm hover:shadow-md transition-all ${
                  exp.current ? "border-[#3F72AF]" : ""
                }`}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-6`}
                >
                  <div className="w-20 h-20 min-w-[80px] rounded-lg bg-white p-2 border border-[#DBE2EF] shadow-sm">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-between">
                      <h2 className="text-xl font-bold text-[#112D4E]">
                        {exp.role}
                      </h2>
                      {exp.current && (
                        <span className="px-3 py-1 bg-[#3F72AF]/20 text-[#3F72AF] rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg text-[#3F72AF] font-medium">
                      {exp.company}
                    </h3>
                    <p className="text-[#112D4E]/80 mb-4 text-sm">
                      {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-[#112D4E]">
                          <span className="text-[#3F72AF] mr-2 mt-1">•</span>
                          <span className="text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
