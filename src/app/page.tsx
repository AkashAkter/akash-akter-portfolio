export default function Home() {
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
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi ! I&apos;m AKASH.</h1>
            <p className="mb-5">
              I&apos;m a Freelance UI/UX Designer and Developer based in London,
              England.
            </p>
            <button className="btn btn-success">More ABout Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
