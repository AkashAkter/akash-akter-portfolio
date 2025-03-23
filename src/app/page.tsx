"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/bg.jpg)",
        }}
      >
        <div
          className="hero-overlay"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg px-6">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Hi! I&apos;m <br />
              <span
                className="text-success text-6xl"
                style={{ textShadow: "0px 0px 20px #ffffff" }}
              >
                AKASH AKTER
              </span>
            </h1>

            <p className="mb-5 text-2xl text-white">
              As a{" "}
              <span style={{ textShadow: "0px 0px 20px #ffffff" }}>
                full-stack developer
              </span>
              , I design smooth digital experiences. I transform ideas into
              reality by bridging the gap between{" "}
              <span style={{ textShadow: "0px 0px 20px #ffffff" }}>
                {" "}
                back-end{" "}
              </span>
              logic and{" "}
              <span style={{ textShadow: "0px 0px 20px #ffffff" }}>
                {" "}
                front-end{" "}
              </span>{" "}
              creativity.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/About">
                <button className="border px-4 py-2 text-white rounded hover:bg-white hover:border-success hover:text-success hover:shadow-[0_0_10px_#fff,_0_0_40px_#fff,_0_0_80px_#fff] transition-all duration-300">
                  More About Myself
                </button>
              </Link>
              <button
                className="border px-2 text-white rounded hover:bg-white hover:border-success hover:text-success hover:shadow-[0_0_10px_#fff,_0_0_40px_#fff,_0_0_80px_#fff] transition-all duration-300"
                onClick={handleResumeDownload}
              >
                Explore My Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-4 text-white text-xl">
              <a
                href="https://github.com/akashAkter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-success transition duration-300" />
              </a>
              <a
                href="http://linkedin.com/in/akash08akter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-success transition duration-300" />
              </a>

              <a
                href="https://www.facebook.com/akashh.akter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-success transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
