import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs"; // ✅ import ClerkProvider
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

// ✅ only one metadata export
export const metadata: Metadata = {
  title: "VYANTRA - The mantra of life breath",
  description: "Elegant login page with Apple-inspired liquid glass effect",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} antialiased`}>
        <body className="font-sans">{children}</body>
      </html>
    </ClerkProvider>
  );
}
