import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Memovox - Never Forget Anything",
  description: "The AI-powered voice assistant that organizes your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.variable, "font-sans antialiased bg-black text-white min-h-screen")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
