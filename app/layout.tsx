import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hilink | Travel Partner",
  description: "Experience the best time of your existance. Find the best places for traveling",
  keywords: ["Hilink", "Travel Outside", "Foreign countries", "cheapest places"],
  authors: [{ name: "nafis bin" }],
  robots: "index, follow",
  icons: {
    icon: "/camp.svg",
  },
  openGraph: {
    type: "website",
    url: "https://travel-app-xi-two.vercel.app/",
    title: "Hilink | Travel Partner",
    description: "Experience the best time of your existance. Find the best places for traveling",
    siteName: "Hilink",
    images: [
      {
        url: "https://travel-app-xi-two.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tokyaramen",
    creator: "@tokyaramen",
    title: "Hilink | Travel Partner",
    description: "Experience the best time of your existance. Find the best places for traveling",
    images: ["https://travel-app-xi-two.vercel.app/og.png"],
  },
  // Not directly supported by Next Metadata, so we use "other"
  other: {
    "language": "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
