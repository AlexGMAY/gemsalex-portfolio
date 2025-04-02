import { ReactNode } from "react";

export interface ProductTimelineItem {
  date: string;
  milestone: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  stage: string;
  progress: number;
  image: string;
  details: string[];
  timeline: ProductTimelineItem[];
  iconName: string; // Changed from ReactNode to string
  iconColor: string;
  category: string;
  specs?: Record<string, string>;
  team?: Array<{
    name: string;
    role: string;
    avatar?: string;
  }>;
}

export interface ProductsByCategory {
  [category: string]: Product[];
}
