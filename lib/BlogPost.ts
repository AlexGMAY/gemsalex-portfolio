export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  slug: string;
  type?: "article" | "tutorial" | "resource";
  level?: "beginner" | "intermediate" | "advanced";
  learningPoints?: string[];
  category: string;
  featured?: boolean;
  views: number;
  progress?: number;
  comments?: number;
}

// export interface BlogPost {
//   id: string;
//   title: string;
//   excerpt: string;
//   date: string;
//   slug: string;
//   readTime: string;
//   tag: string;
//   category: string;
//   featured?: boolean;
//   views: number;
//   progress: number;
//   // Add any other fields you need
// }

// types/blog.d.ts or similar
// type BlogPost = {
//   id: string;
//   title: string;
//   excerpt: string;
//   slug: string;
//   content: string;       // Missing in your data
//   date: Date;
//   readTime: string;
//   tag: string[];        // You have 'tag' but type expects 'tags'
//   category: string;
//   image: string;         // Missing in your data
//   type: 'article' | 'tutorial' | 'guide'; // Example, adjust as needed
//   level: 'beginner' | 'intermediate' | 'advanced'; // Example
//   views: number;
//   progress?: number;
//   featured?: boolean;
// };
