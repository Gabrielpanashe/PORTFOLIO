"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
    {
        title: "AI-Powered Face Recognition System",
        description: "Biometric authentication system with liveness detection and anti-spoofing capabilities using deep learning models.",
        tags: ["Python", "TensorFlow", "React", "FastAPI", "Computer Vision"],
        github: "https://github.com/yourusername/face-recognition",
        demo: "https://demo.example.com",
        category: "AI/ML",
    },
    {
        title: "Full-Stack E-Commerce Platform",
        description: "Scalable e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
        github: "https://github.com/yourusername/ecommerce",
        demo: "https://demo.example.com",
        category: "Full-Stack",
    },
    {
        title: "Security-Aware Chat Application",
        description: "End-to-end encrypted messaging platform with JWT authentication and role-based access control.",
        tags: ["Node.js", "Socket.io", "MongoDB", "React", "Encryption"],
        github: "https://github.com/yourusername/secure-chat",
        demo: "https://demo.example.com",
        category: "Security",
    },
    {
        title: "Machine Learning Model Deployment Pipeline",
        description: "Automated ML pipeline for model training, versioning, and deployment with monitoring and A/B testing.",
        tags: ["Python", "Docker", "Kubernetes", "MLflow", "FastAPI"],
        github: "https://github.com/yourusername/ml-pipeline",
        demo: "https://demo.example.com",
        category: "AI/ML",
    },
    {
        title: "Real-Time Data Analytics Dashboard",
        description: "Interactive dashboard for visualizing large-scale data streams with real-time updates and predictive analytics.",
        tags: ["React", "D3.js", "Apache Kafka", "Python", "Redis"],
        github: "https://github.com/yourusername/analytics-dashboard",
        demo: "https://demo.example.com",
        category: "Full-Stack",
    },
    {
        title: "IoT Smart Home Automation",
        description: "IoT platform for controlling and monitoring smart home devices with voice commands and mobile app integration.",
        tags: ["Raspberry Pi", "MQTT", "React Native", "Firebase", "Arduino"],
        github: "https://github.com/yourusername/smart-home",
        demo: "https://demo.example.com",
        category: "IoT",
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
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects demonstrating my expertise in AI development,
                        full-stack engineering, and security-aware system design
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full flex flex-col group">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Code2 className="h-6 w-6" />
                                        </div>
                                        <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                                            {project.category}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-2">
                                    <Button variant="outline" size="sm" className="flex-1" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                    <Button size="sm" className="flex-1" asChild>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
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
