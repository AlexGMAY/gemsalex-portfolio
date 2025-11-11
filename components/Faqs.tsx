"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What's your process for understanding my business needs?",
    answer:
      "I start with a deep discovery session to understand your unique challenges, goals, and target audience before writing a single line of code.",
  },
  {
    question: "How do you ensure projects stay on budget and timeline?",
    answer:
      "I provide fixed-scope proposals with transparent pricing and weekly progress updates, so you always know exactly where we stand.",
  },
  {
    question: "What happens after my project launches?",
    answer:
      "I offer ongoing support and maintenance to ensure your solution continues to perform and scale with your business growth.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Absolutely! I specialize in translating business vision into technical solutions, making the process clear and collaborative.",
  },
  {
    question: "How do you handle revisions and changes during development?",
    answer:
      "I build flexibility into every project with clear revision cycles, ensuring we adapt to your evolving needs without compromising quality.",
  },
  {
    question: "What makes your approach different from other developers?",
    answer:
      "I focus on business outcomes, not just code. Every solution is designed to drive growth, efficiency, and competitive advantage.",
  },
  {
    question: "How do you ensure quality and performance?",
    answer:
      "I implement rigorous testing, performance optimization, and follow industry best practices to deliver reliable, high-performing applications.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I've delivered successful projects across SaaS, e-commerce, marketing tech, and business automation platforms.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "I typically begin new projects within 1-2 weeks after our initial strategy session and agreement.",
  },
];


interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => {
  return (
    <div className="border-b border-lime-700">
      <button
        className="w-full flex justify-between items-center text-left px-5 py-4 bg-black-200 hover:bg-gray-700 text-white-400 font-semibold border border-lime-300 transition-all duration-300 uppercase"
        onClick={toggle}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="text-lime-400 transition-all duration-300" />
        ) : (
          <ChevronDown className="text-yellow-400 transition-all duration-300" />
        )}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 py-3 text-neutral-300 bg-gray-900 border-t border-yellow-500">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black-100 text-white">
      <div className="container mx-auto px-6">
        <h2 className="heading font-semibold text-center">
          Your Questions{" "}
          <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
            Answered
          </span>
        </h2>
        <p className="text-xl text-center text-neutral-400 mt-4">
          Clear answers about how we'll work together to achieve{" "}
          <span className="text-lime-400">your business goals</span>.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Video Presentation */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="w-full md:h-full border border-3xl border-lime-500 bg-gray-800 rounded-3xl p-2">
              <img
                src="/cute-alex.jpg"
                alt="Merveille Alexander - Strategic Software Partner"
                className="w-full md:h-full p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="rounded-lg shadow-md flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
