"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaServer,
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaBolt,
  FaDatabase,
  FaCodeBranch,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";
import projectsData from "../../../../projects.json";

const ProjectDetailsClient = () => {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData.projects.find(
    (p) => p.id.toString() === projectId
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--surface)] text-[var(--text)] flex flex-col items-center justify-center gap-4 px-6 text-center font-mono">
        <h2 className="text-xl font-bold">System Not Found</h2>
        <p className="text-xs text-[var(--text-muted)]">The requested case study could not be located.</p>
        <button
          onClick={() => router.push("/#work")}
          className="px-4 py-2 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] text-[var(--on-accent)] font-mono font-bold text-xs cursor-pointer"
        >
          Back to Systems
        </button>
      </div>
    );
  }

  const allImages = [project.mainImage, ...project.additionalImages];

  return (
    <section className="min-h-screen bg-[var(--surface)] text-[var(--text)] pt-8 md:pt-12 pb-24 px-6 sm:px-10 transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] border border-[var(--rule)] text-xs font-mono text-[var(--text)] hover:border-[var(--text)] transition-all cursor-pointer"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </button>

          <span className="font-mono text-xs text-[var(--text-muted)] hidden sm:inline">
            SYSTEM IDENTIFIER: 0{project.id} // SHIPPED
          </span>
        </div>

        {/* Hero Header */}
        <div className="space-y-3 pb-8 border-b border-[var(--rule)]">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span className="px-2 py-0.5 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] text-[var(--on-accent)] font-bold text-[10px]">
              CASE STUDY 0{project.id}
            </span>
            <span className="text-[var(--text-muted)]">·</span>
            <span className="text-[var(--accent-text)] font-semibold">PRODUCTION ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text)]">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] hover:opacity-90 text-[var(--on-accent)] font-bold transition-opacity flex items-center gap-2"
              >
                <span>Launch Live System</span>
                <FaExternalLinkAlt size={10} />
              </a>
            )}

            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] border border-[var(--rule)] hover:border-[var(--text)] text-[var(--text)] transition-colors flex items-center gap-2"
            >
              <FaGithub />
              <span>Client Repository</span>
            </a>

            {project.serverRepo && (
              <a
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] border border-[var(--rule)] hover:border-[var(--text)] text-[var(--text)] transition-colors flex items-center gap-2"
              >
                <FaServer />
                <span>Backend Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="border border-[var(--rule)] bg-[var(--surface-sunken)] p-3 sm:p-5">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--rule)] font-mono text-xs text-[var(--text-muted)]">
            <span className="text-[var(--text)] font-semibold">{project.title} // Interface Preview</span>
            <span className="text-[11px] text-[var(--accent-text)]">Click thumbnails below</span>
          </div>

          <div className="relative w-full overflow-hidden bg-black/40">
            <Carousel
              showArrows={true}
              showThumbs={true}
              thumbWidth={90}
              infiniteLoop={true}
              emulateTouch={true}
              autoPlay={false}
              className="project-carousel"
              renderArrowPrev={(clickHandler, hasPrev) => (
                <button
                  onClick={clickHandler}
                  disabled={!hasPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[var(--surface)] hover:bg-[var(--surface-sunken)] border border-[var(--rule)] flex items-center justify-center transition-all text-[var(--text)] disabled:opacity-30 cursor-pointer"
                  aria-label="Previous screenshot"
                >
                  <FaChevronLeft size={13} />
                </button>
              )}
              renderArrowNext={(clickHandler, hasNext) => (
                <button
                  onClick={clickHandler}
                  disabled={!hasNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[var(--surface)] hover:bg-[var(--surface-sunken)] border border-[var(--rule)] flex items-center justify-center transition-all text-[var(--text)] disabled:opacity-30 cursor-pointer"
                  aria-label="Next screenshot"
                >
                  <FaChevronRight size={13} />
                </button>
              )}
            >
              {allImages.map((img, idx) => (
                <div key={idx} className="relative aspect-video w-full bg-[var(--surface)] flex items-center justify-center">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-contain max-h-[580px]"
                  />
                  <p className="legend font-mono text-xs bg-[var(--surface)]! text-[var(--text)]! border border-[var(--rule)]!">
                    {project.title} — View {idx + 1} of {allImages.length}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Structured Case Study Content Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. System Overview */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-text)] uppercase tracking-wider font-bold">
                <FaBolt />
                <span>Executive Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text)]">
                System Purpose & Real-World Utility
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {project.detailDescription}
              </p>
            </div>

            {/* 2. Technical Architecture */}
            <div className="space-y-3 pt-6 border-t border-[var(--rule)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-text)] uppercase tracking-wider font-bold">
                <FaDatabase />
                <span>Architecture & Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
                State Management, APIs & Security
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                The architecture is designed around deterministic state synchronization and responsive client updates.
                Network requests undergo debounced optimization to minimize server strain, while asynchronous workflows
                are decoupled from core rendering cycles for consistent 60fps performance.
              </p>

              {/* Verified Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-3.5 border border-[var(--rule)] bg-[var(--surface)] flex items-start gap-2.5 text-[var(--text)]"
                  >
                    <HiCheckCircle className="text-[var(--accent-text)] mt-0.5 shrink-0" size={15} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Performance & Reliability */}
            <div className="space-y-3 pt-6 border-t border-[var(--rule)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-text)] uppercase tracking-wider font-bold">
                <FaShieldAlt />
                <span>Production Reliability</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
                Resilience, Security & Edge Caching
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Built with full client-side input sanitization, automated reload warnings to prevent data loss,
                and authenticated token validation. Hosted with zero-downtime continuous deployment pipelines.
              </p>
            </div>
          </div>

          {/* Sidebar Specifications (4 cols) */}
          <div className="lg:col-span-4 space-y-5 font-mono text-xs">
            {/* Tech Stack Card */}
            <div className="p-5 border border-[var(--rule)] bg-[var(--surface)] space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-[var(--accent-text)] font-bold text-xs uppercase tracking-wider pb-2 border-b border-[var(--rule)]">
                <FaCodeBranch />
                <span>Technology Stack</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 border border-[var(--rule)] bg-[var(--surface-sunken)] text-[var(--text)] text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Spec Metadata Table */}
              <div className="pt-2 border-t border-[var(--rule)] space-y-2 text-[11px]">
                <div className="flex justify-between py-1 border-b border-[var(--rule)]">
                  <span className="text-[var(--text-muted)]">DEPLOYMENT</span>
                  <span className="text-[var(--accent-text)] font-bold">Vercel / Cloud</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--rule)]">
                  <span className="text-[var(--text-muted)]">ARCHITECTURE</span>
                  <span className="text-[var(--text)]">Full-Stack MERN</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--rule)]">
                  <span className="text-[var(--text-muted)]">PAYMENTS</span>
                  <span className="text-[var(--text)]">Stripe Integrated</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[var(--text-muted)]">STATUS</span>
                  <span className="text-[var(--accent-text)] font-bold">100% Operational</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-3 border-t border-[var(--rule)] space-y-2 font-bold">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-[var(--accent-fill)] text-[var(--on-accent)] text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <FaExternalLinkAlt />
                    <span>Open Live Demo</span>
                  </a>
                )}

                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 border border-[var(--rule)] bg-[var(--surface-sunken)] text-[var(--text)] text-xs flex items-center justify-center gap-2 hover:border-[var(--text)] transition-colors"
                >
                  <FaGithub />
                  <span>Client Code Repository</span>
                </a>

                {project.serverRepo && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 border border-[var(--rule)] bg-[var(--surface-sunken)] text-[var(--text)] text-xs flex items-center justify-center gap-2 hover:border-[var(--text)] transition-colors"
                  >
                    <FaServer />
                    <span>Server Code Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsClient;
