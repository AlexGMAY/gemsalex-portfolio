// components/blog/BlogPostContent.tsx
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import CustomSyntaxHighlighter from "@/components/SyntaxHighlighter";
import "highlight.js/styles/github-dark.css";

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <section className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm dark:prose-code:bg-gray-800">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CustomSyntaxHighlighter
                language={match[1]}
                showLineNumbers
                wrapLines
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </CustomSyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          img({ src, alt }) {
            return (
              <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={src || ""}
                  alt={alt || ""}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {alt && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    {alt}
                  </p>
                )}
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
}
