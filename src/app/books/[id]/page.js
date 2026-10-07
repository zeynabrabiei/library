import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, CalendarDays, Globe, UserRound } from "lucide-react";

import { books } from "@/lib/mockData";
import FavoriteDetailsButton from "@/components/books/FavoriteDetailsButton";

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <section className="container flex min-h-[60vh] items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-950">
            Book not found
          </h1>

          <p className="mt-3 text-sm text-(--muted)">
            The book you are looking for does not exist.
          </p>

          <Link
            href="/books"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-(--primary)"
          >
            <ArrowLeft size={17} />
            Back to Books
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-12 sm:py-16">
      <Link
        href="/books"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-(--primary)"
      >
        <ArrowLeft size={17} />
        Back to Books
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
        <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-slate-200/50">
          <Image
            src={`/images/${book.image}`}
            alt={book.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 360px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-(--primary)">
              {book.language}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
              {book.pages} pages
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {book.title}
          </h1>

          <p className="mt-4 text-lg text-(--muted)">{book.author}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <InfoItem icon={UserRound} label="Author" value={book.author} />
            <InfoItem icon={Globe} label="Country" value={book.country} />
            <InfoItem
              icon={CalendarDays}
              label="Published"
              value={book.year < 0 ? `${Math.abs(book.year)} BC` : book.year}
            />
            <InfoItem icon={BookOpen} label="Pages" value={book.pages} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FavoriteDetailsButton bookId={book.id} />

            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-(--border) bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-(--border) bg-white p-4">
      <div className="flex items-center gap-2 text-slate-400">
        <Icon size={16} />
        <span className="text-xs font-medium">{label}</span>
      </div>

      <p className="mt-2 truncate text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}