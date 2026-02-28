"use client";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: Props) {
  const [copied, setCopied] = useState(false);

  const code =
    typeof children === "string"
      ? children
      : ((children as any)?.props?.children ?? "");

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
}
