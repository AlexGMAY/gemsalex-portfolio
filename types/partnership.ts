export interface PartnershipFormData {
  name: string;
  email: string;
  company: string;
  companySize: "startup" | "small" | "medium" | "enterprise" | "agency";
  partnershipType: "strategic" | "technical" | "commercial" | "other";
  projectDescription: string;
  timeline: string;
  budget: string;
  website?: string; // Honeypot field
}

export interface PartnershipApiResponse {
  success: boolean;
  message: string;
  partnershipId?: string;
  nextSteps?: string[];
  errors?: PartnershipValidationError[];
}

export interface PartnershipValidationError {
  field: string;
  message: string;
}

export interface ToastState {
  show: boolean;
  type: "success" | "error" | "";
  message: string;
}

export interface CsrfResponse {
  csrfToken: string;
}
