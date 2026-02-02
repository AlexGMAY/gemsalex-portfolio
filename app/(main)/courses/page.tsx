import React from "react";
import {
  CheckCircle2,
  Users,
  Clock,
  Target,  
  Award,
  Calendar,
  Briefcase,
  TrendingUp,
  Globe,  
  Rocket,
  BarChart3,
  Star,
  Code,
  Palette,
  Shield,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */

// SEO Metadata
export const metadata: Metadata = {
  title: "Professional Training | 1-on-1 Tech & Business Mastery",
  description:
    "Premium personalized training in Web Development, MS Office Suite, Digital Marketing, DevOps, and 15+ elite skills. Transform your career with expert-led, hands-on sessions designed for ambitious professionals.",
  keywords: [
    "elite tech training",
    "1-on-1 programming mentorship",
    "executive development programs",
    "MS Excel advanced training",
    "web development mastery",
    "digital marketing expert training",
    "DevOps professional courses",
    "WordPress development mastery",
    "project management certification",
    "premium online courses",
    "career acceleration training",
    "corporate leadership development",
    "flexible expert-led training",
    "hands-on professional development",
  ].join(", "),
  openGraph: {
    title: "Professional Training | 1-on-1 Tech & Business Mastery",
    description:
      "Premium personalized training for career acceleration. Expert-led, hands-on sessions for ambitious professionals.",
    url: "https://gemsalex.com/courses",
    siteName: "Merveille Alexandre | Professional Technology & Business Training",
    images: [
      {
        url: "/og-courses-dark.png",
        width: 1200,
        height: 630,
        alt: "Professional Training Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Training",
    description: "Premium 1-on-1 courses for career acceleration",
    images: ["/og-courses-dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "https://gemsalex.com/courses",
  },
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Elite Professional Tech & Business Training",
  description:
    "Premium personalized 1-on-1 training courses for professionals seeking career acceleration",
  provider: {
    "@type": "Organization",
    name: "Merveille Alexandre",
    sameAs: "https://gemsalex.com",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function CoursesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl -z-10" />

        {/* Hero Section */}
        <section className="relative px-4 py-20 md:py-42">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid gap-16 md:pt-32 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col justify-center">
                {/* <div className="mb-8 inline-flex items-center w-35 gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-3 text-sm font-medium text-blue-300 backdrop-blur-sm border border-blue-500/30">
                  <Sparkles className="h-4 w-4" />
                  <span>Personalized Professional Training</span>
                </div> */}

                <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-lime-300 bg-clip-text text-transparent">
                    Accelerate
                  </span>{" "}
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
                    <span className="relative z-10">
                      Explore Courses
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-lime-500 opacity-0 transition-opacity group-hover:opacity-20" />
                  </Link>
                  <a
                    href="#process"
                    className="rounded-xl border-2 border-blue-500/50 bg-blue-500/10 px-10 py-4 text-center font-semibold text-blue-300 backdrop-blur-sm transition-all hover:border-blue-400 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label="Discover our elite training methodology"
                  >
                    Elite Methodology
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-gray-950 p-1 shadow-2xl">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-lime-500/20">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-lime-500 blur-xl" />
                        <Users className="relative h-24 w-24 text-white" />
                      </div>
                      <p className="mb-2 text-2xl font-bold text-white">
                        Executive Live Sessions
                      </p>
                      <p className="text-blue-200">
                        Real-time mastery with industry authority
                      </p>
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
                    },
                    {
                      value: "1:1",
                      label: "Personalized Coaching",
                      icon: Users,
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/80"
                    >
                      <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-blue-500/20 to-lime-500/20 p-3">
                        <stat.icon className="h-6 w-6 text-blue-300" />
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500/10 to-lime-500/10 px-6 py-2">
                <Star className="h-4 w-4 text-lime-400" />
                <span className="text-sm font-medium text-lime-300">
                  Why Elite Professionals Choose Us
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 to-lime-300 bg-clip-text text-transparent">
                  Unmatched Training Excellence
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

        {/* Elite Course Categories */}
        <section id="courses" className="px-4 py-24 bg-gradient-to-b from-gray-950 to-black">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold md:text-5xl">
                    Master{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                      In-Demand Elite Skills
                    </span>
                  </h2>
                  <p className="mt-4 text-gray-400">
                    Premium training programs in today&apos;s most valuable
                    professional competencies
                  </p>
                </div>
                <div className="hidden rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-3 md:block">
                  <span className="text-sm font-medium text-lime-300">
                    Fully Customizable
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Tech & Development Mastery */}
              <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-black p-8">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4">
                      <Code className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Technology & Development Elite
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        skill: "Web Development Mastery (Frontend/Backend)",
                        level: "Advanced",
                      },
                      {
                        skill: "WordPress Development & Enterprise Solutions",
                        level: "Expert",
                      },
                      {
                        skill: "DevOps & Cloud Infrastructure Engineering",
                        level: "Professional",
                      },
                      {
                        skill: "VBA Automation & Excel Power Tools",
                        level: "Advanced",
                      },
                      {
                        skill: "MS Access Database Architecture",
                        level: "Expert",
                      },
                      {
                        skill: "Custom Software Engineering Solutions",
                        level: "Professional",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-blue-500/50 hover:bg-gray-900"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 p-2">
                            <CheckCircle2 className="h-4 w-4 text-lime-400" />
                          </div>
                          <span className="text-gray-200">{item.skill}</span>
                        </div>
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business & Productivity Excellence */}
              <div className="relative overflow-hidden rounded-3xl border border-lime-500/30 bg-gradient-to-br from-gray-900 to-black p-8">
                <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-lime-500/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-lime-500/20 to-lime-600/20 p-4">
                      <Palette className="h-8 w-8 text-lime-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Business & Productivity Excellence
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        skill: "MS Office Suite Executive Mastery",
                        level: "Expert",
                      },
                      {
                        skill: "Project Management & MS Project Leadership",
                        level: "Professional",
                      },
                      {
                        skill: "Digital Marketing & SMMA Strategy",
                        level: "Advanced",
                      },
                      {
                        skill: "SEO Optimization & Google Ads Mastery",
                        level: "Expert",
                      },
                      {
                        skill: "Business Communication Excellence",
                        level: "Professional",
                      },
                      {
                        skill: "Microsoft 365 Enterprise Integration",
                        level: "Advanced",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-lime-500/50 hover:bg-gray-900"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-gradient-to-r from-lime-500/20 to-blue-500/20 p-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-400" />
                          </div>
                          <span className="text-gray-200">{item.skill}</span>
                        </div>
                        <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-medium text-lime-300">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-lime-500/10 border border-gray-800 p-8 text-center backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white">
                <span className="text-blue-400">Every curriculum</span> is
                meticulously customized to your{" "}
                <span className="text-lime-400">
                  specific career objectives
                </span>{" "}
                and professional development timeline
              </p>
            </div>
          </div>
        </section>

        {/* Elite Audience */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold md:text-5xl">
                Crafted for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                  Ambitious Professionals
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Our elite training methodology serves individuals committed to
                exponential career growth
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Briefcase,
                  title: "Corporate Executives",
                  description:
                    "Strategic upskilling for leadership advancement and organizational impact",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  icon: TrendingUp,
                  title: "Senior Managers",
                  description:
                    "Master advanced tools for team optimization and operational excellence",
                  gradient: "from-lime-500 to-lime-600",
                },
                {
                  icon: Globe,
                  title: "Enterprise Freelancers",
                  description:
                    "Expand service portfolios and command premium market rates",
                  gradient: "from-blue-500 to-purple-600",
                },
                {
                  icon: MessageSquare,
                  title: "Career Accelerators",
                  description:
                    "Rapid skill acquisition for ambitious professional transitions",
                  gradient: "from-lime-500 to-emerald-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 text-center transition-all hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
                  />
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 group-hover:from-blue-500/20 group-hover:to-lime-500/20">
                      <item.icon className="h-8 w-8 text-blue-400 group-hover:text-lime-300" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Process */}
        <section
          id="process"
          className="px-4 py-24 bg-gradient-to-b from-black to-gray-950"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-2">
                <Rocket className="h-4 w-4 text-lime-400" />
                <span className="text-sm font-medium text-lime-300">
                  Elite Training Methodology
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
                    title: "Elite Live Sessions",
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

        {/* Elite CTA */}
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
                  Join professionals who have accelerated their careers
                  through our exclusive, personalized training methodology
                  delivering immediate, measurable workplace impact and
                  accelerated career progression.
                </p>

                <div className="flex flex-col justify-center gap-6 sm:flex-row">
                  <Link
                    href="https://courses.gemsalex.com"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-lime-600 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                    aria-label="Explore elite training programs and exclusive courses"
                  >
                    <span className="relative z-10">Explore Elite Courses</span>
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

        {/* Footer */}
        <div className="border-t border-gray-800 px-4 py-8 text-center">
          <p className="text-sm text-gray-500">
            <span className="text-blue-400">All elite training</span> conducted
            via{" "}
            <span className="text-lime-400">
              Google Meet or Microsoft Teams
            </span>{" "}
            •{" "}
            <span className="text-blue-400">
              Executive scheduling flexibility
            </span>{" "}
            •{" "}
            <span className="text-lime-400">
              Customized learning architecture
            </span>{" "}
            •{" "}
            <Link
              href="https://courses.gemsalex.com"
              className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Access elite training curriculum and enrollment"
            >
              Access professional curriculum at courses.gemsalex.com
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

