import { z } from "zod";

// Enrollment form validation schema
export const enrollmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z.string().email("Please provide a valid email address"),

  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(
          val,
        ),
      {
        message: "Please provide a valid phone number",
      },
    ),

  courseId: z.string().min(1, "Course selection is required"),

  courseTitle: z.string().min(1, "Course title is required"),

  preferredSchedule: z
    .string()
    .max(200, "Schedule must be less than 200 characters")
    .optional(),

  experienceLevel: z
    .enum(["beginner", "intermediate", "advanced", "expert", ""])
    .optional(),

  message: z
    .string()
    .min(100, "Message must be at least 100 characters")
    .max(1000, "Message must be less than 1000 characters")
    .optional(),

  // Honeypot field - should be empty
  website: z.string().max(0, "Form submission rejected"),

  // CSRF token
  csrfToken: z.string().min(1, "CSRF token is required"),
});

export type EnrollmentFormInput = z.infer<typeof enrollmentSchema>;
