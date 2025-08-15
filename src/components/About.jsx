import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            About <span className="coreai-text-gradient">CoreAI</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-source-sans">
            CoreAI is a Copenhagen-based consultancy specializing in Generative
            AI, Agentic AI systems, and ML infrastructure. We help enterprise
            and public-sector teams deploy AI agents that automate workflows and
            orchestrate outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
