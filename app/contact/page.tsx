import { Contact } from "@/components/sections/Contact";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Get in"
                gradientText="Touch"
                subtitle="Have a question or want to work together? I'm always looking for new opportunities and creative collaborations."
            />
            <Contact />
        </div>
    );
}
