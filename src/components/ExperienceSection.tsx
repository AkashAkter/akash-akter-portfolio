"use client";
import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Jr. Web Developer",
      company: "BDcalling",
      duration: "Feb 2024 - Present",
      description: [
        "Developing full-stack applications using React.js, Next.js, and Node.js with MongoDB",
        "Building and customizing Shopify CMS solutions for e-commerce clients",
        "Leading client communications to gather requirements and deliver tailored solutions",
        "Implementing responsive designs with Tailwind CSS and Material UI",
        "Creating RESTful APIs and integrating third-party services",
        "Optimizing web performance and implementing SEO best practices",
      ],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQH74yKCkI-0ug/company-logo_200_200/company-logo_200_200/0/1709979739907/bdcallingitltd_logo?e=1749686400&v=beta&t=krEkSrhKcnhUb-p2wxpvKIu3WwgegotylA9PywmCGeo",
    },
    {
      id: 2,
      role: "Sales Associate",
      company: "Aarong",
      duration: "Mar 2024 - Jan 2025",
      description: [
        "Demonstrated leadership by mentoring new team members and improving store processes",
        "Developed exceptional client communication and problem-solving skills in high-volume retail environment",
        "Implemented creative merchandising strategies that enhanced product visibility",
        "Operated POS systems while maintaining 100% accuracy in transactions",
        "Resolved customer issues with innovative solutions, increasing satisfaction scores",
        "Collaborated with management on inventory decisions based on sales trends",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFangXvhi3clQ/company-logo_200_200/company-logo_200_200/0/1630641239879/brac_aarong_logo?e=1749686400&v=beta&t=7fVB6jY1ocVcsRtIfAg4oAQRuJ46Wf3VrYk6ST-jgSM",
    },
    {
      id: 3,
      role: "Web Development Intern",
      company: "Code Studio",
      duration: "Jan 2024 - Mar 2024",
      description: [
        "Built dynamic web applications using raw HTML5, CSS3, and JavaScript (ES6+)",
        "Developed CRUD applications with MySQL database backend",
        "Created responsive layouts with CSS Grid and Flexbox",
        "Implemented form validations and interactive UI components",
        "Collaborated on team projects using Git version control",
        "Debugged and optimized existing codebases",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQH8jG3qpU-bGg/company-logo_200_200/company-logo_200_200/0/1630650684502/code_studio4_logo?e=1749686400&v=beta&t=xOG7YI-6fyZRprMd3jOOpmWcpE_30NOQi_lxVVkawXo",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
            letterSpacing: "0.1em",
          }}
        >
          WORK EXPERIENCE
        </h1>
        <div className="w-24 h-1 bg-success mx-auto"></div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          My professional journey from internship to junior developer
        </p>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                exp.id === 1 ? "border-success" : "border-gray-700"
              }`}
            >
              <div className="card-body p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <div className="w-24 rounded-xl bg-base-300 p-2">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title text-3xl text-white mb-1">
                      {exp.role}
                      {exp.id === 1 && (
                        <span className="badge badge-success badge-lg ml-3">
                          Current
                        </span>
                      )}
                    </h2>
                    <h3 className="text-xl text-success font-semibold mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-gray-400 mb-4 text-lg">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-success mr-2">✓</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
