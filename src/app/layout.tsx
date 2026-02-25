import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
    title: "Instalearn | Modern SaaS Platform",
    description: "Scale your knowledge base effortlessly with our AI-driven modular learning platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${caveat.variable}`}>
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
