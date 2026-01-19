import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Technical Expertise | Gabriel Panashe",
    description: "The technical toolkit and technologies used by Gabriel Panashe to build high-performance architectures and intelligent systems.",
    openGraph: {
        title: "Technical Expertise | Gabriel Panashe",
        description: "Exploring my technical toolkit and the technologies I use to bring ideas to life.",
    },
};

export default function SkillsPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Technical"
                gradientText="Expertise"
                subtitle="Exploring my technical toolkit and the technologies I use to bring ideas to life."
            />
            <Skills />
        </div>
    );
}
