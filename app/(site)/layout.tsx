"use client";

import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/Header/Header";
import Lines from "@/components/LandingPage/Lines";
import ScrollToTop from "@/components/LandingPage/ScrollToTop";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-layout">
      <Lines />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
