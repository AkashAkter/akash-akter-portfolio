"use client";
import React from "react";
import Image from "next/image";
import projectsData from "../../projects.json";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[#F9F7F7] pt-32 -mt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            <span className="relative inline-block">
              MY PROJECTS
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
            A showcase of my development work and solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projectsData.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#DBE2EF] shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <motion.div
                  className="lg:w-1/2 aspect-video relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-6 md:p-8 flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#112D4E] mb-3">
                    {project.title}
                  </h2>
                  <p className="text-[#112D4E]/90 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#3F72AF] mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#DBE2EF] text-[#112D4E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-auto w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-[#112D4E] to-[#3F72AF] text-white hover:from-[#3F72AF] hover:to-[#112D4E] transition-all group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
