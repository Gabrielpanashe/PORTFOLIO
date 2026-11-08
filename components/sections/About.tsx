"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const timeline = [
    {
        type: "education",
        icon: GraduationCap,
        label: "Education",
        title: "Bachelor of Engineering (Honours) in Computer Engineering",
        organization: "Chinhoyi University of Technology (CUT), Zimbabwe",
        period: "2021 - 2026",
        description: "Graduated with a First Class (First Division) Honours degree in Computer Engineering.",
        achievements: [
            "Classification: First Class",
            "GPA: 3.1 | Grade: A-"
        ]
    },
    {
        type: "education",
        icon: GraduationCap,
        label: "Education",
        title: "Advanced Level (A Level)",
        organization: "Warren Park High School, Harare",
        period: "2019 - 2020",
        description: "Completed Advanced Level studies with 3 A Level passes: Mathematics, Physics and Geography.",
        achievements: []
    },
    {
        type: "education",
        icon: GraduationCap,
        label: "Education",
        title: "Ordinary Level (O Level)",
        organization: "Warren Park High School, Harare",
        period: "2015 - 2018",
        description: "Completed Ordinary Level studies with 9 O Level passes, including Mathematics, Physics and English.",
        achievements: []
    },
    {
        type: "experience",
        icon: Briefcase,
        label: "Experience",
        title: "IT Intern",
        organization: "Info-Product Technologies, Harare",
        period: "October 2024 - May 2025",
        description: "Supported IT infrastructure administration and the troubleshooting of technical systems, developing practical experience in problem-solving, systems monitoring and resolving operational IT challenges.",
        achievements: [
            "Provided technical support and diagnosed hardware, software and network connectivity problems, supporting reliable IT operations.",
            "Monitored network and system performance using Wireshark and Zabbix to investigate network anomalies, performance issues and potential security concerns.",
            "Assisted with software configuration, access-control administration and maintenance of technical records.",
            "Supported IT infrastructure administration and troubleshooting of technical systems."
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        label: "Experience",
        title: "Data Capturer / Warehouse Assistant",
        organization: "BAK Logistics, Harare",
        period: "2021",
        description: "Supported logistics and inventory data management for Unilever product distribution.",
        achievements: [
            "Captured, verified and managed logistics and inventory data for Unilever product distribution.",
            "Maintained warehouse organisation and supported daily operations in a high-volume distribution environment."
        ]
    },
    {
        type: "certification",
        icon: Award,
        label: "Certification",
        title: "GCI Introduction to AI and Data Science",
        organization: "Matsuo-Iwasawa Laboratory, University of Tokyo",
        period: "2026",
        description: "Completed the GCI Introduction to AI and Data Science programme.",
        achievements: []
    },
    {
        type: "certification",
        icon: Award,
        label: "Certification",
        title: "Cisco Certified Network Associate (CCNA)",
        organization: "Cisco",
        period: "In Progress",
        description: "Currently working towards the CCNA certification in networking fundamentals.",
        achievements: [
            "Status: In Progress"
        ]
    },
    {
        type: "award",
        icon: Award,
        label: "Award",
        title: "2026 Cimas Healthathon 3.0 Champions: Team Lead",
        organization: "Cimas Healthathon 3.0",
        period: "2026",
        description: "Led a team of three to first position with SilicaGuard, an AI-assisted lung health screening and referral platform for artisanal miners.",
        achievements: []
    },
    {
        type: "membership",
        icon: Users,
        label: "Membership & Leadership",
        title: "Member",
        organization: "Computer Society of Zimbabwe",
        period: "January 2026 - Present",
        description: "Member of Zimbabwe's professional community for computing and information technology.",
        achievements: []
    },
    {
        type: "membership",
        icon: Users,
        label: "Membership & Leadership",
        title: "Student Representative Assembly",
        organization: "School of Engineering, Chinhoyi University of Technology",
        period: "2024",
        description: "Served on the Student Representative Assembly for the School of Engineering.",
        achievements: []
    },
    {
        type: "membership",
        icon: Users,
        label: "Membership & Leadership",
        title: "Secretary General",
        organization: "Methodist Church on Campus",
        period: "2025 - 2026",
        description: "Served as Secretary General of the Methodist Church on Campus.",
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
                    Computer Engineering graduate with a First Class Honours degree and practical experience in network administration, IT infrastructure support, systems monitoring, software development, database management and artificial intelligence. I combine Python, machine learning and automation skills with hands-on knowledge of TCP/IP, switch configuration, Linux, Wireshark and Zabbix to build and maintain reliable, data-driven technical systems.
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
