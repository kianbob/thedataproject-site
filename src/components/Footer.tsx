import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">
              TheDataProject<span className="text-teal-700">.AI</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Making public data usable. We build free, searchable platforms from government and public data sources —
              134 data platforms with 375M+ records.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Navigate</h4>
            <div className="space-y-2">
              <Link href="/sites" className="block text-gray-500 hover:text-teal-700 text-sm transition-colors">Data Platforms</Link>
              <Link href="/articles" className="block text-gray-500 hover:text-teal-700 text-sm transition-colors">Articles</Link>
              <Link href="/about" className="block text-gray-500 hover:text-teal-700 text-sm transition-colors">About</Link>
              <Link href="/contact" className="block text-gray-500 hover:text-teal-700 text-sm transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>131 Continental Drive<br />Suite 305<br />Newark, DE 19713</p>
              <a href="mailto:info@thedataproject.ai" className="block hover:text-teal-700 transition-colors">info@thedataproject.ai</a>
              <a href="tel:+18055003255" className="block hover:text-teal-700 transition-colors">(805) 500-3255</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TheDataProject.AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/thedataproject-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-700 transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://facebook.com/thedataproject" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-700 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/thedataproject0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-700 transition-colors" aria-label="X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
