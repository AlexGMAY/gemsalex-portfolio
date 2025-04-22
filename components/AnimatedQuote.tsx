// import { useScroll, useTransform, motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import { twMerge } from "tailwind-merge";

// const text =
//   "I believe that every project deserves a thoughtful, innovative, and tailored approach. Whether you need a sleek website, a high-performing app, or a scalable software solution, I bring expertise and dedication to turn your ideas into reality.";
// const words = text.split(" ");

// const AnimatedQuote = () => {
//   const scrollTarget = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: scrollTarget,
//     offset: ["start end", "end end"],
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
//     <section className="py-24 relative overflow-hidden">
//       {/* Sticky Container */}
//       <div className="sticky top-20 lg:top-40 flex flex-col justify-center items-center">
//         <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full items-center text-sm uppercase font-semibold">
//           <span>&#10038;</span>
//           <span>Software Craftsmanship</span>
//         </div>
//         <div className="text-4xl md:text-6xl text-center font-medium mt-10">
//           <span className="">Innovation Starts with the Right Partner.</span>{" "}
//           <span className="">
//             {words.map((word, wordIndex) => (
//               <motion.span
//                 key={wordIndex}
//                 className={twMerge(
//                   "transition duration-500 text-neutral-700",
//                   wordIndex < currentWord && "text-yellow-500"
//                 )}
//               >
//                 {`${word} `}
//               </motion.span>
//             ))}
//           </span>
//           <span className="text-lime-400 font-semibold block">
//             That&apos;s why I serve you!{" "}
//           </span>
//         </div>
//       </div>

//       {/* Scroll Target */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-[200vh]"
//         ref={scrollTarget}
//       ></div>
//     </section>
//   );
// };

// export default AnimatedQuote;


import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "I believe that every project deserves a thoughtful, innovative, and tailored approach. Whether you need a sleek website, a high-performing app, or a scalable software solution, I bring expertise and dedication to turn your ideas into reality.";
const words = text.split(" ");

const AnimatedQuote = () => {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end center"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      // Round the latest value to the nearest integer
      const roundedIndex = Math.round(latest);
      setCurrentWord(roundedIndex);
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [wordIndex]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Sticky Container */}
      <div className="sticky top-20 lg:top-40 h-screen flex flex-col justify-center items-center">
        <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full items-center text-sm uppercase font-semibold">
          <span>&#10038;</span>
          <span>Software Craftsmanship</span>
        </div>
        <div className="text-4xl md:text-6xl text-center font-medium mt-10">
          <span className="">Innovation Starts with the Right Partner.</span>{" "}
          <span className="">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className={twMerge(
                  "transition duration-500 text-neutral-700",
                  wordIndex < currentWord &&
                    "bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent"
                )}
                style={{
                  opacity: wordIndex < currentWord ? 1 : 0.5, // Fade in as animation progresses
                }}
              >
                {`${word} `}
              </motion.span>
            ))}
          </span>
          <span className="text-lime-400 font-semibold block">
            That&apos;s why I serve you!{" "}
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