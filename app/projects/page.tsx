import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Featured Projects | Gabriel Panashe",
    description: "Explore systems built by Gabriel Panashe — AI face recognition, SE-CDSS clinical decision support, school ERP, and loan default prediction platforms.",
    openGraph: {
        title: "Featured Projects | Gabriel Panashe",
        description: "A deep dive into AI-powered systems and full-stack platforms, including SE-CDSS, biometric security, and enterprise ERP solutions.",
        url: "https://panashechandiwana.com/projects",
    },
};

export default function ProjectsPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Featured"
                gradientText="Projects"
                subtitle="A deep dive into the systems I've built, ranging from AI applications to complex full-stack platforms."
                accentColor="brown"
            />
            <Projects />
        </div>
    );
}
