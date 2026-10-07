import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--card)">
      <div className="container py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-(--foreground)"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-(--foreground) text-white">
                <BookOpen size={18} />
              </span>

              <span className="font-bold">Book Library</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-(--muted)">
              A simple and modern library for discovering and saving your
              favorite books.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/books"
              className="text-sm text-(--muted) transition hover:text-(--foreground)"
            >
              Books
            </Link>

            <Link
              href="/favorites"
              className="text-sm text-(--muted) transition hover:text-(--foreground)"
            >
              Favorites
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-(--muted) transition hover:text-(--foreground)"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-(--border) pt-6 text-center text-xs text-slate-400">
          © 2026 Book Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
}