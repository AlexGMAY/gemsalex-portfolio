import CalendlyScheduler from "@/components/contact/CalendlyScheduler";
import ClientMap from "@/components/contact/ClientMap";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethodMatrix from "@/components/contact/ContactMethodMatrix";
import LocationMap from "@/components/contact/LocationMap";
import SmartContactSystem from "@/components/contact/SmartContactSystem";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <ContactHero />
        <ContactMethodMatrix />
        <SmartContactSystem />
        <CalendlyScheduler />
        <ClientMap />
        <LocationMap />        
      </div>
    </main>
  );
};

export default page;
