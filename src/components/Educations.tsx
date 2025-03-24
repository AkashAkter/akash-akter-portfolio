import Image from "next/image";

const Educations = () => {
  return (
    <div className="py-20">
      <h1
        className="text-5xl font-bold text-white mb-4 text-center"
        style={{
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
          letterSpacing: "0.1em",
        }}
      >
        EDUCATION HISTORY
      </h1>
      <div className="w-24 h-1 bg-success mx-auto"></div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <Image
              src="/graduation-hat.svg"
              alt="Graduation Hat Icon"
              width={40}
              height={40}
            />
          </div>
          <div className="timeline-start pb-20 md:text-end"></div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-xl">2020 - 2024</time>
            <div className="text-2xl font-black">
              B.Sc. in Computer Science & Engineering
            </div>
            <p className="font-white text-xl">
              <strong>Pundra University of Science & Technology, Bogura</strong>
              <br />
              CGPA: 3.56/4.00
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic text-xl">2018</time>
            <div className="text-2xl font-black">
              Higher Secondary School Certificate
            </div>
            <p className="font-white text-xl">
              <strong>Govt. Shah Sultan College, Bogura</strong>
              <br />
              GPA: 3.92/5.00
              <br />
              Group: Science
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-xl">2016</time>
            <div className="text-2xl font-black">
              Secondary School Certificate
            </div>
            <p className="font-white text-xl">
              <strong>Faizullah High School, Bogura</strong>
              <br />
              GPA: 5.00/5.00
              <br />
              Group: Science
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Educations;
