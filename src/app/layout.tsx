import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thedataproject.ai"),
  title: "TheDataProject.AI — Making Public Data Usable",
  description: "134 data platforms with 375M+ searchable records across healthcare, government, elections, genealogy, and more.",
  openGraph: {
    title: "TheDataProject.AI — Making Public Data Usable",
    description: "134 data platforms with 375M+ searchable records across healthcare, government, elections, genealogy, and more.",
    siteName: "TheDataProject.AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HM4N11Q05Y" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-HM4N11Q05Y');`}</Script>
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
