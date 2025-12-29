import type { Metadata } from "next";
import { Roboto, JetBrains_Mono, Lobster } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const lobster = Lobster({
  weight: "400",
  variable: "--font-lobster",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Computer Engineer & AI Developer",
  description: "Professional portfolio showcasing AI systems, full-stack applications, and security-aware platforms by a Computer Engineering student and Full-Stack Developer.",
  keywords: ["Computer Engineer", "AI Developer", "Full-Stack Developer", "Machine Learning", "Web Development", "Portfolio"],
  authors: [{ name: "PANASHE M CHANDIWANA" }],
  creator: "PANASHE M CHANDIWANA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panashechandiwana.com",
    title: "Portfolio | Computer Engineering & AI Developer",
    description: "Professional portfolio showcasing AI systems, full-stack applications, and security-aware platforms.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Computer Engineering & AI Developer",
    description: "Professional portfolio showcasing AI systems, full-stack applications, and security-aware platforms.",
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
        className={`${roboto.variable} ${jetbrainsMono.variable} ${lobster.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
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

