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
        color: "from-blue-500 to-cyan-500"
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
        color: "from-purple-500 to-pink-500"
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
        color: "from-green-500 to-emerald-500"
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
        color: "from-orange-500 to-red-500"
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
        color: "from-indigo-500 to-blue-500"
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
        color: "from-red-500 to-rose-500"
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
        color: "from-yellow-500 to-amber-500"
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
        color: "from-teal-500 to-cyan-500"
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent, scalable, and secure applications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="h-full p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold text-lg">{category.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="text-sm text-muted-foreground flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
