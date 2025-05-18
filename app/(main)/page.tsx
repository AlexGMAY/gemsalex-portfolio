"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import TechLogos from "@/components/TechLogos";
import AnimatedQuote from "@/components/AnimatedQuote";
import Platforms from "@/components/Platforms";
import CallToAction from "@/components/CallToAction";
import Faqs from "@/components/Faqs";
import Skills from "@/components/Skills";
import Realisations from "@/components/Realisations";
import NeonMatrix from "@/components/TechnoMosaic";
import SuperPricing from "@/components/pricing/Pricing";

const Home = () => {
  return (
    <main className="relative w-full">
      <Hero />
      <div className="w-full sm:px-10 px-5">
        <TechLogos />
        <AboutMe />
        <Grid />
        <NeonMatrix />
        <AnimatedQuote />
        <Services />
        <Platforms />
        <Skills />
        <RecentProjects />
        <SuperPricing pageType="home" />
        <Realisations isHomePage={true} />
        <Approach />
        <Clients />
        <Faqs />
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;
