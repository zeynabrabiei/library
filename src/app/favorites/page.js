"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { books } from "@/lib/mockData";
import BookGrid from "@/components/books/BookGrid";

const STORAGE_KEY = "book-library-favorites";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

      setFavoriteIds(saved);
    } catch {
      setFavoriteIds([]);
    }
  }, []);

  const favoriteBooks = useMemo(() => {
    if (!favoriteIds) {
      return [];
    }

    return books.filter((book) => favoriteIds.includes(book.id));
  }, [favoriteIds]);

  if (!favoriteIds) {
    return (
      <section className="container py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="aspect-3/4 animate-pulse rounded-2xl bg-slate-200"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container py-12 sm:py-16">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
          <Heart size={22} fill="currentColor" />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            My Favorites
          </h1>

          <p className="mt-1 text-sm text-(--muted)">
            {favoriteBooks.length}{" "}
            {favoriteBooks.length === 1 ? "book" : "books"} saved
          </p>
        </div>
      </div>

      {favoriteBooks.length > 0 ? (
        <div className="mt-10">
          <BookGrid books={favoriteBooks} />
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-(--border) bg-white px-6 py-20 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Heart size={24} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-slate-900">
            No favorite books yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-(--muted)">
            Start exploring the library and save the books you love. They will
            appear here automatically.
          </p>

          <Link
            href="/books"
            className="mt-6 inline-flex rounded-xl bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--primary-dark)"
          >
            Explore Books
          </Link>
        </div>
      )}
    </section>
  );
}