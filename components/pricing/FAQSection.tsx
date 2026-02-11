"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: 'How much does a basic website cost?',
    answer: 'My starter websites begin at $1,500 for a 5-page responsive site with basic SEO setup. Perfect for small businesses needing an online presence.'
  },
  {
    question: 'What factors affect the final price?',
    answer: 'Price depends on: (1) Number of pages, (2) Custom design vs template, (3) E-commerce functionality, (4) Content creation needs, and (5) Advanced features like animations.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! I require 50% upfront, 25% at design approval, and 25% at launch. Custom payment schedules available for large projects.'
  },
  {
    question: "What's included in your website packages?",
    answer: 'All packages include: responsive design, basic SEO setup, CMS integration, 1 year of hosting, and 30 days of post-launch support.'
  },
  {
    question: 'How long does website development take?',
    answer: 'Timelines vary: 1-2 weeks for standard sites, 2-4 weeks for advanced business sites, 4-8+ weeks for complex e-commerce and SaaS solutions.'
  },
  {
    question: 'Will I own the website after completion?',
    answer: 'Yes, you retain full ownership of all design files and code. I only retain rights to showcase the work in my portfolio. And I may ask for a testimonial.'
  },
  {
    question: 'Do you redesign existing websites?',
    answer: 'Absolutely. I analyze your current site and propose structural improvements along with visual redesign. Pricing starts at $1,200 for refreshes.'
  },
  {
    question: 'What about ongoing maintenance costs?',
    answer: 'I offer maintenance plans from $99/month covering updates, backups, security monitoring, and 1 hour of monthly edits.'
  },
  {
    question: 'Can you work with our existing design assets?',
    answer: 'Yes! I can implement your existing branding or create new designs from scratch. Providing style guides reduces development time/costs.'
  },
  {
    question: 'How do you handle content creation?',
    answer: 'I can: (1) Use your provided content, (2) Help refine existing content, or (3) Create professional copy at $150/page (recommended for SEO).'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'Modern stacks: Next.js, React, Vue, Tailwind CSS for frontend; Node.js, PHP/Laravel, WordPress, or headless CMS for backend. We match the tech to your needs.'
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'All sites include basic on-page SEO. Comprehensive SEO packages (keyword research, content optimization, backlinking) start at $1,250.'
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading bg-clip-text text-transparent bg-gradient-to-r from-white to-white mb-4">
            Website <span className="text-lime-400">Pricing FAQs</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Clear answers about my website development costs and process
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 text-left hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-100 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
