import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — TheDataProject.AI",
  description: "Making government and public data accessible to everyone.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="text-teal-700 hover:underline">Home</Link>
        <span className="mx-1.5">&gt;</span>
        <span>About</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About TheDataProject</h1>

      <div className="space-y-8">
        <p className="text-lg text-gray-600 leading-relaxed">
          TheDataProject.AI builds free, searchable data platforms that make government and public data
          truly accessible. We believe transparency is the foundation of accountability — and that public
          data should never be locked behind paywalls, clunky interfaces, or inaccessible file formats.
        </p>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We take raw public datasets — from agencies like CMS, FEC, FDA, FAA, SEC, the Census Bureau,
            and many more — and transform them into fast, searchable, well-designed platforms that anyone can use.
            Our mission is to advance government transparency and accountability by putting powerful data tools
            in the hands of journalists, researchers, watchdogs, and everyday citizens.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Flagship Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://www.openmedicaid.org" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenMedicaid</h3>
              <p className="text-gray-500 text-sm mt-2">Track $1.09 trillion in Medicaid provider payments across all 50 states. 227M+ records.</p>
            </a>
            <a href="https://www.openfeds.org" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenFeds</h3>
              <p className="text-gray-500 text-sm mt-2">The definitive federal workforce tracker. 2.07M employees across 128 agencies with DOGE impact analysis.</p>
            </a>
            <a href="https://www.openspending.us" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">OpenSpending</h3>
              <p className="text-gray-500 text-sm mt-2">Follow $11.2 trillion in federal spending. Every contract, every grant, every agency.</p>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "134", label: "Data Platforms" },
              { stat: "375M+", label: "Records" },
              { stat: "17", label: "Domains" },
              { stat: "50", label: "States" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
                <div className="text-2xl font-bold text-teal-700">{s.stat}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">What We Cover</h2>
          <p className="text-gray-600 leading-relaxed">
            Our platforms span healthcare ratings, government employee salaries, election finance,
            genealogy records, food safety, transportation data, business filings, housing data,
            software comparisons, education, and heritage & infrastructure. Every dataset is sourced
            from official government agencies and updated regularly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions or want to collaborate? Visit our <a href="/contact" className="text-teal-700 hover:underline font-medium">Contact page</a>.</p>
        </div>
      </div>
    </div>
  );
}
