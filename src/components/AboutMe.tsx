"use client";

const AboutMe = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_2px_4px_rgba(34,211,238,0.3)]">
            ABOUT ME
          </h1>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"></div>

          <p className="py-6 text-gray-300 text-xl leading-relaxed">
            A passionate full-stack developer skilled in{" "}
            <span className="font-medium text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              React, Next.js, and Node.js
            </span>
            , I build scalable, user-friendly web solutions. I thrive in
            collaborative environments, love solving challenges, and am always
            learning. When not coding, I enjoy exploring new tech and solving
            problems on{" "}
            <span className="font-medium text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
              LeetCode
            </span>
            .
          </p>

          <button
            onClick={handleResumeDownload}
            className="mt-6 px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
