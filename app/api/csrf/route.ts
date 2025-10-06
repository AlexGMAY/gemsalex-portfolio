import { NextResponse } from "next/server";
import { generateCsrfToken } from "@/lib/utils/security";
import { CsrfResponse } from "@/types/contact";

export async function GET(): Promise<
  NextResponse<CsrfResponse | { error: string }>
> {
  try {
    const token = generateCsrfToken();

    const response = NextResponse.json({ csrfToken: token });

    // Set CSRF token in httpOnly cookie for additional security
    response.cookies.set("csrf-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error) {
    console.error("CSRF token generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate CSRF token" },
      { status: 500 }
    );
  }
}
