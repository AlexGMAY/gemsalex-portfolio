"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import ClientsSection from "./about/ClientsSection";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h2 className="heading">
        Hear from
        <span className="bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent">
          {" "}
          satisfied clients
        </span>
      </h2>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
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
