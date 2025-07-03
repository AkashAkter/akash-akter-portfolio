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
      icon: <FaGraduationCap className="text-lg" />,
      colorClass: "border-blue-600 text-blue-600",
      bgClass: "bg-blue-50",
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
      icon: <FaSchool className="text-lg" />,
      colorClass: "border-emerald-600 text-emerald-600",
      bgClass: "bg-emerald-50",
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
      icon: <FaAward className="text-lg" />,
      colorClass: "border-amber-600 text-amber-600",
      bgClass: "bg-amber-50",
    },
  ];

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Education
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -z-10"></div>

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
                className={`absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full border-4 ${item.colorClass} ${item.bgClass} flex items-center justify-center -ml-4 z-10`}
              >
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Education card */}
              <div
                className={`relative p-6 rounded-xl ${item.bgClass} border ${item.colorClass} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
              >
                {/* Decorative elements */}
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${item.colorClass.replace(
                    "border-",
                    "bg-"
                  )}`}
                ></div>
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  {item.icon}
                </div>

                <div className="relative">
                  <span
                    className={`text-sm font-semibold ${item.colorClass} mb-2 inline-block`}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.institution}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${
                          detail.highlight
                            ? `${item.bgClass.replace(
                                "bg-",
                                "bg-opacity-70 "
                              )} ${item.colorClass} border`
                            : "bg-white text-gray-700 border border-gray-200"
                        }`}
                      >
                        {detail.label}:{" "}
                        <span className="font-semibold">{detail.value}</span>
                      </span>
                    ))}
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

export default Educations;
