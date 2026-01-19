"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Shield } from "lucide-react";

import { useRouter } from "next/navigation";

export function HomeContent() {
    const router = useRouter();

    return (
        <main className="w-full">
            <Hero />

            {/* About Section Teaser ... (line 26-67 unchanged) */}

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
                        {/* Billboard Management System */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1 cursor-pointer"
                            onClick={() => router.push('/projects/billboard-management')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-6">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Code2 className="h-5 w-5 text-primary" />
                                        <p className="text-primary font-bold text-xs tracking-widest uppercase">Full-Stack System</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Billboard Management</h3>
                                    <div className="text-muted-foreground text-[8px] space-y-1 mb-4 uppercase tracking-tight font-medium">
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

                        {/* AI Face Powered System */}
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
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="h-5 w-5 text-blue-400" />
                                        <p className="text-blue-400 font-bold text-xs tracking-widest uppercase">Security AI</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Face Access System</h3>
                                    <div className="text-muted-foreground text-[8px] space-y-1 mb-4 uppercase tracking-tight font-medium">
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

                        {/* Doctor AI Assistant */}
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
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Brain className="h-5 w-5 text-red-400" />
                                        <p className="text-red-400 font-bold text-xs tracking-widest uppercase">Medical AI</p>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Doctor AI Assistant</h3>
                                    <div className="text-muted-foreground text-[8px] space-y-1 mb-4 uppercase tracking-tight font-medium">
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

                        {/* School Management ERP */}
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
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Code2 className="h-5 w-5 text-emerald-400" />
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[8px] text-emerald-400 font-bold uppercase animate-pulse">Alpha</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">School ERP System</h3>
                                    <div className="text-muted-foreground text-[8px] space-y-1 mb-4 uppercase tracking-tight font-medium">
                                        <p><span className="text-white font-bold">Problem:</span> Manual Activity.</p>
                                        <p><span className="text-white font-bold">Solution:</span> School Digitalization.</p>
                                        <p><span className="text-emerald-400 font-bold">Stack:</span> Supabase, FastAPI.</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto">
                                        <Button
                                            variant="outline" size="sm" className="h-8 rounded-xl border-white/10 hover:bg-white/10 text-[10px]"
                                            onClick={(e) => { e.stopPropagation(); }}
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
            <section className="py-32 border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center flex flex-col items-center">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter uppercase relative isolate">
                            TECHNICAL <span className="gradient-text">DNA</span>.
                            <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-3xl -z-10 animate-pulse" />
                        </h2>
                        <p className="text-muted-foreground text-xl leading-relaxed mb-12">
                            My expertise spans the entire software engineering lifecycle, with a deep specialization in
                            intelligent systems and secure infrastructure.
                        </p>
                        <Button variant="link" size="lg" asChild className="text-primary hover:text-white p-0 h-auto text-xl font-bold group">
                            <Link href="/skills" className="flex items-center">
                                Explore Full Toolkit <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Sliding Marquee */}
                <div className="relative flex overflow-hidden group py-10 bg-white/[0.01]">
                    <motion.div
                        className="flex gap-8 animate-marquee"
                        animate={{
                            x: [0, -1032],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[
                            { name: "React", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" },
                            { name: "Next.js", img: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=400" },
                            { name: "Python", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" },
                            { name: "TensorFlow", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" },
                            { name: "Node.js", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400" },
                            { name: "Docker", img: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
                            { name: "AI/ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
                            { name: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
                        ].concat([
                            { name: "React", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" },
                            { name: "Next.js", img: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=400" },
                            { name: "Python", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" },
                            { name: "TensorFlow", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" },
                            { name: "Node.js", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400" },
                            { name: "Docker", img: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
                            { name: "AI/ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
                            { name: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
                        ]).map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 w-64 h-80 relative rounded-3xl overflow-hidden group/card border border-white/10 shadow-3xl transform hover:scale-105 transition-all duration-500">
                                <div
                                    className="absolute inset-0 bg-cover bg-center grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
                                    style={{ backgroundImage: `url('${skill.img}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/card:opacity-100 transition-opacity z-20" />
                                <div className="relative h-full flex flex-col justify-end p-8 z-30">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center text-white font-black border border-white/20">
                                        {skill.name[0]}
                                    </div>
                                    <span className="text-xl font-black text-white uppercase tracking-tighter">{skill.name}</span>
                                    <div className="h-1 w-0 bg-primary group-hover/card:w-full transition-all duration-500 mt-2 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
