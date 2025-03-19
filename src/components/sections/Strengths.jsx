import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect } from "react";
import React from "react";

export const strenghts = [
    {
        title: "Program & Project Management",
        description: "Expert in Agile, Scrum, and SAFe methodologies , managing end-to-end program lifecycles from inception to execution. Skilled in  driving KPIs, OKRs, and metrics-based decision-making , while optimizing budgets, resources, timelines, and risk mitigation."
    },
    {
        title: "Engineering Best Practices",
        description: "Proficient in engineering best practices, including secure coding, version control, and modular design. Adept at implementing robust testing frameworks (unit, integration, and end-to-end) to ensure code quality and reliability. Maintain documentation standards to enhance collaboration and maintainability."
    },
    {
        title: "Team Leadership",
        description: "Managed virtual teams of 40+ members, leading cross-functional engineering teams. Expertise in software architecture, cloud, and system design."
    },
    {
        title: "Technical Strategy",
        description: "Develop and execute technical strategies that align with business goals, ensuring scalable and efficient solutions. Lead teams in adopting emerging technologies to drive innovation and competitive advantage."
    },
    {
        title: "Proactive Problem Solver",
        description: "Implemented risk mitigation strategies that resulted in a 30% decrease in project delays."
    },
    {
        title: "Budget and Resource Management",
        description: "Oversee budget and resource management, optimizing costs and ensuring efficient allocation across projects. Drive decision-making to balance priorities, timelines, and team capacity while meeting business objectives."
    },
    {
        title: "Quality Assurance",
        description: "Ensure high-quality standards by implementing rigorous testing processes and continuous code reviews. Drive the adoption of best practices in automated testing, performance optimization, and defect resolution to maintain software"
    },
];

export const Strengths = () => {
    return (
        <section
            id="strengths"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10">
                    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Strengths
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {strenghts.map((st, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform duration-300 ease-in-out transform-gpu animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
                            >
                                <h2 className="text-xl font-bold mb-4">{st.title}</h2>
                                <p className="list-disc list-inside text-gray-400">
                                    {st.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};



// CSS for fade-in animation
const styles = `
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.animate-fade-in {
    animation: fade-in 0.5s forwards;
}
`;

export const GlobalStyles = () => {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }, []);
};



