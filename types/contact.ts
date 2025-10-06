export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType: "general" | "freelance" | "collaboration" | "other";
  budget: string;
  urgency: "low" | "standard" | "urgent";
  website: string; // Honeypot field
}

export interface ApiResponse {
  success: boolean;
  message: string;
  responseTime?: string;
  errors?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface CsrfResponse {
  csrfToken: string;
}

export interface ToastState {
  show: boolean;
  type: "success" | "error" | "";
  message: string;
}
