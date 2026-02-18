import { notFound } from "next/navigation";
import { categories, getCategorySites, getCategoryStats, formatRecords } from "@/lib/data";
import SiteCard from "@/components/SiteCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} — TheDataProject.AI`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const catSites = getCategorySites(cat.slug);
  const stats = getCategoryStats(cat.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {catSites.map((site) => (
          <SiteCard key={site.url} site={site} />
        ))}
      </div>
    </div>
  );
}
