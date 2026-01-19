import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, Code2, Shield, Brain, Laptop } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
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

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

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
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="flex flex-col gap-12">
                    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-8 border-b border-white/5">
                        <div className="flex items-center gap-8">
                            <div className="p-5 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-2xl">
                                {getIcon(project.category)}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-black px-4">
                                        {project.category}
                                    </Badge>
                                    {project.status && (
                                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-pulse px-3">
                                            {project.status}
                                        </Badge>
                                    )}
                                </div>
                                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-none">
                                    {project.title}
                                </h1>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {project.github !== "#" && (
                                <Button variant="outline" className="rounded-2xl border-white/10 hover:bg-white/5 h-14 px-8 font-bold" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-5 w-5" /> Source
                                    </a>
                                </Button>
                            )}
                            {project.demo !== "#" && (
                                <Button className="rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 h-14 px-8 font-bold" asChild>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </header>

                    {project.slug === "doctor-ai" && (
                        <div className="w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(30,50,80,0.1)] relative group">
                            <img
                                src="/doctor-ai.png"
                                alt="Doctor AI Dashboard Preview"
                                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12">
                                <p className="text-white text-3xl font-black uppercase tracking-tighter">AI Dashboard Preview</p>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-8">
                        <div className="lg:col-span-2 space-y-20">
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px bg-primary flex-grow" />
                                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">The Mission</h2>
                                    <div className="h-px bg-primary/20 flex-grow" />
                                </div>
                                <p className="text-3xl text-white font-medium leading-tight tracking-tight">
                                    {project.purpose}
                                </p>
                            </section>

                            <section className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                                <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                                    <Shield className="h-64 w-64" />
                                </div>
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-red-400 whitespace-nowrap">The Challenge</h2>
                                    <div className="h-px bg-red-400/20 flex-grow" />
                                </div>
                                <p className="text-2xl text-muted-foreground leading-relaxed relative z-10 font-bold">
                                    {project.problem}
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-10">
                                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 whitespace-nowrap">Technical Architecture</h2>
                                    <div className="h-px bg-blue-400/20 flex-grow" />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {project.techStack.split(", ").map((tech, i) => (
                                        <div
                                            key={i}
                                            className="px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-lg font-black text-white hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <aside className="space-y-10">
                            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-white/[0.01] to-transparent border border-white/5 shadow-2xl">
                                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10 text-center">System Specs</h3>
                                <ul className="space-y-6">
                                    {project.tags.map((tag, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white font-black text-sm uppercase tracking-wider">
                                            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 rounded-[3rem] border border-dashed border-white/10 hover:border-primary/30 transition-colors group">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">Development Status</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                    <span className="text-white font-black uppercase tracking-tighter text-xl">
                                        {project.status || "Completed"}
                                    </span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
}
