import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Technical Expertise | Panashe Chandiwana",
    description: "The technical toolkit of Panashe M. Chandiwana — AI and machine learning, backend and full-stack development, databases, DevOps, and networking.",
    openGraph: {
        title: "Technical Expertise | Panashe Chandiwana",
        description: "Exploring my technical toolkit and the technologies I use to bring ideas to life.",
        url: "https://panashechandiwana.vercel.app/skills",
    },
};

export default function SkillsPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Technical"
                gradientText="Expertise"
                subtitle="Exploring my technical toolkit and the technologies I use to bring ideas to life."
                accentColor="brown"
            />
            <Skills />
        </div>
    );
}
