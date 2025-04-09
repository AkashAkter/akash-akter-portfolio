"use client";
import React, { useState } from "react";

const CommentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send data to your backend
    console.log("Comment submitted:", formData);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", comment: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="min-h-[50vh] bg-base-200 py-16 px-4">
      <div className="text-center mb-12">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00",
            letterSpacing: "0.1em",
          }}
        >
          SHARE YOUR THOUGHTS
        </h1>
        <div className="w-24 h-1 bg-success mx-auto"></div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Leave your feedback about my portfolio
        </p>
      </div>

      <div className="container mx-auto max-w-2xl">
        <div className="card bg-base-100 shadow-xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label pl-0">
                <span className="label-text text-white text-lg font-medium">
                  Your Name (Optional)
                </span>
              </label>
              <input
                type="text"
                placeholder="Anonymous"
                className="input input-bordered bg-base-200 text-white text-lg w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-control">
              <label className="label pl-0">
                <span className="label-text text-white text-lg font-medium">
                  Your Comment*
                </span>
              </label>
              <textarea
                placeholder="What do you think about my work?"
                className="textarea textarea-bordered bg-base-200 text-white text-lg w-full h-40"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`btn btn-success btn-lg text-white text-lg w-full
                  hover:bg-transparent hover:text-success hover:border-success
                  hover:shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#00ff00] 
                  transition-all duration-300
                  ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </button>

              {submitSuccess && (
                <div className="mt-4 text-success text-lg text-center animate-bounce">
                  Thank you for your feedback!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
