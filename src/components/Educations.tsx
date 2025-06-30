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
    <section id="education" className="bg-[#F9F7F7] pt-32 -mt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
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
              EDUCATION
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
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#DBE2EF] -z-10"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative pl-12 md:pl-0 mb-12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full border-2 ${item.colorClass} bg-white flex items-center justify-center -ml-3`}
              >
                <div className="text-sm">{item.icon}</div>
              </div>

              {/* Education card */}
              <div
                className={`bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#DBE2EF] shadow-sm hover:shadow-md transition-all ${
                  item.colorClass.includes("border-[#3F72AF]")
                    ? "hover:border-[#3F72AF]"
                    : ""
                }`}
              >
                <div className="text-sm font-medium text-[#3F72AF] mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-[#112D4E] mb-2">
                  {item.degree}
                </h3>
                <p className="text-[#112D4E]/90 mb-4">{item.institution}</p>

                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full ${
                        detail.highlight
                          ? "bg-[#3F72AF]/10 text-[#3F72AF] border border-[#3F72AF]/20"
                          : "bg-[#DBE2EF] text-[#112D4E]"
                      }`}
                    >
                      {detail.label}:{" "}
                      <span className="font-semibold">{detail.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
