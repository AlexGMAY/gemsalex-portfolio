"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TwinklingStar({ size = 24 }: { size?: number }) {
  const [keyframes, setKeyframes] = useState([0, 0.3, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeyframes([
        Math.random() * 0.2,
        0.1 + Math.random() * 0.3,
        Math.random() * 0.2,
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-400 w-full h-full drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ opacity: keyframes }}
        transition={{ duration: 3 }}
        className="absolute inset-0 rounded-full bg-yellow-300 blur-md"
        style={{
          top: -size * 0.5,
          left: -size * 0.5,
          right: -size * 0.5,
          bottom: -size * 0.5,
        }}
      />
    </div>
  );
}

// components/ShiningStar.tsx
// "use client";
// import { motion } from "framer-motion";

// export function TwinklingStar({ size = 24 }: { size?: number }) {
//   return (
//     <div className="relative" style={{ width: size, height: size }}>
//       {/* Main star */}
//       <motion.div
//         animate={{
//           rotate: 360,
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute inset-0"
//       >
//         <svg
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="text-yellow-400 w-full h-full"
//         >
//           <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//         </svg>
//       </motion.div>

//       {/* Glow effect */}
//       <motion.div
//         animate={{
//           opacity: [0.2, 0.4, 0.2],
//           scale: [1, 1.5, 1],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className="absolute inset-0 rounded-full bg-yellow-300 blur-sm"
//         style={{
//           top: -size * 0.5,
//           left: -size * 0.5,
//           right: -size * 0.5,
//           bottom: -size * 0.5,
//         }}
//       />

//       {/* Light rays */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0, 0.3, 0] }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             delay: i * 0.2,
//           }}
//           className="absolute bg-yellow-200"
//           style={{
//             height: 2,
//             width: size * 2,
//             left: "50%",
//             top: "50%",
//             transformOrigin: "left center",
//             transform: `rotate(${i * 45}deg) translateX(${size * 0.5}px)`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

