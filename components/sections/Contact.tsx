"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

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
        href: "https://linkedin.com/in/gabriel-panashe",
        color: "primary"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Chinhoyi, Zimbabwe",
        href: null,
        color: "secondary"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+263 777 000 000",
        href: "tel:+263777000000",
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const content = (
                            <motion.div
                                variants={itemVariants}
                                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(25,35,45,0.1)]"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-6">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">{method.label}</h3>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
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
                    <Button size="lg" className="group shadow-xl shadow-primary/20" asChild>
                        <a href="mailto:panashechandiwana11@gmail.com">
                            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            Send me an email
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
