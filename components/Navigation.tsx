"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl py-2"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-xl shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform">
                            G
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-black tracking-tighter text-white">PANASHE</span>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-primary/80 uppercase mt-0.5">Systems Engineer</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                const colors = [
                                    "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 active:bg-blue-600/30",
                                    "hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-400 active:bg-purple-600/30",
                                    "hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 active:bg-emerald-600/30",
                                    "hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-orange-400 active:bg-orange-600/30",
                                ];
                                const activeColors = [
                                    "bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-blue-500/20",
                                    "bg-purple-500/20 border-purple-500/50 text-purple-400 shadow-purple-500/20",
                                    "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-emerald-500/20",
                                    "bg-orange-500/20 border-orange-500/50 text-orange-400 shadow-orange-500/20",
                                ];

                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`text-xs font-black transition-all px-4 py-2.5 rounded-2xl border flex items-center justify-center relative group isolate overflow-hidden shadow-[0_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none uppercase tracking-widest ${isActive ? activeColors[index % activeColors.length] : `bg-white/5 text-muted-foreground border-white/5 ${colors[index % colors.length]}`
                                            }`}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                );
                            })}
                        </div>
                        <Button size="sm" asChild className="rounded-2xl px-8 h-12 font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_5px_0_0_hsl(25,35,35%)] hover:shadow-[0_2px_0_0_hsl(25,35,35%)] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all">
                            <Link href="/contact">Hire Me</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block text-xl font-bold transition-all ${pathname === item.href ? "text-primary translate-x-2" : "text-muted-foreground hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button className="w-full rounded-2xl py-6 text-base font-bold" asChild>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    Let&apos;s Build Together
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
