import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Panashe M. Chandiwana | Computer Engineer and AI Developer",
  description: "Portfolio of Panashe M. Chandiwana, a Zimbabwean Computer Engineering graduate, AI Engineer, and Software Developer building intelligent systems across healthcare, finance, enterprise technology, and industrial environments.",
  openGraph: {
    title: "Panashe Chandiwana | AI Engineer and Software Developer",
    description: "Computer Engineering graduate building AI, machine learning, backend, and full-stack systems for healthcare, finance, enterprise, and industrial applications.",
    url: "https://panashechandiwana.vercel.app",
    type: "website",
    siteName: "Panashe Chandiwana Portfolio",
    images: [
      {
        url: "/profile_new.jpg",
        width: 1200,
        height: 630,
        alt: "Panashe M. Chandiwana — Computer Engineering graduate and AI engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panashe Chandiwana | AI Engineer and Software Developer",
    description: "Computer Engineering graduate building AI, machine learning, backend, and full-stack systems for healthcare, finance, enterprise, and industrial applications.",
    images: ["/profile_new.jpg"],
  },
};

export default function Home() {
  return <HomeContent />;
}
