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
    default: "Panashe Chandiwana | AI Engineer and Software Developer",
    template: "%s | Panashe Chandiwana",
  },
  description: "Portfolio of Panashe M. Chandiwana, a Zimbabwean Computer Engineering graduate, AI Engineer, and Software Developer building intelligent systems across healthcare, finance, enterprise technology, and industrial environments.",
  keywords: ["Panashe Chandiwana", "Panashe M. Chandiwana", "AI Engineer Zimbabwe", "Software Developer Zimbabwe", "Computer Engineer Zimbabwe", "Machine Learning Engineer Zimbabwe", "Full-Stack Developer Zimbabwe", "FastAPI Developer", "Next.js Developer", "Enterprise AI Engineer", "Artificial Intelligence Zimbabwe", "Healthcare AI Zimbabwe", "FinTech Developer Zimbabwe"],
  authors: [{ name: "Panashe M. Chandiwana" }],
  creator: "Panashe M. Chandiwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panashechandiwana.vercel.app",
    title: "Panashe Chandiwana | AI Engineer and Software Developer",
    description: "Computer Engineering graduate building AI, machine learning, backend, and full-stack systems for healthcare, finance, enterprise, and industrial applications.",
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

