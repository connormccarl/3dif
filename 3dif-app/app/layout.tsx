import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PrelineScript from "@/components/PrelineScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3DiF",
  description: "3DiF website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container max-w-screen-lg mx-auto px-4 mb-10">
          {children}
        </main>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
