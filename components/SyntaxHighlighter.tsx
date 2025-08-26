
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  tomorrow,
  prism,
  materialDark,
  materialLight,
  darcula,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "next-themes";

interface SyntaxHighlighterProps {
  language: string;
  children: string;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  className?: string;
}

export default function CustomSyntaxHighlighter({
  language,
  children,
  showLineNumbers = true,
  wrapLines = true,
  className,
  ...props
}: SyntaxHighlighterProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  // Choose style based on theme
  const style = theme === "dark" ? atomDark : tomorrow;
    

  return (
  
    <div className="relative">
        <button
            onClick={() => {
            navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            }}
            className="absolute right-2 top-2 p-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Copy code"
        >
           {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
        </button>

       <SyntaxHighlighter
            language={language}
            style={style}
            customStyle={{
                margin: "1.5rem 0",
                borderRadius: "0.5rem",
                padding: "1.25rem",
                fontSize: "0.9rem",
                lineHeight: "1.5",
                backgroundColor: theme === "dark" ? "#1e1e1e" : "#f5f5f5",
            }}
            lineNumberStyle={{
                minWidth: "2.25em",
                color: theme === "dark" ? "#6e7681" : "#999",
            }}
            showLineNumbers={showLineNumbers}
            wrapLines={wrapLines}
            wrapLongLines={wrapLines}
            lineProps={{
                style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
                },
            }}
            {...props}
            >
            {children}
        </SyntaxHighlighter>
    </div>    
  );
}
