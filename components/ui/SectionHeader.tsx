"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    gradientText?: string;
    className?: string;
    accentColor?: "gradient" | "brown";
}

export function SectionHeader({
    title,
    subtitle,
    gradientText,
    className = "",
    accentColor = "gradient"
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center mb-16 ${className}`}
        >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight uppercase">
                {title} {gradientText && (
                    <span className={accentColor === "gradient" ? "gradient-text" : "text-[#A67B5B]"}>
                        {gradientText}
                    </span>
                )}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
