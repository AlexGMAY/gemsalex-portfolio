export function validateCloudinaryEnv(): void {
  const requiredEnvVars = [
    "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME",
    "NEXT_PUBLIC_CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ] as const;

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }

  console.log("✅ Cloudinary environment variables are properly configured");
}

// Call this during app initialization
validateCloudinaryEnv();
