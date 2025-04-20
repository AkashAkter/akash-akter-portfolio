import React from "react";
import Image from "next/image";
import projectsData from "../../projects.json";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className=" bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          MY PROJECTS
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
      </div>

      {/* Projects List */}
      <div className="container mx-auto space-y-8">
        {projectsData.projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all overflow-hidden md:p-10"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video relative ">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  quality={85}
                  className="object-cover transition-transform duration-500 rounded-xl"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-6 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-auto w-fit px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
