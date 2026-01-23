import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "G. Panashe | Systems Engineering, AI & Full-Stack Development",
  description: "Explore the portfolio of Gabriel Panashe, a Computer Engineering specialist building intelligent AI systems, secure architectures, and high-performance digital solutions. Zimbabwe & South Africa based.",
  openGraph: {
    title: "G. Panashe Chandiwana | Engineering with Purpose",
    description: "Discover high-performance systems from autonomous AI agents to enterprise full-stack platforms. Professional engineering portfolio of Gabriel Panashe.",
    url: "https://panashechandiwana.com",
    type: "website",
    siteName: "Gabriel Panashe Portfolio",
    images: [
      {
        url: "/profile_new.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Panashe - Computer Engineer & AI Developer Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G. Panashe Chandiwana | Engineering with Purpose",
    description: "Discover high-performance systems from autonomous AI agents to enterprise full-stack platforms. Gabriel Panashe Portfolio.",
    images: ["/profile_new.jpg"],
  },
};

export default function Home() {
  return <HomeContent />;
}
