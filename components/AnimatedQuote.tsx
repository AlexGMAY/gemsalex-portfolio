// "use client";

// import { useScroll, useTransform, motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import { twMerge } from "tailwind-merge";

// const text =
//   "Your business deserves technology that drives growth, not just code that meets specifications. Whether you need to automate manual processes, scale your digital infrastructure, or create a competitive advantage through custom software, I deliver solutions that generate measurable ROI and operational efficiency.";
// const words = text.split(" ");

// const AnimatedQuote = () => {
//   const scrollTarget = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: scrollTarget,
//     offset: ["start start", "end center"],
//   });

//   const [currentWord, setCurrentWord] = useState(0);
//   const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

//   useEffect(() => {
//     const unsubscribe = wordIndex.on("change", (latest) => {
//       // Round the latest value to the nearest integer
//       const roundedIndex = Math.round(latest);
//       setCurrentWord(roundedIndex);
//     });

//     return () => unsubscribe(); // Cleanup the listener
//   }, [wordIndex]);

//   return (
//     <section className="py-24 relative hidden md:block">
//       {/* Sticky Container */}
//       <div className="sticky top-20 lg:top-40 h-screen flex flex-col justify-center items-center">
//         <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full items-center text-sm uppercase font-semibold">
//           <span>&#10038;</span>
//           <span>Strategic Software Craftsmanship</span>
//         </div>
//         <div className="text-4xl md:text-6xl text-center font-medium mt-10">
//           <span className="">Your Competitive Advantage Starts Here.</span>{" "}
//           <span className="">
//             {words.map((word, wordIndex) => (
//               <motion.span
//                 key={wordIndex}
//                 className={twMerge(
//                   "transition duration-500 text-neutral-300",
//                   wordIndex < currentWord &&
//                     "bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent",
//                 )}
//                 style={{
//                   opacity: wordIndex < currentWord ? 1 : 0.5, // Fade in as animation progresses
//                 }}
//               >
//                 {`${word} `}
//               </motion.span>
//             ))}
//           </span>
//           <span className="text-lime-400 font-semibold block">
//             Let&apos;s Build Your Success Story!{" "}
//           </span>
//         </div>
//       </div>

//       {/* Hidden Scroll Target */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-[180vh]"
//         ref={scrollTarget}
//       ></div>
//     </section>
//   );
// };

// export default AnimatedQuote;

"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/LanguageContext";

const AnimatedQuote = () => {
  const { isFrench } = useLanguage();

  const text = isFrench
    ? "Votre entreprise mérite une technologie qui stimule la croissance, pas seulement du code qui répond aux spécifications. Que vous ayez besoin d'automatiser des processus manuels, de faire évoluer votre infrastructure numérique, ou de créer un avantage concurrentiel grâce à un logiciel sur mesure, je livre des solutions qui génèrent un ROI mesurable et une efficacité opérationnelle."
    : "Your business deserves technology that drives growth, not just code that meets specifications. Whether you need to automate manual processes, scale your digital infrastructure, or create a competitive advantage through custom software, I deliver solutions that generate measurable ROI and operational efficiency.";

  const words = text.split(" ");

  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end center"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      const roundedIndex = Math.round(latest);
      setCurrentWord(roundedIndex);
    });

    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-24 relative hidden md:block">
      {/* Sticky Container */}
      <div className="sticky top-20 lg:top-40 h-screen flex flex-col justify-center items-center px-6">
        {/* Eyebrow badge */}
        <div className="inline-flex border border-lime-400/30 gap-2 text-lime-400 px-5 py-2 rounded-full items-center text-sm uppercase font-semibold bg-lime-400/5 mb-8">
          <span className="text-lime-400">✦</span>
          <span>
            {isFrench
              ? "Artisanat Logiciel Stratégique"
              : "Strategic Software Craftsmanship"}
          </span>
        </div>

        <div className="text-4xl md:text-6xl text-center font-medium mt-6 max-w-5xl">
          <span className="block text-white mb-8">
            {isFrench
              ? "Votre Avantage Concurrentiel Commence Ici."
              : "Your Competitive Advantage Starts Here."}
          </span>

          <span className="block leading-relaxed">
            {words.map((word, wordIdx) => (
              <motion.span
                key={wordIdx}
                className={twMerge(
                  "transition duration-500 text-neutral-400",
                  wordIdx < currentWord &&
                    "bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent font-semibold",
                )}
                style={{
                  opacity: wordIdx < currentWord ? 1 : 0.4,
                }}
              >
                {`${word} `}
              </motion.span>
            ))}
          </span>

          <span className="text-lime-400 font-bold block mt-8 text-2xl md:text-3xl">
            {isFrench
              ? "Construisons Votre Success Story !"
              : "Let's Build Your Success Story!"}
          </span>
        </div>
      </div>

      {/* Hidden Scroll Target */}
      <div
        className="absolute bottom-0 left-0 w-full h-[180vh]"
        ref={scrollTarget}
      ></div>
    </section>
  );
};

export default AnimatedQuote;
