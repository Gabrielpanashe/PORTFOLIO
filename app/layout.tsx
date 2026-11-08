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
  metadataBase: new URL("https://panashechandiwana.vercel.app"),
  title: {
    default: "Panashe Chandiwana | Computer Engineering Graduate",
    template: "%s | Panashe Chandiwana",
  },
  description: "Portfolio of Panashe M. Chandiwana, a Zimbabwean First Class Computer Engineering graduate with experience in AI and automation, software development, network administration and IT infrastructure support.",
  keywords: ["Panashe Chandiwana", "Panashe M. Chandiwana", "Computer Engineering Graduate Zimbabwe", "Network Engineer Zimbabwe", "IT Infrastructure Zimbabwe", "Systems Administrator Zimbabwe", "IT Support Zimbabwe", "AI and Automation", "Machine Learning Zimbabwe", "Python Developer Zimbabwe", "CCNA", "Wireshark", "Zabbix", "Graduate Trainee"],
  authors: [{ name: "Panashe M. Chandiwana" }],
  creator: "Panashe M. Chandiwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panashechandiwana.vercel.app",
    title: "Panashe Chandiwana | Computer Engineering Graduate",
    description: "First Class Computer Engineering graduate in AI and automation, network engineering, and infrastructure and systems administration.",
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

