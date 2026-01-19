"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Download, MessageSquare, MapPin } from "lucide-react";

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Section - First on Mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
                        className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[4/5] lg:order-2"
                    >
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-3xl group bg-black/40">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <Image
                                src="/profile_new.jpg"
                                alt="Gabriel Panashe"
                                fill
                                sizes="(max-width: 768px) 100vw, 420px"
                                className="object-cover scale-110 group-hover:scale-105 transition-transform duration-1000"
                                priority
                            />

                            {/* Floating Card Info */}
                            <div className="absolute bottom-8 left-8 right-8 z-20 backdrop-blur-md bg-white/10 border border-white/10 p-5 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                <p className="text-white text-xl font-black uppercase tracking-tight">G. Panashe</p>
                                <p className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mt-1">Computer Engineer | Full-Stack Developer | AI</p>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10 animate-pulse delay-500" />
                    </motion.div>

                    {/* Text Content Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 text-center lg:order-1 flex flex-col items-center"
                    >
                        <motion.div variants={itemVariants} className="mb-6 flex flex-col items-center">
                            <h2 className="text-primary font-bold text-lg sm:text-xl italic uppercase tracking-widest">Hi, I&apos;m</h2>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mt-2 flex flex-col sm:flex-row sm:gap-4 justify-center">
                                <span className="text-white uppercase">GABRIEL</span>
                                <span className="gradient-text uppercase">PANASHE.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-muted-foreground font-medium mb-10 max-w-xl mx-auto leading-relaxed text-center"
                        >
                            Crafting <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">intelligent systems</span> and
                            high-performance architectures. Bridging the gap between Computer Engineering and Artificial Intelligence.
                        </motion.p>

                        {/* CTA Buttons - Mobile focused layout */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-12"
                        >
                            <Button size="lg" className="w-full sm:w-auto rounded-2xl px-10 h-16 text-lg font-black uppercase tracking-widest shadow-[0_6px_0_0_hsl(25,35,35%)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_hsl(25,35,35%)] active:translate-y-[6px] active:shadow-none transition-all bg-primary hover:bg-primary/95 text-white" asChild>
                                <Link href="/contact">
                                    Let&apos;s Talk
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-2xl px-10 h-16 text-lg font-black uppercase tracking-widest border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white shadow-[0_6px_0_0_rgba(255,255,255,0.05)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgba(255,255,255,0.05)] active:translate-y-[6px] active:shadow-none" asChild>
                                <Link href="/resume.pdf">
                                    <Download className="mr-3 h-5 w-5 text-primary" />
                                    Resume
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Social Links and Location */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                            <div className="flex items-center gap-6">
                                {[
                                    { icon: Github, href: "https://github.com/Gabrielpanashe", label: "GitHub" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/panashe-chandiwana-a102672ba/", label: "LinkedIn" },
                                    { icon: Mail, href: "mailto:panashechandiwana11@gmail.com", label: "Email" },
                                    { icon: MessageSquare, href: "https://wa.me/263776877873", label: "WhatsApp" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-2 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>
                            <div className="hidden sm:block h-8 w-px bg-white/10" />
                            <div className="flex items-center gap-2 text-muted-foreground px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">Harare, Zimbabwe</span>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
