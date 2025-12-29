"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

            <motion.div
                className="max-w-5xl mx-auto text-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    <span className="block">Hi, I&apos;m</span>
                    <span className="block gradient-text">Your Name</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4"
                >
                    Computer Engineering Student
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                >
                    AI Developer & Full-Stack Engineer building intelligent systems and
                    security-aware platforms
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                >
                    <Button size="lg" className="group">
                        <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        Get in Touch
                    </Button>
                    <Button size="lg" variant="outline" className="group">
                        View Projects
                        <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    </Button>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-6"
                >
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        aria-label="GitHub Profile"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        aria-label="Email Contact"
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
}
