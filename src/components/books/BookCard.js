import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarDays, Heart, UserRound } from "lucide-react";

export default function BookCard({ book, isFavorite, onToggleFavorite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-(--border) bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
        <Image
          src={`/images/${book.image}`}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => onToggleFavorite(book.id)}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className={`absolute right-3 top-3 flex size-10 items-center justify-center rounded-full backdrop-blur-md transition ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-white/90 text-slate-600 hover:bg-white hover:text-red-500"
          }`}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 min-h-12 text-base font-bold leading-6 text-slate-900">
          {book.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-(--muted)">
          <UserRound size={15} />
          <span className="truncate">{book.author}</span>
        </div>

        <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {book.year < 0 ? `${Math.abs(book.year)} BC` : book.year}
          </span>

          <span className="flex items-center gap-1">
            <BookOpen size={14} />
            {book.pages} pages
          </span>
        </div>

        <Link
          href={`/books/${book.id}`}
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-(--primary)"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}