import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/atoms/AOS";
import { Toaster } from 'sonner';
import { NextAuthProvider } from '@/providers/SessionProvider';

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
    <NextAuthProvider>
      <html lang="en">
        <AOSInit/>
        <body className={inter.className}>
          {children}
          <Toaster richColors position="top-center" closeButton />
        </body>
      </html>
    </NextAuthProvider>
  );
}
