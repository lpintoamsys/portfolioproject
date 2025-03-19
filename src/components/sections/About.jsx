import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

const About = () => {

  return (
    <section
      id="about"
      className="className=min-h-screen flex items-center justify-center py-20 mb-0"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10 mb-0">
          <h1 className="text-3xl mb-0 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h1>

          <div className="rounded-xl p-8 border-white/12 border hover:-translate-y-1 text-justify bg-gradient-to-br from-blue-400 to-coral-300 hover:bg-amber-200 transition-all shadow-lg bg-gray-900/30 delay-300">
            <p className="text-black">
              Accomplished Senior Engineering Manager and Technical Program Management professional with over 20 years of experience driving Digital Transformation, cloud strategy, and operational excellence. Expert in Agile adoption, DevSecOps methodologies, software development, software design, and distributed systems, with a proven track record of leading high-impact initiatives. Key achievements include reducing cloud costs by 45%, accelerating release cycles by 80%, and successfully delivering 300+ APIs and 30+ microservices at scale. Skilled in managing distributed teams of 100+ resources across diverse roles and geographies, fostering collaboration, and aligning technical solutions with business objectives.
              Seeking a Senior Engineering Leader position at GlobalMed to leverage extensive experience in cloud optimization and digital transformation, advancing AI-driven healthcare innovations and supporting the mission to enhance patient outcomes through cutting-edge technology.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export { About };