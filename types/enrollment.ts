export interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone?: string;
  courseId: string;
  courseTitle: string;
  preferredSchedule?: string;
  experienceLevel?: string;
  message?: string;
  website?: string; // Honeypot field
}

export interface EnrollmentApiResponse {
  success: boolean;
  message: string;
  enrollmentId?: string;
  nextSteps?: string[];
  errors?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ToastState {
  show: boolean;
  type: "success" | "error" | "";
  message: string;
}
