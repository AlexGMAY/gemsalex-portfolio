"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import {
  ArrowRightIcon,
  XMarkIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { ProductsByCategory, Product } from "@/lib/products";
import ProductIcon from "@/components/products/ProductIcon";

interface ProductsProps {
  productsByCategory: ProductsByCategory;
}

export default function Products({ productsByCategory }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
    document.body.style.overflow = "auto";
  };

  const categories = ["All", ...Object.keys(productsByCategory)];
  const filteredProducts =
    activeCategory === "All"
      ? Object.values(productsByCategory).flat()
      : productsByCategory[activeCategory] || [];

  return (
    <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="heading mb-12">
          Innovation Pipeline
        </h2>
        <p className="text-gray-400 mb-8">
          Filter by category to explore our development projects
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12 items-center justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Tilt
              key={product.id}
              options={{ max: 15, scale: 1.03, speed: 500 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 bg-gray-800 transition-all"
              >
                <div className="h-48 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      product.category === "AI Solutions"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-gradient-to-br from-purple-600 to-indigo-700"
                    }`}
                  >
                    <ProductIcon
                      iconName={product.iconName}
                      className={product.iconColor}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-700/20">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out"
                      style={{ width: `${product.progress}%` }}
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {product.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        product.stage === "Beta Testing"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-blue-900/30 text-blue-400"
                      }`}
                    >
                      {product.stage}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openModal(product)}
                      className="text-blue-400 font-medium flex items-center gap-1 hover:text-blue-300 transition-colors"
                    >
                      View details <ArrowRightIcon className="w-4 h-4" />
                    </button>
                    <div className="text-xs text-gray-400">
                      {product.progress}% complete
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl bg-gray-800"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full z-10 bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              <div className="h-64 md:h-80 relative overflow-hidden">
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    selectedProduct.category === "AI Solutions"
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                      : "bg-gradient-to-br from-purple-600 to-indigo-700"
                  }`}
                >
                  <div className="text-white text-center p-6">
                    <ProductIcon
                      iconName={selectedProduct.iconName}
                      className={selectedProduct.iconColor}
                    />
                    <p className="text-lg opacity-90 mt-2">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        {selectedProduct.name}
                      </h2>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          selectedProduct.stage === "Beta Testing"
                            ? "bg-green-900/30 text-green-400"
                            : "bg-blue-900/30 text-blue-400"
                        }`}
                      >
                        {selectedProduct.stage}
                      </span>
                    </div>
                    <div className="prose max-w-none text-gray-300">
                      <ul className="space-y-2">
                        {selectedProduct.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="md:w-1/3">
                    <h3 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
                      <ClockIcon className="w-5 h-5" />
                      Development Timeline
                    </h3>
                    <div className="space-y-4 relative">
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-600" />
                      {selectedProduct.timeline.map((item, index) => (
                        <div key={index} className="relative pl-8">
                          <div
                            className={`absolute left-4 top-1 w-3 h-3 rounded-full ${
                              index === selectedProduct.timeline.length - 1
                                ? "bg-blue-500 ring-4 ring-blue-900/50"
                                : "bg-gray-500"
                            }`}
                          />
                          <h4 className="font-medium text-gray-100">
                            {item.date}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {item.milestone}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress and CTA */}
                <div className="p-6 rounded-lg border bg-gray-700/50 border-gray-600">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-blue-300">
                        Development Progress
                      </h3>
                      <div className="w-full bg-gray-600 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${selectedProduct.progress}%` }}
                        />
                      </div>
                      <p className="text-sm mt-1 text-gray-400">
                        {selectedProduct.progress}% complete •{" "}
                        {selectedProduct.stage}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-blue-300">
                        Stay Updated
                      </h3>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="flex-1 px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                        />
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          Subscribe
                        </motion.button>
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
}
