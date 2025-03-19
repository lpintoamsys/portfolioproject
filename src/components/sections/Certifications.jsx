import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

const certifications = [
    {
        category: "Professional Certifications",
        items: [
            "Project Management Professional - Project Management Institute (PMI)",
            "Certified Scrum Master (CSM) - Scrum Alliance",
            "Scaled Agile Framework (SAFe) Agilist - Scaled Agile Inc.",
            "AWS Cloud Foundation Certified - Amazon Web Services (AWS) Training",
        ]
    },
    {
        category: "LinkedIn Certifications",
        items: [
            "AI for Project Managers",
            "Cloud Computing Essentials",
            "Leadership in Tech",
            "Agile at Scale",
            "Graph Databases Neo4j for Complex Data Relationships"
        ]
    }
];

export const Certifications = () => {
    return (
        <section
            id="certifications"
            className="flex items-center justify-center py-10" // Reduced py-20 to py-10
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Certifications
                    </h2>

                    {/* Two-column layout on large screens, single column on small screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                        {certifications.map((certGroup, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <h2 className="text-xl font-semibold text-white mb-3">
                                    {certGroup.category}
                                </h2>
                                <ul className="space-y-2 text-lg text-gray-300">
                                    {certGroup.items.map((cert, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <span className="text-green-400 text-xl">✔️</span>
                                            <span>{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Certifications;