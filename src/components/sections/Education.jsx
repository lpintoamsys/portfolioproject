import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

const education = [
    {
        university: "Mumbai University",
        degree: "Bachelors in Commerce",
    },
    {
        university: "Symbiosis Distance Learning Education",
        degree: "Post Graduation in Information Technology",
    },
];

const Education = () => {
    return (
        <section
            id="educations"
            className="min-h-screen flex items-center justify-center"
            aria-label="Education Section"
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10">
                    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Education Accreditations
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
                            >
                                <h2 className="text-xl font-bold text-white mb-4">{edu.degree}</h2>
                                <p className="text-gray-300">{edu.university}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export { Education };
// Compare this snippet from src/components/sections/KeyHighlights.jsx: