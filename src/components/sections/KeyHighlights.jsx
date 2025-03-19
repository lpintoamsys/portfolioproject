import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect } from "react";

const achievements = [
    {
        title: "Contract Acquisition",
        description: "Secured $3 million contract with Veteran Affairs for HL7 Integration with EHR and Care Systems"
    },
    {
        title: "DevOps Implementation Success",
        description: "Reduced release cycle times by 80% through DevOps implementation and automated CI/CD Process."
    },
    {
        title: "HL7 Implementation",
        description: "Managed Veteran Affairs (VA) HL7/FHIR Implementation project implementation which aims to streamline healthcare data interoperability within the VA system."
    },
    {
        title: "API Implementation",
        description: "Managed development and implementation of 300+ API's with improvement strategies including caching, pooling, CDN. This involved REST, Websockets and Webhooks."
    },
    {
        title: "Team Management",
        description: "Managed resources with team size of 100+, with 4 scrum masters, 5 Project Leads and 2 Architects resources across various roles and responsibilities with distributed geography."
    },
    {
        title: "CI/CD Process",
        description: "Implemented CI/CD Process for 60 microservices across 5 applications from Development to Production stage using Azure Pipelines."
    },
    {
        title: "Scrum Master",
        description: "Managed 3 scrum teams with 20+ members each, with 2 week sprint cycles and daily standups, sprint planning, sprint review and sprint retrospective."
    },
    {
        title: "Cloud Cost Optimization",
        description: "Reduced the Cloud cost by 40% across AWS and Azure."
    },
    {
        title: "Generative AI",
        description: "Managed implementation of AI Projects (Symptoms Checker, Image Analysis, Video to Text Conversion, Summarization)."
    },
    {
        title: "Migration of Legacy to Modern Applications",
        description: "Successfully handled the migration of Legacy Application to Modern Architecture."
    },
    {
        title: "Agile Transformation Success",
        description: "Increased productivity by 25% through agile methodologies."
    },
    {
        title: "Test Coverage Enhancement",
        description: "Achieved 80% test coverage using automated pipelines."
    },
    {
        title: "Client Handling",
        description: "Handled Clients across the USA, Europe, and Africa."
    }
];

export const KeyHighlights = () => {
    return (
        <section
            id="keypoints"
            className="min-h-screen flex items-center justify-center py-20"
            aria-label="Key Achievements Section"
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10">
                    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Key Achievements
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform duration-300 ease-in-out transform-gpu animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
                            >
                                <h2 className="text-xl font-bold mb-4">{achievement.title}</h2>
                                <p className="list-disc list-inside text-gray-400">
                                    {achievement.description}
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