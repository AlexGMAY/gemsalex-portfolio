import { z } from "zod";

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z.string().email("Please provide a valid email address"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),

  projectType: z.enum(["general", "freelance", "collaboration", "other"]),

  urgency: z.enum(["low", "standard", "urgent"]),

  budget: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\$?[\d,]+(\.\d{2})?(-\$?[\d,]+(\.\d{2})?)?$/.test(val),
      {
        message: "Please provide a valid budget range",
      }
    ),

  // Honeypot field - should be empty
  website: z.string().max(0, "Form submission rejected"),

  // CSRF token
  csrfToken: z.string().min(1, "CSRF token is required"),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
