"use client";

import React from "react";

import { companies, getTestimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import ClientsSection from "./about/ClientsSection";
import { useLanguage } from "@/context/LanguageContext";

const Clients = () => {
  const { isFrench } = useLanguage();
  const testimonials = getTestimonials(isFrench);

  return (
    <section id="testimonials" className="py-20">
      <h2 className="heading">
        {isFrench ? "Écoutez nos" : "Hear from"}
        <span className="bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent">
          {" "}
          {isFrench ? "clients satisfaits" : "satisfied clients"}
        </span>
      </h2>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <ClientsSection />
      </div>
    </section>
  );
};

export default Clients;
