import { Projects } from "@/components/sections/Projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ProjectsPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Featured"
                gradientText="Projects"
                subtitle="A deep dive into the systems I've built, ranging from AI applications to complex full-stack platforms."
            />
            <Projects />
        </div>
    );
}
