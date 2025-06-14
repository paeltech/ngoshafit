import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EditorProvider } from "@/context/EditorContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngosha Size",
  description: "Landing page for Ngosha Size",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EditorProvider>{children}</EditorProvider>
      </body>
    </html>
  );
}
