"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
    {
        type: "education",
        icon: GraduationCap,
        title: "Bachelor of Science Honors Degree in Computer Engineering",
        organization: "Chinhoyi University Of Technology",
        period: "August 2021 - Present (June 2026)",
        description: "Focused on AI, Embedded systems, and software engineering. Relevant coursework includes Machine Learning, Computer Vision, Data Structures, and Network Security.",
        achievements: [
            "GPA: 3.8/4.0",
            "Dean's List (Multiple Semesters)",
            "Research Assistant in AI Lab"
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        title: "Full-Stack Developer Intern",
        organization: "Tech Company Name",
        period: "Summer 2024",
        description: "Developed and deployed scalable web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver features on time.",
        achievements: [
            "Built RESTful APIs serving 10k+ users",
            "Improved application performance by 40%",
            "Implemented CI/CD pipeline"
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        title: "AI Research Intern",
        organization: "Research Lab / Company",
        period: "Summer 2023",
        description: "Conducted research on computer vision and deep learning models for real-time object detection and classification.",
        achievements: [
            "Trained models achieving 95% accuracy",
            "Published research paper",
            "Presented findings at conference"
        ]
    },
    {
        type: "certification",
        icon: Award,
        title: "Certifications & Awards",
        organization: "Various Platforms",
        period: "2022 - Present",
        description: "Continuous learning through professional certifications and competitive programming.",
        achievements: [
            "AWS Certified Cloud Practitioner",
            "TensorFlow Developer Certificate",
            "Hackathon Winner (2x)"
        ]
    }
];

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        I&apos;m a passionate Computer Engineering student with a strong focus on AI development
                        and full-stack engineering. I love building intelligent systems that solve real-world
                        problems and create meaningful impact.
                    </p>
                </motion.div>

                {/* Timeline (simplified, responsive) */}
                <div>
                    <div className="space-y-8">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.08 }}
                                    className="flex items-start gap-6"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-background">
                                            <Icon className="h-5 w-5 text-primary-foreground" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <span className="text-sm text-primary font-medium">{item.period}</span>
                                        <h3 className="text-xl font-bold mt-2 mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground font-medium mb-3">{item.organization}</p>
                                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                                        <ul className="list-inside list-disc space-y-2">
                                            {item.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="text-sm text-muted-foreground">
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
