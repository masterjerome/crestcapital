import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/atoms/AOS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crest Capital",
  description: "All-in-one banking for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
