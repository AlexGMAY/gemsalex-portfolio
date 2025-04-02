"use client"

import React from "react";

import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import AboutSection from "@/components/about/AboutSection";
import EducationCertificationsSection from "@/components/about/EducationCertificationsSection";
import ProjectsSection from "@/components/about/ProjectsSection";
import PricingSection from "@/components/about/PricingSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import SkillsSection from "@/components/about/SkillsSection";
import BlogSection from "@/components/BlogSection";
import BlogPreview from "@/components/about/BlogPreview";
import Experience from "@/components/Experience";
import StatsSection from "@/components/about/StatsSection";
import ClientsSection from "@/components/about/ClientsSection";
import FunFacts from "@/components/about/FunFacts";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { TwinklingStar } from "@/components/ui/TwinklingStar";


const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <HeroSection />
        <div className="max-w-7xl w-full">
          <AboutSection />
          <StatsSection />
          <EducationCertificationsSection />
          <SkillsSection />
          <Experience />
          <FunFacts />
          <TwinklingStar />
          {/* <ProjectsSection />
          <PricingSection /> */}
          <TestimonialsSection />
          <BlogPreview />
          <ClientsSection />
          <ScrollToTop />         
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default page;
