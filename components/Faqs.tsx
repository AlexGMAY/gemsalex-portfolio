import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  
  {
    question: "Where are you based?",
    answer: "I am based in Tunis, Tunisia.",
  },
  {
    question: "What are your main strengths?",
    answer: "I am detail-oriented, proactive, and a quick learner.",
  },
  {
    question: "What do you enjoy outside of work?",
    answer: "I enjoy exercizing, reading, and outdoor activities.",
  },
  {
    question: "What is your preferred work environment?",
    answer: "I thrive in both remote(freelance) and collaborative and innovative environments (Hybrid).",
  },
  {
    question: "How do you handle deadlines?",
    answer:
      "I prioritize tasks effectively and communicate openly to meet deadlines.",
  },
  {
    question: "What motivates you?",
    answer:
      "I am motivated by solving complex problems and continuous learning.",
  },
  {
    question: "How do you handle stress?",
    answer:
      "I meditate, take breaks when needed to be inspired, and focus on solutions.",
  },
  {
    question: "What is your approach to teamwork?",
    answer:
      "I believe in clear communication, mutual respect, and collaboration.",
  },
  {
    question: "Where do you see yourself in five years?",
    answer:
      "I see myself growing in my career and taking on leadership responsibilities.",
  },
];

// const AccordionItem = ({ question, answer, isOpen, toggle }) => {
//   return (
//     <div className="border-b border-lime-700">
//       <button
//         className="w-full flex justify-between items-center text-left p-4 bg-black-300 hover:bg-gray-700 text-lime-400 font-semibold"
//         onClick={toggle}
//       >
//         <span>{question}</span>
//         {isOpen ? (
//           <ChevronUp className="text-lime-400" />
//         ) : (
//           <ChevronDown className="text-lime-400" />
//         )}
//       </button>
//       {isOpen && <p className="p-4 text-neutral-300 bg-gray-900">{answer}</p>}
//     </div>
//   );
// };
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black-100 text-white">
      <div className="container mx-auto px-6">
        <h2 className="heading font-semibold text-center">
          Get to Know{" "}
          <span className="bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-xl text-center text-neutral-400 mt-4">
          Frequently asked <span className="text-lime-400">Interview</span>{" "}
          questions so you can get to know me better.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Video Presentation */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="w-full md:h-full border border-3xl border-lime-500 bg-gray-800 rounded-3xl p-2">
              <img
                src="/cute-alex.jpg"
                alt="Merveille Alexander"
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
