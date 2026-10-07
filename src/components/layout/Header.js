"use client";

import Link from "next/link";
import { BookOpen, Heart, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-(--border) bg-white/90 backdrop-blur-xl">
        <div className="container">
          <div className="flex h-18 items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5 text-(--foreground)"
              onClick={closeMenu}
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-(--primary) text-white shadow-sm">
                <BookOpen size={21} />
              </span>

              <span className="text-lg font-bold tracking-tight">
                Book Library
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-(--muted) transition hover:text-(--primary)"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop favorite */}
            <div className="hidden items-center md:flex">
              <Link
                href="/favorites"
                aria-label="Favorites"
                className="group relative flex size-10 items-center justify-center rounded-xl text-(--muted) transition hover:bg-[#f4e6df] hover:text-(--primary)"
              >
                <Heart
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="relative z-70 flex size-10 items-center justify-center rounded-xl text-(--foreground) transition hover:bg-[#f4e6df] hover:text-(--primary) md:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-60 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88%,380px)] flex-col border-l border-(--border) bg-(--card) shadow-[-20px_0_60px_rgba(23,20,17,0.12)] transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-(--border) px-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-(--foreground) text-white">
                <BookOpen size={18} />
              </span>

              <span className="text-sm font-bold text-(--foreground)">
                Book Library
              </span>
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="flex size-10 items-center justify-center rounded-xl text-(--muted) transition hover:bg-[#f4e6df] hover:text-(--primary)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer content */}
          <div className="flex flex-1 flex-col px-5 py-7">
            <div>
              <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted)">
                Navigation
              </p>

              <nav className="mt-4 space-y-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-(--foreground) transition-all duration-300 hover:bg-[#f4e6df] hover:text-(--primary) ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isOpen
                        ? `${index * 60 + 100}ms`
                        : "0ms",
                    }}
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={17}
                      className="text-(--muted) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-(--primary)"
                    />
                  </Link>
                ))}

                {/* Favorites */}
                <Link
                  href="/favorites"
                  onClick={closeMenu}
                  className={`group mt-2 flex items-center justify-between rounded-2xl bg-[#f4e6df] px-4 py-4 text-sm font-semibold text-(--foreground) transition-all duration-300 hover:bg-[#ecd8ce] ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? "280ms" : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-white text-(--primary)">
                      <Heart size={16} />
                    </span>

                    Favorites
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-(--primary)"
                  />
                </Link>
              </nav>
            </div>

            {/* Bottom area */}
            <div className="mt-auto">
              <div className="mb-6 h-px bg-(--border)" />

              <div className="rounded-2xl bg-[#171411] p-5 text-white">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-[#c96b45]">
                  <BookOpen size={18} />
                </div>

                <p className="mt-4 text-sm font-bold">
                  Every book opens a door.
                </p>

                <p className="mt-2 text-xs leading-6 text-white/50">
                  Discover stories worth remembering.
                </p>
              </div>

              <p className="mt-5 text-center text-[10px] uppercase tracking-[0.16em] text-(--muted)">
                Book Library
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}