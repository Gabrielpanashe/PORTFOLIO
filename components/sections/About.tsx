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
            "GPA: pending",
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        title: "IT Support & Network Administrator Intern",
        organization: "Infoproduct Technologies",
        period: "October 2024 - May 2025",
        description: "Provided technical support and managed network infrastructure, ensuring high system availability and security.",
        achievements: [
            "Network Administration",
            "IT Support",
            "Hardware Maintenance"
        ]
    },
    {
        type: "community",
        icon: Award,
        title: "Community & Leadership",
        organization: "Various Organizations",
        period: "2024 - Present",
        description: "Active involvement in professional societies and student leadership roles.",
        achievements: [
            "Member of Computer Society of Zimbabwe (January 2026)",
            "Student Representative Assembly - School of Engineering (2024)",
            "Secretary General - Methodist Church on Campus Ministries (2025-2026)"
        ]
    },
    {
        type: "certification",
        icon: Award,
        title: "Certifications",
        organization: "Various Platforms",
        period: "2022 - Present",
        description: "Professional development through specialized courses and certifications.",
        achievements: [
            "pending"
        ]
    }
];

export function About() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Timeline */}

                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(25,35,45,0.5)]" />

                                    {/* Icon Box */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20 uppercase tracking-wider">
                                        <Icon className="h-3.5 w-3.5" />
                                        {item.type}
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                                        <h3 className="text-2xl font-bold">{item.title}</h3>
                                        <span className="text-sm text-primary font-medium md:ml-auto whitespace-nowrap">{item.period}</span>
                                    </div>

                                    <p className="text-lg text-muted-foreground font-medium mb-3">{item.organization}</p>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                        {item.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group/item">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors shrink-0" />
                                                <span className="text-sm text-muted-foreground group-hover/item:text-white transition-colors">
                                                    {achievement}
                                                </span>
                                            </div>
                                        ))}
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
