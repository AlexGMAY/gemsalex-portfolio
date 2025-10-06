namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
    NEXT_PUBLIC_CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASS: string;
    ADMIN_EMAIL: string;
  }
}