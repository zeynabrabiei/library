"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative isolate flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-[#faf7f2] px-4 py-20">
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 size-96 rounded-full bg-[#c96b45]/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-[#d9c7b5]/20 blur-3xl" />

      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Icon */}
        <div className="relative mx-auto flex size-24 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-4xl bg-[#c96b45]/10" />

          <div className="relative flex size-20 rotate-[-4deg] items-center justify-center rounded-2xl border border-[#e7dfd5] bg-[#fffdf9] text-[#c96b45] shadow-xl">
            <BookOpen size={34} strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#e7dfd5] bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b85c38] backdrop-blur">
          <Sparkles size={12} />
          A little interruption
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-[#171411] sm:text-6xl">
          The shelves got
          <br />
          <span className="text-[#c96b45]">a little messy.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#766e66] sm:text-base">
          Something unexpected happened while opening this page. Nothing is
          lost — let&apos;s try opening the library again.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#171411] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#c96b45] sm:w-auto"
          >
            <RefreshCw
              size={17}
              className="transition-transform duration-500 group-hover:rotate-180"
            />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#e7dfd5] bg-white px-6 py-3.5 text-sm font-bold text-[#171411] transition hover:-translate-y-1 hover:border-[#c96b45]/30 hover:text-[#c96b45] sm:w-auto"
          >
            <ArrowLeft size={17} />
            Back to Library
          </Link>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mt-14 flex max-w-xs items-center gap-3">
          <div className="h-px flex-1 bg-[#e7dfd5]" />
          <BookOpen size={15} className="text-[#c96b45]/50" />
          <div className="h-px flex-1 bg-[#e7dfd5]" />
        </div>
      </div>
    </main>
  );
}