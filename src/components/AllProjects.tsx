"use client";

import React, { useState } from "react";

interface ProjectRow {
  id: string;
  year: string;
  title: string;
  badge: "DEPLOYED" | "PUBLISHED" | "ARCHIVED" | "CLIENT";
  context: string;
  description: string;
  myPart?: string;
  problem?: string;
  method?: string;
  stack: string;
  sourceUrl?: string;
  details?: {
    overview: string;
    highlights: string[];
    liveUrl?: string;
  };
}

const allProjects: ProjectRow[] = [
  {
    id: "autolimpio",
    year: "2025",
    title: "AutoLimpio Car Wash Platform",
    badge: "DEPLOYED",
    context: "Client production platform · Betopia Group",
    description:
      "An on-demand detailing & reservation ERP system featuring deterministic time-slot locking, automated service package comparisons, countdown timers, and dispatch notifications.",
    myPart: "Lead frontend architect, Redux Toolkit slice synchronization, and real-time reservation dispatch pipeline.",
    stack: "React · TypeScript · Redux Toolkit · Shadcn UI · Node.js · Express · MongoDB",
    sourceUrl: "https://github.com/AkashAkter/auto-limpio-client",
    details: {
      overview: "Eliminated double bookings across multiple detailing bays with optimistic locking on MongoDB timestamps.",
      highlights: [
        "Debounced slot querying with dynamic countdown reservation holds.",
        "Role-isolated dashboard for station managers and dispatch technicians.",
        "End-to-end responsive UI engineered with Shadcn primitives and Tailwind CSS.",
      ],
      liveUrl: "https://auto-limpio-client.vercel.app/",
    },
  },
  {
    id: "malware-classifier",
    year: "2024",
    title: "Static Dalvik Bytecode Malware Classifier",
    badge: "PUBLISHED",
    context: "IEEE ICAEEE 2024 B.Sc. Thesis · Pabna University",
    description:
      "A static permission and Dalvik bytecode analysis engine evaluating 12,050 Android application binaries to detect malicious financial vectors.",
    myPart: "Disassembly pipeline with Androguard, 1,438-feature matrix extraction, and benchmarking K-NN vs. Naive Bayes.",
    stack: "Python · Scikit-learn · NumPy · Dalvik Disassembler · K-NN · SVM",
    sourceUrl: "https://ieeexplore.ieee.org/document/10561780",
    details: {
      overview: "Achieved an 88.25% detection accuracy benchmark using K-Nearest Neighbors across 12,050 real-world benign and malicious binaries.",
      highlights: [
        "Extracted 1,438 discrete Android permissions and opcode frequencies.",
        "Peer-reviewed and published in IEEE Xplore Digital Library.",
        "Serves as the foundation for PhD research in automated threat analysis.",
      ],
    },
  },
  {
    id: "gymtrek",
    year: "2024",
    title: "GymTrek Commerce Platform",
    badge: "DEPLOYED",
    context: "Commercial SaaS · Fitness & gym merchandise",
    description:
      "Full-stack commercial storefront running debounced catalog filtering, persistent cart sessions, inventory alerts, and Stripe checkout.",
    myPart: "Complete full-stack architecture, Stripe webhook integration, and state persistence.",
    stack: "React · TypeScript · Redux Toolkit · Node.js · Express · MongoDB · Stripe",
    sourceUrl: "https://github.com/AkashAkter/gym-trek-client",
    details: {
      overview: "Features real-time inventory management with instant stock decrementing upon verified Stripe webhook responses.",
      highlights: [
        "Debounced multi-attribute search over equipment categories and weight tiers.",
        "Redux Toolkit slice synchronization preventing lost cart state on browser reload.",
      ],
      liveUrl: "https://gym-trek-client.vercel.app/",
    },
  },
  {
    id: "autobuzz",
    year: "2024",
    title: "AutoBuzz Automotive Marketplace",
    badge: "DEPLOYED",
    context: "Commercial platform · Three-portal vehicle trade",
    description:
      "Automobile marketplace with separate role-guarded portals for platform administrators, vehicle buyers, and verified private sellers.",
    myPart: "Three-way RBAC architecture, Google OAuth integration, and appointment booking scheduler.",
    stack: "Next.js · TypeScript · Express · MongoDB · Firebase Auth · Stripe",
    sourceUrl: "https://github.com/AkashAkter/auto-buzz-client-repo",
    details: {
      overview: "Engineered secure MongoDB transactions to prevent duplicate vehicle booking appointments across verified buyers.",
      highlights: [
        "Role-isolated dashboards for admins, buyers, and sellers.",
        "Firebase OAuth coupled with server-side JWT session validation.",
      ],
      liveUrl: "https://auto-buzz-28ba2.web.app/",
    },
  },
  {
    id: "cube3d",
    year: "2024",
    title: "Interactive 3D Rubik's Cube Engine",
    badge: "DEPLOYED",
    context: "Mathematical visualization · Three.js simulation",
    description:
      "An interactive 3D Rubik's cube engine featuring real-time quaternion rotations, face-slice raycasting, algorithm move notations, and state scrambles.",
    myPart: "Three.js rendering loop, vector rotation matrices, and raycasting click-drag interaction.",
    stack: "Three.js · WebGL · TypeScript · Next.js · Tailwind CSS",
    sourceUrl: "https://github.com/AkashAkter",
    details: {
      overview: "Deterministic permutation state machine calculating valid Rubik's cube moves with 60 FPS WebGL rendering.",
      highlights: [
        "Raycasting touch and pointer drag gestures directly mapped to slice axes.",
        "Standard Singmaster notation parser supporting F, B, R, L, U, D rotations.",
      ],
    },
  },
  {
    id: "healthcare",
    year: "2023",
    title: "Clinical Appointment Scheduling Portal",
    badge: "ARCHIVED",
    context: "Full-stack healthcare project · PUST CSE",
    description:
      "Doctor appointment scheduling portal with medical specialty indexing, real-time consultation slot locking, and automated patient email reminders.",
    myPart: "Database schema design, calendar slot allocator, and automated email trigger pipelines.",
    stack: "React · Node.js · Express · MongoDB · Tailwind CSS · Nodemailer",
    sourceUrl: "https://github.com/AkashAkter",
    details: {
      overview: "Automated booking system with slot locking and patient notification schedules.",
      highlights: [
        "Time slot reservation preventing double doctor scheduling.",
        "Automated confirmation and reminder dispatch via Nodemailer.",
      ],
    },
  },
  {
    id: "bistroboss",
    year: "2023",
    title: "BistroBoss Restaurant Management",
    badge: "DEPLOYED",
    context: "Client project · Hospitality e-commerce",
    description:
      "Restaurant order fulfillment system with interactive menu customization, real-time cart calculation, order tracking, and Stripe payment gateway.",
    myPart: "Cart state machine, Stripe checkout integration, and kitchen fulfillment queue.",
    stack: "React · Node.js · Express · MongoDB · Stripe · DaisyUI",
    sourceUrl: "https://github.com/AkashAkter",
    details: {
      overview: "Kitchen ticket management with real-time status transitions from preparation to delivery.",
      highlights: [
        "Dynamic menu pricing with add-on modifier selections.",
        "Secure Stripe payment processing with customer order history receipts.",
      ],
    },
  },
  {
    id: "edusphere",
    year: "2023",
    title: "EduSphere Learning Management Portal",
    badge: "ARCHIVED",
    context: "University project · 3-person team",
    description:
      "A course delivery and evaluation platform allowing instructors to upload video modules, generate timed quizzes, and grade student submissions.",
    myPart: "Quiz state validation engine, student score analytics, and role authorization.",
    stack: "React · Node.js · Express · MongoDB · Tailwind CSS",
    sourceUrl: "https://github.com/AkashAkter",
    details: {
      overview: "Synchronous quiz timer with automatic submission on expiration.",
      highlights: [
        "Instructor gradebook with student progression analytics.",
        "Protected video module delivery and resource downloads.",
      ],
    },
  },
  {
    id: "realestate",
    year: "2023",
    title: "Real Estate Property Listings Portal",
    badge: "ARCHIVED",
    context: "Course project · PUST CSE",
    description:
      "Property portal with geographical search filtering, agent direct contact messaging, and image gallery management for residential listings.",
    myPart: "Multi-criteria property filter query builder on MongoDB.",
    stack: "React · Node.js · Express · MongoDB · Tailwind CSS",
    sourceUrl: "https://github.com/AkashAkter",
    details: {
      overview: "Indexed property search with price range, bedroom count, and neighborhood filters.",
      highlights: [
        "Direct inquiry routing to assigned listing agents.",
        "Responsive photo carousel for high-resolution floor plans.",
      ],
    },
  },
  {
    id: "greenhouse",
    year: "2022",
    title: "Greenhouse Microclimate IoT Monitor",
    badge: "ARCHIVED",
    context: "Hardware & IoT project · PUST CSE",
    description:
      "An automated greenhouse telemetry dashboard reading soil moisture, DHT11 temperature, and ambient light sensors to automate irrigation valves.",
    myPart: "Node.js WebSocket broker receiving sensor streams and broadcasting live metrics to a React dashboard.",
    stack: "C++ · Arduino · Node.js · WebSockets · React · Chart.js",
    sourceUrl: "https://github.com/AkashAkter",
    details: {
      overview: "Automated solenoid valve triggers when soil moisture falls below threshold values.",
      highlights: [
        "Sub-second telemetry graphs rendered via Chart.js over WebSockets.",
        "Hardware fail-safe alerts dispatched upon lost sensor connection.",
      ],
    },
  },
  {
    id: "botanical",
    year: "2022",
    title: "Amaaray Botanical Store",
    badge: "ARCHIVED",
    context: "Client project · E-commerce template",
    description:
      "A boutique plant-selling storefront featuring category filtering, responsive plant care guides, and customer inquiry dispatch.",
    myPart: "Frontend component architecture and responsive design system.",
    stack: "MongoDB · Express · React · Node.js · Tailwind CSS",
    sourceUrl: "https://github.com/AkashAkter",
  },
  {
    id: "ycs-contest",
    year: "2022",
    title: "Young Computer Scientist Contest Entry",
    badge: "ARCHIVED",
    context: "National competition entry · Educational software",
    description:
      "A school attendance and grade management portal allowing administrators and teachers to record attendance and compute student term averages.",
    myPart: "Database schema design, student report card calculation algorithms.",
    stack: "PHP · MySQL · JavaScript · HTML5 · CSS3",
    sourceUrl: "https://github.com/AkashAkter",
  },
];

