import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-[#171411] px-4 py-20">
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 -z-10 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96b45]/10 blur-[110px]" />

      <div className="absolute inset-0 -z-10 opacity-[0.035] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="mx-auto w-full max-w-4xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_0.8fr]">
          {/* Text */}
          <div className="text-center md:text-left md:rtl:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9c7b5]/15 bg-white/4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d9c7b5]">
              <Sparkles size={13} />
              Lost between the shelves
            </div>

            <p className="mt-8 text-[7rem] font-black leading-none tracking-[-0.08em] text-[#c96b45]/20 sm:text-[9rem]">
              404
            </p>

            <h1 className="-mt-5 text-4xl font-black tracking-tight text-[#fffaf3] sm:text-5xl">
              This page is missing.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#a9a097] md:mx-0">
              Looks like this page wandered off somewhere between the shelves.
              The good news is that the library is still here.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c96b45] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#b85c38]"
            >
              <ArrowLeft size={17} />
              Back to Library
            </Link>
          </div>

          {/* Book visual */}
          <div className="relative mx-auto hidden w-full max-w-xs md:block">
            <div className="absolute -inset-8 rounded-[3rem] bg-[#c96b45]/10 blur-3xl" />

            <div className="relative rotate-[-5deg] rounded-2xl border border-white/10 bg-[#241f1b] p-4 shadow-2xl">
              <div className="flex aspect-3/4 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-[#342c26] to-[#1d1916]">
                <div className="text-center">
                  <BookOpen
                    size={58}
                    strokeWidth={1}
                    className="mx-auto text-[#c96b45]"
                  />
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#d9c7b5]">
                    Unknown Chapter
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#766e66]">
                    Page not found
                  </p>
                </div>
              </div>

              <div className="mt-3 h-1 rounded-full bg-[#c96b45]/30" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}