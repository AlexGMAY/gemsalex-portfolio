// "use client"

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import Image from "next/image";

// const faqs = [
//   {
//     question: "What's your process for understanding my business needs?",
//     answer:
//       "I start with a deep discovery session to understand your unique challenges, goals, and target audience before writing a single line of code.",
//   },
//   {
//     question: "How do you ensure projects stay on budget and timeline?",
//     answer:
//       "I provide fixed-scope proposals with transparent pricing and weekly progress updates, so you always know exactly where we stand.",
//   },
//   {
//     question: "What happens after my project launches?",
//     answer:
//       "I offer ongoing support and maintenance to ensure your solution continues to perform and scale with your business growth.",
//   },
//   {
//     question: "Do you work with non-technical founders?",
//     answer:
//       "Absolutely! I specialize in translating business vision into technical solutions, making the process clear and collaborative.",
//   },
//   {
//     question: "How do you handle revisions and changes during development?",
//     answer:
//       "I build flexibility into every project with clear revision cycles, ensuring we adapt to your evolving needs without compromising quality.",
//   },
//   {
//     question: "What makes your approach different from other developers?",
//     answer:
//       "I focus on business outcomes, not just code. Every solution is designed to drive growth, efficiency, and competitive advantage.",
//   },
//   {
//     question: "How do you ensure quality and performance?",
//     answer:
//       "I implement rigorous testing, performance optimization, and follow industry best practices to deliver reliable, high-performing applications.",
//   },
//   {
//     question: "What industries do you specialize in?",
//     answer:
//       "I've delivered successful projects across SaaS, e-commerce, marketing tech, and business automation platforms.",
//   },
//   {
//     question: "How quickly can we get started?",
//     answer:
//       "I typically begin new projects within 1-2 weeks after our initial strategy session and agreement.",
//   },
// ];

// interface AccordionItemProps {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   toggle: () => void;
// }
// const AccordionItem: React.FC<AccordionItemProps> = ({
//   question,
//   answer,
//   isOpen,
//   toggle,
// }) => {
//   return (
//     <div className="border-b border-lime-700">
//       <button
//         className="w-full flex justify-between items-center text-left px-5 py-4 bg-black-200 hover:bg-gray-700 text-white-400 font-semibold border border-lime-300 transition-all duration-300 uppercase"
//         onClick={toggle}
//       >
//         <span>{question}</span>
//         {isOpen ? (
//           <ChevronUp className="text-lime-400 transition-all duration-300" />
//         ) : (
//           <ChevronDown className="text-yellow-400 transition-all duration-300" />
//         )}
//       </button>

//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className="overflow-hidden"
//       >
//         <p className="px-5 py-3 text-neutral-300 bg-gray-900 border-t border-yellow-500">
//           {answer}
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// const Faqs = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 bg-black-100 text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="heading font-semibold text-center">
//           Your Questions{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
//             Answered
//           </span>
//         </h2>
//         <p className="text-xl text-center text-neutral-400 mt-4">
//           Clear answers about how we&apos;ll work together to achieve{" "}
//           <span className="text-lime-400">your business goals</span>.
//         </p>

//         <div className="grid lg:grid-cols-2 gap-10 mt-10">
//           {/* Video Presentation */}
//           {/* <div className="rounded-xl overflow-hidden">
//             <div className="w-full aspect-square md:aspect-video border-2 border-lime-500 bg-gray-800 rounded-3xl p-2 relative">
//               <Image
//                 src="/cute-alex.jpg"
//                 alt="Merveille Alexander - Strategic Software developer Partner"
//                 className="p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg object-cover"
//                 // fill
//                 // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//                 width={600}
//                 height={1200}
//               />
//             </div>
//           </div> */}
//           <div className="rounded-xl overflow-hidden max-w-2xl mx-auto">
//             {" "}
//             {/* Added max-width and margin */}
//             <div className="w-full h-auto border-2 border-lime-500 bg-gray-800 rounded-3xl p-2">
//               <Image
//                 src="/cute-alex.jpg"
//                 alt="Merveille Alexander - Strategic Software Partner"
//                 className="w-full h-auto p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg"
//                 width={800}
//                 height={1200}
//                 priority
//               />
//             </div>
//           </div>

