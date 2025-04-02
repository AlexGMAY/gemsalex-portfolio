'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaExchangeAlt, FaShoppingCart, FaLock, FaRocket } from 'react-icons/fa';
import { services, Feature, Service } from '@/data'; 
import { GiTunisia } from "react-icons/gi";

type Currency = 'USD' | 'TND';


export default function SuperPricing() {
  // Enhanced state
  const [currency, setCurrency] = useState<Currency>('USD');
  const [exchangeRate, setExchangeRate] = useState(3.1);
  const [userLocation, setUserLocation] = useState<{ country?: string; city?: string }>({});
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);

  // Live currency conversion
  const convertPrice = (usd: number) => 
    currency === 'USD' ? usd : Math.round(usd * exchangeRate);

  // Dynamic total calculation
  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const base = currency === 'USD' 
      ? selectedService.basePrice 
      : selectedService.localPrice || convertPrice(selectedService.basePrice);
    
    return base + selectedFeatures.reduce((sum, f) => sum + convertPrice(f.price), 0);
  };

  // Auto-detect location
  useEffect(() => {
    const detect = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        setUserLocation({ country: data.country_name, city: data.city });
        if (data.country === 'TN') setCurrency('TND');
      } catch {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('Tunis')) setCurrency('TND');
      }
    };
    detect();
  }, []);

  // Surprise Feature 1: Dynamic price suggestions
  const getPriceHint = (service: Service) => {
    const base = currency === 'USD' ? service.basePrice : 
      service.localPrice || convertPrice(service.basePrice);
    
    if (base > 5000) return "Enterprise-grade";
    if (base > 3000) return "Best value";
    return "Starter";
  };

  // Surprise Feature 2: Animated currency toggle
  const CurrencyToggle = () => (
    <motion.div 
      className="flex items-center bg-gray-800 rounded-full p-1"
      whileHover={{ scale: 1.05 }}
    >
      <button
        onClick={() => setCurrency('USD')}
        className={`flex items-center px-4 py-2 rounded-full ${
          currency === 'USD' ? 'bg-blue-600 text-white' : 'text-gray-300'
        }`}
      >
        <FaGlobe className="mr-2" /> USD
      </button>
      <motion.span 
        className="mx-2 text-gray-400"
        animate={{ rotate: currency === 'TND' ? 180 : 0 }}
      >
        <FaExchangeAlt />
      </motion.span>
      <button
        onClick={() => setCurrency('TND')}
        className={`flex items-center px-4 py-2 rounded-full ${
          currency === 'TND' ? 'bg-red-600 text-white' : 'text-gray-300'
        }`}
      >
        <GiTunisia className='text-red-500 mr-2' /> TND
      </button>
    </motion.div>
  );

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with currency toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-400">
              Expert-Level 
            </span>{" "}
            Development
          </h2>
          <p className="text-gray-300 mb-6">
            8+ years of solving complex problems •{" "}
            {userLocation.country &&
              `Detected: ${userLocation.city ? `${userLocation.city}, ` : ""}${
                userLocation.country
              }`}
          </p>
          <div className="flex justify-center">
            <CurrencyToggle />
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
            >
              <div className="p-6">
                {/* Service header */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-lime-400">
                    {getPriceHint(service)}
                  </span>
                </div>

                {/* Price display */}
                <div className="my-4">
                  <p className="text-3xl font-bold text-white">
                    {currency === "USD" ? "$" : ""}
                    {currency === "USD"
                      ? service.basePrice.toLocaleString()
                      : (
                          service.localPrice || convertPrice(service.basePrice)
                        ).toLocaleString()}
                    {currency === "TND" ? " TND" : ""}
                  </p>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                {/* Core features */}
                <ul className="space-y-2 mb-6">
                  {service.features
                    .filter((f) => f.category === "core")
                    .map((feature) => (
                      <li key={feature.id} className="flex items-center">
                        <span className="text-lime-400 mr-2">✓</span>
                        <span className="text-gray-300">{feature.name}</span>
                      </li>
                    ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-6 bg-gradient-to-r from-lime-500 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                  onClick={() => setSelectedService(service)}
                >
                  <FaShoppingCart /> Customize
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#faqs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-300 to-blue-200 hover:from-lime-400 hover:to-yellow-500 transition-colors"
          >
            What's included? →
          </a>
        </motion.div>

        {/* Customization modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  {/* Modal header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      Customize{" "}
                      <span className="text-lime-400">
                        {selectedService.title}
                      </span>
                    </h3>
                    <div className="flex items-center gap-4">
                      <CurrencyToggle />
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Add-on features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-white">Premium Add-Ons</h4>
                    {selectedService.features
                      .filter((f) => f.category === "addon")
                      .map((feature) => (
                        <motion.div
                          key={feature.id}
                          whileHover={{ x: 5 }}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            selectedFeatures.includes(feature)
                              ? "border-lime-500 bg-gray-700"
                              : "border-gray-700 hover:bg-gray-700"
                          }`}
                          onClick={() => {
                            setSelectedFeatures((prev) =>
                              prev.includes(feature)
                                ? prev.filter((f) => f !== feature)
                                : [...prev, feature]
                            );
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-white">
                                {feature.name}
                              </p>
                              <p className="text-sm text-gray-400">
                                {currency === "USD" ? "$" : ""}
                                {convertPrice(feature.price).toLocaleString()}
                                {currency === "TND" ? " TND" : ""}
                              </p>
                            </div>
                            <input
                              type="checkbox"
                              checked={selectedFeatures.includes(feature)}
                              readOnly
                              className="h-5 w-5 text-lime-500 rounded focus:ring-lime-500"
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  {/* Order summary */}
                  <div className="p-4 bg-gray-700 rounded-lg mb-6">
                    <h4 className="font-bold text-white mb-3">Order Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Base Price:</span>
                        <span className="font-medium">
                          {currency === "USD" ? "$" : ""}
                          {currency === "USD"
                            ? selectedService.basePrice.toLocaleString()
                            : (
                                selectedService.localPrice ||
                                convertPrice(selectedService.basePrice)
                              ).toLocaleString()}
                          {currency === "TND" ? " TND" : ""}
                        </span>
                      </div>

                      {selectedFeatures.map((feature) => (
                        <div
                          key={feature.id}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-400">
                            + {feature.name}
                          </span>
                          <span>
                            {currency === "USD" ? "$" : ""}
                            {convertPrice(feature.price).toLocaleString()}
                            {currency === "TND" ? " TND" : ""}
                          </span>
                        </div>
                      ))}

                      <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between font-bold">
                        <span className="text-white">Total:</span>
                        <span className="text-lime-400">
                          {currency === "USD" ? "$" : ""}
                          {calculateTotal().toLocaleString()}
                          {currency === "TND" ? " TND" : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full">
                      <FaLock className="text-green-500" />
                      <span className="text-xs">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full">
                      <FaRocket className="text-yellow-500" />
                      <span className="text-xs">14-Day Delivery</span>
                    </div>
                  </div>

                  {/* Contact form */}
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                    </div>
                    <textarea
                      placeholder="Project details (requirements, timeline, etc.)"
                      rows={3}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    ></textarea>
                    <input type="hidden" name="currency" value={currency} />
                    <input
                      type="hidden"
                      name="total"
                      value={calculateTotal()}
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-lime-600 to-yellow-600 text-white font-bold py-3 rounded-lg"
                    >
                      Secure My Project ({currency})
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}