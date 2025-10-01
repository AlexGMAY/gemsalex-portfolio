import { NextResponse } from "next/server";
import { getImagesAndVideos } from "@/lib/cloudinary";

export async function GET() {
  try {
    const resources = await getImagesAndVideos();

    return NextResponse.json({
      success: true,
      message: "Cloudinary connection successful",
      resourcesCount: resources.length,
      sampleResource: resources[0] || null,
    });
  } catch (error) {
    console.error("Cloudinary test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Cloudinary connection failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
