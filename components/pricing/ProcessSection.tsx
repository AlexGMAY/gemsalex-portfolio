"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discovery Call",
    description: "Free, no obligation consultation to understand your needs",
    icon: "📞",
  },
  {
    title: "Proposal & Contract",
    description: "Fixed scope with transparent pricing, no hidden fees",
    icon: "📝",
  },
  {
    title: "Design/Development",
    description: "Weekly updates with progress demos",
    icon: "💻",
  },
  {
    title: "Revisions & Launch",
    description: "Your satisfaction guaranteed before final delivery",
    icon: "🚀",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          🔄 My Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
