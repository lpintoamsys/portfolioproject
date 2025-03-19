import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";
import React from "react";


export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mb-4 bg-gradient-to-r from-lightgreen-500 to-blue-300"
    >
      <RevealOnScroll>
        <div className={`text-center z-10 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Lawrence Godwin Pinto
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a Agile / Technical Program Manager, Senior Engineering Manager, Digital Transformation, Generative AI, Delivery Manager who loves crafting clean, scalable, secure web and mobile applications
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience with futuristic architecture.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
