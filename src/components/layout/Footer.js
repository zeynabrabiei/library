import Link from "next/link";
import { BookOpen, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-white">
      <div className="container py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-slate-950"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-(--primary) text-white">
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
              className="text-sm text-slate-500 transition hover:text-(--primary)"
            >
              Books
            </Link>

            <Link
              href="/favorites"
              className="text-sm text-slate-500 transition hover:text-(--primary)"
            >
              Favorites
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-slate-900"
            >
              {/* <Github size={19} /> */}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-(--border) pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Book Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
}