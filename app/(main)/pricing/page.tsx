"use client"

import React from "react";

import Services from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import SuperPricing from "@/components/pricing/Pricing";
import Hero from "@/components/pricing/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import TechLogos from "@/components/TechLogos";
import ProcessSection from "@/components/pricing/ProcessSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import FAQSection from "@/components/pricing/FAQSection";
import Approach from "@/components/Approach";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";


const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <Hero />
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <TechLogos />
        <SuperPricing pageType="pricing" />
        <Approach />
        <Grid />
        <FAQSection />
        {/* <TestimonialsSection /> */}
        <Clients />
      </div>
    </main>
  );
};

export default page;
