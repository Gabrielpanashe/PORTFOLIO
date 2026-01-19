import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, Code2, Shield, Brain, Laptop } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Gabriel Panashe`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Gabriel Panashe`,
            description: project.description,
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const getIcon = (category: string) => {
        switch (category) {
            case "AI/ML": return <Brain className="h-12 w-12 text-blue-400" />;
            case "Full-Stack": return <Code2 className="h-12 w-12 text-primary" />;
            case "Security AI": return <Shield className="h-12 w-12 text-emerald-400" />;
            default: return <Laptop className="h-12 w-12 text-muted-foreground" />;
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#A67C52] selection:text-white">
            {/* Hero Section with Cover Image */}
            <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#050505]" />
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
                    <Link
                        href="/projects"
                        className="absolute top-8 left-4 sm:left-8 inline-flex items-center text-white/60 hover:text-[#A67C52] transition-colors group z-20"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="p-3 sm:p-4 rounded-2xl bg-[#A67C52]/10 border border-[#A67C52]/20 backdrop-blur-md">
                                {getIcon(project.category)}
                            </div>
                            <Badge variant="secondary" className="bg-white/5 text-white border-white/10 px-4 py-1 text-sm font-medium backdrop-blur-md">
                                {project.category}
                            </Badge>
                            {project.status && (
                                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1 text-sm font-medium backdrop-blur-md animate-pulse">
                                    {project.status}
                                </Badge>
                            )}
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                            <span className="text-white">{project.title.split(" ").slice(0, -1).join(" ")}</span>{" "}
                            <span className="text-[#A67C52]">{project.title.split(" ").pop()}</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-24">
                {/* Doctor AI Specific Dashboard - Kept as requested */}
                {project.slug === "doctor-ai" && (
                    <div className="w-full aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-[#A67C52]/5 relative group mb-20 bg-black">
                        <Image
                            src="/doctor-ai.png"
                            alt="Doctor AI Dashboard Preview"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
                            <p className="text-white text-xl sm:text-3xl font-black uppercase tracking-tighter">AI Analysis Dashboard</p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-8 space-y-16 sm:space-y-24">
                        {/* Mission Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-[#A67C52] flex-grow" />
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#A67C52] whitespace-nowrap">The Vision</h2>
                                <div className="h-px bg-[#A67C52]/20 flex-grow" />
                            </div>
                            <p className="text-2xl sm:text-4xl text-white font-medium leading-tight tracking-tight">
                                {project.purpose}
                            </p>
                        </section>

                        {/* Challenge Section */}
                        <section className="relative group">
                            <div className="absolute -left-4 -top-4 w-20 h-20 border-l border-t border-white/5 rounded-tl-3xl opacity-50 group-hover:border-[#A67C52]/30 transition-colors" />
                            <div className="pl-4 sm:pl-8 py-4">
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-red-400" />
                                    The Challenge
                                </h2>
                                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                                    {project.problem}
                                </p>
                            </div>
                        </section>

                        {/* Tech Stack Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#A67C52] whitespace-nowrap">Architecture</h2>
                                <div className="h-px bg-[#A67C52]/20 flex-grow" />
                            </div>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {project.techStack.split(", ").map((tech, i) => (
                                    <div
                                        key={i}
                                        className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 text-base sm:text-lg font-bold text-white/90 hover:border-[#A67C52]/40 hover:bg-[#A67C52]/10 hover:text-[#A67C52] transition-all duration-300"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8 sm:space-y-10 lg:sticky lg:top-10 h-fit">
                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4">
                            {project.demo !== "#" && (
                                <Button className="w-full rounded-xl bg-[#A67C52] hover:bg-[#8B6542] text-white shadow-lg shadow-[#A67C52]/20 h-14 font-bold text-base tracking-wide transition-all" asChild>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-5 w-5" /> Visit Live Site
                                    </a>
                                </Button>
                            )}
                            {project.github !== "#" && (
                                <Button variant="outline" className="w-full rounded-xl border-white/10 hover:bg-white/5 hover:border-[#A67C52]/30 hover:text-[#A67C52] h-14 font-bold text-base tracking-wide bg-transparent text-white transition-all" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-5 w-5" /> View Source Code
                                    </a>
                                </Button>
                            )}
                        </div>

                        {/* System Specs */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#A67C52] mb-8">Core Technologies</h3>
                            <ul className="space-y-4">
                                {project.tags.map((tag, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm uppercase tracking-wide">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#A67C52] shadow-[0_0_8px_rgba(166,124,82,0.5)]" />
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
