"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaServer,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projectsData from "../../../../projects.json";

const ProjectDetails = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData.projects.find(
    (p) => p.id.toString() === projectId
  );

  if (!project) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Back to Projects</span>
        </button>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Carousel */}
          <div className="relative w-full aspect-video">
            <Carousel
              showArrows
              showThumbs={project.additionalImages.length > 0}
              infiniteLoop
              emulateTouch
              className="rounded-t-xl"
            >
              {[project.mainImage, ...project.additionalImages].map(
                (img, idx) => (
                  <div key={idx} className="relative aspect-video">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-contain bg-black"
                      quality={95}
                      priority={idx === 0}
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>

          {/* Content */}
          <div className="p-8 text-white">
            <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {project.title}
            </h1>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm font-medium border border-cyan-400 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-300 mb-2 border-b border-cyan-400/40 pb-2">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.detailDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-300 mb-2 border-b border-cyan-400/40 pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-end mt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-cyan-500 text-white hover:bg-transparent hover:text-cyan-400 border border-cyan-500 transition"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white"
              >
                <FaGithub className="mr-2" />
                Client Code
              </a>
              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white"
                >
                  <FaServer className="mr-2" />
                  Server Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
