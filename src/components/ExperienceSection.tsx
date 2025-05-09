"use client";

import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Jr. Web Developer",
      company: "BDcalling",
      duration: "Feb 2025 - Present",
      points: [
        "Developing full-stack applications using React.js, Next.js, and Node.js",
        "Building Shopify CMS solutions for e-commerce clients",
        "Leading client communications and requirements gathering",
        "Implementing responsive designs with Tailwind CSS",
        "Creating RESTful APIs and integrating services",
        "Optimizing web performance and SEO",
      ],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQH74yKCkI-0ug/company-logo_200_200/company-logo_200_200/0/1709979739907/bdcallingitltd_logo?e=1749686400&v=beta&t=krEkSrhKcnhUb-p2wxpvKIu3WwgegotylA9PywmCGeo",
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
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFangXvhi3clQ/company-logo_200_200/company-logo_200_200/0/1630641239879/brac_aarong_logo?e=1749686400&v=beta&t=7fVB6jY1ocVcsRtIfAg4oAQRuJ46Wf3VrYk6ST-jgSM",
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
      logo: "https://media.licdn.com/dms/image/v2/C560BAQH8jG3qpU-bGg/company-logo_200_200/company-logo_200_200/0/1630650684502/code_studio4_logo?e=1749686400&v=beta&t=xOG7YI-6fyZRprMd3jOOpmWcpE_30NOQi_lxVVkawXo",
    },
  ];

  return (
    <div
      className=" bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4"
      id="experience"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          WORK EXPERIENCE
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          My professional journey from internship to junior developer
        </p>
      </div>

      <div className="container mx-auto max-w-4xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl bg-gray-800/50 border ${
              exp.current ? "border-cyan-400" : "border-gray-700"
            } hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-20 h-20 object-contain bg-gray-700 p-2 rounded-lg self-start"
              />

              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                  {exp.current && (
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xl text-cyan-400 font-medium">
                  {exp.company}
                </h3>
                <p className="text-gray-400 mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
