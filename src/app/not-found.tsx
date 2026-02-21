import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl text-teal-700 font-bold">404</p>
      <h1 className="mt-4 text-3xl font-serif font-bold text-gray-900">Page Not Found</h1>
      <p className="mt-3 text-gray-500 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <Link
          href="/"
          className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </Link>
        <Link href="/sites" className="text-teal-700 hover:underline text-sm font-medium">
          Browse all sites
        </Link>
      </div>
    </div>
  );
}
