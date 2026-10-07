"use client";

import { useEffect, useState } from "react";

import BookCard from "./BookCard";

const STORAGE_KEY = "book-library-favorites";

export default function BookGrid({ books }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(STORAGE_KEY);

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch {
      setFavorites([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  function toggleFavorite(bookId) {
    setFavorites((current) => {
      const updated = current.includes(bookId)
        ? current.filter((id) => id !== bookId)
        : [...current, bookId];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return updated;
    });
  }

  if (!isLoaded) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="aspect-3/4 animate-pulse rounded-2xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.includes(book.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}