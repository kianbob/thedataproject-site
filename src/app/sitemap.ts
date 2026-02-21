import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thedataproject.ai";
  const date = "2025-02-20";

  const staticPages = [
    "/",
    "/sites",
    "/articles",
    "/about",
    "/contact",
  ];

  const categories = [
    "healthcare",
    "government-salaries",
    "food",
    "transportation",
    "business",
    "genealogy",
    "housing",
    "elections",
    "software",
    "education",
    "heritage",
  ];

  return [
    ...staticPages.map((url) => ({
      url: `${base}${url}`,
      lastModified: date,
    })),
    ...categories.map((cat) => ({
      url: `${base}/${cat}`,
      lastModified: date,
    })),
    ...articles.map((article) => ({
      url: `${base}/articles/${article.slug}`,
      lastModified: article.date,
    })),
  ];
}
