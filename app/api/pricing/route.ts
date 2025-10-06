import { NextRequest, NextResponse } from "next/server";
import {
  pricingSchema,
  PricingFormInput,
} from "@/lib/validations/pricing-schemas";
import { validateCsrfToken, checkRateLimit } from "@/lib/utils/security";
import {
  sendPricingUserEmail,
  sendPricingAdminEmail,
} from "@/lib/utils/pricing-email";
import { PricingApiResponse, PricingFormData } from "@/types/pricing";

export async function POST(
  request: NextRequest
): Promise<NextResponse<PricingApiResponse>> {
  try {
    const body = await request.json();
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting check
    const rateLimitKey = `pricing:${clientIP}`;
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many submission attempts. Please try again in 15 minutes.",
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
    const validationResult = pricingSchema.safeParse(body);

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

    const formData: PricingFormInput = validationResult.data;

    // Calculate estimated delivery based on service complexity
    const estimatedDelivery = calculateEstimatedDelivery(formData);

    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;

    // Send emails
    await Promise.all([
      sendPricingUserEmail(formData as PricingFormData),
      sendPricingAdminEmail(formData as PricingFormData, clientIP),
    ]);

    // Log successful submission
    console.log(
      `Pricing form submitted: ${formData.email} | Order: ${orderId} | Amount: ${formData.currency} ${formData.totalAmount}`
    );

    return NextResponse.json({
      success: true,
      message:
        "Project inquiry submitted successfully! You will receive a detailed proposal within 24 hours.",
      orderId,
      estimatedDelivery,
    });
  } catch (error) {
    console.error("Pricing form error:", error);

    let errorMessage =
      "An error occurred while submitting your project inquiry. Please try again later.";

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

function calculateEstimatedDelivery(formData: PricingFormInput): string {
  const baseDays = formData.totalAmount > 5000 ? 21 : 14;
  const featureDays = formData.selectedFeatures.length * 2;
  const totalDays = baseDays + featureDays;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + totalDays);

  return deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
