import React from "react";
import Image from "next/image";
import projectsData from "../../projects.json";

const ProjectSection = () => {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
            letterSpacing: "0.1em",
          }}
        >
          MY WORKS
        </h1>
        <div className="w-24 h-1 bg-success mx-auto"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6 aspect-video relative">
                  {" "}
                  {/* Added aspect-video */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      quality={85}
                      priority={project.id === 1}
                    />
                  </div>
                </div>
                <div className="card-body lg:w-1/2 p-8">
                  <h2 className="card-title text-4xl text-white mb-4 font-extrabold">
                    {project.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl text-white font-bold mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge badge-lg border-2 border-gray-600 text-white bg-transparent
                          hover:bg-white hover:border-success hover:text-success 
                          hover:shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#00ff00] 
                          transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-success btn-lg text-white text-lg 
                    hover:bg-transparent hover:text-success hover:border-success
                    hover:shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#00ff00] 
                    transition-all duration-300"
                    >
                      View Details
                    </button>
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

export default ProjectSection;
