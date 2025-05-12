import { Metadata } from "next";
import Hero from "@/components/LandingPage/Hero";
import Brands from "@/components/LandingPage/Brands/Brands";
import Feature from "@/components/LandingPage/Features/Feature";
import About from "@/components/LandingPage/About";
import FeaturesTab from "@/components/LandingPage/FeaturesTab/FeaturesTab";
import FunFact from "@/components/LandingPage/FunFact";
import CTA from "@/components/LandingPage/CTA";
import FAQ from "@/components/LandingPage/FAQ/FAQ";
import Pricing from "@/components/LandingPage/Pricing";
import Contact from "@/components/LandingPage/Contact";
import Blog from "@/components/LandingPage/Blog/Blog";
import Integration from "@/components/LandingPage/Integration";
import Testimonial from "@/components/LandingPage/Testimonial/Testimonial";
import React from "react";
export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
