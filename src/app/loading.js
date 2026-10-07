export default function Loading() {
  return (
    <main className="min-h-screen bg-(--background)">
      {/* Hero skeleton */}
      <section className="relative overflow-hidden bg-[#171411]">
        <div className="absolute left-1/2 top-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96b45]/5 blur-[100px]" />

        <div className="container flex min-h-155 items-center justify-center py-20">
          <div className="w-full max-w-3xl animate-pulse text-center">
            {/* Badge */}
            <div className="mx-auto h-8 w-52 rounded-full bg-white/6" />

            {/* Heading */}
            <div className="mx-auto mt-8 h-20 max-w-2xl rounded-2xl bg-white/6 sm:h-28" />

            <div className="mx-auto mt-4 h-20 max-w-xl rounded-2xl bg-white/4 sm:h-10" />

            {/* Description */}
            <div className="mx-auto mt-8 h-4 max-w-lg rounded-full bg-white/5" />
            <div className="mx-auto mt-3 h-4 max-w-md rounded-full bg-white/4" />

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="h-14 w-full rounded-2xl bg-white/[0.07] sm:w-48" />
              <div className="h-14 w-full rounded-2xl bg-white/4 sm:w-44" />
            </div>

            {/* Stats */}
            <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 border-y border-white/6 py-5">
              <SkeletonStat />
              <SkeletonStat />
              <SkeletonStat />
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="container py-16">
        <div className="animate-pulse">
          <div className="h-8 w-48 rounded-lg bg-[#e7dfd5]" />
          <div className="mt-3 h-4 w-72 rounded-full bg-[#e7dfd5]/70" />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <BookSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function SkeletonStat() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-6 w-10 rounded-md bg-white/6" />
      <div className="h-2.5 w-14 rounded-full bg-white/4" />
    </div>
  );
}

function BookSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7dfd5] bg-[#fffdf9]">
      <div className="aspect-3/4 bg-[#e7dfd5]/70" />

      <div className="space-y-3 p-4">
        <div className="h-4 w-4/5 rounded-full bg-[#e7dfd5]" />
        <div className="h-3 w-2/5 rounded-full bg-[#e7dfd5]/70" />
        <div className="h-9 w-full rounded-xl bg-[#e7dfd5]/60" />
      </div>
    </div>
  );
}