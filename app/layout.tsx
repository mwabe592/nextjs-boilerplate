"use client";

import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/Header/Header";
import Lines from "@/components/LandingPage/Lines";
import ScrollToTop from "@/components/LandingPage/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "./context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
          <ToasterContext />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
