import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Computer Engineering & AI Developer",
  description: "Professional portfolio showcasing AI systems, full-stack applications, and security-aware platforms by a Computer Engineering student and Full-Stack Developer.",
  keywords: ["Computer Engineering", "AI Developer", "Full-Stack Developer", "Machine Learning", "Web Development", "Portfolio"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

