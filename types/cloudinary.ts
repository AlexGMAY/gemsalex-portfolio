export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  resource_type: "image" | "video";
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
  tags: string[];
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
      duration?: string;
    };
  };
  // Add these optional properties to match Cloudinary's response
  asset_id?: string;
  version?: number;
  type?: string;
  placeholder?: boolean;
  url?: string;
  // Allow any other properties
  [key: string]: any;
}

export interface CloudinaryApiResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
  rate_limit_allowed?: number;
  rate_limit_reset_at?: string;
  rate_limit_remaining?: number;
}

export interface GallerySections {
  imagesVideos: CloudinaryResource[];
  students: CloudinaryResource[];
  family: CloudinaryResource[];
  memories: CloudinaryResource[];
}

export interface StudentResource extends CloudinaryResource {
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
      studentName?: string;
      courseName?: string;
      subject?: "english" | "web-dev" | "ms-365";
      level?: "beginner" | "intermediate" | "advanced";
      progress?: string;
    };
  };
}

export interface FamilyResource extends CloudinaryResource {
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
      memberName?: string;
      relationship?: string;
      role?: string;
      description?: string;
    };
  };
}

export interface MemoryResource extends CloudinaryResource {
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
      memoryTitle?: string;
      memoryDate?: string;
      location?: string;
      description?: string;
      featured?: boolean;
      duration?: string;
    };
  };
}