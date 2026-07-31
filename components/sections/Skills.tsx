"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Code,
    Database,
    Cloud,
    Cpu,
    Globe,
    Terminal,
    Laptop,
    Layers,
    Sparkles,
    Network
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillCategories = [
    {
        title: "Programming Languages",
        icon: Code,
        skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "PHP", "Rust"],
        theme: "primary"
    },
    {
        title: "Artificial Intelligence & Machine Learning",
        icon: Brain,
        skills: [
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Large Language Models",
            "Retrieval-Augmented Generation",
            "Prompt Engineering",
            "Explainable AI",
            "Predictive Analytics",
            "Classification",
            "Feature Engineering",
            "Sentiment Analysis",
            "Anomaly Detection",
            "Recommendation Systems",
            "Model Evaluation"
        ],
        theme: "secondary"
    },
    {
        title: "AI & Machine Learning Libraries",
        icon: Layers,
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "SHAP", "LightGBM", "CatBoost", "LangChain", "Transformers"],
        theme: "muted"
    },
    {
        title: "Enterprise AI & Agentic Systems",
        icon: Sparkles,
        skills: [
            "Enterprise AI Engineering",
            "Agentic AI Systems",
            "AI Workflow Automation",
            "Claude AI",
            "Claude Code",
            "Agent Skills",
            "Tool Integration",
            "Prompt and Context Design",
            "Responsible AI",
            "AI-Assisted Process Engineering"
        ],
        theme: "primary"
    },
    {
        title: "Backend Development",
        icon: Terminal,
        skills: ["FastAPI", "Flask", "REST API Development", "Authentication", "Role-Based Access Control", "API Integration", "Data Validation", "Backend Architecture"],
        theme: "secondary"
    },
    {
        title: "Frontend Development",
        icon: Globe,
        skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Responsive Web Development", "Progressive Web Applications"],
        theme: "muted"
    },
    {
        title: "Databases & Data Technologies",
        icon: Database,
        skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "DuckDB", "Firebase", "Supabase", "Prisma", "Chroma", "Vector Databases"],
        theme: "primary"
    },
    {
        title: "DevOps & Deployment",
        icon: Cloud,
        skills: ["Docker", "Git", "GitHub", "Vercel", "Linux", "Google Colab", "Postman", "Environment Configuration", "Containerisation"],
        theme: "secondary"
    },
    {
        title: "Networking & IT Infrastructure",
        icon: Network,
        skills: [
            "Network Administration",
            "Switch Configuration",
            "TCP/IP",
            "Wi-Fi Troubleshooting",
            "Network Monitoring",
            "Wireshark",
            "Zabbix",
            "Hardware Troubleshooting",
            "Operating-System Installation",
            "IT Support"
        ],
        theme: "muted"
    },
    {
        title: "Embedded & Industrial Technologies",
        icon: Cpu,
        skills: ["Raspberry Pi", "OBD-II", "CAN Bus", "Embedded Systems", "Edge Computing", "Predictive Maintenance"],
        theme: "primary"
    },
    {
        title: "Development Tools",
        icon: Laptop,
        skills: ["Visual Studio Code", "Jupyter Notebook", "Google Colab", "GitHub", "Postman", "Docker", "XAMPP"],
        theme: "secondary"
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
                <SectionHeader
                    title="TECHNICAL"
                    gradientText="TOOLKIT."
                    subtitle="A comprehensive overview of my technical expertise and the tools I use to build scalable systems."
                    accentColor="brown"
                />
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
