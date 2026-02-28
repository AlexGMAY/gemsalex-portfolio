"use client";

import { useState } from "react";

export function MarkdownComponents() {
  return {
    pre({ children }: any) {
      const [copied, setCopied] = useState(false);

      const code = children?.props?.children ?? "";

      const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      return (
        <div className="relative group">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 text-xs px-3 py-1 rounded bg-gray-800 text-gray-300 opacity-0 group-hover:opacity-100 transition"
          >
            {copied ? "Copied" : "Copy"}
          </button>

          <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto border border-gray-700">
            {children}
          </pre>
        </div>
      );
    },
  };
}


//   const MarkdownComponents: any = {
//     h1: ({ children, ...props }: any) => (
//       <h1 className="text-4xl font-bold mt-12 mb-6 text-white" {...props}>
//         {children}
//       </h1>
//     ),
//     h2: ({ children, ...props }: any) => (
//       <h2 className="text-3xl font-bold mt-10 mb-4 text-white" {...props}>
//         {children}
//       </h2>
//     ),
//     h3: ({ children, ...props }: any) => (
//       <h3 className="text-2xl font-bold mt-8 mb-3 text-white" {...props}>
//         {children}
//       </h3>
//     ),
//     p: ({ children, ...props }: any) => (
//       <p className="text-lg leading-relaxed mb-6 text-gray-300" {...props}>
//         {children}
//       </p>
//     ),
//     code: ({ node, inline, className, children, ...props }: any) => {
//       if (inline) {
//         return (
//           <code
//             className="bg-gray-800 px-2 py-1 rounded text-sm text-cyan-300"
//             {...props}
//           >
//             {children}
//           </code>
//         );
//       }
//       return (
//         <code className={className} {...props}>
//           {children}
//         </code>
//       );
//     },
//     pre: ({ children, ...props }: any) => (
//       <pre
//         className="bg-gray-900 rounded-xl p-6 overflow-x-auto my-6 border border-gray-700"
//         {...props}
//       >
//         {children}
//       </pre>
//     ),
//     blockquote: ({ children, ...props }: any) => (
//       <blockquote
//         className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-500/5 italic text-gray-300"
//         {...props}
//       >
//         {children}
//       </blockquote>
//     ),
//     ul: ({ children, ...props }: any) => (
//       <ul
//         className="list-disc list-inside space-y-2 mb-6 text-gray-300"
//         {...props}
//       >
//         {children}
//       </ul>
//     ),
//     ol: ({ children, ...props }: any) => (
//       <ol
//         className="list-decimal list-inside space-y-2 mb-6 text-gray-300"
//         {...props}
//       >
//         {children}
//       </ol>
//     ),
//     li: ({ children, ...props }: any) => (
//       <li className="text-lg leading-relaxed" {...props}>
//         {children}
//       </li>
//     ),
//     a: ({ children, ...props }: any) => (
//       <a
//         className="text-blue-400 hover:text-blue-300 underline transition-colors"
//         {...props}
//       >
//         {children}
//       </a>
//     ),
//     strong: ({ children, ...props }: any) => (
//       <strong className="font-bold text-white" {...props}>
//         {children}
//       </strong>
//     ),
//   };