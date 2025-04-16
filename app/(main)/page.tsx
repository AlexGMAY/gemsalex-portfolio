"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import TechLogos from "@/components/TechLogos";
import AnimatedQuote from "@/components/AnimatedQuote";
import Platforms from "@/components/Platforms";
import CallToAction from "@/components/CallToAction";
import Faqs from "@/components/Faqs";
import Skills from "@/components/Skills";
import Realisations from "@/components/Realisations";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
  return (
    <main className="relative w-full">
      <Hero />
      <div className="w-full sm:px-10 px-5">
        {/* <FloatingNav navItems={navItems} /> */}

        <TechLogos />
        <AboutMe />
        <Grid />
        <AnimatedQuote />
        <Services />
        <Platforms />
        <Skills />
        <RecentProjects />
        <ServicesSection isHomePage={true} />
        <Realisations isHomePage={true} />
        <Clients />
        {/* <Experience /> */}
        <Approach />
        <Faqs />
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;
