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
      icon: <FaGraduationCap size={22} />,
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
      icon: <FaSchool size={22} />,
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
      icon: <FaAward size={22} />,
    },
  ];

  return (
    // Changed: Section background and decorative elements to match the new theme
    <section
      id="education"
      className="relative bg-slate-50 py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-200 to-transparent opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-teal-500 opacity-5 blur-3xl"></div>

      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              Academic Journey
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
            My educational background and achievements
          </p>
        </motion.div>

        {/* Unique Timeline Layout */}
        <div className="grid gap-y-16 gap-x-8 md:grid-cols-3">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative"
            >
              {/* Card */}
              <div
                // Changed: Card styling to use new palette directly
                className="h-full p-6 pt-10 rounded-xl border-2 border-teal-400 bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon with background */}
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Year */}
                <div className="text-sm font-semibold text-teal-600 mb-2">
                  {item.year}
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className="text-slate-600 mb-5 border-l-2 border-teal-300 pl-3 py-1 italic">
                  {item.institution}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <span
                        // Changed: Bullet point colors
                        className={`inline-block w-2 h-2 flex-shrink-0 rounded-full mt-1.5 mr-2 ${
                          detail.highlight ? "bg-teal-500" : "bg-slate-300"
                        }`}
                      ></span>
                      {/* Changed: Text colors */}
                      <span className="text-sm text-slate-700">
                        <span className="font-semibold">{detail.label}:</span>{" "}
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector (visible on desktop) */}
              {index < educationData.length - 1 && (
                // Changed: Connector color
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-slate-300 transform translate-x-full -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Educations;
