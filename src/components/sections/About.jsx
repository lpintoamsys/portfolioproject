import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center mb-0"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10 mt-0">
          <h1 className="text-3xl font-bold mb-0 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h1>

          <div className="rounded-xl p-8 border-white/12 border hover:-translate-y-1 transition-all">
            <p>
            Accomplished Senior Engineering Manager and Technical Program Management professional with over 20 years of experience driving Digital Transformation, cloud strategy, and operational excellence. Expert in Agile adoption, DevSecOps methodologies, software development, software design, and distributed systems, with a proven track record of leading high-impact initiatives. Key achievements include reducing cloud costs by 45%, accelerating release cycles by 80%, and successfully delivering 300+ APIs and 30+ microservices at scale. Skilled in managing distributed teams of 100+ resources across diverse roles and geographies, fostering collaboration, and aligning technical solutions with business objectives.
            Seeking a Senior Engineering Leader position at GlobalMed to leverage extensive experience in cloud optimization and digital transformation, advancing AI-driven healthcare innovations and supporting the mission to enhance patient outcomes through cutting-edge technology.
            </p>
            <p>
            <br />
            <ul className="list-disc list-inside">
              <li>10+ Years Experience In Technical Program Management</li>
              <li>5+ Years Experience In Senior Engineering Management</li>
              <li>8 Years Experience In Digital Transformation</li>
              <li>6 Years DevSecOps / CICD</li>
              <li>3 Years Experience In Generative AI</li>
            </ul>
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
