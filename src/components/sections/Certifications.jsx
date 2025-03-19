import { RevealOnScroll } from "../RevealOnScroll";

const certifications = [
    {
        category: "Professional Certifications",
        items: [
            "Project Management Professional (PMP)",
            "Certified Scrum Master (CSM)",
            "Scaled Agile Framework (SAFe)",
            "AWS Cloud Foundation Certified"
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
            className="min-h-screen flex items-center justify-center py-20 mb-0"
            aria-labelledby="certifications-heading"
        >
            <RevealOnScroll>
                <div className="className=max-w-7xl mx-auto px-4 flex m-10 mb-0">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Certifications</h2>
                    <div className="rounded-xl p-8 border-white/12 border hover:-translate-y-1 transition-all w-full">
                        {certifications.map((certGroup, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <h2 className="text-xl font-semibold text-white mb-4">
                                    {certGroup.category}
                                </h2>
                                <ul className="space-y-4 text-lg text-gray-300 text-left">
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
