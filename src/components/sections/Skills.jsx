import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

export const Skills = () => {
    const skillsData = [
        { title: "Generative AI", skills: ["Langchain", "OpenAI", "Langraph", "Python"] },
        { title: "LLM's", skills: ["GPT", "Claude", "Llama", "Mistral", "Gemini"] },
        { title: "Agile", skills: ["Agile", "Scrum", "Kanban", "Azure DevOps", "Jira", "Confluence"] },
        { title: "Architecture", skills: ["Microservices", "Monolithic", "Event-Driven"] },
        { title: "Cloud", skills: ["AWS", "Azure", "Cloud Strategy", "Cloud Management", "Cloud Cost Optimization"] },
        { title: "Frontend", skills: ["React", "TypeScript", "TailwindCSS", "JavaScript", "NextJs"] },
        { title: "Backend", skills: ["Node.js", "Java", "Spring Boot", "Kafka", "Redis", "REST API"] },
        { title: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
        { title: "DevOps", skills: ["Docker", "Kubernetes", "Jenkins", "Git", "CI/CD", "Azure Pipelines", "DevSecOps"] },
        { title: "Monitoring", skills: ["Cloudwatch", "Grafana/Prometheus", "Sentry", "Slack"] }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 mb-0">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 w-[100%] flex m-10 mb-0">
                    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Skills</h1>

                    <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all shadow-lg bg-gray-900/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skillsData.map(({ title, skills }, index) => (
                                <SkillSection key={index} title={title} skills={skills} />
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

const SkillSection = ({ title, skills }) => {
    return (
        <div className="rounded-xl p-6 bg-gray-800/50 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((tech, key) => (
                    <span
                        key={key}
                        className="bg-gray-700/50 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-600/50 hover:shadow-md transition"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};