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
import { motion } from "framer-motion";

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
    <section className="min-h-screen bg-[#F9F7F7] pt-16 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-[#3F72AF] hover:text-[#112D4E] transition-colors"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-medium">Back to Projects</span>
        </motion.button>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#DBE2EF] shadow-lg overflow-hidden"
        >
          {/* Carousel */}
          <div className="relative w-full aspect-video bg-[#112D4E]/5">
            <Carousel
              showArrows
              showThumbs={project.additionalImages.length > 0}
              infiniteLoop
              emulateTouch
              className="rounded-t-xl"
              renderArrowPrev={(clickHandler, hasPrev) => (
                <button
                  onClick={clickHandler}
                  disabled={!hasPrev}
                  className="absolute left-4 top-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                >
                  ←
                </button>
              )}
              renderArrowNext={(clickHandler, hasNext) => (
                <button
                  onClick={clickHandler}
                  disabled={!hasNext}
                  className="absolute right-4 top-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                >
                  →
                </button>
              )}
            >
              {[project.mainImage, ...project.additionalImages].map(
                (img, idx) => (
                  <div key={idx} className="relative aspect-video">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-contain"
                      quality={95}
                      priority={idx === 0}
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>

          {/* Content */}
          <div className="p-8 text-[#112D4E]">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-3 py-1 rounded-full text-sm font-medium border border-[#3F72AF]/30 text-[#3F72AF] bg-[#3F72AF]/10 hover:bg-[#3F72AF]/20 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#3F72AF] mb-3 border-b border-[#DBE2EF] pb-2">
                Overview
              </h2>
              <p className="text-[#112D4E]/90 leading-relaxed">
                {project.detailDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#3F72AF] mb-3 border-b border-[#DBE2EF] pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#112D4E]/90">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-[#3F72AF] mt-1">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-end mt-8">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#112D4E] to-[#3F72AF] text-white hover:from-[#3F72AF] hover:to-[#112D4E] transition-all group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaExternalLinkAlt />
                    Live Demo
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              )}
              <motion.a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF]/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub />
                Client Code
              </motion.a>
              {project.serverRepo && (
                <motion.a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF]/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaServer />
                  Server Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
