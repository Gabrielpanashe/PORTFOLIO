import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gabriel Panashe | Computer Engineer & AI Developer",
    template: "%s | Gabriel Panashe",
  },
  description: "Solution-oriented Computer Engineer and AI Developer specializing in autonomous agents, biometric security, and scalable full-stack architectures. Transforming complex problems into high-performance digital systems.",
  keywords: ["Computer Engineer", "AI Developer", "Full-Stack Developer", "Machine Learning", "FastAPI", "Next.js", "Python", "Computer Vision", "Biometrics", "Software Engineering South Africa", "Gabriel Panashe Chandiwana"],
  authors: [{ name: "Gabriel Panashe M Chandiwana" }],
  creator: "Gabriel Panashe M Chandiwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panashechandiwana.com",
    title: "Gabriel Panashe | Systems Engineer & AI Architect",
    description: "Building the future of intelligent systems. Explore my portfolio of AI-powered solutions and robust architectures.",
    siteName: "Gabriel Panashe Portfolio",
    images: [
      {
        url: "/profile_new.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Panashe - Computer Engineer & AI Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Panashe | Systems Engineer & AI Architect",
    description: "Building the future of intelligent systems. Explore my portfolio of AI-powered solutions and robust architectures.",
    images: ["/profile_new.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

