"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Code,
  Smartphone,
  Cloud,
  BarChart,
  Plug,
  CheckCircle,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  Target,
  Shield,  
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

// Define proper types
type ServiceColor = "lime" | "blue" | "cyan" | "indigo" | "yellow" | "green";

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  color: ServiceColor;
  features: string[];
  deliverables: string[];
  process: string[];
  timeline: string;
  startingPrice: string;
  imageUrl: string;
  imageAlt: string;
  idealFor: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Revenue-Driving Web Platforms",
    shortDescription:
      "High-performance websites engineered for user engagement and conversions",
    fullDescription:
      "I architect web platforms that don't just look beautiful—they drive measurable business outcomes. Through strategic user experience design, conversion rate optimization, and performance engineering, we transform casual browsers into loyal customers.",
    icon: <Globe className="h-6 w-6" />,
    color: "lime",
    features: [
      "Conversion-focused UX/UI design",
      "E-commerce and payment integration",
      "Performance optimization (90+ PageSpeed)",
      "SEO-optimized architecture",
      "Analytics and conversion tracking",
      "Multi-platform responsiveness",
    ],
    deliverables: [
      "Fully responsive web application",
      "SEO-optimized structure",
      "Performance audit report",
      "Analytics dashboard setup",
      "Documentation and training",
    ],
    process: [
      "Discovery & strategy session",
      "UX/UI prototyping",
      "Development sprint",
      "Quality assurance testing",
      "Performance optimization",
      "Launch & analytics setup",
    ],
    timeline: "3-4 weeks",
    startingPrice: "$2,500",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Modern website dashboard showing analytics",
    idealFor:
      "Businesses looking to establish or upgrade their digital presence with a focus on lead generation and customer conversion",
  },
  {
    id: 2,
    title: "Scalable SaaS Solutions",
    shortDescription:
      "Custom software that automates workflows and scales with your growth",
    fullDescription:
      "I build Software-as-a-Service platforms that automate complex business processes, reduce operational costs, and create new revenue streams. From MVP to enterprise-scale, your solution will be architected for scalability from day one.",
    icon: <Code className="h-6 w-6" />,
    color: "blue",
    features: [
      "Multi-tenant architecture",
      "Subscription and billing management",
      "Real-time data processing",
      "API-first design",
      "Automated workflow engines",
      "Scalable database design",
    ],
    deliverables: [
      "Production-ready SaaS platform",
      "Admin dashboard and analytics",
      "API documentation",
      "Deployment pipeline",
      "Monitoring and alerting systems",
    ],
    process: [
      "Product strategy workshop",
      "Technical architecture planning",
      "Agile development sprints",
      "Security and scalability testing",
      "CI/CD pipeline setup",
      "Launch and iteration planning",
    ],
    timeline: "8-12 weeks",
    startingPrice: "$12,000",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "SaaS platform interface with graphs and charts",
    idealFor:
      "Startups and established businesses looking to digitize operations or create new software-based revenue streams",
  },
  {
    id: 3,
    title: "Cross-Platform Business Apps",
    shortDescription:
      "Seamless mobile and web experiences that drive retention and loyalty",
    fullDescription:
      "In today's multi-device world, your customers expect seamless experiences across all platforms. I develop unified applications that maintain consistency and functionality whether accessed from desktop, tablet, or mobile devices.",
    icon: <Smartphone className="h-6 w-6" />,
    color: "cyan",
    features: [
      "Progressive Web App (PWA) capabilities",
      "Native mobile app development",
      "Offline functionality",
      "Push notifications",
      "Cross-platform state management",
      "Unified design system",
    ],
    deliverables: [
      "Responsive web application",
      "Mobile-optimized PWA",
      "App store deployment (iOS/Android)",
      "Offline capability setup",
      "Performance optimization",
    ],
    process: [
      "Cross-platform strategy session",
      "Unified design system creation",
      "Core platform development",
      "Platform-specific optimization",
      "Testing across devices",
      "App store deployment",
    ],
    timeline: "6-8 weeks",
    startingPrice: "$8,500",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Multiple devices showing same application",
    idealFor:
      "Businesses needing consistent user experiences across desktop and mobile platforms with offline capabilities",
  },
  {
    id: 4,
    title: "Cloud Infrastructure & Scalability",
    shortDescription:
      "Robust cloud architecture ensuring reliability, security, and unlimited growth",
    fullDescription:
      "Your application's foundation determines its future. I design and implement cloud infrastructure that scales effortlessly, maintains 99.9%+ uptime, and adapts to your evolving business needs without technical debt.",
    icon: <Cloud className="h-6 w-6" />,
    color: "indigo",
    features: [
      "Microservices architecture",
      "Auto-scaling infrastructure",
      "Disaster recovery planning",
      "CI/CD pipeline automation",
      "Security and compliance setup",
      "Performance monitoring",
    ],
    deliverables: [
      "Infrastructure as Code (Terraform)",
      "CI/CD pipeline configuration",
      "Monitoring and alerting dashboard",
      "Security audit report",
      "Scalability documentation",
    ],
    process: [
      "Infrastructure assessment",
      "Architecture design review",
      "Security and scaling planning",
      "Implementation and migration",
      "Load testing and optimization",
      "Monitoring setup and handover",
    ],
    timeline: "4-6 weeks",
    startingPrice: "$6,500",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    imageAlt: "Cloud computing infrastructure diagram",
    idealFor:
      "Growing businesses needing robust, scalable infrastructure or migrating from legacy systems",
  },
  {
    id: 5,
    title: "Digital Visibility & SEO",
    shortDescription:
      "SEO-optimized, lightning-fast applications that dominate search rankings",
    fullDescription:
      "Being found online is just as important as having a great product. I engineer applications for maximum visibility and performance, combining technical SEO excellence with blazing-fast user experiences that convert and retain.",
    icon: <BarChart className="h-6 w-6" />,
    color: "yellow",
    features: [
      "Core Web Vitals optimization",
      "Structured data implementation",
      "Technical SEO audit and fixes",
      "Content delivery network setup",
      "Advanced analytics configuration",
      "Competitive analysis integration",
    ],
    deliverables: [
      "SEO audit and implementation report",
      "Performance optimization certificate",
      "Google Analytics 4 setup",
      "Structured data markup",
      "Ongoing monitoring dashboard",
    ],
    process: [
      "Comprehensive SEO audit",
      "Performance baseline analysis",
      "Technical implementation",
      "Testing and validation",
      "Analytics configuration",
      "Ongoing optimization plan",
    ],
    timeline: "3-4 weeks",
    startingPrice: "$3,500",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "SEO analytics and ranking dashboard",
    idealFor:
      "Businesses looking to improve search rankings, page speed, and digital marketing performance",
  },
  {
    id: 6,
    title: "Integration & Automation Systems",
    shortDescription:
      "Connect your business ecosystem with secure APIs and automation workflows",
    fullDescription:
      "Your business tools should work together seamlessly. I design and implement integration systems that connect your CRM, ERP, marketing platforms, and custom software—automating workflows and creating a unified data ecosystem.",
    icon: <Plug className="h-6 w-6" />,
    color: "green",
    features: [
      "Custom API development",
      "Third-party platform integration",
      "Real-time data synchronization",
      "Workflow automation engines",
      "Webhook and event systems",
      "Data transformation pipelines",
    ],
    deliverables: [
      "Custom integration platform",
      "API documentation",
      "Automated workflow diagrams",
      "Data flow documentation",
      "Monitoring and error handling",
    ],
    process: [
      "Business process analysis",
      "Integration architecture design",
      "API and connector development",
      "Testing and data validation",
      "Deployment and monitoring",
      "Documentation and training",
    ],
    timeline: "5-7 weeks",
    startingPrice: "$7,500",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop",
    imageAlt: "API integration and data flow diagram",
    idealFor:
      "Businesses using multiple software platforms that need seamless data flow between systems",
  },
];

