import Image from "next/image";

const Educations = () => {
  return (
    <div>
      <h1
        className="text-5xl font-bold text-success text-center my-10"
        style={{ textShadow: "0px 0px 20px #ffffff" }}
      >
        EDUCATION
      </h1>
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
            <time className="font-mono italic">2020 - 2024</time>
            <div className="text-lg font-black">
              B.Sc. in Computer Science & Engineering
            </div>
            <p>
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
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">
              Higher Secondary School Certificate
            </div>
            <p>
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
            <time className="font-mono italic">2016</time>
            <div className="text-lg font-black">
              Secondary School Certificate
            </div>
            <p>
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
