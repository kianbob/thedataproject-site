import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles, getArticleBySlug } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — TheDataProject.AI`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="text-teal-700 hover:underline">Home</Link>
        <span className="mx-1.5">&gt;</span>
        <Link href="/articles" className="text-teal-700 hover:underline">Articles</Link>
        <span className="mx-1.5">&gt;</span>
        <span>{article.title}</span>
      </nav>
      <time className="block text-sm text-gray-400 mb-2">
        {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </time>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
        {article.title}
      </h1>
      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-400 mb-2">Share this article</p>
        <div className="flex items-center gap-2 text-sm">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.thedataproject.ai/articles/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:underline"
          >
            Share on X
          </a>
          <span className="text-gray-300">·</span>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.thedataproject.ai/articles/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:underline"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
