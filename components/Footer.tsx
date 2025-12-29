"use client";

import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/Gabrielpanashe",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/gabriel-panashe",
        label: "LinkedIn",
    },
    {
        icon: Mail,
        href: "mailto:panashechandiwana11@gmail.com",
        label: "Email",
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
                        <p className="text-sm text-muted-foreground">
                            Building intelligent systems and creating meaningful impact through
                            technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        aria-label={link.label}
                                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Gabriel Panashe Chandiwana. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using
                            Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
