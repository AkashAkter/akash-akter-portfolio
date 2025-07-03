"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaSchool } from "react-icons/fa";

const Educations = () => {
  const educationData = [
    {
      id: 1,
      year: "2020 - 2024",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Pundra University of Science & Technology, Bogura",
      details: [
        { label: "CGPA", value: "3.56/4.00", highlight: true },
        {
          label: "Thesis",
          value: "Classification of Malicious Financial Applications",
        },
      ],
      icon: <FaGraduationCap />,
      colorClass: "border-[#3F72AF] text-[#3F72AF]",
    },
    {
      id: 2,
      year: "2018",
      degree: "Higher Secondary School Certificate",
      institution: "Govt. Shah Sultan College, Bogura",
      details: [
        { label: "GPA", value: "3.92/5.00", highlight: true },
        { label: "Group", value: "Science", highlight: true },
      ],
      icon: <FaSchool />,
      colorClass: "border-[#3F72AF] text-[#3F72AF]",
    },
    {
      id: 3,
      year: "2016",
      degree: "Secondary School Certificate",
      institution: "Faizullah High School, Bogura",
      details: [
        { label: "GPA", value: "5.00/5.00", highlight: true },
        { label: "Group", value: "Science", highlight: true },
      ],
      icon: <FaAward />,
      colorClass: "border-[#3F72AF] text-[#3F72AF]",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-[#F9F7F7] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#112D4E] to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#3F72AF] opacity-5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            <span className="relative inline-block">
              Academic Journey
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
            My educational background and achievements
          </p>
        </motion.div>

        {/* Unique Timeline Layout */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div
                className={`h-full p-6 rounded-2xl border-2 ${item.colorClass} bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Icon with background */}
                <div
                  className={`absolute -top-6 left-6 w-12 h-12 rounded-full ${item.colorClass} bg-white border-2 flex items-center justify-center text-xl`}
                >
                  {item.icon}
                </div>

                {/* Year */}
                <div className="text-sm font-medium text-[#3F72AF] mb-2">
                  {item.year}
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-[#112D4E] mb-3 leading-tight">
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className="text-[#112D4E]/90 mb-5 border-l-2 border-[#3F72AF] pl-3 py-1 italic">
                  {item.institution}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                          detail.highlight ? "bg-[#3F72AF]" : "bg-[#DBE2EF]"
                        }`}
                      ></span>
                      <span className="text-sm text-[#112D4E]">
                        <span className="font-medium">{detail.label}:</span>{" "}
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector (visible on desktop) */}
              {index < educationData.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-[#DBE2EF] transform translate-x-full -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#3F72AF] to-transparent"></div>
      </div>
    </section>
  );
};

export default Educations;
