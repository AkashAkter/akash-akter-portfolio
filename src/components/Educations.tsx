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
      colorClass: "border-cyan-400 text-cyan-400",
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
      colorClass: "border-blue-400 text-blue-400",
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
      colorClass: "border-purple-400 text-purple-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1a2032] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[3%] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/30 via-blue-500/50 to-purple-500/30 transform -translate-x-1/2"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative pl-10 md:pl-0 mb-12 ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right"
                  : "md:pl-8 md:text-left"
              } md:w-1/2 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full border-2 ${item.colorClass} bg-[#0f172a] flex items-center justify-center transform -translate-x-1/2 z-10`}
              >
                <div className="text-sm">{item.icon}</div>
              </div>

              {/* Education card */}
              <div
                className={`p-6 rounded-xl bg-[#1e293b]/70 backdrop-blur-sm border ${item.colorClass}/30 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-sm font-mono text-gray-400 mb-1">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-gray-300 mb-4">{item.institution}</p>

                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full ${
                        detail.highlight
                          ? `${item.colorClass}/20 ${item.colorClass.replace(
                              "border",
                              "text"
                            )} border ${item.colorClass}/30`
                          : "bg-[#334155]/50 text-gray-300"
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
