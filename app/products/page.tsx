import BlogPreview from '@/components/about/BlogPreview';
import SkillsSection from '@/components/about/SkillsSection';
import Footer from '@/components/Footer';
import Hero from '@/components/products/Hero';
import Products from '@/components/products/Products';
import TechLogos from '@/components/TechLogos';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { navItems } from '@/data';
import { productsByCategory } from '@/data/products';
import React from 'react'

const page = () => {
  return (
    <main className="relative w-full bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      {/* <FloatingNav navItems={navItems} /> */}
      <Hero />
      <div className="max-w-7xl w-full">
        <TechLogos />
        <Products productsByCategory={productsByCategory} />
        <SkillsSection />        
        <BlogPreview />
        <ScrollToTop />
        <Footer />
      </div>
    </main>
  );
}

export default page