import { Sparkles, Users, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroCourse = () => {
  return (
    <section className="relative px-4 py-20 md:py-32 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Professional learning environment"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
              </div>
    
              {/* Static Particles (No random positioning) */}
              <div className="absolute inset-0">
                {/* Fixed positioned particles - no Math.random() */}
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 30, 50, 70, 90, 20].map(
                  (position, i) => (
                    <div
                      key={i}
                      className="absolute h-px w-px rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 animate-float"
                      style={{
                        left: `${position}%`,
                        top: `${(position * 0.8) % 100}%`,
                        animationDelay: `${(i * 0.2) % 3}s`,
                      }}
                    />
                  ),
                )}
              </div>
    
              {/* Glowing Orbs */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
    
              <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid gap-16 mt-16 lg:grid-cols-2 lg:gap-20">
                  <div className="flex flex-col justify-center">
                    <div className="mb-8 w-80 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-3 text-sm font-medium text-blue-300 backdrop-blur-sm border border-blue-500/30">
                      <Sparkles className="h-4 w-4" />
                      <span>Professional Personalized Training</span>
                    </div>
    
                    <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-lime-300 bg-clip-text text-transparent">
                        Accelerate
                      </span>{" "}<br />
                      Your Career with{" "}
                      <span className="relative">
                        <span className="relative z-10 bg-gradient-to-r from-lime-300 via-lime-200 to-blue-300 bg-clip-text text-transparent">
                          Expert-Led Mastery
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-lime-500/30 blur-xl" />
                      </span>
                    </h1>
    
                    <p className="mb-10 text-xl text-gray-300 leading-relaxed">
                      <span className="font-semibold text-blue-300">
                        Exclusive 1-on-1 live sessions
                      </span>{" "}
                      crafted around your career ambitions. Transform your
                      professional capabilities through{" "}
                      <span className="font-semibold text-lime-300">
                        hands-on, practical mastery
                      </span>{" "}
                      designed for ambitious professionals and career accelerators.{" "}
                      <span className="font-semibold text-blue-300">
                        Achieve measurable ROI
                      </span>{" "}
                      from day one.
                    </p>
    
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <Link
                        href="#courses"
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-lime-600 px-10 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                        aria-label="Explore elite training programs and courses"
                      >
                        <span className="relative z-10">Explore Courses</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-lime-500 opacity-0 transition-opacity group-hover:opacity-20" />
                      </Link>
                      <a
                        href="#process"
                        className="rounded-xl border-2 border-blue-500/50 bg-blue-500/10 px-10 py-4 text-center font-semibold text-blue-300 backdrop-blur-sm transition-all hover:border-blue-400 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-500/20"
                        aria-label="Discover our elite training methodology"
                      >
                        Our Methodology
                      </a>
                    </div>
                  </div>
    
                  <div className="relative">
                    {/* Image Card */}
                    <div className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-gray-950 shadow-2xl">
                      {/* Background Image with Overlay */}
                      <div className="relative h-96 overflow-hidden rounded-3xl">
                        <Image
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="One-on-one professional training session"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-lime-900/20" />
    
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                          <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-lime-500 blur-xl opacity-50" />
                            <div className="relative">
                              <Users className="h-24 w-24 text-white drop-shadow-2xl" />
                            </div>
                          </div>
                          <p className="mb-2 text-2xl font-bold text-white text-center">
                            Executive Live Sessions
                          </p>
                          <p className="text-blue-200 text-center max-w-md">
                            Real-time mastery with your expert instructor in Google Meet
                            or MS Teams
                          </p>
    
                          {/* Live Session Badge - Static animation */}
                          <div className="mt-6 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-sm px-4 py-2">
                            <div className="h-2 w-2 rounded-full bg-red-500" />
                            <span className="text-sm font-medium text-white">
                              Live 1:1 Training
                            </span>
                          </div>
                        </div>
    
                        {/* Tech Badges */}
                        <div className="absolute top-4 left-4 flex gap-2 z-10">
                          <div className="rounded-full bg-black/50 backdrop-blur-sm px-3 py-1">
                            <span className="text-xs font-medium text-blue-300">
                              Google Meet
                            </span>
                          </div>
                          <div className="rounded-full bg-black/50 backdrop-blur-sm px-3 py-1">
                            <span className="text-xs font-medium text-blue-300">
                              MS Teams
                            </span>
                          </div>
                        </div>
                      </div>
    
                      {/* Bottom Info */}
                      <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-sm text-gray-400">Training Format</p>
                            <p className="font-semibold text-white">
                              Live Interactive
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-400">Schedule</p>
                            <p className="font-semibold text-lime-300">Flexible</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-lime-500 w-3/4"></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            75% of professionals choose live sessions
                          </span>
                        </div>
                      </div>
                    </div>
    
                    {/* Stats Grid */}
                    <div className="mt-10 grid grid-cols-2 gap-6">
                      {[
                        {
                          value: "100%",
                          label: "Flexible Scheduling",
                          icon: Calendar,
                          image:
                            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                        },
                        {
                          value: "1:1",
                          label: "Personalized Coaching",
                          icon: Users,
                          image:
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                        },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="group/stat relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/80 hover:scale-105"
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <Image
                              src={stat.image}
                              alt={stat.label}
                              fill
                              className="object-cover opacity-10 group-hover/stat:opacity-20 transition-opacity duration-500"
                              sizes="(max-width: 768px) 50vw, 25vw"
                              quality={75}
                            />
                          </div>
    
                          <div className="relative z-10 p-6">
                            <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-blue-500/20 to-lime-500/20 p-3">
                              <stat.icon className="h-6 w-6 text-blue-300" />
                            </div>
                            <div className="text-3xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default HeroCourse