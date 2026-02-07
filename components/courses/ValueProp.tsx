import { Star, Target, Clock, Award, Shield, Rocket, BarChart3 } from 'lucide-react'
import React from 'react'

const ValueProp = () => {
  return (
    <div>
        <section className="px-4 py-20">
                  <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                      <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500/10 to-lime-500/10 px-6 py-2">
                        <Star className="h-4 w-4 text-lime-400" />
                        <span className="text-sm font-medium text-lime-300">
                          Why Professionals Choose Us
                        </span>
                      </div>
                      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                        <span className="bg-gradient-to-r from-blue-300 to-lime-300 bg-clip-text text-transparent">
                          Professional Training Excellence
                        </span>
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Designed for individuals who demand excellence and measurable
                        career acceleration
                      </p>
                    </div>
        
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          icon: Target,
                          title: "Strategic Career Mapping",
                          description:
                            "Every session aligns with your long-term career trajectory and professional growth objectives",
                          gradient: "from-blue-500/20 to-blue-600/20",
                        },
                        {
                          icon: Clock,
                          title: "Executive Time Optimization",
                          description:
                            "Schedule sessions around your peak productivity hours. No rigid timetables, only optimized learning",
                          gradient: "from-lime-500/20 to-lime-600/20",
                        },
                        {
                          icon: Award,
                          title: "Immediate Value Realization",
                          description:
                            "Apply advanced techniques directly to your work environment for instant productivity transformation",
                          gradient: "from-blue-500/20 to-purple-500/20",
                        },
                        {
                          icon: Shield,
                          title: "Industry Insider Access",
                          description:
                            "Gain insights and methodologies only available through direct mentorship with seasoned experts",
                          gradient: "from-lime-500/20 to-emerald-500/20",
                        },
                        {
                          icon: Rocket,
                          title: "Accelerated Skill Acquisition",
                          description:
                            "Cut learning curves by 60% through focused, high-intensity, practical application sessions",
                          gradient: "from-blue-500/20 to-cyan-500/20",
                        },
                        {
                          icon: BarChart3,
                          title: "Measurable ROI Tracking",
                          description:
                            "Quantify your progress and career impact with data-driven metrics and performance analytics",
                          gradient: "from-lime-500/20 to-teal-500/20",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                          />
                          <div className="relative z-10">
                            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 group-hover:from-blue-500/20 group-hover:to-lime-500/20">
                              <item.icon className="h-8 w-8 text-blue-400 group-hover:text-lime-300" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
    </div>
  )
}

export default ValueProp