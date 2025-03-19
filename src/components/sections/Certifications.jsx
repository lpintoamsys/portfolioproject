import { RevealOnScroll } from "../RevealOnScroll";

const certifications = [
    {
        title: "List of Certifications",
        description: [
            "Project Management Professional (PMP)",
            "Certified Scrum Master (CSM)",
            "Scaled Agile Framework (SAFe)",
            "AWS Cloud Foundation Certified"
        ]
    }
];

export const Certifications = () => {
    return (
        <section
            id="certifications"
            className="min-h-screen flex items-center justify-center py-20"
            aria-label="Certifications Section"
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10 py-4"> {/* Added py-4 for vertical padding */}
                    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Certifications
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((certification, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
                            >
                                <h2 className="text-xl font-bold text-white mb-4">{certification.title}</h2>
                                <ul className="list-disc list-inside text-gray-300">
                                    {certification.description.map((desc, descIndex) => (
                                        <li key={descIndex}>{desc}</li>
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