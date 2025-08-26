import { formatDate } from "@/lib/utils";

interface BlogPostHeaderProps {
  title: string;
  date: string | Date;
  readTime?: string;
  category?: string;
  tags?: string[];
}

export default function BlogPostHeader({
  title,
  date,
  readTime,
  category,
  tags,
}: BlogPostHeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-2 text-sm mb-4">
        {category && (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            {category}
          </span>
        )}
        <time dateTime={new Date(date).toISOString()} className="text-gray-500">
          {formatDate(date)}
        </time>
        {readTime && <span className="text-gray-500">• {readTime}</span>}
      </div>
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
