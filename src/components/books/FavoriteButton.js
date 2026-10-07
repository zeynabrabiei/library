"use client";

import { Heart } from "lucide-react";

export default function FavoriteButton({
  isFavorite,
  onToggle,
  size = 20,
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={`flex size-11 items-center justify-center rounded-xl border transition ${
        isFavorite
          ? "border-red-100 bg-red-50 text-red-500"
          : "border-(--border) bg-white text-slate-500 hover:border-red-100 hover:bg-red-50 hover:text-red-500"
      }`}
    >
      <Heart size={size} fill={isFavorite ? "currentColor" : "none"} />
    </button>
  );
}