"use client";

import { Github, Linkedin, Mail, Heart, MessageSquare, MapPin, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/Gabrielpanashe",
        label: "GitHub",
        color: "hover:text-[#A67B5B] group-hover:bg-[#A67B5B]/10"
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/panashe-chandiwana-a102672ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BOR0E%2BpdASMOcwFcd4sDySA%3D%3D",
        label: "LinkedIn",
        color: "hover:text-[#A67B5B] group-hover:bg-[#A67B5B]/10"
    },
    {
        icon: Mail,
        href: "mailto:panashechandiwana11@gmail.com",
        label: "Email",
        color: "hover:text-[#A67B5B] group-hover:bg-[#A67B5B]/10"
    },
    {
        icon: MessageSquare,
        href: "https://wa.me/263776877873",
        label: "WhatsApp",
        color: "hover:text-[#A67B5B] group-hover:bg-[#A67B5B]/10"
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-background pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 items-start">
                    {/* Brand & Location */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="group flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#A67B5B] flex items-center justify-center font-black text-2xl shadow-[0_5px_0_0_#8B6542] group-hover:translate-y-[2px] group-hover:shadow-[0_3px_0_0_#8B6542] active:translate-y-[4px] active:shadow-none transition-all text-white">
                                G
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-black tracking-tighter text-white uppercase">PANASHE</span>
                                <span className="text-xs font-bold tracking-[0.2em] text-[#A67B5B]/80 uppercase mt-1">Systems Engineer</span>
                            </div>
                        </Link>
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                            Engineering intelligent systems with a focus on AI, scalability, and security.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="h-4 w-4 text-[#A67B5B]" />
                                <span className="text-sm font-bold uppercase tracking-widest text-white/80">Harare, Zimbabwe</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MessageSquare className="h-4 w-4 text-emerald-500" />
                                <span className="text-sm font-bold tracking-widest">+263 77 687 7873</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Replacement */}
                    <div className="lg:col-span-2">
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -z-10 w-32 h-32 bg-[#A67B5B]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="font-black text-2xl tracking-tight mb-2 text-white italic">Have a project?</h4>
                            <p className="text-muted-foreground mb-6 text-sm">Want to hire me or just need some advice? Send a message.</p>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 transition-all outline-none text-sm font-medium"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 transition-all outline-none text-sm font-medium"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your message..."
                                    rows={3}
                                    className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 transition-all outline-none text-sm font-medium resize-none"
                                />
                                <button className="w-full h-14 rounded-2xl bg-[#A67B5B] text-white font-black uppercase tracking-[0.2em] text-xs shadow-[0_5px_0_0_#8B6542] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#8B6542] active:translate-y-[5px] active:shadow-none transition-all flex items-center justify-center gap-3 isolate relative overflow-hidden group/btn">
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10">Send Message</span>
                                    <Send className="h-4 w-4 relative z-10" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-black text-sm tracking-widest uppercase mb-8 text-white px-2 border-l-4 border-[#A67B5B]">Connect</h4>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5 text-muted-foreground transition-all group overflow-hidden shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${link.color}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-5 w-5" />
                                            <span className="font-bold text-xs uppercase tracking-widest">{link.label}</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex justify-center">
                    <p className="text-sm text-muted-foreground font-medium text-center">
                        © 2025 <span className="text-white">Gabriel Panashe Chandiwana</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
