import Platforms from '@/components/Platforms';
import Hero from '@/components/products/Hero';
import Products from '@/components/products/Products';
import TechLogos from '@/components/TechLogos';
import { productsByCategory } from '@/data/products';
import React from 'react'

const page = () => {
  return (
    <main className="relative w-full bg-black-100 flex justify-center items-center flex-col overflow-hidden">      
      <Hero />
      <div className="w-full sm:px-10 px-5">
        <TechLogos />
        <Products productsByCategory={productsByCategory} />  
        <Platforms />        
      </div>
    </main>
  );
}

export default page