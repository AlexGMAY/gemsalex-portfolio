import { NextResponse } from "next/server";
import { resend } from "@/lib/utils/email";

export async function GET() {
  try {
    // Test sending a simple email
    const result = await resend.emails.send({
      from: "Alexander May <onboarding@resend.dev>",
      to: ["contact.marvelbiz@gmail.com"], // Use your actual email for testing
      subject: "Resend Test",
      html: "<p>Congratulations! Your Resend setup is working!</p>",
    });

    return NextResponse.json({
      success: true,
      message: "Resend configuration is correct!",
      data: result,
    });
  } catch (error) {
    console.error("Resend test failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Resend configuration error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
