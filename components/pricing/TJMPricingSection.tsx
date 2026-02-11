"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEuroSign,
  FaCalendarAlt,
  FaCalculator,
  FaFileContract,
  FaHandshake,
  FaChartBar,
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaCogs,
  FaCode,
  FaRocket,
  FaGlobeEurope,
  FaCheck,
} from "react-icons/fa";

const TJMPricingSection = () => {
  const [estimatedDays, setEstimatedDays] = useState(20);
  const dailyRate = 750; // Your TJM as an experienced senior developer

  const includedServices = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      desc: "End-to-end feature development",
    },
    {
      icon: <FaCogs />,
      title: "Technical Architecture",
      desc: "System design and best practices",
    },
    {
      icon: <FaChartBar />,
      title: "Technical Consulting",
      desc: "Architecture decisions and planning",
    },
    {
      icon: <FaHeadset />,
      title: "Daily Availability",
      desc: "Available during business hours",
    },
    {
      icon: <FaShieldAlt />,
      title: "Code Quality",
      desc: "Testing, code reviews, and documentation",
    },
    {
      icon: <FaClock />,
      title: "Flexibility",
      desc: "Adapt to evolving project needs",
    },
  ];

  const billingExamples = [
    { days: 5, total: dailyRate * 5 },
    { days: 10, total: dailyRate * 10 },
    { days: 20, total: dailyRate * 20 },
    { days: 40, total: dailyRate * 40 },
  ];

  const europeanMarkets = [
    { country: "France", flag: "🇫🇷" },
    { country: "Belgium", flag: "🇧🇪" },
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "Luxembourg", flag: "🇱🇺" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "Netherlands", flag: "🇳🇱" },
  ];

  const benefits = [
    "Transparent billing (time spent)",
    "Weekly progress reports",
    "Maximum flexibility for project changes",
    "No hidden costs",
    "Direct communication with the developer",
    "Agile/Scrum methodology ready",
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <FaGlobeEurope className="text-3xl text-blue-500" />
            <FaEuroSign className="text-3xl text-yellow-500" />
            <FaRocket className="text-3xl text-purple-500" />
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-lime-400">
              Daily Rate (TJM) Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Transparent daily billing for European clients
          </p>

          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 border border-blue-700 rounded-full mb-4">
            <FaHandshake className="text-blue-400 mr-2" />
            <span className="text-gray-300">
              Perfect for evolving projects, maintenance, or flexible
              development needs
            </span>
          </div>
        </motion.div>

        {/* Your TJM Rate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-lime-500/30 rounded-2xl p-8 text-center shadow-xl shadow-lime-500/10">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-lime-500/20 border border-lime-500 rounded-full mb-4">
              <FaRocket className="text-lime-400" />
              <span className="text-lime-400 font-medium">
                Senior Software Engineer
              </span>
            </div>

            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-2">
                €{dailyRate}
              </div>
              <div className="text-xl text-gray-400">per day (TJM)</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Experience</div>
                <div className="text-lg font-bold text-white">8+ years</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Expertise</div>
                <div className="text-lg font-bold text-white">Full-Stack</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Availability</div>
                <div className="text-lg font-bold text-white">Immediate</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              As an experienced senior software engineer with 8+ years in full-stack
              development, I provide expert-level solutions with transparent
              daily billing.
            </p>
          </div>
        </motion.div>

        {/* Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaCalculator className="text-2xl text-blue-400" />
                <h3 className="text-2xl font-bold text-white">
                  TJM Calculator
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Daily Rate (TJM):
                  </label>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-yellow-400">
                      €{dailyRate}
                    </span>
                    <span className="text-gray-400 ml-2">/day</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Experienced software engineer rate
                  </p>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Estimated Project Duration:
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={estimatedDays}
                      onChange={(e) =>
                        setEstimatedDays(parseInt(e.target.value))
                      }
                      className="flex-1"
                    />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {estimatedDays}
                      </div>
                      <div className="text-sm text-gray-400">days</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 week</span>
                    <span>3 months</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Estimated Budget:</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-lime-400">
                        €{(dailyRate * estimatedDays).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        ({estimatedDays} days × €{dailyRate})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaCalendarAlt className="text-2xl text-purple-400" />
                <h3 className="text-2xl font-bold text-white">
                  Billing Examples
                </h3>
              </div>

              <div className="space-y-4">
                {billingExamples.map((example, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div>
                      <div className="text-white font-medium">
                        {example.days} days
                      </div>
                      <div className="text-sm text-gray-400">
                        €{dailyRate}/day
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-lime-400">
                        €{example.total.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">
                        ~{Math.ceil(example.days / 5)} weeks
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* European Markets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Serving European Markets
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {europeanMarkets.map((market, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 bg-gray-800/30 rounded-xl"
              >
                <div className="text-2xl mb-2">{market.flag}</div>
                <div className="text-white font-medium">{market.country}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Included Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Included in Your Daily Rate
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <div className="text-xl text-blue-400">{service.icon}</div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Benefits of Daily Rate (TJM) Billing
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg"
              >
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/30 to-lime-900/30 border border-blue-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Daily Rate (TJM) Pricing?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Perfect for evolving projects, ongoing maintenance, or when you need
            flexibility in development. Let&apos;s discuss your project during a
            free discovery call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg flex items-center gap-2"
              onClick={() => (window.location.href = "/contact")}
            >
              <FaEuroSign /> Request Daily Rate Quote
            </motion.button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <FaFileContract className="text-blue-400" />
              <span>Transparent weekly reports</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaClock className="text-purple-400" />
              <span>Flexible project changes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaShieldAlt className="text-green-400" />
              <span>Enterprise-ready solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TJMPricingSection;
