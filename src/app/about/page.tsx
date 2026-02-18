import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — TheDataProject.AI",
  description: "Making government and public data accessible to everyone.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About TheDataProject</h1>

      <div className="space-y-8">
        <p className="text-lg text-gray-600 leading-relaxed">
          TheDataProject.AI builds free, searchable data platforms from government and public data sources.
          We believe public data should be truly public — not locked behind paywalls, clunky government
          interfaces, or inaccessible file formats.
        </p>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We take raw public datasets — from agencies like CMS, FEC, FDA, FAA, SEC, the Census Bureau,
            and many more — and transform them into fast, searchable, well-designed platforms that anyone can use.
            Whether you&apos;re a journalist investigating campaign finance, a patient comparing hospitals, or a
            researcher exploring genealogy records, our tools make the data accessible.
          </p>
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
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Contact</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3 text-gray-600">
            <p>📍 131 Continental Drive, Suite 305, Newark, DE 19713</p>
            <p>📧 <a href="mailto:info@thedataproject.ai" className="text-teal-700 hover:underline">info@thedataproject.ai</a></p>
            <p>📞 <a href="tel:+18055003255" className="text-teal-700 hover:underline">(805) 500-3255</a></p>
            <p>🐦 <a href="https://x.com/thedataproject0" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">@thedataproject0</a></p>
            <p>💼 <a href="https://linkedin.com/company/thedataproject-ai" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">LinkedIn</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
