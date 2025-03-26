"use client"

import React from "react";

import Services from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const page = () => {
  return (    
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <Services />
            <Footer />
        </div>
    </main>
  );
};

export default page;
