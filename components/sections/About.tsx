"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const timeline = [
    {
        type: "education",
        icon: GraduationCap,
        label: "Education",
        title: "Bachelor of Science Honours Degree in Computer Engineering",
        organization: "Chinhoyi University of Technology",
        period: "August 2021 - June 2026",
        description: "Completed a Bachelor of Science Honours Degree in Computer Engineering, with studies covering software engineering, artificial intelligence, machine learning, computer networks, databases, embedded systems, electronics, operating systems, computer architecture, cybersecurity, and engineering project development.",
        achievements: [
            "Status: Completed",
        ]
    },
    {
        type: "education",
        icon: GraduationCap,
        label: "Education",
        title: "Advanced Level",
        organization: "Warren Park High School",
        period: "2020 - 2021",
        description: "Completed Advanced Level studies in Harare, Zimbabwe.",
        achievements: []
    },
    {
        type: "education",
        icon: GraduationCap,
        label: "Education",
        title: "Ordinary Level",
        organization: "Warren Park High School",
        period: "2015 - 2018",
        description: "Completed Ordinary Level studies in Harare, Zimbabwe.",
        achievements: []
    },
    {
        type: "experience",
        icon: Briefcase,
        label: "Experience",
        title: "IT Intern",
        organization: "Info-Product Technologies",
        period: "October 2024 - May 2025",
        description: "Supported the administration, maintenance, and troubleshooting of organisational IT infrastructure across hardware, software, networking, monitoring, and user-support environments.",
        achievements: [
            "Administered network infrastructure, including switch configuration, cable management, wireless connectivity, and access-control support.",
            "Provided technical support to staff by diagnosing and resolving hardware, software, printer, operating-system, and network-connectivity issues.",
            "Installed and configured operating systems, software applications, device drivers, and user workstations.",
            "Assisted with computer hardware troubleshooting, maintenance, upgrades, and repairs.",
            "Monitored network activity and investigated performance or connectivity anomalies using Wireshark.",
            "Supported infrastructure and service monitoring using Zabbix.",
            "Assisted with IT operations across a multi-site working environment.",
            "Maintained clear communication with users while resolving technical incidents."
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        label: "Experience",
        title: "General Hand",
        organization: "Zimbabwe Leaf Tobacco",
        period: "2024",
        description: "Supported daily production and operational activities within a large-scale tobacco-processing environment.",
        achievements: [
            "Assisted with general production and operational duties.",
            "Followed workplace health, safety, and operational procedures.",
            "Worked effectively as part of a team in a physically demanding environment.",
            "Supported the completion of routine production tasks."
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        label: "Experience",
        title: "Data Capturer / Warehouse Assistant",
        organization: "BAK Logistics",
        period: "2021",
        description: "Supported logistics, data-management, inventory-control, and warehouse operations for Unilever product distribution.",
        achievements: [
            "Captured, verified, and maintained logistics and inventory records.",
            "Supported product receiving, storage, organisation, and dispatch.",
            "Assisted with stock tracking and warehouse documentation.",
            "Worked in a high-volume environment requiring accuracy, teamwork, and time management."
        ]
    },
    {
        type: "certification",
        icon: Award,
        label: "Certification & Professional Development",
        title: "GCI Introduction to AI and Data Science",
        organization: "Matsuo-Iwasawa Laboratory, University of Tokyo",
        period: "May 2026 - September 2026",
        description: "Participating in the GCI Introduction to AI and Data Science programme, covering foundational and applied concepts in artificial intelligence, machine learning, data analysis, and practical problem-solving.",
        achievements: [
            "Status: In Progress"
        ]
    },
    {
        type: "certification",
        icon: Award,
        label: "Certification & Professional Development",
        title: "Zimbabwe Centre of Excellence for Enterprise AI Engineering",
        organization: "ISB Optimus — Founding Wave 1 Cohort",
        period: "2026 - Present",
        description: "Selected as a founding member of the Wave 1 Cohort of the Zimbabwe Centre of Excellence for enterprise AI engineering, delivered by ISB Optimus. A selective training and professional-development programme, not full-time employment.",
        achievements: [
            "Enterprise AI engineering",
            "Agentic AI systems",
            "AI process engineering",
            "Claude AI and Claude Code",
            "Agent Skills and tool integration",
            "Workflow automation",
            "Responsible AI",
            "Enterprise system integration",
            "Technical consulting",
            "AI solution architecture fundamentals",
            "Status: In Progress"
        ]
    },
    {
        type: "membership",
        icon: Users,
        label: "Membership & Leadership",
        title: "Member",
        organization: "Computer Society of Zimbabwe",
        period: "January 2026 - Present",
        description: "Member of Zimbabwe's professional community for computing, information technology, and digital innovation.",
        achievements: []
    },
    {
        type: "membership",
        icon: Users,
        label: "Membership & Leadership",
        title: "Student Representative Assembly Member",
        organization: "School of Engineering, Chinhoyi University of Technology",
        period: "2024",
        description: "Represented student interests and contributed to communication between engineering students and institutional leadership.",
        achievements: []
    },
    {
        type: "membership",
        icon: Users,
        label: "Membership & Leadership",
        title: "Secretary General",
        organization: "Methodist Church on Campus",
        period: "2025 - 2026",
        description: "Supported organisational administration, communication, meeting coordination, record keeping, and leadership activities.",
        achievements: []
    }
];

export function About() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed mb-4"
                >
                    Computer Engineering graduate with experience in software engineering, artificial intelligence, machine learning, backend development, enterprise systems integration, networking, and IT support. I build scalable intelligent systems using Python, FastAPI, Next.js, PostgreSQL, Docker, and modern AI technologies.
                </motion.p>

                {/* Timeline */}

                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative border-l-2 border-[#A67B5B]/30 pl-8 space-y-12">
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
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-4 border-[#A67B5B] shadow-[0_0_10px_rgba(166,123,91,0.5)]" />

                                    {/* Icon Box */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A67B5B]/10 text-[#A67B5B] text-xs font-semibold mb-4 border border-[#A67B5B]/20 uppercase tracking-wider">
                                        <Icon className="h-3.5 w-3.5" />
                                        {item.label}
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                        <span className="text-sm text-[#A67B5B] font-medium md:ml-auto whitespace-nowrap">{item.period}</span>
                                    </div>

                                    <p className="text-lg text-[#A67B5B]/90 font-medium mb-3">{item.organization}</p>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                        {item.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#A67B5B]/50 hover:bg-[#A67B5B]/5 transition-all group/item">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A67B5B]/40 group-hover/item:bg-[#A67B5B] transition-colors shrink-0" />
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
