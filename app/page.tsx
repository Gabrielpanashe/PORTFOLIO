import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "G. Panashe | Computer Engineer & Full-Stack Developer",
  description: "Portfolio of Gabriel Panashe, a Computer Engineering student and Full-Stack Developer specializing in AI systems, secure architectures, and high-performance digital solutions.",
  openGraph: {
    title: "G. Panashe | Computer Engineer & Full-Stack Developer",
    description: "Engineering with purpose. Explore my latest projects in AI, biometrics, and full-stack development.",
    url: "https://panashechandiwana.com",
    type: "website",
    siteName: "G. Panashe Portfolio",
    images: [
      {
        url: "/profile_new.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Panashe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G. Panashe | Computer Engineer & Full-Stack Developer",
    description: "Engineering with purpose. Explore my latest projects in AI, biometrics, and full-stack development.",
    images: ["/profile_new.jpg"],
  },
};

export default function Home() {
  return <HomeContent />;
}
