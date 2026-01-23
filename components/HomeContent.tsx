"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Shield } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

export function HomeContent() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    const skills = [
        { name: "React & Next.js", img: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=400" },
        { name: "Python AI/ML", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" },
        { name: "Cloud & DevOps", img: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
        { name: "Cybersecurity", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [skills.length]);

    return (
        <main className="w-full">
            <Hero />

            {/* Featured Teaser */}
            <section className="py-32 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center mb-20"
                    >
                        <div className="max-w-3xl">
                            <h2 className="text-4xl sm:text-7xl font-black mb-8 tracking-tight leading-none uppercase">
                                <span className="text-white">CRAFTING </span>
                                <span className="text-[#A67B5B]">SYSTEMS</span>
                                <span className="text-white font-outline-2"> THAT </span>
                                <span className="text-[#A67B5B]">SCALE</span>
                            </h2>
                            <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                                From autonomous AI agents to enterprise-grade full-stack platforms, I focus on building robust,
                                secure, and high-performance digital solutions.
                            </p>
                            <Button variant="outline" size="lg" asChild className="rounded-full h-14 px-8 border-white/10 hover:bg-white/5 font-bold group">
                                <Link href="/projects">
                                    View All Projects
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Project Cards... (Rest preserved as is) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1 cursor-pointer"
                            onClick={() => router.push('/projects/billboard-management')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800"
                                        alt="Billboard Management"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Code2 className="h-5 w-5 text-primary" />
                                        <p className="text-primary font-bold text-xs tracking-widest uppercase">Full-Stack System</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Billboard Management</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Revenue leakages.</p>
                                        <p><span className="text-white font-bold">Solution:</span> Automated Tracking.</p>
                                        <p><span className="text-primary font-bold">Stack:</span> Next.js, FastAPI.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://github.com/lordskyzw/billboardHot100', '_blank'); }}
                                        >
                                            Source
                                        </Button>
                                        <Button
                                            size="sm" className="h-8 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://hccfrontend.up.railway.app/login', '_blank'); }}
                                        >
                                            Live
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1 cursor-pointer"
                            onClick={() => router.push('/projects/face-access-system')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                                        alt="Face Access System"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="h-5 w-5 text-blue-400" />
                                        <p className="text-blue-400 font-bold text-xs tracking-widest uppercase">Security AI</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Face Access System</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Physical Spoofing.</p>
                                        <p><span className="text-white font-bold">Solution:</span> AI Anti-Spoofing.</p>
                                        <p><span className="text-blue-400 font-bold">Stack:</span> Python, TensorFlow.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://github.com/Gabrielpanashe/face-access-system', '_blank'); }}
                                        >
                                            Source
                                        </Button>
                                        <Button
                                            size="sm" className="h-8 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); }}
                                        >
                                            Live
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1 cursor-pointer"
                            onClick={() => router.push('/projects/doctor-ai')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800"
                                        alt="Doctor AI Assistant"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Brain className="h-5 w-5 text-red-400" />
                                        <div className="flex flex-col">
                                            <p className="text-red-400 font-bold text-[10px] tracking-widest uppercase">Medical AI</p>
                                            <span className="text-[8px] text-red-300/80 font-bold uppercase animate-pulse">Research Project</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Doctor AI Assistant</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Precision Medication.</p>
                                        <p><span className="text-white font-bold">Solution:</span> Sentiment Analysis.</p>
                                        <p><span className="text-red-400 font-bold">Stack:</span> LangChain, OpenAI.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://github.com/Gabrielpanashe/doctor-ai', '_blank'); }}
                                        >
                                            Source
                                        </Button>
                                        <Button
                                            size="sm" className="h-8 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); }}
                                        >
                                            Live
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1 cursor-pointer"
                            onClick={() => router.push('/projects/school-erp')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800"
                                        alt="School ERP System"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Code2 className="h-5 w-5 text-emerald-400" />
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[8px] text-emerald-400 font-bold uppercase animate-pulse">Alpha</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">School ERP System</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Manual Activity.</p>
                                        <p><span className="text-white font-bold">Solution:</span> School Digitalization.</p>
                                        <p><span className="text-emerald-400 font-bold">Stack:</span> Supabase, FastAPI.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://github.com/Gabrielpanashe/school-management-system', '_blank'); }}
                                        >
                                            Source
                                        </Button>
                                        <Button
                                            size="sm" className="h-8 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); }}
                                        >
                                            Live
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 border-t border-white/5 overflow-hidden relative">
                {/* Background Glows for \"Alive\" feel */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#A67B5B]/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 blur-[120px] rounded-full animate-pulse delay-1000" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                        {/* Left Content - DNA */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start text-left z-20"
                        >
                            <h2 className="text-4xl sm:text-7xl font-black mb-6 tracking-tighter uppercase relative leading-none">
                                <span className="text-[#A67B5B]">TECHNICAL</span> <br />
                                <span className="text-white">DNA</span>.
                                <div className="absolute -left-4 top-0 w-1 h-24 bg-[#A67B5B]/30 blur-sm" />
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
                                My expertise spans the entire software engineering lifecycle, with a deep specialization in
                                <span className="text-white font-medium text-nowrap"> intelligent systems</span> and <span className="text-white font-medium text-nowrap">secure infrastructure</span>.
                            </p>
                            <Button size="lg" asChild className="rounded-full h-12 px-8 bg-[#A67B5B] hover:bg-[#8B6542] text-white font-bold group shadow-xl">
                                <Link href="/skills" className="flex items-center">
                                    Explore Full Toolkit <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Right Content - 3D Multi-Card Auto-Shuffling Animation */}
                        <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center lg:justify-end pr-0 lg:-ml-20">
                            <div className="relative w-full max-w-[300px] h-full flex items-center justify-center">
                                {skills.map((skill, idx) => {
                                    // Calculate position based on activeIndex
                                    const position = (idx - activeIndex + skills.length) % skills.length;
                                    const isFront = position === 0;

                                    return (
                                        <motion.div
                                            key={idx}
                                            animate={{
                                                opacity: isFront ? 1 : 0.6 + (0.1 * position),
                                                scale: isFront ? 1 : 1 - (0.05 * position),
                                                x: isFront ? 0 : 20 * position,
                                                y: isFront ? 0 : 15 * position,
                                                rotateZ: isFront ? 0 : 5 * position,
                                                rotateY: isFront ? 0 : 15,
                                                zIndex: skills.length - position,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20,
                                                mass: 1
                                            }}
                                            className="absolute w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 glass-card shadow-2xl group/card cursor-pointer"
                                            onClick={() => setActiveIndex(idx)}
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center grayscale group-hover/card:grayscale-0 transition-all duration-700"
                                                style={{ backgroundImage: `url('${skill.img}')` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                            {isFront && <div className="absolute inset-0 bg-primary/20 transition-opacity" />}

                                            {/* Glossy Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />

                                            <div className="relative h-full flex flex-col justify-end p-8">
                                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center text-white font-black border border-white/20 text-sm">
                                                    {skill.name[0]}
                                                </div>
                                                <span className="text-xl font-black text-white uppercase tracking-tighter leading-none">{skill.name}</span>
                                                <div className={`h-1 bg-[#A67B5B] mt-2 rounded-full transition-all duration-500 ${isFront ? 'w-full' : 'w-0'}`} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
