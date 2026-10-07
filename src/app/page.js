import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Search } from "lucide-react";

import { books } from "@/lib/mockData";
import BookGrid from "@/components/books/BookGrid";

export default function HomePage() {
  const featuredBooks = books.slice(0, 8);

  return (
    <>
<section className="relative overflow-hidden bg-[#171411]">
  <div className="container relative z-10 py-20 sm:py-28 lg:py-32">
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#d9c7b5]/20 bg-[#d9c7b5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#d9c7b5]">
        <BookOpen size={15} />
        Personal Library
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#fffaf3] sm:text-5xl lg:text-6xl">
        Discover your next
        <span className="text-[#c96b45]"> great book.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#cfc5ba] sm:text-lg">
        Explore a carefully selected collection of classic books, discover new
        stories, and save your favorites in one simple library.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/books"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c96b45] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b85c38]"
        >
          Explore Books
          <ArrowRight size={18} />
        </Link>

        <Link
          href="/favorites"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d9c7b5]/20 bg-[#d9c7b5]/5 px-6 py-3.5 text-sm font-semibold text-[#fffaf3] transition hover:bg-[#d9c7b5]/10"
        >
          <Heart size={18} />
          My Favorites
        </Link>
      </div>
    </div>
  </div>

  <div className="pointer-events-none absolute -right-40 -top-40 size-[28rem] rounded-full bg-[#c96b45]/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 size-[28rem] rounded-full bg-[#d9c7b5]/5 blur-3xl" />
</section>

      <section className="container py-16 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-(--primary)">
              OUR COLLECTION
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Featured Books
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
              Explore some of the books in our library.
            </p>
          </div>

          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) hover:text-(--primary-dark)"
          >
            View all books
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8">
          <BookGrid books={featuredBooks} />
        </div>
      </section>

      <section className="border-y border-(--border) bg-white">
        <div className="container py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-(--primary)">
                <Search size={21} />
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Easy Discovery
              </h3>

              <p className="mt-2 text-sm leading-6 text-(--muted)">
                Quickly search through the entire collection and find books
                that match your interests.
              </p>
            </div>

            <div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <Heart size={21} />
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Save Favorites
              </h3>

              <p className="mt-2 text-sm leading-6 text-(--muted)">
                Keep your favorite books together and access them whenever you
                want.
              </p>
            </div>

            <div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <BookOpen size={21} />
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Detailed Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-(--muted)">
                View useful information about each book, including its author,
                language, year, and page count.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}