import { MetadataRoute } from "next";
import { DOMAIN } from "./constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 30,
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
