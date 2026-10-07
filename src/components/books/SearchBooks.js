"use client";

import { Search, X } from "lucide-react";

export default function SearchBooks({ value, onChange }) {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title, author, or country..."
        className="h-13 w-full rounded-2xl border border-(--border) bg-white pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-(--primary) focus:ring-4 focus:ring-blue-500/10"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}