//           {/* FAQs Accordion */}
//           <div className="rounded-lg shadow-md flex flex-col gap-4">
//             {faqs.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 question={faq.question}
//                 answer={faq.answer}
//                 isOpen={openIndex === index}
//                 toggle={() => toggleAccordion(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faqs;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Faqs = () => {
  const { isFrench } = useLanguage();

  const faqs = [
    {
      question: isFrench
        ? "Quel est votre processus pour comprendre mes besoins business ?"
        : "What's your process for understanding my business needs?",
      answer: isFrench
        ? "Je commence par une session de découverte approfondie pour comprendre vos défis uniques, vos objectifs et votre public cible avant d'écrire une seule ligne de code."
        : "I start with a deep discovery session to understand your unique challenges, goals, and target audience before writing a single line of code.",
    },
    {
      question: isFrench
        ? "Comment garantissez-vous le respect du budget et des délais ?"
        : "How do you ensure projects stay on budget and timeline?",
      answer: isFrench
        ? "Je fournis des propositions à périmètre fixe avec des prix transparents et des mises à jour hebdomadaires, pour que vous sachiez toujours exactement où nous en sommes."
        : "I provide fixed-scope proposals with transparent pricing and weekly progress updates, so you always know exactly where we stand.",
    },
    {
      question: isFrench
        ? "Que se passe-t-il après le lancement de mon projet ?"
        : "What happens after my project launches?",
      answer: isFrench
        ? "J'offre un support et une maintenance continus pour garantir que votre solution continue de performer et d'évoluer avec votre croissance."
        : "I offer ongoing support and maintenance to ensure your solution continues to perform and scale with your business growth.",
    },
    {
      question: isFrench
        ? "Travaillez-vous avec des fondateurs non techniques ?"
        : "Do you work with non-technical founders?",
      answer: isFrench
        ? "Absolument ! Je suis spécialisé dans la traduction de la vision business en solutions techniques, rendant le processus clair et collaboratif."
        : "Absolutely! I specialize in translating business vision into technical solutions, making the process clear and collaborative.",
    },
    {
      question: isFrench
        ? "Comment gérez-vous les révisions et changements pendant le développement ?"
        : "How do you handle revisions and changes during development?",
      answer: isFrench
        ? "J'intègre de la flexibilité dans chaque projet avec des cycles de révision clairs, garantissant que nous nous adaptons à vos besoins évolutifs sans compromettre la qualité."
        : "I build flexibility into every project with clear revision cycles, ensuring we adapt to your evolving needs without compromising quality.",
    },
    {
      question: isFrench
        ? "Qu'est-ce qui rend votre approche différente des autres développeurs ?"
        : "What makes your approach different from other developers?",
      answer: isFrench
        ? "Je me concentre sur les résultats business, pas seulement le code. Chaque solution est conçue pour stimuler la croissance, l'efficacité et l'avantage concurrentiel."
        : "I focus on business outcomes, not just code. Every solution is designed to drive growth, efficiency, and competitive advantage.",
    },
    {
      question: isFrench
        ? "Comment garantissez-vous la qualité et la performance ?"
        : "How do you ensure quality and performance?",
      answer: isFrench
        ? "J'implémente des tests rigoureux, l'optimisation des performances et je suis les meilleures pratiques de l'industrie pour livrer des applications fiables et performantes."
        : "I implement rigorous testing, performance optimization, and follow industry best practices to deliver reliable, high-performing applications.",
    },
    {
      question: isFrench
        ? "Dans quels secteurs êtes-vous spécialisé ?"
        : "What industries do you specialize in?",
      answer: isFrench
        ? "J'ai livré des projets réussis dans le SaaS, l'e-commerce, la tech marketing et les plateformes d'automatisation business."
        : "I've delivered successful projects across SaaS, e-commerce, marketing tech, and business automation platforms.",
    },
    {
      question: isFrench
        ? "À quelle vitesse pouvons-nous commencer ?"
        : "How quickly can we get started?",
      answer: isFrench
        ? "Je commence généralement les nouveaux projets 1 à 2 semaines après notre session de stratégie initiale et l'accord."
        : "I typically begin new projects within 1-2 weeks after our initial strategy session and agreement.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <div className="border-b border-lime-700/30">
        <button
          className="w-full flex justify-between items-center text-left px-5 py-4 bg-black-200 hover:bg-gray-700/50 text-white font-semibold border border-lime-300/20 hover:border-lime-300/40 transition-all duration-300 rounded-lg"
          onClick={toggle}
        >
          <span className="text-sm md:text-base">{question}</span>
          {isOpen ? (
            <ChevronUp className="text-lime-400 transition-all duration-300 flex-shrink-0" />
          ) : (
            <ChevronDown className="text-yellow-400 transition-all duration-300 flex-shrink-0" />
          )}
        </button>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="px-5 py-4 text-neutral-300 bg-gray-900/50 border-t border-yellow-500/20 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-black-100 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-300/10 border border-blue-300/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200 tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <h2 className="heading font-semibold text-center">
            {isFrench ? "Vos Questions" : "Your Questions"}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              {isFrench ? "Répondues" : "Answered"}
            </span>
          </h2>
          <p className="text-xl text-center text-neutral-400 mt-4">
            {isFrench
              ? "Des réponses claires sur notre collaboration pour atteindre"
              : "Clear answers about how we'll work together to achieve"}{" "}
            <span className="text-lime-400">
              {isFrench ? "vos objectifs business" : "your business goals"}
            </span>
            .
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-10 items-start">
          <div className="rounded-xl overflow-hidden max-w-2xl mx-auto lg:sticky lg:top-24">
            <div className="w-full h-auto border-2 border-lime-500/30 bg-gray-800 rounded-3xl p-2">
              <Image
                src="/cute-alex.jpg"
                alt="Merveille Alexander - Strategic Software Partner"
                className="w-full h-auto p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg"
                width={800}
                height={1200}
                priority
              />
            </div>
          </div>

          <div className="rounded-lg shadow-md flex flex-col gap-3">
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
