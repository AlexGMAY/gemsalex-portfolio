import { Rocket, Target, Palette, Users, Award } from 'lucide-react'
import React from 'react'

const Process = () => {
  return (
    <section
              id="process"
              className="px-4 py-24 bg-gradient-to-b from-black to-gray-950"
            >
              <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-2">
                    <Rocket className="hidden md:block h-4 w-4 text-lime-400" />
                    <span className="text-sm font-medium text-lime-300">
                      Professional Training Methodology
                    </span>
                  </div>
                  <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                    Your Path to{" "}
                    <span className="bg-gradient-to-r from-blue-300 to-lime-300 bg-clip-text text-transparent">
                      Professional Mastery
                    </span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                    A refined, results-driven process designed for maximum career
                    acceleration
                  </p>
                </div>
    
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-blue-500 via-lime-500 to-blue-500 md:block" />
    
                  <div className="grid gap-8 md:grid-cols-4">
                    {[
                      {
                        step: "01",
                        title: "Strategic Assessment",
                        description:
                          "Comprehensive analysis of your career objectives, current capabilities, and growth trajectory",
                        icon: Target,
                      },
                      {
                        step: "02",
                        title: "Custom Blueprint",
                        description:
                          "Personalized curriculum design aligning with your specific professional development goals",
                        icon: Palette,
                      },
                      {
                        step: "03",
                        title: "Live Sessions",
                        description:
                          "1-on-1 intensive training via Google Meet or MS Teams with direct expert mentorship",
                        icon: Users,
                      },
                      {
                        step: "04",
                        title: "Career Transformation",
                        description:
                          "Implementation of advanced skills leading to measurable professional advancement",
                        icon: Award,
                      },
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="group relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
                          <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-lime-500 text-lg font-bold text-white shadow-lg">
                              {item.step}
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-blue-500/20 to-lime-500/20 p-3">
                              <item.icon className="h-6 w-6 text-lime-300" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Process