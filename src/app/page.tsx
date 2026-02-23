import Link from "next/link";
import StatCounter from "@/components/StatCounter";
import { categories, getCategoryStats, formatRecords } from "@/lib/data";
import { articles } from "@/lib/articles";

const dataSources = ["HHS", "CMS", "FEC", "FDA", "FAA", "NCES", "SEC", "Census Bureau", "BLS", "CFPB", "FDIC", "NPS", "NHTSA", "OPM"];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 px-4 bg-white hero-pattern">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
            Making Public Data <span className="text-teal-700">Usable</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            We build searchable, free data platforms from government and public sources.
            134 sites. 375M+ records. 17 domains. All open to everyone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sites" className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Browse All Sites
            </Link>
            <Link href="/about" className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 border-y border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={134} label="Data Platforms" />
          <StatCounter end={375} suffix="M+" label="Searchable Records" />
          <StatCounter end={17} label="Domains" />
          <StatCounter end={50} label="States Covered" />
        </div>
      </section>

      {/* Flagships */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-12">Featured Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="https://www.openmedicare.us" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenMedicare</h3>
              <p className="text-gray-500 mt-2">AI-powered Medicare spending analysis — 10 years of CMS data, 1.72M providers, ML fraud detection across $854B in payments.</p>
              <span className="inline-block mt-4 text-teal-700 text-sm font-medium">openmedicare.us →</span>
            </a>
            <a href="https://www.openmedicaid.org" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenMedicaid</h3>
              <p className="text-gray-500 mt-2">Track $1.09 trillion in Medicaid provider payments. Fraud detection, provider profiles, procedure analysis across all 50 states. 227M+ records.</p>
              <span className="inline-block mt-4 text-teal-700 text-sm font-medium">openmedicaid.org →</span>
            </a>
            <a href="https://www.openfeds.org" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenFeds</h3>
              <p className="text-gray-500 mt-2">The definitive federal workforce tracker. 2.07M employees across 128 agencies. DOGE impact, brain drain analysis, salary explorer, and workforce trends.</p>
              <span className="inline-block mt-4 text-teal-700 text-sm font-medium">openfeds.org →</span>
            </a>
            <a href="https://www.openspending.us" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenSpending</h3>
              <p className="text-gray-500 mt-2">Follow $11.2 trillion in federal spending. Every contract, every grant, every agency. DOGE reality check, contractor monopoly analysis, and interactive tax calculator.</p>
              <span className="inline-block mt-4 text-teal-700 text-sm font-medium">openspending.us →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-4">Browse by Category</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Explore our data platforms organized across 11 verticals</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const stats = getCategoryStats(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{cat.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cat.domain}</p>
                  <div className="mt-3 flex gap-3 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{stats.siteCount} sites</span>
                    {stats.totalRecords > 0 && (
                      <span className="bg-teal-50 text-teal-700 px-2 py-1 rounded">{formatRecords(stats.totalRecords)} records</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standalone Sites */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-12">Standalone Platforms</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "PPP Loan Lookup", url: "https://www.ppploanlookup.com", records: "11.4M", desc: "Search 11.4M+ PPP loans by company name" },
              { name: "CA Unclaimed Property", url: "https://www.caunclaimedproperty.com", records: "82M", desc: "Search 82M+ California unclaimed property records" },
              { name: "NPI Lookup", url: "https://www.npi-lookup-db.com", records: "8.3M", desc: "Free NPI registry search for healthcare providers" },
              { name: "TX Unclaimed Property", url: "https://www.txunclaimedproperty.com", records: "3.4M", desc: "Search Texas unclaimed property records" },
              { name: "Compare Dog Breeds", url: "https://www.compare-dog-breeds.com", records: "1.8K", desc: "Compare dog breeds by size, temperament & grooming" },
            ].map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <h3 className="text-gray-900 font-bold group-hover:text-teal-700 transition-colors">{s.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{s.desc}</p>
                <span className="inline-block mt-3 bg-teal-50 text-teal-700 text-xs font-medium px-2.5 py-1 rounded-full">{s.records} records</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[...articles]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all group"
                >
                  <p className="text-sm text-gray-400">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="mt-2 text-lg font-serif font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm">{article.description}</p>
                  <span className="inline-block mt-4 text-teal-700 text-sm font-medium">Read more →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">Our Data Sources</h2>
          <p className="text-gray-500 mb-8">We source from authoritative U.S. government agencies and public datasets</p>
          <div className="flex flex-wrap justify-center gap-3">
            {dataSources.map((src) => (
              <span key={src} className="bg-gray-100 border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full">
                {src}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
