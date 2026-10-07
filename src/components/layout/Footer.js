import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--card)">
      <div className="container py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-(--foreground)"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-(--foreground) text-white transition-transform duration-300 group-hover:-rotate-6">
                <BookOpen size={19} />
              </span>

              <span className="text-lg font-bold tracking-tight">
                Book Library
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-(--muted)">
              A quiet place to discover great books, explore timeless stories,
              and keep your favorite reads close.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/books"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Books
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/favorites"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Favorites
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="https://github.com/zeynabrabiei"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground)"
            >
              GitHub
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/zeynabrabiei"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground)"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-(--border) pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-(--muted)">
            © 2026 Book Library. All rights reserved.
          </p>

          <p className="text-[11px] tracking-wide text-slate-400">
            Designed & built by{" "}
            <a
              href="https://github.com/zeynabrabiei"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-500 transition-colors hover:text-(--primary)"
            >
              Zeynab Rabiei
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}