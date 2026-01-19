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
  description: "Professional portfolio of Gabriel Panashe, showcasing AI systems, full-stack applications, and security-aware platforms.",
  keywords: ["Computer Engineer", "AI Developer", "Full-Stack Developer", "Machine Learning", "Web Development", "Portfolio", "Gabriel Panashe", "Security Engineering"],
  authors: [{ name: "Gabriel Panashe M Chandiwana" }],
  creator: "Gabriel Panashe M Chandiwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panashechandiwana.com",
    title: "Gabriel Panashe | Computer Engineer & AI Developer",
    description: "Professional portfolio showcasing AI systems, full-stack applications, and security-aware platforms.",
    siteName: "Gabriel Panashe Portfolio",
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
    title: "Gabriel Panashe | Computer Engineer & AI Developer",
    description: "Professional portfolio showcasing AI systems, full-stack applications, and security-aware platforms.",
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

