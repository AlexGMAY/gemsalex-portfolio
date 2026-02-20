import { NextRequest, NextResponse } from "next/server";
import {
  partnershipSchema,
  PartnershipFormInput,
} from "@/lib/validations/partnership-schemas";
import { validateCsrfToken, checkRateLimit } from "@/lib/utils/security";
import {
  PartnershipApiResponse,
  PartnershipFormData,
} from "@/types/partnership";
import {
  sendPartnershipUserEmail,
  sendPartnershipAdminEmail,
} from "@/lib/utils/partnership-email";

export async function POST(
  request: NextRequest,
): Promise<NextResponse<PartnershipApiResponse>> {
  try {
    const body = await request.json();
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting check
    const rateLimitKey = `partnership:${clientIP}`;
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many partnership requests. Please try again in 15 minutes.",
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
    const validationResult = await partnershipSchema.safeParseAsync(body);

    if (!validationResult.success) {
      // FIXED: Use 'issues' instead of 'errors'
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

    const formData: PartnershipFormInput = validationResult.data;

    // Generate partnership ID
    const partnershipId = `PART-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8) // Use substring instead of substr (deprecated)
      .toUpperCase()}`;

    // Determine next steps based on partnership type
    const nextSteps = getNextSteps(formData.partnershipType);

    // Send emails
    await Promise.all([
      sendPartnershipUserEmail(formData as PartnershipFormData),
      sendPartnershipAdminEmail(formData as PartnershipFormData, clientIP),
    ]);

    // Log successful submission
    console.log(
      `Partnership form submitted: ${formData.email} | Company: ${formData.company} | Type: ${formData.partnershipType}`,
    );

    return NextResponse.json({
      success: true,
      message:
        "Partnership request submitted successfully! We will contact you within 24 hours to discuss collaboration opportunities.",
      partnershipId,
      nextSteps,
    });
  } catch (error) {
    console.error("Partnership form error:", error);

    let errorMessage =
      "An error occurred while submitting your partnership request. Please try again later.";

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

function getNextSteps(partnershipType: string): string[] {
  const steps: Record<string, string[]> = {
    strategic: [
      "Strategy alignment session",
      "Market opportunity analysis",
      "Partnership agreement drafting",
      "Joint roadmap development",
    ],
    technical: [
      "Technical requirements review",
      "Architecture discussion",
      "API integration planning",
      "Development timeline setup",
    ],
    commercial: [
      "Revenue model discussion",
      "Market positioning analysis",
      "Sales strategy alignment",
      "Contract negotiation",
    ],
    other: [
      "Initial discovery call",
      "Requirement analysis",
      "Solution proposal",
      "Partnership agreement",
    ],
  };

  return steps[partnershipType] || steps.other;
}
