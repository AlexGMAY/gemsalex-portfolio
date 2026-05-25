"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEuroSign,
  FaCheckCircle,
  FaArrowRight,
  FaRegClock,
  FaCalculator,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaWhatsapp,
} from "react-icons/fa";
import { pricingCourses } from "@/data";

// Environment variables
const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const ADMIN_EMAIL =
  process.env.ADMIN_EMAIL;

// Custom calculator component for personalized hours
const CustomHoursCalculator = ({
  course,
  onWhatsAppQuote,
  onEmailQuote,
}: {
  course: (typeof pricingCourses)[0];
  onWhatsAppQuote: (courseName: string, hours: number, price: number) => void;
  onEmailQuote: (courseName: string, hours: number, price: number) => void;
}) => {
  const [customHours, setCustomHours] = useState<number>(10);
  const [showCalculator, setShowCalculator] = useState(false);

  const getDiscount = (hours: number): number => {
    if (hours >= 40) return 0.2;
    if (hours >= 30) return 0.15;
    if (hours >= 20) return 0.1;
    if (hours >= 10) return 0.05;
    return 0;
  };

  const discount = getDiscount(customHours);
  const totalPrice = Math.round(
    course.hourlyRate * customHours * (1 - discount),
  );
  const savings = course.hourlyRate * customHours - totalPrice;

  return (
    <div className="mt-3 pt-3 border-t border-gray-800">
      <button
        onClick={() => setShowCalculator(!showCalculator)}
        className="w-full flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-lime-400 transition-colors"
      >
        <FaCalculator size={12} />
        <span>Custom hours? Calculate your price</span>
        {showCalculator ? (
          <FaChevronUp size={10} />
        ) : (
          <FaChevronDown size={10} />
        )}
      </button>

      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700"
          >
            <div className="flex items-center gap-2 mb-3">
              <input
                type="range"
                min="1"
                max="100"
                value={customHours}
                onChange={(e) => setCustomHours(parseInt(e.target.value))}
                className="flex-1 h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 accent-lime-500"
              />
              <div className="flex items-center gap-1 bg-gray-700 rounded-lg px-2 py-1">
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={customHours}
                  onChange={(e) =>
                    setCustomHours(parseInt(e.target.value) || 1)
                  }
                  className="w-16 bg-transparent text-white text-sm text-center border-none focus:outline-none"
                />
                <span className="text-xs text-gray-400">h</span>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Hourly rate:</span>
                <span className="text-white">€{course.hourlyRate}/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Regular price:</span>
                <span className="text-white line-through">
                  €{course.hourlyRate * customHours}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Discount ({discount * 100}%):
                  </span>
                  <span className="text-green-400">
                    -€{Math.round(savings)}
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-gray-700">
                <span className="font-semibold text-white">Your price:</span>
                <span className="text-lg font-bold text-lime-400">
                  €{totalPrice}
                </span>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() =>
                    onWhatsAppQuote(course.name, customHours, totalPrice)
                  }
                  className="flex-1 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-medium flex items-center justify-center gap-1 transition"
                >
                  <FaWhatsapp size={10} />
                  WhatsApp Quote
                </button>
                <button
                  onClick={() =>
                    onEmailQuote(course.name, customHours, totalPrice)
                  }
                  className="flex-1 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium flex items-center justify-center gap-1 transition"
                >
                  <FaEnvelope size={10} />
                  Email Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingTable = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // WhatsApp quote handler
  const handleWhatsAppQuote = (
    courseName: string,
    hours: number,
    price: number,
  ) => {
    const message = `Hello, I am interested in the "${courseName}" training (${hours}h - ${price}€). Could you please send me a quote with payment details? I would like to start as soon as possible. Thank you!`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  // Email quote handler
  const handleEmailQuote = (
    courseName: string,
    hours: number,
    price: number,
  ) => {
    const subject = `Quote: ${courseName} - ${hours}h`;
    const body = `Hello,\n\nI am interested in the "${courseName}" training (${hours}h - ${price}€).\n\nCould you please send me a detailed quote with payment options?\n\nI would like to start as soon as possible.\n\nBest regards,`;
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1.5 mb-4">
            <FaEuroSign className="text-lime-400" size={14} />
            <span className="text-xs font-medium text-lime-300">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              Flexible Pricing
            </span>
            <br />
            for Every Learning Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your goals. The more you learn, the more
            you save. All prices are in EUR, TVA non applicable (art. 293 B du
            CGI).
          </p>
        </div>

        {/* Pricing Cards Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`h-full rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-${course.colorName}-400/50 transition-all duration-300 overflow-hidden`}
              >
                {/* Header */}
                <div className="p-5 pb-3 border-b border-gray-800">
                  <h3 className="text-lg font-bold text-white">
                    {course.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <FaEuroSign size={16} className="text-lime-400" />
                    <span className="text-3xl font-bold text-lime-400">
                      {course.hourlyRate}
                    </span>
                    <span className="text-sm text-gray-500">/hour</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Starting from {course.hourlyRate}€/h
                  </p>
                </div>

                {/* Packs */}
                <div className="p-4 space-y-3">
                  {course.packs.map((pack) => (
                    <div
                      key={pack.hours}
                      className={`rounded-xl p-3 transition-all cursor-pointer ${
                        expandedCard === `${course.id}-${pack.hours}`
                          ? "bg-gradient-to-r from-lime-500/10 to-blue-500/10 border border-lime-400/30"
                          : "bg-gray-800/30 hover:bg-gray-800/50"
                      }`}
                    >
                      <div
                        className="flex items-center justify-between"
                        onClick={() =>
                          setExpandedCard(
                            expandedCard === `${course.id}-${pack.hours}`
                              ? null
                              : `${course.id}-${pack.hours}`,
                          )
                        }
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">
                              {pack.hours}h Pack
                            </span>
                            {pack.hours === 10 && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-lime-500/20 text-lime-400">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <FaEuroSign size={10} className="text-lime-400" />
                            <span className="text-xl font-bold text-lime-400">
                              {pack.price}
                            </span>
                            <span className="text-xs text-green-400">
                              (-{pack.discount}%)
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsAppQuote(
                                course.name,
                                pack.hours,
                                pack.price,
                              );
                            }}
                            className="px-3 py-1.5 rounded-lg bg-green-600/20 text-green-400 text-xs font-medium hover:bg-green-600/30 transition-colors flex items-center gap-1"
                          >
                            <FaWhatsapp size={10} />
                            WhatsApp
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEmailQuote(
                                course.name,
                                pack.hours,
                                pack.price,
                              );
                            }}
                            className="px-3 py-1.5 rounded-lg bg-gray-700 text-gray-300 text-xs font-medium hover:bg-gray-600 transition-colors flex items-center gap-1"
                          >
                            <FaEnvelope size={10} />
                            Email
                          </button>
                          {expandedCard === `${course.id}-${pack.hours}` ? (
                            <FaChevronUp className="text-gray-500" size={12} />
                          ) : (
                            <FaChevronDown
                              className="text-gray-500"
                              size={12}
                            />
                          )}
                        </div>
                      </div>

                      {/* Pack detailed content */}
                      <AnimatePresence>
                        {expandedCard === `${course.id}-${pack.hours}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-gray-700"
                          >
                            <p className="text-xs text-gray-400 mb-2">
                              What&apos;s included:
                            </p>
                            <ul className="space-y-1.5">
                              {pack.contents.map((content, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-gray-300"
                                >
                                  <FaCheckCircle
                                    size={10}
                                    className="text-lime-400 mt-0.5 flex-shrink-0"
                                  />
                                  <span>{content}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex gap-2 mt-3">
                              <button
                                onClick={() =>
                                  handleWhatsAppQuote(
                                    course.name,
                                    pack.hours,
                                    pack.price,
                                  )
                                }
                                className="flex-1 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-medium flex items-center justify-center gap-1 transition"
                              >
                                <FaWhatsapp size={10} />
                                WhatsApp Quote
                              </button>
                              <button
                                onClick={() =>
                                  handleEmailQuote(
                                    course.name,
                                    pack.hours,
                                    pack.price,
                                  )
                                }
                                className="flex-1 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium flex items-center justify-center gap-1 transition"
                              >
                                <FaEnvelope size={10} />
                                Email Quote
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Custom hours calculator */}
                  <CustomHoursCalculator
                    course={course}
                    onWhatsAppQuote={handleWhatsAppQuote}
                    onEmailQuote={handleEmailQuote}
                  />
                </div>

                {/* Free consultation link */}
                <div className="p-4 pt-0">
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-lime-400 transition-colors"
                  >
                    <FaRegClock size={10} />
                    <span>Need help choosing? Free consultation</span>
                    <FaArrowRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bulk discount grid */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-lime-500/10 border border-gray-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-3">
              📚 Bulk Hours Discount Structure
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
              <div className="p-3 rounded-xl bg-gray-800/50">
                <div className="text-xl font-bold text-lime-400">1-9h</div>
                <div className="text-xs text-gray-400">Standard rate</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-800/50 border border-lime-400/30">
                <div className="text-xl font-bold text-lime-400">10-19h</div>
                <div className="text-xs text-gray-400">-5%</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-800/50 border border-lime-400/30">
                <div className="text-xl font-bold text-lime-400">20-29h</div>
                <div className="text-xs text-gray-400">-10%</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-800/50">
                <div className="text-xl font-bold text-lime-400">30-39h</div>
                <div className="text-xs text-gray-400">-15%</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-800/50">
                <div className="text-xl font-bold text-lime-400">40h+</div>
                <div className="text-xs text-gray-400">-20%</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              *Custom quotes available for intensive programs or corporate
              training
            </p>
          </div>
        </div>

        {/* Legal mention */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            💡 VAT not applicable - International service provision. Indicative
            prices for standard online courses. A personalized quote will be
            issued after analyzing your specific needs.
            <br />
            *Discounts are automatically applied based on the number of hours
            chosen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
