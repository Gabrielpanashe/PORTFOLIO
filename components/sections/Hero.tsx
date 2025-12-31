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
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as any,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, rotate: 2 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1,
                ease: "easeOut" as any,
            },
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden px-6 lg:px-8">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="text-primary font-bold text-xl italic uppercase tracking-widest">Hi, I&apos;m</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8 flex flex-wrap gap-x-4"
                        >
                            <span className="text-white uppercase">GABRIEL</span>
                            <span className="gradient-text uppercase">PANASHE.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-muted-foreground font-medium mb-10 max-w-xl leading-relaxed"
                        >
                            I build <span className="text-white border-b-2 border-primary/40">intelligent systems</span> and
                            high-performance full-stack architectures. Computer Engineering student passionate about AI and Security.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-6 mb-12"
                        >
                            <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-black uppercase tracking-widest shadow-[0_6px_0_0_hsl(25,35,35%)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_hsl(25,35,35%)] active:translate-y-[6px] active:shadow-none transition-all bg-primary hover:bg-primary/95 text-white" asChild>
                                <Link href="/contact">
                                    Let&apos;s Talk
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg font-black uppercase tracking-widest border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white shadow-[0_6px_0_0_rgba(255,255,255,0.05)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_rgba(255,255,255,0.05)] active:translate-y-[6px] active:shadow-none" asChild>
                                <Link href="/resume.pdf">
                                    <Download className="mr-3 h-5 w-5 text-primary" />
                                    Resume
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-8"
                        >
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
                                    className="group relative p-2"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors hover:scale-110 duration-200" />
                                </a>
                            ))}
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground mt-4">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm font-bold uppercase tracking-widest">Harare, Zimbabwe</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative justify-self-center lg:justify-self-end w-full max-w-[420px]"
                    >
                        <div className="relative z-10 rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-3xl group aspect-[4/5] w-full bg-black/40">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 z-20" />
                            <Image
                                src="/profile_new.jpg"
                                alt="Gabriel Panashe"
                                fill
                                sizes="(max-width: 768px) 100vw, 420px"
                                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                priority
                            />
                            <div className="absolute bottom-10 left-10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 text-left">
                                <p className="text-white text-2xl font-black tracking-tight uppercase">G. PANASHE</p>
                                <p className="text-primary font-bold text-xs tracking-widest uppercase mt-1">AI & Full-Stack Developer</p>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 animate-pulse delay-500" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
