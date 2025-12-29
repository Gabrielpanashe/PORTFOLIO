import { Skills } from "@/components/sections/Skills";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
