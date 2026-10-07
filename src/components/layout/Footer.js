import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--card)">
      <div className="container py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 text-(--foreground)"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-(--foreground) text-white transition-transform duration-300 group-hover:-rotate-6">
                <BookOpen size={18} />
              </span>

              <span className="font-bold tracking-tight">
                Book Library
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-(--muted)">
              A simple and modern library for discovering and saving your
              favorite books.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/books"
              className="group inline-flex items-center gap-1 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Books
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/favorites"
              className="group inline-flex items-center gap-1 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Favorites
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="https://github.com/zeynabrabiei"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              GitHub
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/zeynabrabiei"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              LinkedIn
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="mailto:zeynabrabiei92@gmail.com"
              className="group inline-flex items-center gap-1 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Email
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-(--border) pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[11px] text-(--muted)">
            © 2026 Book Library. All rights reserved.
          </p>

          <p className="text-[11px] text-(--muted-light)">
            Built by{" "}
            <a
              href="https://github.com/zeynabrabiei"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--muted) transition-colors hover:text-(--primary)"
            >
              Zeynab Rabiei
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}