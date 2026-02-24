import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/private/",
        "/test/",
        "/family/",
        "/mediagallery/",
        "/memories/",
        "/sentry-example-page/",
        "/students/",
      ],
    },
    sitemap: "https://gemsalex.com/sitemap.xml",
  };
}
