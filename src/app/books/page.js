"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { books } from "@/lib/mockData";
import BookGrid from "@/components/books/BookGrid";
import SearchBooks from "@/components/books/SearchBooks";

export default function BooksPage() {
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return books;
    }

    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.country.toLowerCase().includes(query) ||
        book.language.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <section className="container py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-(--primary)">
          <Search size={22} />
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Explore Books
        </h1>

        <p className="mt-3 text-sm leading-6 text-(--muted) sm:text-base">
          Search through our collection by title, author, country, or
          language.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <SearchBooks value={search} onChange={setSearch} />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-(--muted)">
          {filteredBooks.length}{" "}
          {filteredBooks.length === 1 ? "book" : "books"} found
        </p>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="mt-5">
          <BookGrid books={filteredBooks} />
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-(--border) bg-white px-6 py-16 text-center">
          <h2 className="text-lg font-bold text-slate-900">
            No books found
          </h2>

          <p className="mt-2 text-sm text-(--muted)">
            Try searching with a different title or author.
          </p>
        </div>
      )}
    </section>
  );
}