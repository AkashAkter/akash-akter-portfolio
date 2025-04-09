const AboutMe = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{
              textShadow:
                "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
              letterSpacing: "0.1em",
            }}
          >
            ABOUT ME
          </h1>
          <div className="w-24 h-1 bg-success mx-auto"></div>
          <p className="py-6 text-white text-xl">
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
