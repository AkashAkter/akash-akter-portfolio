const AboutMe = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1
            className="text-5xl font-bold text-success"
            style={{ textShadow: "0px 0px 20px #ffffff" }}
          >
            ABOUT ME
          </h1>
          <p className="py-6 text-white">
            A passionate full-stack developer skilled in{" "}
            <span style={{ textShadow: "0px 0px 20px #ffffff" }}>
              React, Next.js, and Node.js
            </span>
            , I build scalable, user-friendly web solutions. I thrive in
            collaborative environments, love solving challenges, and am always
            learning. When not coding, I enjoy exploring new tech and solving
            problems on{" "}
            <span style={{ textShadow: "0px 0px 20px #ffffff" }}>LeetCode</span>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
