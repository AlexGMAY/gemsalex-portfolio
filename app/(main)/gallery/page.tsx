"use client"

import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MediaGalleryPage from "@/components/gallery/MediaGalleryPage";
import HeroGallery from "@/components/gallery/HeroGallery";
import FeaturedMemories from "@/components/gallery/FeaturedMemories";
import MemoryHighlights from "@/components/gallery/MemoryHighlights";
import PeopleSpotlight from "@/components/gallery/PeopleSpotlight";
import YearInReview from "@/components/gallery/YearInReview";
import MonthlyMoodBoard from "@/components/gallery/MonthlyMoodBoard";
import StudentsGallery from "@/components/gallery/StudentsGallery";
import FamilyGallery from '@/components/gallery/FamilyGallery';
import MediaGallery from "@/components/gallery/MediaGallery";


const page = () => {
  return (
    <main className="relative w-full">
      <HeroGallery />
      <div className="w-full sm:px-10 px-5">
        {/* <FeaturedMemories /> */}
        {/* <MediaGalleryPage /> */}
        <MediaGallery />
        <MemoryHighlights />
        {/* <PeopleSpotlight /> */}
        <FamilyGallery />
        <StudentsGallery />
        {/* <YearInReview /> */}
        {/* <MonthlyMoodBoard /> */}
      </div>
    </main>
  );
};

export default page;