const AllProjects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-12">
        {/* Header matching Nuwantha PDF Page 2 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[var(--rule)] gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">
              EVERYTHING ELSE · NEWEST FIRST
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
              All projects
            </h2>
          </div>

          <p className="font-mono text-xs text-[var(--text-muted)]">
            {allProjects.length} projects
          </p>
        </div>

        {/* Project Rows Table matching Nuwantha PDF */}
        <div className="divide-y divide-[var(--rule)]">
          {allProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className="py-7 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Year, Title, Badge, Context (4 cols) */}
                  <div className="md:col-span-4 space-y-1.5">
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {project.year}
                    </span>

                    <h3 className="font-sans font-bold text-lg sm:text-xl text-[var(--text)] leading-snug">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="px-1.5 py-0.5 border border-[var(--rule)] rounded-[2px] font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-wider">
                        {project.badge}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-[var(--text-muted)] pt-1">
                      {project.context}
                    </p>
                  </div>

                  {/* Right Column: Description, My Part, Stack, Links (8 cols) */}
                  <div className="md:col-span-8 space-y-3 font-mono text-xs">
                    <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {project.description}
                    </p>

                    {project.myPart && (
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-bold uppercase text-[var(--text)] mr-1">
                          MY PART:
                        </span>
                        {project.myPart}
                      </p>
                    )}

                    {project.method && (
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-bold uppercase text-[var(--text)] mr-1">
                          METHOD:
                        </span>
                        {project.method}
                      </p>
                    )}

                    <p className="text-xs text-[var(--text-muted)] pt-1">
                      <span className="font-bold uppercase text-[var(--text)] mr-1">
                        STACK:
                      </span>
                      {project.stack}
                    </p>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-2">
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[var(--text)] hover:text-[var(--accent-text)] transition-colors inline-flex items-center gap-1"
                        >
                          <span>Source</span>
                          <span>→</span>
                        </a>
                      )}

                      {project.details && (
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="font-bold text-[var(--text)] hover:text-[var(--accent-text)] transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>Details</span>
                          <span>{isExpanded ? "−" : "+"}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Accordion */}
                {isExpanded && project.details && (
                  <div className="pt-4 pb-2 border-t border-[var(--rule)]/60 font-mono text-xs space-y-3 animate-in fade-in duration-200">
                    <div className="bg-[var(--surface-sunken)] p-4 border border-[var(--rule)] rounded-[var(--radius-mark)] space-y-2">
                      <p className="text-[var(--text)] font-semibold">
                        {project.details.overview}
                      </p>
                      <ul className="space-y-1 text-[var(--text-muted)] list-disc list-inside">
                        {project.details.highlights.map((item, hIdx) => (
                          <li key={hIdx}>{item}</li>
                        ))}
                      </ul>
                      {project.details.liveUrl && (
                        <div className="pt-2">
                          <a
                            href={project.details.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] text-[var(--on-accent)] font-bold text-[11px]"
                          >
                            <span>Open Live Platform</span>
                            <span>→</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
