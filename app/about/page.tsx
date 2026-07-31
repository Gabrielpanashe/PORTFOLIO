import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "About Me | Panashe Chandiwana",
    description: "Learn about Panashe M. Chandiwana's journey in Computer Engineering — education, professional experience, and passion for building intelligent systems in Zimbabwe.",
    openGraph: {
        title: "About Me | Panashe Chandiwana",
        description: "A snapshot of my education, experience, and professional growth in the world of technology.",
        url: "https://panashechandiwana.vercel.app/about",
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
