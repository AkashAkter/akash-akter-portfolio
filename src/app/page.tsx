"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

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
          backgroundImage:
            "url(https://slimhamdi.net/sliim/demos/images/bg.jpg)",
        }}
      >
        <div
          className="hero-overlay"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg px-6">
            <h1 className="mb-5 text-5xl font-bold">Hi! I&apos;m AKASH.</h1>
            <p className="mb-5 text-lg">
              I&apos;m a Freelance UI/UX Designer and Developer based in London,
              England.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="btn btn-outline btn-success">
                More About Me
              </button>
              <button
                className="btn btn-outline btn-success"
                onClick={handleResumeDownload}
              >
                See Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-4 text-white text-xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-gray-400 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
