import { NextResponse } from "next/server";
import { getResource } from "@/lib/resources";

interface Context {
  params: {
    type: string;
    slug: string;
  };
}

export async function GET(request: Request, { params }: Context) {
  try {
    const { type, slug } = params;
    console.log(`API: Fetching ${type}/${slug}`);

    const resource = getResource(type, slug);

    if (!resource) {
      return NextResponse.json(
        { error: "Resource not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      resource: {
        ...resource,
        date: resource.date.toISOString(),
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to load resource" },
      { status: 500 }
    );
  }
}
