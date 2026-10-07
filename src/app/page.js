import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Library,
  Sparkles,
  Search,
} from "lucide-react";

import { books } from "@/lib/mockData";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <LibraryFeatures />
      <FinalCTA />
    </main>
  );
}

/* --------------------------------
   Hero
--------------------------------- */

function Hero() {
  return (
    <section className="relative isolate min-h-180 overflow-hidden bg-[#171411] sm:min-h-195">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96b45]/10 blur-[100px] sm:size-150 sm:blur-[120px]" />

      <div className="absolute -right-32 -top-32 -z-10 size-90 rounded-full bg-[#d9c7b5]/5 blur-[90px] sm:size-125 sm:blur-[110px]" />

      <div className="absolute -bottom-40 -left-40 -z-10 size-95 rounded-full bg-[#8c4934]/10 blur-[90px] sm:size-125 sm:blur-[110px]" />

      {/* Editorial grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.035] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[60px_60px] sm:bg-size-[70px_70px]" />

      {/* Mobile floating books */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden sm:hidden">
        <FloatingBook
          book={books[2]}
          className="-left-3 top-[16%]"
          animation="animate-[float_8s_ease-in-out_infinite]"
          rotate="-rotate-8"
          size="w-20"
        />

        <FloatingBook
          book={books[7]}
          className="-right-2.5 top-[20%]"
          animation="animate-[float_7s_ease-in-out_infinite]"
          rotate="rotate-8"
          size="w-20"
        />

        <FloatingBook
          book={books[0]}
          className="bottom-[18%] right-[3%]"
          animation="animate-[float_9s_ease-in-out_infinite]"
          rotate="-rotate-6"
          size="w-16"
          opacity="opacity-50"
        />

        <div className="absolute left-[18%] top-[12%] size-2 animate-pulse rounded-full bg-[#c96b45]/60" />

        <div className="absolute right-[25%] top-[30%] size-1.5 animate-pulse rounded-full bg-[#d9c7b5]/50" />

        <div className="absolute bottom-[24%] left-[12%] size-2 animate-pulse rounded-full bg-[#c96b45]/40" />
      </div>

      {/* Desktop floating books */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden sm:block">
        <FloatingBook
          book={books[2]}
          className="left-[5%] top-[18%]"
          animation="animate-[float_7s_ease-in-out_infinite]"
          rotate="-rotate-6"
        />

        <FloatingBook
          book={books[7]}
          className="right-[6%] top-[17%]"
          animation="animate-[float_8s_ease-in-out_infinite]"
          rotate="rotate-6"
        />

        <FloatingBook
          book={books[4]}
          className="bottom-[13%] left-[12%]"
          animation="animate-[float_9s_ease-in-out_infinite]"
          rotate="rotate-6"
        />

        <FloatingBook
          book={books[0]}
          className="bottom-[10%] right-[12%]"
          animation="animate-[float_6s_ease-in-out_infinite]"
          rotate="-rotate-6"
        />
      </div>

      {/* Hero content */}
      <div className="container relative flex min-h-180 items-center justify-center py-24 text-center sm:min-h-195">
        <div className="w-full max-w-4xl">
          {/* Badge */}
          <div className="hero-badge mx-auto inline-flex items-center gap-2 rounded-full border border-[#d9c7b5]/15 bg-white/4 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d9c7b5] backdrop-blur-md sm:px-4 sm:text-xs">
            <Sparkles size={13} />
            <span>A little library of great stories</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title mx-auto mt-7 max-w-3xl text-[3.2rem] font-black leading-[0.95] tracking-[-0.055em] text-[#fffaf3] sm:mt-8 sm:text-6xl md:text-7xl lg:text-8xl">
            Every book
            <br />
            <span className="relative inline-block text-[#c96b45]">
              opens a door.
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left animate-[lineReveal_1.5s_ease-out_0.8s_both] bg-[#c96b45]/70" />
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mx-auto mt-7 max-w-xl text-sm leading-7 text-[#cfc5ba] sm:text-base sm:leading-8 md:text-lg">
            Discover timeless stories, remarkable authors, and books worth
            keeping on your shelf.
          </p>

          {/* Actions */}
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d9c7b5]/15 bg-white/4 px-7 py-4 text-sm font-bold text-[#fffaf3] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/8 sm:w-auto"
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
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-linear-to-t from-[#171411] to-transparent" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#c96b45]/30 to-transparent" />
    </section>
  );
}

/* --------------------------------
   Featured Books
--------------------------------- */

function FeaturedBooks() {
  const featuredBooks = books.slice(0, 6);

  return (
    <section className="bg-(--background) py-20 sm:py-24">
      <div className="container">
        {/* Section heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#c96b45]">
              <BookOpen size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                Curated shelf
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-(--foreground) sm:text-4xl">
              Books worth discovering
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted)">
              A small selection from the library to help you find your next
              favorite story.
            </p>
          </div>

          <Link
            href="/books"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-(--foreground) transition hover:text-[#c96b45]"
          >
            View all books
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Books */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featuredBooks.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-sm transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className="aspect-3/4 overflow-hidden">
                  <img
                    src={`/images/${book.image}`}
                    alt={book.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-3 line-clamp-1 text-sm font-bold text-(--foreground)">
                {book.title}
              </h3>

              <p className="mt-1 text-xs text-(--muted)">
                {book.author}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Features
--------------------------------- */

function LibraryFeatures() {
  const features = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Search through books by title, author, country, or language.",
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description:
        "Keep the books you love in your personal collection.",
    },
    {
      icon: Library,
      title: "Explore Details",
      description:
        "Open every book to discover its author, language, pages, and history.",
    },
  ];

  return (
    <section className="border-y border-(--border) bg-(--card) py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c96b45]">
            Your personal shelf
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-(--foreground) sm:text-4xl">
            A simpler way to explore books.
          </h2>

          <p className="mt-4 text-sm leading-7 text-(--muted)">
            Everything you need to discover stories and keep track of the ones
            you want to remember.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-(--border) bg-(--background) p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c96b45]/20 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f3e3da] text-[#b85c38] transition duration-300 group-hover:bg-[#c96b45] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-(--foreground)">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-(--muted)">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Final CTA
--------------------------------- */

function FinalCTA() {
  return (
    <section className="bg-(--background) px-4 py-20 sm:py-28">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-4xl bg-[#171411] px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 size-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96b45]/10 blur-[100px]" />

          {/* Grid */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[50px_50px]" />

          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/5 text-[#c96b45]">
              <BookOpen size={25} />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight text-[#fffaf3] sm:text-5xl">
              Your next story
              <br />
              is waiting.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#a9a097] sm:text-base">
              Explore the library, discover something unexpected, and save the
              stories you want to keep close.
            </p>

            <Link
              href="/books"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c96b45] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b85c38]"
            >
              Browse the Library
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Floating Book
--------------------------------- */

function FloatingBook({
  book,
  className,
  animation,
  rotate,
  size = "w-32",
  opacity = "opacity-80",
}) {
  return (
    <div className={`absolute ${className} ${animation} ${rotate}`}>
      <div
        className={`relative ${size} overflow-hidden rounded-xl border border-white/10 bg-white/4 p-1 shadow-2xl backdrop-blur-md ${opacity}`}
      >
        <div className="aspect-3/4 overflow-hidden rounded-lg">
          <img
            src={`/images/${book.image}`}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <p className="hidden truncate px-2 py-2 text-left text-[10px] font-semibold text-white/70 sm:block">
          {book.title}
        </p>
      </div>
    </div>
  );
}

/* --------------------------------
   Stat
--------------------------------- */

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold text-[#fffaf3]">{value}</p>

      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#8e857b] sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}