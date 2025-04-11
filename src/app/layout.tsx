import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Iceland } from "next/font/google";

const icelandFont = Iceland({
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash's Portfolio",
  description: "Akash Akter's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="night" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${icelandFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
