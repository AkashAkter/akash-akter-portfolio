"use client";

import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Header matching Nuwantha PDF Page 3 */}
        <div className="border-b border-[var(--rule)] pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">
            STACK & ABOUT
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            About
          </h2>
        </div>

        {/* Narrative & Photo 2-Column Grid matching Nuwantha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Bio Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <p>
              I&apos;m a Computer Science & Engineering graduate from Pabna University of Science and Technology (PUST),
              and I&apos;ve been engineering full-stack web platforms and empirical machine learning models since 2020.
              The part I care about most comes after the code works: taking algorithms out of static test scripts and
              building deterministic, scalable production systems that real users and teams rely on.
            </p>

            <p>
              In industry, I work as a Web Developer at Betopia Group, engineering scalable e-commerce systems,
              synchronized state machines, and microservice APIs with React, Next.js, and Node.js.
              In research, I author peer-reviewed IEEE papers analyzing Android application static bytecodes using
              Support Vector Machines (SVM) and K-Nearest Neighbors across 12,050 binaries.
            </p>

            <p>
              My immediate academic trajectory is focused on securing a PhD position in Machine Learning, exploring
              neural network topologies, representation learning, and autonomous agent orchestration.
            </p>
          </div>

          {/* Right: Framed Portrait Image (5 cols) matching Nuwantha */}
          <div className="lg:col-span-5 space-y-2">
            <div className="border border-[var(--rule)] bg-[var(--surface-sunken)] p-1.5 shadow-sm">
              <div className="relative aspect-[3/4] w-full max-w-[340px] mx-auto overflow-hidden bg-black/60">
                <Image
                  src="/profile.jpg"
                  alt="Akash Akter"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider text-center pt-1">
              AKASH AKTER · BOGURA / DHAKA, BANGLADESH
            </p>
          </div>
        </div>

        {/* Education & Coursework 2-Column Grid matching Nuwantha Page 4 */}
        <div className="pt-10 border-t border-[var(--rule)] grid grid-cols-1 md:grid-cols-12 gap-8 items-start font-mono text-xs">
          {/* Education & Volunteering (5 cols) */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold block mb-1">
                  2 ENTRIES
                </span>
                <h3 className="font-sans font-bold text-lg text-[var(--text)]">
                  Education
                </h3>
              </div>

              <div className="space-y-1.5">
                <p className="font-sans font-bold text-sm text-[var(--text)]">
                  BSc (Engg) in Computer Science & Engineering
                </p>
                <p className="text-[var(--text-muted)] text-xs">
                  Pabna University of Science and Technology (PUST) · 2020 – 2024
                </p>
                <p className="text-[11px] text-[var(--accent-text)]">
                  Thesis: Static Android Bytecode Malware Classification (IEEE Published)
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[var(--rule)]/60">
                <p className="font-sans font-bold text-sm text-[var(--text)]">
                  Higher Secondary Certificate (Science)
                </p>
                <p className="text-[var(--text-muted)] text-xs">
                  Govt. Azizul Haque College, Bogura · 2017 – 2019
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[var(--rule)]">
              <div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold block mb-1">
                  1 ROLE
                </span>
                <h3 className="font-sans font-bold text-lg text-[var(--text)]">
                  Volunteering & Leadership
                </h3>
              </div>

              <div className="space-y-1">
                <p className="font-sans font-bold text-sm text-[var(--text)]">
                  Executive Member & Problem Setter
                </p>
                <p className="text-[var(--text-muted)] text-xs">
                  PUST Computer Club · 2022 – 2024
                </p>
              </div>
            </div>
          </div>

          {/* Coursework (7 cols) */}
          <div className="md:col-span-7 space-y-4 border-t md:border-t-0 md:border-l border-[var(--rule)] pt-8 md:pt-0 md:pl-10">
            <div>
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold block mb-1">
                PUST CSE
              </span>
              <h3 className="font-sans font-bold text-lg text-[var(--text)]">
                Key Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--text-muted)] pt-1">
              <div className="py-1 border-b border-[var(--rule)]/60">Data Structures and Algorithms</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Object-Oriented Programming (Java/C++)</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Machine Learning &amp; Pattern Recognition</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Database Management Systems</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Operating Systems &amp; Concurrency</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Compiler Design &amp; Formal Languages</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Distributed Systems &amp; Cloud</div>
              <div className="py-1 border-b border-[var(--rule)]/60">Software Engineering &amp; Architecture</div>
            </div>
          </div>
        </div>

        {/* 3-Column Stack Breakdown matching Nuwantha Page 4 */}
        <div className="pt-10 border-t border-[var(--rule)] font-mono text-xs space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
            STACK
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Col 1: Shipped to production */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest block mb-1">
                  6 ITEMS
                </span>
                <h4 className="font-sans font-bold text-base text-[var(--text)]">
                  Shipped to production
                </h4>
              </div>

              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Node.js · Express</span>
                  <span className="text-[10px] text-[var(--text-muted)]">GymTrek, AutoBuzz</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">React · Next.js</span>
                  <span className="text-[10px] text-[var(--text-muted)]">GymTrek, AutoBuzz</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">MongoDB · Mongoose</span>
                  <span className="text-[10px] text-[var(--text-muted)]">GymTrek, AutoBuzz</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">TypeScript</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Strict Type</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Stripe API & Webhooks</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Payments</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Tailwind CSS</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Design System</span>
                </div>
              </div>
            </div>

            {/* Col 2: Built projects with */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest block mb-1">
                  7 ITEMS
                </span>
                <h4 className="font-sans font-bold text-base text-[var(--text)]">
                  Built projects with
                </h4>
              </div>

              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Python · Scikit-learn</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Malware ML</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Java · OOP</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Academic</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Docker · Containers</span>
                  <span className="text-[10px] text-[var(--text-muted)]">DevOps</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">PostgreSQL · MySQL</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Relational</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Redis · Caching</span>
                  <span className="text-[10px] text-[var(--text-muted)]">In-memory</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Three.js · WebGL</span>
                  <span className="text-[10px] text-[var(--text-muted)]">3D Cube</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Git · GitHub Actions</span>
                  <span className="text-[10px] text-[var(--text-muted)]">CI/CD</span>
                </div>
              </div>
            </div>

            {/* Col 3: Currently exploring */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest block mb-1">
                  3 ITEMS
                </span>
                <h4 className="font-sans font-bold text-base text-[var(--text)]">
                  Currently exploring
                </h4>
              </div>

              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Multi-Agent Systems</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Orchestration</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Deep Learning Representation</span>
                  <span className="text-[10px] text-[var(--text-muted)]">PhD Track</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--rule)]/60">
                  <span className="text-[var(--text)] font-semibold">Kubernetes & Cloud</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Scalability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
