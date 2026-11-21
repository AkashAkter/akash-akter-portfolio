"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    num: "01 / 03",
    tag: "CLIENT PROJECT",
    title: "GymTrek",
    description:
      "A comprehensive fitness & gym management SaaS running member lifecycles, schedules, and automated billing.",
    metricNum: "9",
    metricText: "business modules, from member CRM to automated Stripe billing",
    specs: [
      { label: "ROLE", value: "Lead full-stack developer" },
      {
        label: "STATUS",
        isStatus: true,
        statusText: "gym-trek-client.vercel.app",
        statusUrl: "https://gym-trek-client.vercel.app/",
      },
      {
        label: "STACK",
        value: "React · TypeScript · Redux Toolkit · Tailwind · Stripe",
      },
      {
        label: "SOURCE",
        isLink: true,
        linkText: "github.com/AkashAkter/gym-trek-client",
        linkUrl: "https://github.com/AkashAkter/gym-trek-client",
      },
    ],
    caseStudyUrl: "/projects/1",
    image: "/GymTrek/GymTrek.png",
    browserUrl: "gym-trek-client.vercel.app",
    caption: "SCREENSHOT · MAIN DASHBOARD",
  },
  {
    num: "02 / 03",
    tag: "CLIENT PROJECT",
    title: "AutoBuzz",
    description:
      "An automobile dealership platform running multi-criteria vehicle searches, inventory management, and financing calculations.",
    metricNum: "5",
    metricText: "business areas moved off paper, from inventory to appointments",
    specs: [
      { label: "ROLE", value: "Full-stack developer" },
      {
        label: "STATUS",
        isStatus: true,
        statusText: "auto-buzz-28ba2.web.app",
        statusUrl: "https://auto-buzz-28ba2.web.app/",
      },
      {
        label: "BUILT",
        value: "REST API with JWT auth, multi-criteria vehicle filtering",
      },
      {
        label: "STACK",
        value: "Next.js · TypeScript · Express · MongoDB · Tailwind CSS",
      },
      {
        label: "SOURCE",
        isLink: true,
        linkText: "github.com/AkashAkter/auto-buzz-client-repo",
        linkUrl: "https://github.com/AkashAkter/auto-buzz-client-repo",
      },
    ],
    caseStudyUrl: "/projects/2",
    image: "/AutoBuzz/AutoBuzz.png",
    browserUrl: "auto-buzz-28ba2.web.app",
    caption: "SCREENSHOT · AUTOBUZZ PLATFORM",
  },
  {
    num: "03 / 03",
    tag: "RESEARCH THESIS & ML SYSTEM",
    title: "Dalvik Classifier",
    description:
      "Static Dalvik bytecode feature extractor and empirical classifier for financial application security.",
    metricNum: "12,050",
    metricText: "Android application binaries evaluated across 1,438 static bytecode attributes",
    specs: [
      { label: "TYPE", value: "Peer-Reviewed IEEE Conference Paper" },
      {
        label: "STATUS",
        isStatus: true,
        statusText: "PUBLISHED IEEE ICAEEE 2024",
        statusUrl: "https://ieeexplore.ieee.org/document/10561780",
      },
      {
        label: "ACCURACY",
        value: "88.25% K-NN Benchmark Detection Accuracy",
      },
      {
        label: "STACK",
        value: "Python · Scikit-learn · Dalvik Disassembler · K-NN",
      },
      {
        label: "SOURCE",
        isLink: true,
        linkText: "github.com/AkashAkter/android-malware-detection",
        linkUrl: "https://github.com/AkashAkter",
      },
    ],
    note: "Empirical study across 12,050 binaries, published in IEEE Xplore.",
    caseStudyUrl: "/projects/3",
    image: "/AutoLimpio/AutoLimpio.png",
    browserUrl: "ieeexplore.ieee.org/document/10561780",
    caption: "SCREENSHOT · IEEE MALWARE DETECTION PIPELINE",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="work"
      className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header matching Nuwantha PDF Page 1 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[var(--rule)] gap-4 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">
              CASE STUDIES
            </p>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text)]">
              Shipped
            </h2>
          </div>

          <p className="font-mono text-xs text-[var(--text-muted)]">
            3 in use today
          </p>
        </div>

        {/* Case Studies List matching Nuwantha 2-Column Grid */}
        <div className="space-y-20 sm:space-y-28">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-12 first:pt-0 border-t first:border-t-0 border-[var(--rule)]"
            >
              {/* Left Column: Specs & Read case study (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                    CASE STUDY {study.num} · {study.tag}
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] tracking-tight">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mt-3">
                    {study.description}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="pt-2 border-t border-[var(--rule)] font-mono text-xs space-y-2">
                  {study.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start py-2 border-b border-[var(--rule)]"
                    >
                      <span className="w-24 text-[var(--text-muted)] shrink-0 text-[11px] uppercase">
                        {spec.label}
                      </span>
                      {spec.isStatus ? (
                        <a
                          href={spec.statusUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] text-[var(--on-accent)] font-bold text-[10px] hover:opacity-90 transition-opacity truncate"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--on-accent)]" />
                          <span>LIVE</span>
                          <span className="opacity-80 font-normal ml-0.5 truncate">
                            {spec.statusText}
                          </span>
                        </a>
                      ) : spec.isLink ? (
                        <a
                          href={spec.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors truncate"
                        >
                          {spec.linkText} →
                        </a>
                      ) : (
                        <span className="text-[var(--text)] leading-normal">
                          {spec.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {study.note && (
                  <p className="font-mono text-xs text-[var(--text-muted)] italic">
                    {study.note}
                  </p>
                )}

                {/* Read Case Study Link */}
                <div className="pt-2 font-mono text-xs">
                  <Link
                    href={study.caseStudyUrl}
                    className="font-bold text-[var(--text)] hover:text-[var(--accent-text)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Read the case study</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Stat & Browser Mockup (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Metric Callout */}
                <div className="flex items-baseline gap-4 font-mono">
                  <span className="text-5xl sm:text-7xl font-extrabold text-[var(--text)] tracking-tight font-sans">
                    {study.metricNum}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm leading-snug">
                    {study.metricText}
                  </p>
                </div>

                {/* Realistic Browser Frame Mockup matching Nuwantha */}
                <div className="border border-[var(--rule)] bg-[#0d1210] rounded-[var(--radius-mark)] overflow-hidden shadow-2xl space-y-0">
                  {/* Browser Chrome Header */}
                  <div className="px-3.5 py-2.5 bg-[#141b17] border-b border-[var(--rule)] flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27352f]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27352f]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27352f]" />
                    </div>

                    <div className="px-2.5 py-0.5 bg-[#0d1210] border border-[var(--rule)] rounded-[2px] text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1.5 flex-1 max-w-[260px] truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-fill)]" />
                      <span className="truncate">{study.browserUrl}</span>
                    </div>
                  </div>

                  {/* Screenshot Image */}
                  <div className="relative aspect-[16/10] w-full bg-[#111714] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      quality={90}
                      className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Caption below right */}
                <div className="text-right">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {study.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
