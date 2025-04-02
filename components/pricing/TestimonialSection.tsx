"use client";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          💬 Social Proof
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl relative"
        >
          <div className="absolute top-0 left-8 text-6xl opacity-10">❝</div>
          <blockquote className="text-xl italic mb-6">
            "The developer delivered our project 2 weeks early—and it crushed
            our KPIs. 10/10!"
          </blockquote>
          <div className="flex items-center">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
              AC
            </div>
            <div>
              <p className="font-semibold">Alex Johnson</p>
              <p className="text-gray-400">CEO, TechStart Inc.</p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/projects"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            See full project breakdown →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
