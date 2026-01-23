"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Shield, Brain, Laptop } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { projects } from "@/data/projects";

export function Projects() {
    const router = useRouter();

    const getIcon = (category: string) => {
        switch (category) {
            case "AI/ML": return <Brain className="h-6 w-6" />;
            case "Full-Stack": return <Code2 className="h-6 w-6" />;
            case "Security AI": return <Shield className="h-6 w-6" />;
            default: return <Laptop className="h-6 w-6" />;
        }
    };

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
                <SectionHeader
                    title="FEATURED"
                    gradientText="PROJECTS."
                    subtitle="A collection of high-performance systems and intelligent solutions."
                    accentColor="brown"
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative h-full cursor-pointer"
                            onClick={() => router.push(`/projects/${project.slug}`)}
                        >
                            <Card className="h-full flex flex-col bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(25,35,45,0.1)] border-white/5 overflow-hidden">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.altText}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <CardHeader className="relative pt-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            {getIcon(project.category)}
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
                                    <CardTitle className="text-2xl font-bold mb-2 tracking-tight group-hover:text-[#A67B5B] transition-colors text-white">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground leading-relaxed text-sm space-y-4">
                                        <div className="space-y-1">
                                            <p className="font-bold text-white text-xs uppercase tracking-wider">Purpose</p>
                                            <p className="line-clamp-2">{project.purpose}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-bold text-white text-xs uppercase tracking-wider">The Problem</p>
                                            <p className="line-clamp-2">{project.problem}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-bold text-white text-xs uppercase tracking-wider">Tech Stack</p>
                                            <p className="text-[#A67B5B] line-clamp-1">{project.techStack}</p>
                                        </div>
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
                                <CardFooter className="gap-3 relative z-20">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 bg-white/5 border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (project.github !== "#") window.open(project.github, "_blank");
                                        }}
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Source
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="flex-1 shadow-lg shadow-[#A67B5B]/20 bg-[#A67B5B] hover:bg-[#8B6542] text-white"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (project.demo !== "#") window.open(project.demo, "_blank");
                                        }}
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
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
