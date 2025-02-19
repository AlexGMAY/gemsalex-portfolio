"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
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

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TechLogos />
        <AboutMe />
        <Grid />
        <AnimatedQuote />
        <Services />
        <Platforms />
        <Skills />
        <RecentProjects />
        {/* <Realisations /> */}
        <Clients />
        <Experience />
        <Approach />
        <Faqs />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
