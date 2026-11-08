import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Panashe Chandiwana | Computer Engineering Graduate",
  description: "Portfolio of Panashe M. Chandiwana, a Zimbabwean First Class Computer Engineering graduate with experience in AI and automation, software development, network administration and IT infrastructure support.",
  openGraph: {
    title: "Panashe Chandiwana | Computer Engineering Graduate",
    description: "First Class Computer Engineering graduate in AI and automation, network engineering, and infrastructure and systems administration.",
    url: "https://panashechandiwana.vercel.app",
    type: "website",
    siteName: "Panashe Chandiwana Portfolio",
    images: [
      {
        url: "/profile_new.jpg",
        width: 1200,
        height: 630,
        alt: "Panashe M. Chandiwana — Computer Engineering graduate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panashe Chandiwana | Computer Engineering Graduate",
    description: "First Class Computer Engineering graduate in AI and automation, network engineering, and infrastructure and systems administration.",
    images: ["/profile_new.jpg"],
  },
};

export default function Home() {
  return <HomeContent />;
}
