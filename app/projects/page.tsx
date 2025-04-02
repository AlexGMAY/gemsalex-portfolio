"use client"

import React from "react";

import Realisations from "@/components/Realisations";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
        <Realisations />
        <ScrollToTop />
        <Footer />
        </div>
    </main>
  );
};

export default page;
