"use client";

import { useState, useMemo } from "react";
import { sites, categories } from "@/lib/data";
import SiteCard from "@/components/SiteCard";

export default function SitesPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"name" | "records">("records");

  const filtered = useMemo(() => {
    let result = sites.filter((s) => {
      const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.domain.toLowerCase().includes(search.toLowerCase());
      const matchCat = categoryFilter === "all" || s.category === categoryFilter;
      return matchSearch && matchCat;
    });
    if (sortBy === "records") {
      result = [...result].sort((a, b) => (b.records || 0) - (a.records || 0));
    } else {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [search, categoryFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">All Sites</h1>
      <p className="text-gray-500 mb-8">Browse and search all 134 data platforms</p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search sites..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex-1"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>
          ))}
          <option value="standalone">🔗 Standalone</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "name" | "records")}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="records">Sort by Records</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <p className="text-gray-400 text-sm mb-6">{filtered.length} sites found</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((site) => (
          <SiteCard key={site.url} site={site} />
        ))}
      </div>
    </div>
  );
}
