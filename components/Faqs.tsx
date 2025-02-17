// import React from 'react'

// const Faqs = () => {
//   return (
//     <section className="py-20">
//       <div className="container">
//         <h2 className='heading font-medium'>
//           Frequently Asked <span className='text-lime-400'>Interview</span> Questions
//         </h2>
//         <p className='text-xl text-center text-neutral-300 mt-6'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
//           quam aut recusandae sequi quasi dolore, excepturi dignissimos iusto
//           dolorem!
//         </p>
//         <div className="wrapper">
//           <div className="vid-presentation"></div>
//           <div className="faiqs"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Faqs

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is your full name?",
    answer: "My name is Merveille Alexander.",
  },
  {
    question: "Where are you based?",
    answer: "I am based in [Your Location].",
  },
  {
    question: "What are your main strengths?",
    answer: "I am detail-oriented, proactive, and a quick learner.",
  },
  {
    question: "What do you enjoy outside of work?",
    answer: "I enjoy coding, reading, and outdoor activities.",
  },
  {
    question: "What is your preferred work environment?",
    answer: "I thrive in collaborative and innovative environments.",
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
      "I stay organized, take breaks when needed, and focus on solutions.",
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

const AccordionItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center text-left p-4 bg-gray-800 hover:bg-gray-700 text-lime-400 font-semibold"
        onClick={toggle}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="text-lime-400" />
        ) : (
          <ChevronDown className="text-lime-400" />
        )}
      </button>
      {isOpen && <p className="p-4 text-neutral-300 bg-gray-900">{answer}</p>}
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
        <h2 className="text-3xl font-semibold text-center">
          Get to Know <span className="text-lime-400">Me</span>
        </h2>
        <p className="text-xl text-center text-neutral-400 mt-4">
          Frequently asked <span className="text-lime-400">Interview</span> questions so you can get to know me better.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Video Presentation */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-full"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-black-300 rounded-lg shadow-md">
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
