import { Site, formatRecords } from "@/lib/data";

export default function SiteCard({ site }: { site: Site }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-gray-900 font-semibold group-hover:text-teal-700 transition-colors leading-tight">
          {site.name}
        </h3>
        <svg className="w-4 h-4 text-gray-400 group-hover:text-teal-600 flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="text-gray-400 text-sm mt-1">{site.domain}</p>
      {site.records && (
        <div className="mt-3 inline-block bg-teal-50 text-teal-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {formatRecords(site.records)} records
        </div>
      )}
    </a>
  );
}
