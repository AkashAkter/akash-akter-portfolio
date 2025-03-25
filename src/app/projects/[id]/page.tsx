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
  const params = useParams(); // Correct way to get dynamic route params in a client component
  const projectId = params.id as string; // Ensure it's treated as a string

  const project = projectsData.projects.find(
    (p) => p.id.toString() === projectId
  );

  if (!project) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <button
          onClick={() => router.back()}
          className="btn btn-ghost mb-8 text-white hover:bg-success/20 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        <div className="card bg-neutral shadow-2xl border border-gray-700 overflow-hidden">
          <div className="relative aspect-video w-full">
            <Carousel
              showArrows={true}
              showThumbs={project.additionalImages.length > 0}
              infiniteLoop={true}
              dynamicHeight={false}
              emulateTouch={true}
              className="rounded-t-lg"
            >
              {[project.mainImage, ...project.additionalImages].map(
                (img, index) => (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain bg-black"
                      quality={100}
                      priority={index === 0}
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>

          <div className="card-body p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge badge-lg bg-success/20 text-success border border-success/50 hover:bg-success/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-3 border-b border-success/50 pb-2">
                Project Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-3 border-b border-success/50 pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-success mt-1">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 justify-end mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success text-white hover:bg-transparent hover:text-success hover:border-success"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-success"
              >
                <FaGithub className="mr-2" />
                Client Code
              </a>
              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-success"
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
