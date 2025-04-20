import Image from "next/image";

const Educations = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <h1
        className="text-5xl font-bold text-center mb-4"
        style={{
          textShadow:
            "0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)",
          letterSpacing: "0.1em",
          background: "linear-gradient(to right, #38bdf8, #22d3ee)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        EDUCATION HISTORY
      </h1>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"></div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-4 md:px-8 lg:px-12">
        <li>
          <div className="timeline-middle">
            <div className="p-2 bg-cyan-500 rounded-full">
              <Image
                src="/graduation-hat.svg"
                alt="Graduation Hat Icon"
                width={30}
                height={30}
                className="filter brightness-0 invert"
              />
            </div>
          </div>
          <div className="timeline-start pb-20 md:text-end"></div>
          <hr className="bg-gradient-to-b from-cyan-400 to-blue-500" />
        </li>

        <li>
          <div className="timeline-middle">
            <div className="p-2 bg-cyan-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-xl text-cyan-300">
              2020 - 2024
            </time>
            <div className="text-2xl font-black text-white">
              B.Sc. in Computer Science & Engineering
            </div>
            <p className="text-gray-300 text-xl">
              <strong className="text-white">
                Pundra University of Science & Technology, Bogura
              </strong>
              <br />
              CGPA: <span className="text-cyan-300">3.56/4.00</span>
            </p>
          </div>
          <hr className="bg-gradient-to-b from-cyan-400 to-blue-500" />
        </li>

        <li>
          <hr className="bg-gradient-to-b from-cyan-400 to-blue-500" />
          <div className="timeline-middle">
            <div className="p-2 bg-cyan-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic text-xl text-cyan-300">2018</time>
            <div className="text-2xl text-white">
              Higher Secondary School Certificate
            </div>
            <p className="text-gray-300 text-xl">
              <strong className="text-white">
                Govt. Shah Sultan College, Bogura
              </strong>
              <br />
              GPA: <span className="text-cyan-300">3.92/5.00</span>
              <br />
              Group: <span className="text-cyan-300">Science</span>
            </p>
          </div>
          <hr className="bg-gradient-to-b from-cyan-400 to-blue-500" />
        </li>

        <li>
          <hr className="bg-gradient-to-b from-cyan-400 to-blue-500" />
          <div className="timeline-middle">
            <div className="p-2 bg-cyan-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-xl text-cyan-300">2016</time>
            <div className="text-2xl text-white">
              Secondary School Certificate
            </div>
            <p className="text-gray-300 text-xl">
              <strong className="text-white">
                Faizullah High School, Bogura
              </strong>
              <br />
              GPA: <span className="text-cyan-300">5.00/5.00</span>
              <br />
              Group: <span className="text-cyan-300">Science</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Educations;
