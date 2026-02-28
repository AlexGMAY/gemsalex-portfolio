"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

function extractText(children: any): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children?.props?.children) return extractText(children.props.children);
  return "";
}

export function PreBlock({ children, ...props }: any) {
  const [copied, setCopied] = useState(false);

  const codeText = extractText(children);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-8 rounded-xl border border-gray-700 bg-gray-900 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400">Code</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition"
        >
          {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto text-sm">{children}</pre>
    </div>
  );
}
