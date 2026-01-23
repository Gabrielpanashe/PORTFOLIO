import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "About Me | Gabriel Panashe",
    description: "Learn more about Gabriel Panashe's journey in Computer Engineering, his professional experience, and his passion for building intelligent systems.",
    openGraph: {
        title: "About Me | Gabriel Panashe",
        description: "A snapshot of my education, experience, and professional growth in the world of technology.",
        images: ["/profile_new.jpg"],
    },
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="My"
                gradientText="Journey"
                subtitle="A snapshot of my education, experience, and professional growth in the world of technology."
                accentColor="brown"
            />
            <About />
        </div>
    );
}
