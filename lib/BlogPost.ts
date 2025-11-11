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
