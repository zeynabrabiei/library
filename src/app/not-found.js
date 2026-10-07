import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-16">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#171411] text-white">
          <BookOpen size={27} />
        </div>

        <p className="mt-8 text-sm font-bold tracking-[0.2em] text-(--primary)">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight text-(--foreground) sm:text-5xl">
          This page is missing.
        </h1>

        <p className="mt-4 text-sm leading-7 text-(--muted) sm:text-base">
          Looks like this page wandered off somewhere between the shelves.
          Let&apos;s get you back to the library.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-(--foreground) px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-(--primary)"
        >
          <ArrowLeft size={17} />
          Back to Library
        </Link>
      </div>
    </main>
  );
}
