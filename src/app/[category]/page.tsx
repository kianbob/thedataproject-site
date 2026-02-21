import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategorySites, getCategoryStats, formatRecords } from "@/lib/data";
import SiteCard from "@/components/SiteCard";
import { articles } from "@/lib/articles";

const categoryArticleMap: Record<string, string> = {
  "healthcare": "healthcare-data",
  "government-salaries": "government-salaries",
  "food": "food-agriculture",
  "transportation": "transportation-data",
  "business": "business-finance",
  "genealogy": "genealogy-records",
  "housing": "housing-finance",
  "elections": "elections-political-money",
  "software": "software-reviews",
  "education": "education-data",
  "heritage": "heritage-infrastructure",
};

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — TheDataProject.AI`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const catSites = getCategorySites(cat.slug);
  const stats = getCategoryStats(cat.slug);
  const articleSlug = categoryArticleMap[cat.slug];
  const relatedArticle = articleSlug ? articles.find((a) => a.slug === articleSlug) : undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="text-teal-700 hover:underline">Home</Link>
        <span className="mx-1.5">&gt;</span>
        <span>{cat.name}</span>
      </nav>

      <div className="mb-12">
        <div className="text-4xl mb-4">{cat.icon}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{cat.name}</h1>
        <p className="text-gray-500 mt-3 max-w-2xl">{cat.description}</p>
        <div className="mt-4 flex gap-4 text-sm">
          <span className="bg-gray-100 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg">{stats.siteCount} sites</span>
          {stats.totalRecords > 0 && (
            <span className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg font-medium">{formatRecords(stats.totalRecords)} total records</span>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-3">Domain: {cat.domain}</p>

        {relatedArticle && (
          <Link href={`/articles/${relatedArticle.slug}`} className="mt-6 block bg-teal-50 border border-teal-200 rounded-xl p-4 hover:bg-teal-100 transition-colors">
            <span className="text-teal-800 font-medium">📖 Read our deep dive: {relatedArticle.title} →</span>
          </Link>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {catSites.map((site) => (
          <SiteCard key={site.url} site={site} />
        ))}
      </div>
    </div>
  );
}
