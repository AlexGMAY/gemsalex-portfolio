"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiBookOpen,
  FiBookmark,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

const BookshelfCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Self-Help",
    "Biographies",
  ];

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-Help",
      cover: "/books/atomic-habits.jpg",
      year: 2022,
      rating: 5,
      description:
        "Tiny changes, remarkable results. This book reveals practical strategies for building good habits and breaking bad ones.",
    },
    {
      id: 2,
      title: "Dune",
      author: "Frank Herbert",
      category: "Fiction",
      cover: "/books/dune.jpg",
      year: 2021,
      rating: 5,
      description:
        "A stunning blend of adventure and mysticism, environmentalism and politics in a sci-fi masterpiece.",
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      cover: "/books/sapiens.jpg",
      year: 2020,
      rating: 4,
      description:
        "A brief history of humankind, exploring how biology and history have defined us.",
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Non-Fiction",
      cover: "/books/psychology-money.jpg",
      year: 2023,
      rating: 5,
      description:
        "Timeless lessons on wealth, greed, and happiness through 19 short stories.",
    },
    {
      id: 5,
      title: "Project Hail Mary",
      author: "Andy Weir",
      category: "Fiction",
      cover: "/books/hail-mary.jpg",
      year: 2021,
      rating: 5,
      description:
        "A lone astronaut must save the earth from disaster in this science-based adventure.",
    },
    {
      id: 6,
      title: "Can't Hurt Me",
      author: "David Goggins",
      category: "Biographies",
      cover: "/books/cant-hurt-me.jpg",
      year: 2022,
      rating: 4,
      description:
        "A raw, inspiring story of transforming pain into power through mental toughness.",
    },
  ];

  const filteredBooks =
    activeCategory === "All"
      ? books
      : books.filter((book) => book.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-black-100 to-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-purple-600 opacity-20"></div> */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-lime-400">
            My Reading Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The books that shaped my thinking and expanded my horizons
          </p>
        </div>

        {/* Category filter - Dark Mode Version */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bookshelf - Dark Mode Version */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                whileHover={{ y: -10 }}
                className="relative cursor-pointer group"
                onClick={() => setSelectedBook(book.id)}
              >
                {/* Book cover with dark mode border */}
                <div className="relative h-64 rounded-lg overflow-hidden shadow-xl border-2 border-gray-700 group-hover:border-amber-400 transition-all">
                  {/* <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Rating - Dark Mode Version */}
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < book.rating ? "bg-amber-400" : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* Book info - Dark Mode Version */}
                <div className="mt-3 text-center">
                  <h3 className="font-bold text-white line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-400">{book.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state - Dark Mode Version */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <FiBookOpen className="mx-auto text-gray-600" size={48} />
              <p className="mt-4 text-gray-500">
                No books in this category yet
              </p>
            </div>
          )}
        </div>

        {/* Book details modal - Dark Mode Version */}
        <AnimatePresence>
          {selectedBook !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedBook(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const book = books.find((b) => b.id === selectedBook);
                  if (!book) return null;

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Book cover */}
                      <div className="bg-gray-900 p-8 flex items-center justify-center">
                        <div className="relative h-80 w-full max-w-xs">
                          {/* <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-full object-contain shadow-lg"
                          /> */}
                          <Image
                            src={book.cover}
                            alt={book.title}
                            width={300}
                            height={400}
                            className="w-full h-full object-contain shadow-lg"
                          />
                          {/* Page flipping effect */}
                          <motion.div
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: [0, 45, 0] }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              repeatDelay: 5,
                            }}
                            className="absolute top-0 right-0 w-8 h-full bg-amber-500/20 origin-left"
                            style={{
                              boxShadow: "-5px 0 10px rgba(0,0,0,0.3)",
                              clipPath:
                                "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Book details */}
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {book.title}
                            </h3>
                            <p className="text-amber-400">{book.author}</p>
                          </div>
                          <button
                            onClick={() => setSelectedBook(null)}
                            className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white"
                          >
                            <FiX size={20} />
                          </button>
                        </div>

                        <div className="flex gap-4 mt-4 text-sm text-gray-400">
                          <span>{book.category}</span>
                          <span>•</span>
                          <span>{book.year}</span>
                        </div>

                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full ${
                                i < book.rating ? "bg-amber-400" : "bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="mt-6 text-gray-300">{book.description}</p>

                        <div className="mt-8 flex gap-4">
                          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center gap-2">
                            <FiBookmark /> Save
                          </button>
                          <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition">
                            Find Online
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Yearly reading stats - Dark Mode Version */}
        <div className="mt-16 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">
            2023 Reading Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600">
              <p className="text-3xl font-bold text-amber-400">27</p>
              <p className="text-gray-400">Books Read</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600">
              <p className="text-3xl font-bold text-amber-400">4.2</p>
              <p className="text-gray-400">Avg Rating</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600">
              <p className="text-3xl font-bold text-amber-400">8,642</p>
              <p className="text-gray-400">Pages Turned</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600">
              <p className="text-3xl font-bold text-amber-400">12</p>
              <p className="text-gray-400">Fiction/Non-Fiction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookshelfCarousel;
