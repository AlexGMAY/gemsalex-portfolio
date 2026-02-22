import Link from "next/link";
import Image from "next/image";
import { FaCode, FaRocket, FaMedal } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern workspace with code on screen"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/95 to-gray-950/90" />        
      </div>

      {/* Static background elements (no animations to improve LCP/FCP) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-600 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-600 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-yellow-500 rounded-full opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-20 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Left content */}
          <div className="lg:w-1/2">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center bg-blue-800/30 border border-blue-600 rounded-full px-4 py-1.5 md:px-4 md:py-2">
                <GiGlobe className="text-red-500 mr-2 text-sm md:text-base" />
                <span className="text-xs md:text-sm font-medium">
                  International Excellence
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Premium <br />
              Software Solutions <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Fair Pricing
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-lg">
              You need robust, scalable software—And I build scalable,
              production-ready solutions that grow with your business—delivered
              at freelancer-friendly rates that respect your budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
              <Link
                href="#pricing"
                className="w-full sm:w-auto"
                aria-label="View pricing plans"
              >
                <button className="w-full sm:w-auto min-h-[44px] min-w-[44px] px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium text-white hover:from-blue-700 hover:to-cyan-600 transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  View Pricing Plans
                </button>
              </Link>
              <Link
                href="#solutions"
                className="w-full sm:w-auto"
                aria-label="View our solutions"
              >
                <button className="w-full sm:w-auto min-h-[44px] min-w-[44px] px-6 py-3 border border-blue-400 text-blue-100 rounded-lg font-medium hover:bg-blue-900/30 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Our Solutions
                </button>
              </Link>
            </div>
          </div>

          {/* Right content - Value cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 mb-3 md:mb-4">
                <FaCode className="text-xl md:text-2xl" />
              </div>
              <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Clean Code
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Production-ready code with comprehensive documentation and
                tests.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 hover:border-red-500 transition-colors">
              <div className="text-red-400 mb-3 md:mb-4">
                <GiGlobe className="text-xl md:text-2xl" />
              </div>
              <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Global Quality
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Enterprise-grade solutions at competitive rates—bridging
                international standards with accessible pricing.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 hover:border-yellow-500 transition-colors">
              <div className="text-yellow-400 mb-3 md:mb-4">
                <FaRocket className="text-xl md:text-2xl" />
              </div>
              <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Fast Delivery
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Optimized workflows deliver projects 30% faster than industry
                average.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 hover:border-green-500 transition-colors">
              <div className="text-green-400 mb-3 md:mb-4">
                <FaMedal className="text-xl md:text-2xl" />
              </div>
              <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Proven Results
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                50+ successful projects with measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
