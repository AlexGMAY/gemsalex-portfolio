import { v2 as cloudinary } from "cloudinary";

// Validate environment variables at startup
function validateEnv() {
  const missingVars: string[] = [];

  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
    missingVars.push("CLOUDINARY_CLOUD_NAME");
  }

  if (!process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY) {
    missingVars.push("CLOUDINARY_API_KEY");
  }

  if (!process.env.CLOUDINARY_API_SECRET) {
    missingVars.push("CLOUDINARY_API_SECRET");
  }

  if (missingVars.length > 0) {
    console.warn(
      `⚠️  Missing Cloudinary environment variables: ${missingVars.join(", ")}`
    );
    console.warn("   Cloudinary functionality will be disabled");
    return false;
  }

  return true;
}

const isEnvValid = validateEnv();

if (isEnvValid) {
  try {
    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
    console.log("✅ Cloudinary configured successfully");
  } catch (error) {
    console.error("❌ Cloudinary configuration failed:", error);
  }
} else {
  console.log("❌ Cloudinary not configured - missing environment variables");
}

export default cloudinary;
export { isEnvValid };