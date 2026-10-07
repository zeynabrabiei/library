"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "book-library-favorites";

export default function FavoriteDetailsButton({ bookId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

      setIsFavorite(saved.includes(bookId));
    } catch {
      setIsFavorite(false);
    }
  }, [bookId]);

  function toggleFavorite() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

      const updated = saved.includes(bookId)
        ? saved.filter((id) => id !== bookId)
        : [...saved, bookId];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setIsFavorite(updated.includes(bookId));
    } catch {
      // Ignore localStorage errors.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition ${
        isFavorite
          ? "bg-red-50 text-red-500 hover:bg-red-100"
          : "bg-(--primary) text-white hover:bg-(--primary-dark)"
      }`}
    >
      <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />

      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}