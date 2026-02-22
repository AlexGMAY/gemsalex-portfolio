import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-black p-6 md:p-12 text-center">
          {/* Background Glow - Adjusted for mobile */}
          <div className="absolute -right-20 -top-20 h-48 w-48 md:h-64 md:w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 md:h-64 md:w-64 rounded-full bg-lime-500/10 blur-3xl" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 md:px-6 py-1.5 md:py-2">
              <Star className="h-3 w-3 md:h-4 md:w-4 text-lime-400" />
              <span className="text-xs md:text-sm font-medium text-lime-300">
                Limited Availability
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-4 md:mb-8 text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent block md:inline">
                Career Transformation?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 md:mb-12 max-w-2xl md:max-w-4xl text-base md:text-xl text-gray-300 px-2 md:px-0">
              Join professionals who have accelerated their careers through our
              exclusive, personalized training methodology delivering immediate,
              measurable workplace impact.
            </p>

            {/* Buttons - Stacked on mobile */}
            <div className="flex flex-col justify-center gap-3 md:gap-6">
              <Link
                href="#courses"
                className="group inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-6 md:px-10 py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-lime-600 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Explore elite training programs and exclusive courses"
              >
                <span className="text-sm md:text-base">
                  Explore Online Courses
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-6 md:px-10 py-3 md:py-4 rounded-xl border-2 border-blue-500/50 bg-blue-500/10 font-semibold text-blue-300 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Schedule an exclusive consultation for elite training"
              >
                <span className="text-sm md:text-base">Book Consultation</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="text-lime-400 text-base md:text-lg">✓</span>
                <span className="hidden xs:inline">Exclusive</span> 1-on-1
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1">
                <span className="text-lime-400 text-base md:text-lg">✓</span>
                Flexible scheduling
              </span>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <span className="flex items-center gap-1 w-full xs:w-auto justify-center xs:justify-start mt-2 xs:mt-0">
                <span className="text-lime-400 text-base md:text-lg">✓</span>
                Corporate training
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
