import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";

import { books } from "@/lib/mockData";
import BookGrid from "@/components/books/BookGrid";

export default function HomePage() {
  const featuredBooks = books.slice(0, 8);

  return (
    <>
      <section className="relative isolate min-h-170 overflow-hidden bg-[#171411] sm:min-h-190">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 -z-10 size-150-translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b85c38]/10 blur-[120px]" />

        <div className="absolute -right-40 -top-40 -z-10 size-125 rounded-full bg-[#d9c7b5]/5 blur-[100px]" />

        <div className="absolute -bottom-40 -left-40 -z-10 size-125 rounded-full bg-[#8c4934]/10 blur-[100px]" />

        {/* Decorative grid */}
        <div className="absolute inset-0 -z-10 opacity-[0.035] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[70px_70px]" />

        {/* Floating book cards */}
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <FloatingBook
            book={books[2]}
            className="left-[7%] top-[18%]"
            animation="animate-[float_7s_ease-in-out_infinite]"
            rotate="-rotate-6"
          />

          <FloatingBook
            book={books[7]}
            className="right-[8%] top-[17%]"
            animation="animate-[float_8s_ease-in-out_infinite]"
            rotate="rotate-6"
          />

          <FloatingBook
            book={books[4]}
            className="bottom-[13%] left-[15%]"
            animation="animate-[float_9s_ease-in-out_infinite]"
            rotate="rotate-6"
          />

          <FloatingBook
            book={books[0]}
            className="bottom-[10%] right-[14%]"
            animation="animate-[float_6s_ease-in-out_infinite]"
            rotate="-rotate-6"
          />
        </div>

        {/* Main content */}
        <div className="container relative flex min-h-170 items-center justify-center py-20 text-center sm:min-h-190">
          <div className="max-w-4xl">
            <div className="hero-badge mx-auto inline-flex items-center gap-2 rounded-full border border-[#d9c7b5]/15 bg-[#d9c7b5]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c7b5] backdrop-blur-md">
              <Sparkles size={14} />
              A little library of great stories
            </div>

            <h1 className="hero-title mt-7 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#fffaf3] sm:text-6xl md:text-7xl lg:text-8xl">
              Every book
              <br />
              <span className="relative inline-block text-[#c96b45]">
                opens a door.
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left animate-[lineReveal_1.5s_ease-out_0.8s_both] bg-[#c96b45]/70" />
              </span>
            </h1>

            <p className="hero-description mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#cfc5ba] sm:text-base sm:leading-8 md:text-lg">
              Discover timeless stories, explore remarkable authors, and
              build a personal collection of books worth remembering.
            </p>

            <div className="hero-actions mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/books"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c96b45] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_50px_rgba(201,107,69,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#b85c38] hover:shadow-[0_20px_60px_rgba(201,107,69,0.3)] sm:w-auto"
              >
                Explore the Library
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/favorites"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d9c7b5]/15 bg-white/5 px-7 py-4 text-sm font-bold text-[#fffaf3] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
              >
                <Heart size={18} />
                My Favorites
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats mx-auto mt-12 grid max-w-xl grid-cols-3 border-y border-[#d9c7b5]/10 py-5">
              <Stat value={books.length} label="Books" />
              <Stat value="10+" label="Authors" />
              <Stat value="∞" label="Stories" />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#171411] to-transparent" />
      </section>

      {/* Featured books */}
      <section className="container py-16 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-(--primary)">
              THE COLLECTION
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-(--foreground) sm:text-3xl">
              Featured Books
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
              A few stories worth discovering.
            </p>
          </div>

          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--primary-dark)"
          >
            View all books
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8">
          <BookGrid books={featuredBooks} />
        </div>
      </section>
    </>
  );
}

function FloatingBook({ book, className, animation, rotate }) {
  return (
    <div
      className={`absolute ${className} ${animation} ${rotate}`}
    >
      <div className="relative w-32 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-md">
        <div className="aspect-3/4 overflow-hidden rounded-lg">
          <img
            src={`/images/${book.image}`}
            alt=""
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        <p className="truncate px-2 py-2 text-left text-[10px] font-semibold text-white/70">
          {book.title}
        </p>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold text-[#fffaf3]">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#8e857b]">
        {label}
      </p>
    </div>
  );
}