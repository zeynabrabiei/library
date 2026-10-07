"use client";

import Link from "next/link";
import { BookOpen, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Books",
    href: "/books",
  },
  {
    label: "Favorites",
    href: "/favorites",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-white/90 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-18 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 text-slate-950"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-(--primary) text-white">
              <BookOpen size={21} />
            </span>

            <span className="text-lg font-bold tracking-tight">
              Book Library
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-(--primary)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Link
              href="/favorites"
              aria-label="Favorites"
              className="relative flex size-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-red-500"
            >
              <Heart size={20} />
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-(--border) py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-(--primary)"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}