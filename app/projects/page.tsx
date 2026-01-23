import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Featured Projects | Gabriel Panashe",
    description: "Explore the systems built by Gabriel Panashe, ranging from AI applications to complex full-stack platforms and security systems.",
    openGraph: {
        title: "Featured Projects | Gabriel Panashe",
        description: "A deep dive into the systems I've built, ranging from AI applications to complex full-stack platforms.",
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
