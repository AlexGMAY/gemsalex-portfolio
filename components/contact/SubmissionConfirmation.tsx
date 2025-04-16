// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FiCheckCircle, FiDownload, FiLink } from "react-icons/fi";

// const SubmissionConfirmation = ({ caseNumber }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     return () => setIsVisible(false);
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
//         >
//           <motion.div
//             className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//           >
//             <div className="text-center mb-6">
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <FiCheckCircle className="text-green-400 text-6xl mx-auto" />
//               </motion.div>
//               <h3 className="text-2xl font-bold text-white mt-4">
//                 Message Sent!
//               </h3>
//               <p className="text-gray-400 mt-2">Case #{caseNumber}</p>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
//                 <h4 className="text-white font-medium flex items-center gap-2">
//                   <FiLink /> What happens next?
//                 </h4>
//                 <ul className="mt-2 space-y-2 text-gray-300 text-sm">
//                   <li>• You'll receive a confirmation email</li>
//                   <li>• Response within 24 hours</li>
//                   <li>• I may request a quick call</li>
//                 </ul>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <a
//                   href="/process.pdf"
//                   download
//                   className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
//                 >
//                   <FiDownload /> Process PDF
//                 </a>
//                 <a
//                   href="/portfolio"
//                   className="flex items-center justify-center gap-2 bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
//                 >
//                   View Portfolio
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };
