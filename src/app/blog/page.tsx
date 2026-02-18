import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles — TheDataProject.AI",
  description: "Insights, analysis, and updates from TheDataProject.",
};

const articles = [
  {
    title: "How We Make Government Data Searchable",
    excerpt: "A look at our process for transforming raw government datasets into fast, user-friendly search platforms that anyone can use.",
    date: "February 2026",
    category: "Engineering",
  },
  {
    title: "Understanding Medicaid Provider Payments",
    excerpt: "OpenMedicaid makes it possible to explore how Medicaid dollars flow to providers across all 50 states. Here's what the data reveals.",
    date: "January 2026",
    category: "Healthcare",
  },
  {
    title: "Following the Money: Campaign Finance Data Explained",
    excerpt: "DonorSecrets tracks over 43 million campaign contributions. We break down what this data tells us about U.S. elections.",
    date: "January 2026",
    category: "Elections",
  },
  {
    title: "The State of Public Salary Transparency",
    excerpt: "Government salary databases are growing. We explore which states lead in transparency and what the data shows about public sector compensation.",
    date: "December 2025",
    category: "Government",
  },
  {
    title: "82 Million Unclaimed Property Records — Is Money Waiting for You?",
    excerpt: "Our California Unclaimed Property platform makes it easy to search through 82M+ records. Here's how unclaimed property works.",
    date: "December 2025",
    category: "Finance",
  },
  {
    title: "Building Data Platforms at Scale: Lessons from 134 Sites",
    excerpt: "What we've learned building and maintaining 134 data platforms across 17 domains, serving millions of records.",
    date: "November 2025",
    category: "Engineering",
  },
];

const categoryColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-700",
  Healthcare: "bg-rose-50 text-rose-700",
  Elections: "bg-purple-50 text-purple-700",
  Government: "bg-amber-50 text-amber-700",
  Finance: "bg-emerald-50 text-emerald-700",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Articles</h1>
      <p className="text-gray-500 mb-12">Insights, analysis, and updates from TheDataProject</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
            {/* Placeholder image area */}
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
