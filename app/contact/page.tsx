import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Contact | Gabriel Panashe",
    description: "Get in touch with Gabriel Panashe for collaborations, opportunities, or technical inquiries.",
    openGraph: {
        title: "Contact | Gabriel Panashe",
        description: "Have a question or want to work together? I'm always looking for new opportunities and creative collaborations.",
    },
};

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
