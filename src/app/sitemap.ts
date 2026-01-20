import { MetadataRoute } from "next";

const baseUrl = "https://maciejpolowy.space";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
