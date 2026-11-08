import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "Contact | Panashe Chandiwana",
    description: "Contact Panashe M. Chandiwana for graduate trainee opportunities, AI and automation roles, or network and infrastructure engineering roles. Email, GitHub, LinkedIn, and WhatsApp available.",
    openGraph: {
        title: "Contact | Panashe Chandiwana",
        description: "Have a question or want to work together? Reach out via email, LinkedIn, or WhatsApp.",
        url: "https://panashechandiwana.vercel.app/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="pt-24 pb-16">
            <SectionHeader
                title="Get in"
                gradientText="Touch"
                subtitle="Open to graduate trainee programmes, AI and automation roles, and network and infrastructure engineering roles."
                accentColor="brown"
            />
            <Contact />
        </div>
    );
}
