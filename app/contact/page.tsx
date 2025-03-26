"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default page;
