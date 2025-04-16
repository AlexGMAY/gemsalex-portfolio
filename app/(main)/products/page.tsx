import BlogPreview from '@/components/about/BlogPreview';
import SkillsSection from '@/components/about/SkillsSection';
import Footer from '@/components/Footer';
import Platforms from '@/components/Platforms';
import Hero from '@/components/products/Hero';
import Products from '@/components/products/Products';
import Skills from '@/components/Skills';
import TechLogos from '@/components/TechLogos';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { navItems } from '@/data';
import { productsByCategory } from '@/data/products';
import React from 'react'

const page = () => {
  return (
    <main className="relative w-full bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      {/* <FloatingNav navItems={navItems} /> */}
      <Hero />
      <div className="w-full sm:px-10 px-5">
        <TechLogos />
        <Products productsByCategory={productsByCategory} />  
        <Platforms />      
        <BlogPreview />
      </div>
    </main>
  );
}

export default page