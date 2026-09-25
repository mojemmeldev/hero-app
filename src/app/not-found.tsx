import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 py-16 text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <section className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Small label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Page not found
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="select-none bg-gradient-to-b from-white to-white/10 bg-clip-text text-[130px] font-black leading-none tracking-[-0.08em] text-transparent sm:text-[180px] md:text-[230px]">
            404
          </h1>

          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="-mt-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Looks like you&apos;re lost.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or the URL might be incorrect.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 11.25 12 4l9 7.25M5.25 9.5V20h5v-5.5h3.5V20h5V9.5"
              />
            </svg>

            Go Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
          >
            Contact Support
          </Link>
        </div>

        {/* Bottom hint */}
        <p className="mt-10 text-sm text-white/35">
          Error code: 404 · Nothing to see here
        </p>
      </section>
    </main>
  );
}