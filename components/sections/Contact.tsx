"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "panashechandiwana11@gmail.com",
        href: "mailto:panashechandiwana11@gmail.com",
        color: "primary"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@Gabrielpanashe",
        href: "https://github.com/Gabrielpanashe",
        color: "secondary"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Gabriel Panashe",
        href: "https://www.linkedin.com/in/panashe-chandiwana-a102672ba/",
        color: "primary"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Harare, Zimbabwe",
        href: null,
        color: "secondary"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+263 776 877 873",
        href: "tel:+263776877873",
        color: "primary"
    }
];

export function Contact() {
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
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-primary mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-6">
                        Let&apos;s <span className="gradient-text">Connect.</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and technical challenges.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                const content = (
                                    <motion.div
                                        variants={itemVariants}
                                        className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-primary/50 transition-all duration-500"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{method.label}</h3>
                                                <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">
                                                    {method.value}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );

                                return method.href ? (
                                    <a
                                        key={index}
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={index}>{content}</div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Side: Quick Action */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:mt-32"
                    >
                        <div className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 text-center">
                                <div className="mb-8 inline-flex p-6 rounded-3xl bg-primary/10 text-primary">
                                    <Mail className="h-12 w-12" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 uppercase">Direct Message</h3>
                                <p className="text-muted-foreground mb-8">
                                    Drop me an email and I&apos;ll get back to you within 24 hours.
                                </p>
                                <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20" asChild>
                                    <a href="mailto:panashechandiwana11@gmail.com">
                                        Send Email
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
