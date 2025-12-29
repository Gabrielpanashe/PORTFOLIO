"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "your.email@example.com",
        href: "mailto:your.email@example.com",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@yourusername",
        href: "https://github.com/yourusername",
        color: "from-gray-500 to-gray-700"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Your Name",
        href: "https://linkedin.com/in/yourusername",
        color: "from-blue-600 to-blue-800"
    },
    {
        icon: Twitter,
        label: "Twitter",
        value: "@yourusername",
        href: "https://twitter.com/yourusername",
        color: "from-sky-400 to-blue-500"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Your City, Country",
        href: null,
        color: "from-red-500 to-pink-500"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (123) 456-7890",
        href: "tel:+11234567890",
        color: "from-green-500 to-emerald-500"
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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities
                        to be part of your vision. Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const content = (
                            <motion.div
                                variants={itemVariants}
                                className="group p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${method.color} text-white mb-4`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg mb-1">{method.label}</h3>
                                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                    {method.value}
                                </p>
                            </motion.div>
                        );

                        return method.href ? (
                            <a
                                key={index}
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="block"
                            >
                                {content}
                            </a>
                        ) : (
                            <div key={index}>{content}</div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <Button size="lg" className="group" asChild>
                        <a href="mailto:your.email@example.com">
                            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            Send me an email
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
