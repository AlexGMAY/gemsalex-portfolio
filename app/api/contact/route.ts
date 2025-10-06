import { NextRequest, NextResponse } from "next/server";
import { contactSchema, ContactFormInput } from "@/lib/validations/schemas";
import { validateCsrfToken, checkRateLimit } from "@/lib/utils/security";
import {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} from "@/lib/utils/email";
import { ApiResponse, ContactFormData } from "@/types/contact";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting check
    const rateLimitKey = `contact:${clientIP}`;
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many contact attempts. Please try again in 15 minutes.",
        },
        { status: 429 }
      );
    }

    // Get CSRF token from cookie
    const csrfTokenCookie = request.cookies.get("csrf-token");
    const submittedCsrfToken = body.csrfToken;

    // Validate CSRF token
    if (!validateCsrfToken(submittedCsrfToken, csrfTokenCookie?.value)) {
      return NextResponse.json(
        { success: false, message: "Invalid CSRF token" },
        { status: 403 }
      );
    }

    // Validate form data
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => ({
        field: err.path[0] as string,
        message: err.message,
      }));

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        { status: 400 }
      );
    }

    const formData: ContactFormInput = validationResult.data;

    // Send emails using Resend
    await Promise.all([
      sendUserConfirmationEmail(formData as ContactFormData),
      sendAdminNotificationEmail(formData as ContactFormData, clientIP),
    ]);

    // Log successful submission
    console.log(
      `Contact form submitted: ${formData.email} from IP: ${clientIP}`
    );

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      responseTime: getExpectedResponseTime(formData),
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Provide more specific error messages for Resend errors
    let errorMessage =
      "An error occurred while sending your message. Please try again later.";

    if (error instanceof Error) {
      if (error.message.includes("Failed to send")) {
        errorMessage =
          "Email service temporarily unavailable. Please try again in a few minutes.";
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

function getExpectedResponseTime(formData: ContactFormInput): string {
  if (formData.urgency === "urgent") return "1-4 hours";
  if (formData.projectType === "freelance") return "12-24 hours";
  return "24-48 hours";
}
