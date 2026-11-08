import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Featured Projects | Panashe Chandiwana",
    description: "Explore systems built by Panashe M. Chandiwana — SilicaGuard, the first-position Cimas Healthathon 3.0 platform, and the SE-CDSS clinical decision support dissertation.",
    openGraph: {
        title: "Featured Projects | Panashe Chandiwana",
        description: "A deep dive into AI-powered systems and full-stack platforms, including SilicaGuard and SE-CDSS.",
        url: "https://panashechandiwana.vercel.app/projects",
    },
};

export default function ProjectsPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Featured"
                gradientText="Projects"
                subtitle="A closer look at the AI-assisted platforms I've built, from an award-winning health screening system to a clinical decision support dissertation."
                accentColor="brown"
            />
            <Projects />
        </div>
    );
}
