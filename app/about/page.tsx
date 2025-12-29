import { About } from "@/components/sections/About";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="My"
                gradientText="Journey"
                subtitle="A snapshot of my education, experience, and professional growth in the world of technology."
            />
            <About />
        </div>
    );
}
