"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Billboard Management System",
        description: "A group project developed to address financial leaks in city council revenue collection from billboards. Streamlines management and ensures transparency in advertising revenue.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Financial Systems"],
        github: "https://github.com/lordskyzw/billboardHot100",
        demo: "#",
        category: "Full-Stack",
    },
    {
        title: "AI Face Powered System",
        description: "Biometric authentication system with liveness detection and anti-spoofing capabilities using deep learning models. Features real-time processing and secure embedding storage.",
        tags: ["Python", "TensorFlow", "React", "FastAPI", "Computer Vision"],
        github: "https://github.com/Gabrielpanashe/face-access-system",
        demo: "https://demo.example.com",
        category: "AI/ML",
    },
    {
        title: "Doctor Assistant AI",
        description: "Intelligent medical diagnosis support system powered by large language models and clinical data. Focuses on healthcare accessibility and preliminary diagnostic accuracy.",
        status: "In Development",
        tags: ["Next.js", "Python", "LLMs", "RAG", "Healthcare"],
        github: "https://github.com/Gabrielpanashe/doctor-ai",
        demo: "#",
        category: "AI/ML",
    },
];

export function Projects() {
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
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-4">
                        FEATURED <span className="gradient-text">PROJECTS.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A collection of high-performance systems and intelligent solutions.
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full flex flex-col group bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(25,35,45,0.1)] border-white/5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <CardHeader className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            <Code2 className="h-6 w-6" />
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/10 px-3">
                                                {project.category}
                                            </Badge>
                                            {project.status && (
                                                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-2 animate-pulse">
                                                    {project.status}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow relative">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-muted/50 text-muted-foreground border border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-3 relative">
                                    <Button variant="outline" size="sm" className="flex-1 bg-white/5 border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Source
                                        </a>
                                    </Button>
                                    <Button size="sm" className="flex-1 shadow-lg shadow-primary/20" asChild>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
