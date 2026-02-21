import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles — TheDataProject.AI",
  description: "Research, analysis, and insights across our 134 data platforms.",
};

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="text-teal-700 hover:underline">Home</Link>
        <span className="mx-1.5">&gt;</span>
        <span>Articles</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Articles</h1>
      <p className="text-gray-500 mb-12">Research, analysis, and insights from our data platforms.</p>

      <div className="space-y-8">
        {[...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <time className="text-sm text-gray-400">{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <h2 className="text-xl font-serif font-bold text-gray-900 group-hover:text-teal-700 transition-colors mt-1 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-500">{article.description}</p>
            <span className="inline-block mt-4 text-teal-700 text-sm font-medium">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
