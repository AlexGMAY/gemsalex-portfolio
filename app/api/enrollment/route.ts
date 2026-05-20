import { NextRequest, NextResponse } from "next/server";
import { enrollmentSchema, EnrollmentFormInput } from "@/lib/validations/enrollment-schemas";
import { validateCsrfToken, checkRateLimit } from "@/lib/utils/security";
import {
  sendEnrollmentUserEmail,
  sendEnrollmentAdminEmail,
} from "@/lib/utils/enrollment-email";
import { EnrollmentApiResponse, EnrollmentFormData } from "@/types/enrollment";

export async function POST(
  request: NextRequest,
): Promise<NextResponse<EnrollmentApiResponse>> {
  try {
    const body = await request.json();
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting check
    const rateLimitKey = `enrollment:${clientIP}`;
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many enrollment requests. Please try again in 15 minutes.",
        },
        { status: 429 },
      );
    }

    // Get CSRF token from cookie
    const csrfTokenCookie = request.cookies.get("csrf-token");
    const submittedCsrfToken = body.csrfToken;

    // Validate CSRF token
    if (!validateCsrfToken(submittedCsrfToken, csrfTokenCookie?.value)) {
      return NextResponse.json(
        { success: false, message: "Invalid CSRF token" },
        { status: 403 },
      );
    }

    // Validate form data
    const validationResult = await enrollmentSchema.safeParseAsync(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((issue) => ({
        field: issue.path[0] as string,
        message: issue.message,
      }));

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        { status: 400 },
      );
    }

    const formData: EnrollmentFormInput = validationResult.data;

    // Generate enrollment ID
    const enrollmentId = `ENR-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

    // Determine next steps based on course category
    const nextSteps = getNextSteps(formData.courseTitle);

    // Send emails
    await Promise.all([
      sendEnrollmentUserEmail(formData as EnrollmentFormData, enrollmentId),
      sendEnrollmentAdminEmail(formData as EnrollmentFormData, clientIP, enrollmentId),
    ]);

    // Log successful submission
    console.log(
      `Enrollment form submitted: ${formData.email} | Course: ${formData.courseTitle} | ID: ${enrollmentId}`,
    );

    return NextResponse.json({
      success: true,
      message:
        "Enrollment request submitted successfully! We will contact you within 24 hours with a personalized quote and course details.",
      enrollmentId,
      nextSteps,
    });
  } catch (error) {
    console.error("Enrollment form error:", error);

    let errorMessage =
      "An error occurred while submitting your enrollment request. Please try again later.";

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
      { status: 500 },
    );
  }
}

function getNextSteps(courseTitle: string): string[] {
  // Default next steps for all courses
  const steps: Record<string, string[]> = {
    default: [
      "Course requirements analysis",
      "Personalized learning path creation",
      "Schedule alignment discussion",
      "Enrollment confirmation & payment setup",
    ],
  };

  // You can add specific steps for specific courses
  const courseSpecificSteps: Record<string, string[]> = {
    "Web Development": [
      "Technology stack assessment",
      "Project portfolio planning",
      "Development environment setup",
      "Weekly milestone scheduling",
    ],
    "VBA Automation": [
      "Excel workflow audit",
      "Automation opportunity analysis",
      "Custom macro development plan",
      "Training material preparation",
    ],
  };

  return courseSpecificSteps[courseTitle] || steps.default;
}
