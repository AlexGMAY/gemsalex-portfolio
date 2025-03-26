
"use client"; 

import { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter
import { services } from "@/data";

type Feature = {
  name: string;
  price: number;
  checked?: boolean;
};

type Service = {
  title: string;
  description: string;
  basePrice: number;
  features: Feature[];
};

type ServicesProps = {
  isHomePage?: boolean; // Prop to determine if the component is on the Home page
};

export default function Services({ isHomePage = false }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const toggleFeature = (feature: Feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const totalPrice =
    (selectedService?.basePrice || 0) +
    selectedFeatures.reduce((acc, feature) => acc + feature.price, 0);

  const handleSeeMore = () => {
    router.push("/pricing"); // Redirect to the pricing page
  };

  return (
    <div className="py-20 px-6 min-h-screen" id="pricing">
      <h2 className="heading mb-10">
        Choose a <span className="text-lime-400">Freelance Service</span>
      </h2>
      <p className="text-lg text-center text-neutral-400 mb-10">
        Browse through my Freelance Services across different categories.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services
          .slice(0, isHomePage ? 3 : services.length) // Show 3 cards on Home, all on Pricing
          .map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <div className="p-6 shadow-lg rounded-2xl bg-gray-800 text-white">
                <div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="text-gray-300 my-2 border-b border-gray-700 py-2">
                    {service.description}
                  </p>
                  <p className="text-yellow-500 font-bold text-lg">
                    From ${service.basePrice}
                  </p>

                  {/* Display Pre-Checked Features on the Card */}
                  <div className="mt-4 space-y-2">
                    {service.features
                      .filter((feature) => feature.checked)
                      .map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 border-b border-gray-700 py-2"
                        >
                          <span className="text-lime-400">✔</span>
                          <span>{feature.name}</span>
                        </div>
                      ))}
                  </div>

                  <p className="text-sm text-left text-neutral-400 my-10 border-b border-gray-700 py-2">
                    <i className="text-yellow-500 font-bold">
                      NOTE:{" "}
                      <b>CLICK THE ORDER BUTTON BELOW FOR MORE FEATURES :</b>
                    </i>
                  </p>

                  <button
                    className="mt-4 flex items-center gap-2 bg-gradient-to-r from-lime-600 to-yellow-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
                    onClick={() => {
                      setSelectedService(service);
                      setSelectedFeatures([]);
                      setIsDialogOpen(true);
                    }}
                  >
                    Order Now <FaShoppingCart className="text-lg" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* "See More Services" Button (Only on Home Page) */}
      {isHomePage && (
        <div className="flex justify-center mt-20">
          <button
            onClick={handleSeeMore}
            className="bg-gradient-to-r from-lime-500 to-yellow-600 text-white px-8 py-3 rounded-lg hover:from-lime-600 hover:to-yellow-700 transition-all transform hover:scale-105"
          >
            See More Services
          </button>
        </div>
      )}

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl text-white max-h-[90vh] overflow-y-auto scrollbar-custom">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Customize Your{" "}
                <span className="text-lime-400">{selectedService?.title}</span>
              </h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                &times;
              </button>
            </div>
            <div className="space-y-2">
              {selectedService?.features
                .filter((feature) => !feature.checked)
                .map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-gray-700 py-2"
                  >
                    <label>
                      {feature.name} (+${feature.price})
                    </label>
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                      className="form-checkbox h-5 w-5 text-purple-600 rounded"
                    />
                  </div>
                ))}
            </div>
            <div className="mt-4">
              <p className="font-bold">Total Price: ${totalPrice}</p>
            </div>
            <form className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your First Name"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="text"
                  placeholder="Your Last Name"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-500 to-yellow-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}