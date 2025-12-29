"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Code,
    Database,
    Cloud,
    Shield,
    Cpu,
    Globe,
    Terminal
} from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: Brain,
        skills: [
            "TensorFlow / PyTorch",
            "Computer Vision",
            "Natural Language Processing",
            "Deep Learning",
            "Model Deployment",
            "MLOps"
        ],
        theme: "primary"
    },
    {
        title: "Frontend Development",
        icon: Globe,
        skills: [
            "React / Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Responsive Design",
            "State Management"
        ],
        theme: "secondary"
    },
    {
        title: "Backend Development",
        icon: Terminal,
        skills: [
            "Node.js / Python",
            "FastAPI / Express",
            "RESTful APIs",
            "GraphQL",
            "Microservices",
            "WebSockets"
        ],
        theme: "muted"
    },
    {
        title: "Database & Storage",
        icon: Database,
        skills: [
            "PostgreSQL / MongoDB",
            "Redis",
            "SQLite",
            "Database Design",
            "Query Optimization",
            "Data Modeling"
        ],
        theme: "primary"
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        skills: [
            "Docker / Kubernetes",
            "AWS / Vercel",
            "CI/CD Pipelines",
            "GitHub Actions",
            "Infrastructure as Code",
            "Monitoring"
        ],
        theme: "secondary"
    },
    {
        title: "Security",
        icon: Shield,
        skills: [
            "Authentication (JWT)",
            "Encryption",
            "OWASP Best Practices",
            "Secure APIs",
            "Access Control",
            "Penetration Testing"
        ],
        theme: "muted"
    },
    {
        title: "Programming Languages",
        icon: Code,
        skills: [
            "Python",
            "JavaScript / TypeScript",
            "C / C++",
            "SQL",
            "Bash",
            "Java"
        ],
        theme: "primary"
    },
    {
        title: "Hardware & IoT",
        icon: Cpu,
        skills: [
            "Raspberry Pi",
            "Arduino",
            "MQTT Protocol",
            "Embedded Systems",
            "Circuit Design",
            "Sensor Integration"
        ],
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
                                <div className="h-full p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(25,35,45,0.1)]">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-xl tracking-tight">{category.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-all duration-300"
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
