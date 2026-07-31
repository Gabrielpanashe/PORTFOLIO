"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Brain, TrendingDown, HeartPulse, Cpu } from "lucide-react";
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
                                From explainable machine learning platforms to embedded diagnostics and healthcare AI, I focus on
                                building practical, well-engineered systems that hold up in the real world.
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
                            onClick={() => router.push('/projects/loan-default-prediction')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                                        alt="Loan Risk Intelligence Platform"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TrendingDown className="h-5 w-5 text-amber-400" />
                                        <p className="text-amber-400 font-bold text-[10px] tracking-widest uppercase">FinTech AI</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Loan Risk Intelligence</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Opaque Credit Risk.</p>
                                        <p><span className="text-white font-bold">Solution:</span> Explainable Scoring.</p>
                                        <p><span className="text-amber-400 font-bold">Stack:</span> LightGBM, CatBoost, SHAP.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://github.com/Gabrielpanashe/Loan_Default_Prediction-', '_blank'); }}
                                        >
                                            Source
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
                            onClick={() => router.push('/projects/se-cdss')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800"
                                        alt="Sentiment-Enhanced Clinical Decision Support System"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Brain className="h-5 w-5 text-red-400" />
                                        <p className="text-red-400 font-bold text-[10px] tracking-widest uppercase">Healthcare AI</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">SE-CDSS</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Precision Medication.</p>
                                        <p><span className="text-white font-bold">Solution:</span> Sentiment Analysis.</p>
                                        <p><span className="text-red-400 font-bold">Stack:</span> NLP, BioBERT, Python.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); window.open('https://github.com/Gabrielpanashe/SE-CDSS', '_blank'); }}
                                        >
                                            Source
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
                            onClick={() => router.push('/projects/silicaguard')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800"
                                        alt="SilicaGuard silicosis screening platform"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <HeartPulse className="h-5 w-5 text-emerald-400" />
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[8px] text-emerald-400 font-bold uppercase animate-pulse">Ongoing</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">SilicaGuard</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Delayed Silicosis Screening.</p>
                                        <p><span className="text-white font-bold">Solution:</span> AI Screening &amp; Referral.</p>
                                        <p><span className="text-emerald-400 font-bold">Stack:</span> Flutter, React, Python.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1 cursor-pointer"
                            onClick={() => router.push('/projects/kazizi')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
                                        alt="Kazizi vehicle diagnostics platform"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Cpu className="h-5 w-5 text-blue-400" />
                                        <span className="px-2 py-0.5 rounded-full bg-blue-400/10 border border-blue-400/20 text-[8px] text-blue-400 font-bold uppercase animate-pulse">Prototype</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Kazizi</h3>
                                    <div className="text-muted-foreground text-[10px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Unpredicted Breakdowns.</p>
                                        <p><span className="text-white font-bold">Solution:</span> OBD-II Diagnostics.</p>
                                        <p><span className="text-blue-400 font-bold">Stack:</span> Rust, Flutter, Raspberry Pi.</p>
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
