import { z } from "zod";

export const pricingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z.string().email("Please provide a valid email address"),

  projectDetails: z
    .string()
    .min(10, "Project details must be at least 10 characters")
    .max(2000, "Project details must be less than 2000 characters"),

  serviceId: z.string().min(1, "Service selection is required"),
  serviceTitle: z.string().min(1, "Service title is required"),
  basePrice: z.number().min(0, "Base price must be positive"),
  currency: z.enum(["USD", "TND"]),
  totalAmount: z.number().min(0, "Total amount must be positive"),

  selectedFeatures: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      category: z.string(),
    })
  ),

  // Honeypot field
  website: z.string().max(0, "Form submission rejected"),

  // CSRF token
  csrfToken: z.string().min(1, "CSRF token is required"),
});

export type PricingFormInput = z.infer<typeof pricingSchema>;
