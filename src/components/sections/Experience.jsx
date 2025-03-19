import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

const experiencedetails = [
    {
        company: "GlobalMed",
        designation: "Senior Engineering Manager",
        duration: "June, 2021 - October, 2024",
        responsibilities: [
            "Managed multiple agile teams within a large-scale software development environment for Mobile and Web Platforms.",
            "Steered the delivery of 3 complex programs, enhancing overall productivity by 25%.",
            "Spearheaded implementation of DevOps practices, reducing release cycle times by 80%.",
            "Led the digital transformation of traditional waterfall projects to agile, resulting in 45% cost savings.",
            "Reduced Cloud costs by 40% across AWS and Azure.",
            "Managed an overall team size of 40+ resources.",
            "Coordinated with US-based Product and Engineering teams to ensure alignment on project deliverables, technical discussions, and overall program goals.",
            "Managed implementation of AI Projects including Symptoms Checker, Image Analysis, Video-to-Text Conversion, and Summarization.",
            "Secured a $3M contract with Veteran Affairs (USA) by hosting the Virtual Health Assistant Application in the gov cloud.",
            "Led design, code reviews, and VAPT to ensure high-quality and secure code.",
            "Reduced critical defects by 30% through a proactive testing strategy, improving product quality and reducing post-release issues.",
            "Increased test coverage to 80% by implementing Unit Test Cases and automating execution in Azure Pipelines."
        ]
    },
    {
        company: "Fincare Small Finance Bank",
        designation: "Vice President",
        duration: "Feb 2019 - Sep 2020",
        location: "Bangalore, India",
        responsibilities: [
            "Led strategic initiatives to drive business growth, operational efficiency, and customer satisfaction across banking services.",
            "Implemented Mobile ATM for remote villages during Covid-19, enabling deposits, withdrawals, loan EMI collections, balance inquiries, and notifications.",
            "Directed teams in digital transformation, risk management, and product development, ensuring regulatory compliance and market adaptability.",
            "Spearheaded the implementation of Agile methodologies, enhancing team performance and accelerating project delivery."
        ]
    },
    {
        company: "Timbaktu",
        designation: "Blockchain Consultant",
        duration: "Jul 2018 - Oct 2018",
        responsibilities: [
            "Developed blockchain solutions for financial and supply chain applications.",
            "Designed and implemented smart contracts for secure and automated transactions.",
            "Conducted research and feasibility analysis on blockchain frameworks like Ethereum and Hyperledger.",
            "Collaborated with stakeholders to define use cases and integrate blockchain into existing systems."
        ]
    },
    {
        company: "Tietoevry",
        designation: "Program Manager",
        duration: "Mar 2014 - May 2018",
        location: "Bangalore, India | Oslo, Norway",
        responsibilities: [
            "Managed a $2.5M Core Banking Re-engineering Program.",
            "Interacted with Leadership and Senior Stakeholders to align with program goals.",
            "Led a cross-functional team of 87 engineers to implement CASA (Current & Savings Account) and Loans Module.",
            "Implemented Microservices Architecture for scalable and modular banking solutions.",
            "Managed 6 Scrum teams across the entire software development lifecycle.",
            "Collaborated with Sales Teams to create documentation and presentations for banking clients, including Santander, Handelsbanken, and SpareBank."
        ]
    },
    {
        company: "MTN",
        designation: "Technical Project Manager",
        duration: "Sep 2011 - Dec 2013",
        location: "Johannesburg, South Africa",
        responsibilities: [
            "Led project planning and execution for large-scale telecom initiatives.",
            "Facilitated cross-functional collaboration across development and business teams.",
            "Communicated with stakeholders to ensure alignment with project objectives.",
            "Managed risk and issue resolution strategies to mitigate project delays.",
            "Allocated budget and resources efficiently to optimize project delivery.",
            "Monitored project quality and performance to ensure timely, high-quality outcomes."
        ]
    },
    {
        company: "Tech Mahindra",
        designation: "Project Manager",
        duration: "Jun 2010 - Aug 2011",
        location: "Bangalore, India",
        responsibilities: [
            "Led multiple IT transformation projects for global clients.",
            "Managed teams across different geographies to ensure seamless project execution.",
            "Handled stakeholder communication and ensured project alignment with business goals.",
            "Implemented agile methodologies to improve team efficiency and delivery speed."
        ]
    },
    {
        company: "Intec Telecom",
        designation: "Senior Technical Analyst",
        duration: "Apr 2005 - May 2010",
        location: "Bangalore, India",
        responsibilities: [
            "Developed and optimized telecom billing systems for major service providers.",
            "Collaborated with cross-functional teams to enhance system performance.",
            "Performed code reviews, testing, and debugging to maintain high-quality standards.",
            "Provided technical expertise to resolve critical production issues."
        ]
    },
    {
        company: "Polaris",
        designation: "Technical Lead",
        duration: "Nov 2004 - Apr 2005",
        location: "Mumbai, India",
        responsibilities: [
            "Led a team in designing and implementing banking software solutions.",
            "Worked closely with clients to customize and deploy financial applications.",
            "Ensured adherence to best coding practices and performance optimization."
        ]
    },
    {
        company: "E-Serve Consultancy",
        designation: "Technical Consultant",
        duration: "Apr 2000 - Nov 2004",
        location: "Mumbai, India",
        responsibilities: [
            "Provided consulting services for financial technology solutions.",
            "Developed and integrated applications to support banking and insurance clients.",
            "Trained and mentored junior developers on software development best practices."
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20 mb-0">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 flex m-10 mb-0">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Experience
                    </h2>
                    <div className="rounded-xl p-8 border-white/12 border hover:-translate-y-1 transition-all">
                        {experiencedetails.map((exp, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 transition-transform transform hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-2">{exp.designation}</h3>
                                <h2 className="">{exp.company}</h2>
                                <p className="text-gray-400 mb-2">{exp.duration}</p>
                                <ul className="list-disc pl-5 text-gray-300">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="mb-1">{resp}</li>
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

export default Experience;