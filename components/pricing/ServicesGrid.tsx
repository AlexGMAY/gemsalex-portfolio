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
  Shield,
  Users,
  ExternalLink,
  Clock,
  DollarSign,
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
  timeline: string;
  startingPrice: string;
  imageUrl: string;
  imageAlt: string;
  idealFor: string;
}

// Service data with proper typing
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
    button: string;
  }
> = {
  lime: {
    bg: "bg-gradient-to-br from-lime-500/10 to-lime-600/5",
    border: "border-lime-500/30",
    text: "text-lime-400",
    button: "bg-lime-600 hover:bg-lime-700",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/30",
    text: "text-blue-400",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    button: "bg-cyan-600 hover:bg-cyan-700",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/5",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
  yellow: {
    bg: "bg-gradient-to-br from-yellow-500/10 to-yellow-600/5",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    button: "bg-yellow-600 hover:bg-yellow-700",
  },
  green: {
    bg: "bg-gradient-to-br from-green-500/10 to-green-600/5",
    border: "border-green-500/30",
    text: "text-green-400",
    button: "bg-green-600 hover:bg-green-700",
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
    return colorClasses[color] || colorClasses.lime; // Fallback to lime
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lime-400">
              Strategic Digital Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond code—I deliver comprehensive technology strategies that solve
            core business challenges.
          </p>
        </motion.div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
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
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div
                    className={`relative h-full rounded-2xl overflow-hidden ${colors.bg} ${colors.border} border`}
                  >
                    {/* Image */}
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
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 pt-56 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}
                        >
                          <span className={colors.text}>{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 mb-4 flex-grow">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{service.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span>From {service.startingPrice}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedService(service)}
                        className={`w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 ${colors.button}`}
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Slider Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + servicesData.length) % servicesData.length,
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % servicesData.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const colors = getColors(service.color);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden border ${colors.border} ${colors.bg} transition-all duration-300`}
                onClick={() => setSelectedService(service)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}
                    >
                      <span className={colors.text}>{service.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-black/30 text-gray-300 border border-gray-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{service.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span>From {service.startingPrice}</span>
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 ${colors.button} transition-colors`}
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button (Mobile) */}
        <div className="lg:hidden mt-8 text-center">
          <button
            onClick={() => setSelectedService(servicesData[0])}
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium"
          >
            Explore All Services
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="relative">
                {/* Hero Image */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedService.imageUrl}
                    alt={selectedService.imageAlt}
                    fill
                    className="object-cover rounded-t-2xl"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${getColors(selectedService.color).bg} border ${getColors(selectedService.color).border}`}
                      >
                        <span className={getColors(selectedService.color).text}>
                          {selectedService.icon}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {selectedService.title}
                        </h2>
                        <p className="text-gray-300 mt-2">
                          {selectedService.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Overview */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-cyan-400" />
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedService.fullDescription}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-black/30 border border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <span className="text-white font-medium">Timeline</span>
                      </div>
                      <p className="text-gray-300">
                        {selectedService.timeline}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/30 border border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5 text-green-400" />
                        <span className="text-white font-medium">
                          Starting Price
                        </span>
                      </div>
                      <p className="text-gray-300">
                        {selectedService.startingPrice}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/30 border border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-green-700" />
                        <span className="text-white font-medium">
                          Ideal For
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {selectedService.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Features & Process */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-yellow-400" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-400" />
                        Key Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {selectedService.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-400 text-xs font-bold">
                                {idx + 1}
                              </span>
                            </div>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div>
                        <p className="text-gray-300">
                          Ready to transform your business with{" "}
                          {selectedService.title.toLowerCase()}?
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setSelectedService(null)}
                          className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-400 transition-colors"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            // Navigate to contact page with service pre-selected
                            window.location.href = '/contact';
                          }}
                          className={`px-6 py-3 rounded-lg text-white font-medium ${getColors(selectedService.color).button}`}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGrid;
