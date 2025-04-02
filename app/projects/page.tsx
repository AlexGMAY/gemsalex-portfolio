"use client"

import React from "react";

import Realisations from "@/components/Realisations";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CallToAction from "@/components/CallToAction";
import SkillsSection from "@/components/about/SkillsSection";
import Clients from "@/components/Clients";
import { Hero } from "@/components/projects/Hero";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
        <Hero />  
        <Realisations />
        <SkillsSection />
        <Clients />
        <CallToAction />
        <ScrollToTop />
        <Footer />
        </div>
    </main>
  );
};

export default page;
