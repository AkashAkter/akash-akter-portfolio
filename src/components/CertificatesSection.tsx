"use client";

import React from "react";
import { FiExternalLink, FiAward, FiCheckCircle } from "react-icons/fi";

const honours = [
  {
    badge: "MERIT AWARD · TOP 7 NATIONWIDE",
    badgeType: "accent",
    title: "IEEE ICAEEE 2024 Research Publication",
    subtitle: "Pabna University of Science & Technology · 2024",
    description:
      "Authored and presented peer-reviewed research at the 3rd IEEE International Conference (ICAEEE 2024). Constructed a 1,438-attribute static Dalvik opcode and permission matrix across 12,050 APK binaries, achieving 88.25% K-NN detection accuracy benchmark for malicious financial applications.",
    meta: "DOI: 10.1109/ICAEEE62219.2024.10561780 · IEEE Xplore Digital Library Indexed",
    linkText: "Read IEEE publication →",
    linkUrl: "https://ieeexplore.ieee.org/document/10561780",
    previewTitle: "IEEE XPLORE RESEARCH CERTIFICATION",
    previewSubtitle: "Classification of Malicious Financial Applications",
  },
  {
    badge: "COMPETITIVE PROGRAMMING · REGIONAL CONTESTANT",
    badgeType: "silver",
    title: "ICPC Asia Dhaka Regional Contestant 2023",
    subtitle: "Asia Dhaka Regional Contest · 2023",
    description:
      "Selected as university team contestant at the prestigious International Collegiate Programming Contest (ICPC) Asia Dhaka Regional. Solved complex algorithmic challenges under strict multi-hour time constraints, focusing on graph theory, dynamic programming, and combinatorial optimization.",
    meta: "Ranked among top tier university programming teams across Bangladesh",
    linkText: "View contest standing →",
    linkUrl: "https://github.com/AkashAkter",
    previewTitle: "ICPC ASIA DHAKA REGIONAL 2023",
    previewSubtitle: "International Collegiate Programming Contest",
  },
];

const certifications = [
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    date: "Dec 2023",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    credentialId: "PH-WEB7-AKASH-2023",
    verifyUrl: "https://github.com/AkashAkter",
    highlightColor: "#10b981",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "Jun 2024",
    tags: ["Supervised ML", "NumPy", "Scikit-Learn"],
    credentialId: "COURSERA-ML-AKASH-08",
    verifyUrl: "https://github.com/AkashAkter",
    highlightColor: "#3b82f6",
  },
  {
    title: "Full-Stack Node.js Architecture",
    issuer: "Betopia Engineering Track",
    date: "Nov 2024",
    tags: ["REST APIs", "JWT Auth", "TypeScript"],
    credentialId: "BTP-ENG-2024-098",
    verifyUrl: "https://github.com/AkashAkter",
    highlightColor: "#10b981",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Aug 2023",
    tags: ["Algorithms", "Data Structures", "Java"],
    credentialId: "HR-PS-INT-77291B",
    verifyUrl: "https://www.hackerrank.com/",
    highlightColor: "#f59e0b",
  },
  {
    title: "Responsive Web Design & Algorithms",
    issuer: "freeCodeCamp",
    date: "Mar 2022",
    tags: ["HTML5", "CSS3", "JavaScript"],
    credentialId: "FCC-RWD-AKASH-2022",
    verifyUrl: "https://freecodecamp.org/",
    highlightColor: "#059669",
  },
  {
    title: "Git & Distributed Version Control",
    issuer: "GitHub Foundations",
    date: "May 2023",
    tags: ["Git", "GitHub Actions", "CI/CD"],
    credentialId: "GH-GIT-FOUND-2023",
    verifyUrl: "https://github.com/AkashAkter",
    highlightColor: "#6b7280",
  },
];

const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Section Header matching Nuwantha Page 4 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[var(--rule)] gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">
              CERTIFICATIONS AND HONOURS
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
              Certificates
            </h2>
          </div>

          <p className="font-mono text-xs text-[var(--text-muted)]">
            8 in total
          </p>
        </div>

        {/* Honours and Awards · 2 */}
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
            HONOURS AND AWARDS · 2
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {honours.map((item, idx) => (
              <div
                key={idx}
                className="border border-[var(--rule)] bg-[var(--surface-sunken)] p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                {/* Visual Document Header Preview */}
                <div className="border border-[var(--rule)] bg-[var(--surface)] p-4 rounded-[var(--radius-mark)] space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                    <span>ACADEMIC VERIFICATION</span>
                    <FiAward className="text-[var(--accent-text)] text-sm" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-[var(--text)] truncate">
                    {item.previewTitle}
                  </h4>
                  <p className="font-mono text-[11px] text-[var(--text-muted)] truncate">
                    {item.previewSubtitle}
                  </p>
                </div>

                {/* Badge & Title */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] text-[var(--on-accent)] font-mono font-bold text-[10px] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--on-accent)]" />
                    <span>{item.badge}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text)] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-[var(--text-muted)]">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link & Metadata */}
                <div className="pt-4 border-t border-[var(--rule)] space-y-3 font-mono text-xs">
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {item.meta}
                  </p>

                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--text)] hover:text-[var(--accent-text)] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <FiExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications · 6 Grid matching Nuwantha Page 4 & 5 */}
        <div className="space-y-6 pt-4 border-t border-[var(--rule)]">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
            CERTIFICATIONS · 6
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="border border-[var(--rule)] bg-[var(--surface-sunken)] p-6 space-y-4 flex flex-col justify-between hover:border-[var(--accent-text)] transition-colors"
              >
                {/* Certificate Banner Mockup */}
                <div className="border border-[var(--rule)] bg-[var(--surface)] p-3 rounded-[var(--radius-mark)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: cert.highlightColor }}
                    />
                    <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase truncate max-w-[150px]">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--text-muted)]">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Tags */}
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-base text-[var(--text)] leading-snug">
                    {cert.title}
                  </h4>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 border border-[var(--rule)] rounded-[2px] text-[10px] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID & Verify Link */}
                <div className="pt-3 border-t border-[var(--rule)] space-y-2">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">
                    CREDENTIAL ID
                    <span className="block font-bold text-[var(--text)] mt-0.5 truncate">
                      {cert.credentialId}
                    </span>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--text)] hover:text-[var(--accent-text)] transition-colors pt-1"
                  >
                    <span>Verify credential</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
