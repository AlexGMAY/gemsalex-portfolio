import { z } from "zod";

export const partnershipSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z.string().email("Please provide a valid email address"),

  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),

  companySize: z.enum(["startup", "small", "medium", "enterprise", "agency"]),

  partnershipType: z.enum(["strategic", "technical", "commercial", "other"]),

  projectDescription: z
    .string()
    .min(20, "Project description must be at least 20 characters")
    .max(2000, "Project description must be less than 2000 characters"),

  timeline: z
    .string()
    .max(100, "Timeline must be less than 100 characters")
    .optional(),

  budget: z
    .string()
    .max(100, "Budget must be less than 100 characters")
    .optional(),

  // Honeypot field
  website: z.string().max(0, "Form submission rejected"),

  // CSRF token
  csrfToken: z.string().min(1, "CSRF token is required"),
});

export type PartnershipFormInput = z.infer<typeof partnershipSchema>;