// Type-safe color classes 
const colorClasses: Record<
  ServiceColor,
  {
    bg: string;
    border: string;
    text: string;
    badge: string;
    button: string;
    glow: string;
    gradient: string;
  }
> = {
  lime: {
    bg: "bg-gradient-to-br from-lime-500/10 to-lime-600/5",
    border: "border-lime-500/30",
    text: "text-lime-400",
    badge: "bg-lime-500/10 text-lime-400 border-lime-500/30",
    button:
      "bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700",
    glow: "group-hover:shadow-lime-500/20",
    gradient: "from-lime-500/20 to-lime-600/10",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/30",
    text: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    button:
      "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    glow: "group-hover:shadow-blue-500/20",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    button:
      "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
    glow: "group-hover:shadow-cyan-500/20",
    gradient: "from-cyan-500/20 to-cyan-600/10",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/5",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    button:
      "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
    glow: "group-hover:shadow-indigo-500/20",
    gradient: "from-indigo-500/20 to-indigo-600/10",
  },
  yellow: {
    bg: "bg-gradient-to-br from-yellow-500/10 to-yellow-600/5",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    button:
      "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700",
    glow: "group-hover:shadow-yellow-500/20",
    gradient: "from-yellow-500/20 to-yellow-600/10",
  },
  green: {
    bg: "bg-gradient-to-br from-green-500/10 to-green-600/5",
    border: "border-green-500/30",
    text: "text-green-400",
    badge: "bg-green-500/10 text-green-400 border-green-500/30",
    button:
      "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    glow: "group-hover:shadow-green-500/20",
    gradient: "from-green-500/20 to-green-600/10",
  },
};

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getColors = (color: ServiceColor) => {
    return colorClasses[color] || colorClasses.lime;
  };

  return (
    <section
      id="solutions"
      className="py-16 md:py-24 px-4 md:px-0 lg:px-0 relative overflow-hidden"
    >
      {/* Background decoration - green theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
            <Sparkles className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">
              Tailored Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
              Strategic Digital Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond code—I deliver comprehensive technology strategies that solve
            core business challenges, drive sustainable growth, and create
            lasting competitive advantages.
          </p>
        </motion.div>

        {/* Mobile Slider - Perfect for small screens */}
        <div className="lg:hidden">
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            {servicesData.map((service, index) => {
              const colors = getColors(service.color);
              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    x: `${(index - currentIndex) * 100}%`,
                    opacity: index === currentIndex ? 1 : 0.3,
                    scale: index === currentIndex ? 1 : 0.9,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div
                    className={`relative h-full rounded-2xl overflow-hidden ${colors.bg} ${colors.border} border shadow-xl ${colors.glow}`}
                  >
                    {/* Image with gradient overlay */}
                    <div className="absolute inset-0">
                      <div className="relative w-full h-48">
                        <Image
                          src={service.imageUrl}
                          alt={service.imageAlt}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority={index === currentIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 h-full pt-40 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm`}
                        >
                          <span className={colors.text}>{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white line-clamp-2">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-300pt-30  mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Key Features Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded-full ${colors.badge} border`}
                          >
                            {feature.split(" ").slice(0, 2).join(" ")}...
                          </span>
                        ))}
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700">
                          +{service.features.length - 3} more
                        </span>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => setSelectedService(service)}
                        className={`mt-auto w-full py-3.5 rounded-xl text-white font-medium flex items-center justify-center gap-2 ${colors.button} transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + servicesData.length) % servicesData.length,
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % servicesData.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          {/* Slider Controls */}
          <div className="absolute bottom-4 mt-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {servicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-green-400 to-lime-400"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const colors = getColors(service.color);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl overflow-hidden border ${colors.border} ${colors.bg} hover:border-${service.color}-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl ${colors.glow} cursor-pointer`}
                onClick={() => setSelectedService(service)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/95" />

                  {/* Icon */}
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className={`p-3 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm`}
                    >
                      <span className={colors.text}>{service.icon}</span>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-xl font-bold text-white line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 text-xs rounded-full ${colors.badge} border`}
                      >
                        {feature}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700">
                      +{service.features.length - 3}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <button
                    className={`w-full py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2 ${colors.button} transition-all duration-300`}
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto z-[5001]"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedService &&
                (() => {
                  const colors = getColors(selectedService.color);

                  return (
                    <>
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/80 transition-colors border border-white/10"
                        aria-label="Close modal"
                      >
                        <X className="h-5 w-5" />
                      </button>

                      {/* Hero Image */}
                      <div className="relative h-64 md:h-80 lg:h-96">
                        <Image
                          src={selectedService.imageUrl}
                          alt={selectedService.imageAlt}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

                        {/* Title Section */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-4 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm`}
                            >
                              <span className={colors.text}>
                                {selectedService.icon}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                {selectedService.title}
                              </h2>
                              <p className="text-lg text-gray-300">
                                {selectedService.shortDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 space-y-8">
                        {/* Overview */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <ExternalLink
                              className={`h-5 w-5 ${colors.text}`}
                            />
                            Overview
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedService.fullDescription}
                          </p>
                        </div>

                        {/* Ideal For - Green themed */}
                        <div
                          className={`p-6 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border}`}
                        >
                          <div className="flex items-start gap-3">
                            <Target
                              className={`h-6 w-6 ${colors.text} flex-shrink-0 mt-1`}
                            />
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">
                                Ideal For
                              </h4>
                              <p className="text-gray-300">
                                {selectedService.idealFor}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Two Column Layout - Features & Process */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Key Features */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                              <Zap className={`h-5 w-5 ${colors.text}`} />
                              Key Features
                            </h3>
                            <ul className="space-y-3">
                              {selectedService.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle
                                    className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`}
                                  />
                                  <span className="text-gray-300">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Development Process */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                              <Layers className={`h-5 w-5 ${colors.text}`} />
                              Development Process
                            </h3>
                            <div className="space-y-3">
                              {selectedService.process.map((step, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <div
                                    className={`flex-shrink-0 w-6 h-6 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}
                                  >
                                    <span
                                      className={`text-xs font-bold ${colors.text}`}
                                    >
                                      {idx + 1}
                                    </span>
                                  </div>
                                  <span className="text-gray-300">{step}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Key Deliverables */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className={`h-5 w-5 ${colors.text}`} />
                            Key Deliverables
                          </h3>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {selectedService.deliverables.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-2 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
                              >
                                <CheckCircle
                                  className={`h-4 w-4 ${colors.text} flex-shrink-0 mt-0.5`}
                                />
                                <span className="text-sm text-gray-300">
                                  {item}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGrid;
