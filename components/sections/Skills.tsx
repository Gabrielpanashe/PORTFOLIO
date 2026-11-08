"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Code,
    Database,
    Terminal,
    Sparkles,
    Network,
    Users
} from "lucide-react";

const skillCategories = [
    {
        title: "Artificial Intelligence & Data Science",
        icon: Brain,
        skills: [
            "Machine Learning",
            "Natural Language Processing (NLP)",
            "Deep Learning",
            "Large Language Models (LLMs)",
            "Prompt Engineering",
            "LangChain",
            "Vector Databases (ChromaDB)",
            "AI-Assisted Application Development"
        ],
        theme: "primary"
    },
    {
        title: "Programming & Software Development",
        icon: Code,
        skills: ["Python", "JavaScript", "C", "FastAPI", "Flask", "RESTful API Development"],
        theme: "secondary"
    },
    {
        title: "Databases & Data Management",
        icon: Database,
        skills: [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "Firebase",
            "SQL",
            "Relational Database Design",
            "Data Capturing",
            "Data Validation",
            "Data Management"
        ],
        theme: "muted"
    },
    {
        title: "Automation & Productivity",
        icon: Sparkles,
        skills: ["Power Automate", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word", "Outlook", "SharePoint", "OneDrive"],
        theme: "primary"
    },
    {
        title: "Network & Infrastructure",
        icon: Network,
        skills: [
            "Network Administration",
            "TCP/IP",
            "Switch Configuration",
            "Network Monitoring & Troubleshooting",
            "Infrastructure & IT Support"
        ],
        theme: "secondary"
    },
    {
        title: "Monitoring & Systems Tools",
        icon: Terminal,
        skills: ["Wireshark", "Zabbix", "Linux", "Postman", "Git", "GitHub", "Docker"],
        theme: "muted"
    },
    {
        title: "Behavioural Competencies",
        icon: Users,
        skills: ["Communication", "Teamwork", "Attention to Detail", "Honesty", "Time Management", "Leadership"],
        theme: "primary"
    }
];

export function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="h-full p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent hover:border-[#A67B5B]/50 hover:bg-[#A67B5B]/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(166,123,91,0.1)]">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-[#A67B5B]/10 text-[#A67B5B] group-hover:bg-[#A67B5B] group-hover:text-white transition-colors duration-300">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-xl tracking-tight text-white">{category.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground group-hover:text-white group-hover:border-[#A67B5B]/30 transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
