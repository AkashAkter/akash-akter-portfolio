"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaServer,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projectsData from "../../../../projects.json";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectDetails = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData.projects.find(
    (p) => p.id.toString() === projectId
  );

  // This check should ideally happen in a loading state or server-side
  if (!project) {
    // router.push("/") can cause issues during server-side rendering.
    // A "Not Found" component would be better here.
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        Project not found.
      </div>
    );
  }

  return (
    // Changed: Section background
    <section className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          // Changed: Back button colors
          className="group mb-8 flex items-center gap-2 text-teal-600 hover:text-slate-800 transition-colors"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-semibold">Back to Projects</span>
        </motion.button>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // Changed: Card background and border
          className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden"
        >
          {/* Carousel */}
          <div className="relative w-full aspect-video bg-slate-100">
            <Carousel
              showArrows
              showThumbs={project.additionalImages.length > 0}
              infiniteLoop
              emulateTouch
              autoPlay
              interval={5000}
              className="project-carousel"
              // Changed: Carousel arrow styles
              renderArrowPrev={(clickHandler, hasPrev) => (
                <button
                  onClick={clickHandler}
                  disabled={!hasPrev}
                  className="absolute left-4 top-1/2 z-10 p-2 bg-white/70 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all text-slate-800 disabled:opacity-50"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={18} />
                </button>
              )}
              renderArrowNext={(clickHandler, hasNext) => (
                <button
                  onClick={clickHandler}
                  disabled={!hasNext}
                  className="absolute right-4 top-1/2 z-10 p-2 bg-white/70 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all text-slate-800 disabled:opacity-50"
                  aria-label="Next image"
                >
                  <FaChevronRight size={18} />
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Changed: Title color */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {project.title}
            </h1>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  // Changed: Tech tag styling
                  className="px-3 py-1 rounded-full text-sm font-medium border border-teal-200 text-teal-800 bg-teal-100"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-teal-600 mb-3 border-b border-slate-200 pb-2">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {project.detailDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-teal-600 mb-4 border-b border-slate-200 pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    // Changed: Replaced bullet points with icons
                    className="flex gap-3 items-start"
                  >
                    <HiCheckCircle
                      className="text-teal-500 mt-1 shrink-0"
                      size={20}
                    />
                    <span className="text-slate-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-end mt-10 border-t border-slate-200 pt-6">
              {project.liveUrl && (
                <Link href={project.liveUrl} passHref legacyBehavior>
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    // Changed: Primary button styling
                    className="inline-block w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gradient-to-r from-slate-800 to-teal-600 text-white font-semibold shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 group relative overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </Link>
              )}
              <Link href={project.clientRepo} passHref legacyBehavior>
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  // Changed: Secondary button styling
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-400 text-slate-600 font-semibold hover:bg-slate-100 hover:text-slate-800 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaGithub /> Client Code
                </motion.a>
              </Link>
              {project.serverRepo && (
                <Link href={project.serverRepo} passHref legacyBehavior>
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    // Changed: Secondary button styling
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-400 text-slate-600 font-semibold hover:bg-slate-100 hover:text-slate-800 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaServer /> Server Code
                  </motion.a>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
