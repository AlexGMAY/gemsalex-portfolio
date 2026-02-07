import { Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Cta = () => {
  return (
    <div>
      <section className="px-4 py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-black p-12 text-center">
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-lime-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-2">
                <Star className="h-4 w-4 text-lime-400" />
                <span className="text-sm font-medium text-lime-300">
                  Limited Availability
                </span>
              </div>

              <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
                Ready for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                  Career Transformation?
                </span>
              </h2>

              <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
                Join professionals who have accelerated their careers through
                our exclusive, personalized training methodology delivering
                immediate, measurable workplace impact and accelerated career
                progression.
              </p>

              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <Link
                  href="https://courses.gemsalex.com"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-lime-600 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                  aria-label="Explore elite training programs and exclusive courses"
                >
                  <span className="relative z-10">Explore online Courses</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-lime-500 opacity-0 transition-opacity group-hover:opacity-20" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border-2 border-blue-500/50 bg-blue-500/10 px-10 py-4 font-semibold text-blue-300 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="Schedule an exclusive consultation for elite training"
                >
                  Book Consultation
                </Link>
              </div>

              <p className="mt-12 text-sm text-gray-400">
                <span className="text-lime-400">✓</span> Exclusive 1-on-1
                mentorship <span className="mx-4 text-gray-600">•</span>
                <span className="text-lime-400">✓</span> Flexible executive
                scheduling <span className="mx-4 text-gray-600">•</span>
                <span className="text-lime-400">✓</span> Corporate training
                solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta