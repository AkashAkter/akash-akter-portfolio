"use client";
import React from "react";
import Image from "next/image";
import projectsData from "../../projects.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Using a consistent icon

const ProjectSection = () => {
  return (
    // Changed: Section background to white for contrast, and standardized padding.
    <section id="projects" className="bg-white py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              MY PROJECTS
              <motion.span
                // Changed: Gradient to match new palette
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-slate-800"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          <p className="text-teal-600 text-center text-sm md:text-base font-medium">
            A showcase of my development work and solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projectsData.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              // Changed: Card background, border, and hover effect for better aesthetics
              className="bg-slate-50 rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2 aspect-video relative overflow-hidden">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  {/* Changed: Image overlay color */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-6 md:p-8 flex flex-col">
                  {/* Changed: Text colors */}
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    {/* Changed: Heading color */}
                    <h3 className="text-lg font-semibold text-teal-600 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          // Changed: Tech tag colors for better visibility
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-teal-100 text-teal-800 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      passHref
                      legacyBehavior
                    >
                      <motion.a
                        // Changed: Button colors and refined hover animation
                        className="inline-block w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-slate-800 to-teal-600 text-white font-semibold shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 group relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          View Details
                          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    </Link>
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

export default ProjectSection;
