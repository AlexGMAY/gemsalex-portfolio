"use client"

import React from "react";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import EducationCertificationsSection from "@/components/about/EducationCertificationsSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import SkillsSection from "@/components/about/SkillsSection";
import BlogSection from "@/components/BlogSection";
import BlogPreview from "@/components/about/BlogPreview";
import { UltimateTimeline } from "@/components/Experience";
import StatsSection from "@/components/about/StatsSection";
import ClientsSection from "@/components/about/ClientsSection";
import FunFacts from "@/components/about/FunFacts";
import CertificationsCarousel from "@/components/about/CertificationsCarousel";
import BookshelfCarousel from "@/components/about/BookshelfCarousel";


const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <HeroSection />
        <div className="w-full sm:px-10 px-5">
          <AboutSection />
          <StatsSection />
          <EducationCertificationsSection />
          <CertificationsCarousel />
          <SkillsSection />
          <UltimateTimeline />
          <FunFacts />
          <BookshelfCarousel />
          {/* <ProjectsSection />
          <PricingSection /> */}
          <TestimonialsSection />
          <BlogPreview />
          <ClientsSection />
        </div>
      </div>
    </main>
  );
};

export default page;
